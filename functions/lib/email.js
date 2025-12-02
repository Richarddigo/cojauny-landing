const nodemailer = require('nodemailer');
const config = require('../config');
const { resolveTemplate, render, emailSignatureHtml, emailSignatureText, templateSenders, normalizeLocale } = require('./email-templates');
const { logEmailSent } = require('./supabase');

// ZeptoMail EU Configuration
// TCP/TLS settings optimized for European ZeptoMail endpoints
const ZEPTOMAIL_EU_CONFIG = {
    host: 'smtp.zeptomail.eu',
    port: 465,
    secure: true, // TLS over TCP port 465
    connectionTimeout: 30000, // 30 seconds for TCP connection
    greetingTimeout: 15000,   // 15 seconds for SMTP greeting
    socketTimeout: 60000,     // 60 seconds for socket operations
    pool: false,              // Disable pooling for reliability
    maxConnections: 1,        // Single connection per request
};

// Lazy getters to avoid errors during module load
const getSMTPConfig = () => ({
    host: config.smtpHost.value() || ZEPTOMAIL_EU_CONFIG.host,
    port: parseInt(config.smtpPort.value()) || ZEPTOMAIL_EU_CONFIG.port,
    secure: true,
    auth: {
        user: config.smtpUser.value(),
        pass: config.smtpPass.value()
    },
    // ZeptoMail EU TCP optimizations
    connectionTimeout: ZEPTOMAIL_EU_CONFIG.connectionTimeout,
    greetingTimeout: ZEPTOMAIL_EU_CONFIG.greetingTimeout,
    socketTimeout: ZEPTOMAIL_EU_CONFIG.socketTimeout,
    pool: ZEPTOMAIL_EU_CONFIG.pool,
    maxConnections: ZEPTOMAIL_EU_CONFIG.maxConnections,
    // TLS configuration for secure transmission
    tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
        ciphers: 'HIGH:!aNULL:!MD5'
    }
});

const getEmailAliases = () => ({
    beta: config.emailBeta.value(),
    feedback: config.emailFeedback.value(),
    support: config.emailSupport.value()
});

/**
 * Resolve sender profile for a template.
 * Returns the appropriate sender email, name, and authentication credentials.
 * @param {string} key - Template key
 * @returns {Object} Sender configuration with email, name, authEmail, authPassword
 */
function resolveSender(key) {
    const aliases = getEmailAliases();
    const smtpConfig = getSMTPConfig();

    const senderProfiles = {
        beta: { email: aliases.beta, name: 'Cojauny Beta' },
        feedback: { email: aliases.feedback, name: 'Cojauny Feedback' },
        support: { email: aliases.support, name: 'Cojauny Support Team' }
    };

    // Special case for contact confirmation to force visible sender
    if (key === 'contact-confirmation') {
        const contactProfile = {
            email: 'contact@cojauny.com',
            name: 'Cojauny Contact'
        };
        const authEmail = aliases.support || smtpConfig.auth.user;
        const authPassword = smtpConfig.auth.pass;

        if (authEmail && authPassword) {
            return { email: contactProfile.email, name: contactProfile.name, authEmail, authPassword };
        }
        throw new Error('No SMTP credentials configured for contact/support');
    }

    const profileKey = templateSenders[key];
    const profile = senderProfiles[profileKey];

    if (profile && profile.email) {
        return {
            email: profile.email,
            name: profile.name,
            authEmail: profile.email,
            authPassword: smtpConfig.auth.pass
        };
    }

    if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
        throw new Error('No default SMTP credentials configured');
    }

    // Fallback to default credentials if specific ones aren't set
    return {
        email: (profile && profile.email) || smtpConfig.auth.user,
        name: (profile && profile.name) || 'Cojauny',
        authEmail: smtpConfig.auth.user,
        authPassword: smtpConfig.auth.pass
    };
}

/**
 * Get the BCC email based on template type.
 * Uses the respective alias for each form type.
 * BCC is used for internal record-keeping without exposing to the recipient.
 * @param {string} template - Template key
 * @returns {string|undefined} BCC email address or undefined if not needed
 */
function getBccEmail(template) {
    const aliases = getEmailAliases();
    const profileKey = templateSenders[template];

    // Only add BCC for user-facing confirmation emails, not internal notifications
    const userFacingTemplates = [
        'beta-confirmation',
        'feedback-confirmation',
        'idea-confirmation',
        'business-proposal-confirmation',
        'contact-confirmation'
    ];

    if (!userFacingTemplates.includes(template)) {
        return undefined; // No BCC for internal emails
    }

    const bccMap = {
        beta: aliases.beta,
        feedback: aliases.feedback,
        support: aliases.support
    };

    return bccMap[profileKey] || aliases.support;
}

/**
 * Get the Reply-To email address.
 * For user confirmations, reply-to should go to the appropriate support alias.
 * For internal notifications, reply-to should go to the user's email.
 * @param {string} template - Template key
 * @param {Object} sender - Sender configuration
 * @param {string} [userEmail] - User's email for internal templates
 * @returns {string} Reply-To email address
 */
function getReplyTo(template, sender, userEmail) {
    // For internal templates, replies should go to the user
    const internalTemplates = [
        'contact-internal',
        'feedback-internal',
        'idea-internal',
        'business-proposal-internal',
        'beta-internal'
    ];

    if (internalTemplates.includes(template) && userEmail) {
        return userEmail;
    }

    // For user-facing emails, use the sender's email
    return sender.email;
}

/**
 * Sanitize email content for ZeptoMail compatibility.
 * Ensures proper encoding and formatting.
 * @param {string} content - Raw content
 * @returns {string} Sanitized content
 */
function sanitizeForZeptoMail(content) {
    if (!content) return '';
    // Ensure UTF-8 compatibility and remove problematic characters
    return content
        .split('')
        .filter(char => char.charCodeAt(0) > 31 || char.charCodeAt(0) === 9)
        .join('')
        .trim();
}

/**
 * Send an email using the configured templates and transporter.
 * Optimized for ZeptoMail EU TCP transmission.
 * @param {Object} options
 * @param {string} options.to - Recipient email.
 * @param {string} options.template - Template key.
 * @param {string} [options.locale] - User locale.
 * @param {Object} [options.variables] - Variables for template replacement.
 */
async function sendEmail({ to, template, locale, variables }) {
    const normalizedLocale = normalizeLocale(locale);
    const templateContent = resolveTemplate(template, normalizedLocale);

    if (!templateContent) {
        throw new Error(`Template not found: ${template}`);
    }

    const rendered = render(templateContent, variables || {});

    // Sanitize content for ZeptoMail
    const sanitizedHtml = sanitizeForZeptoMail(rendered.html);
    const sanitizedText = sanitizeForZeptoMail(rendered.text);
    const sanitizedSubject = sanitizeForZeptoMail(rendered.subject);

    // Append signature
    const htmlWithSignature = sanitizedHtml + emailSignatureHtml(normalizedLocale);
    const textWithSignature = sanitizedText + emailSignatureText(normalizedLocale);

    const sender = resolveSender(template);
    const smtpConfig = getSMTPConfig();
    const bccEmail = getBccEmail(template);
    const replyToEmail = getReplyTo(template, sender, variables?.email);

    // Create transporter with ZeptoMail EU optimizations
    const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure,
        auth: {
            user: sender.authEmail,
            pass: sender.authPassword,
        },
        // TCP connection settings
        connectionTimeout: smtpConfig.connectionTimeout,
        greetingTimeout: smtpConfig.greetingTimeout,
        socketTimeout: smtpConfig.socketTimeout,
        pool: smtpConfig.pool,
        maxConnections: smtpConfig.maxConnections,
        // TLS settings
        tls: smtpConfig.tls,
    });

    // Build mail options with proper ZeptoMail headers
    const mailOptions = {
        from: {
            name: sender.name,
            address: sender.authEmail
        },
        to: to,
        subject: sanitizedSubject,
        html: htmlWithSignature,
        text: textWithSignature,
        // Reply-To configuration
        replyTo: {
            name: sender.name,
            address: replyToEmail
        },
        // Headers optimized for ZeptoMail and deliverability
        headers: {
            'X-Mailer': 'Cojauny-Mailer/1.0',
            'X-Priority': '3', // Normal priority
            'X-Entity-Ref-ID': `cojauny-${template}-${Date.now()}`,
            'List-Unsubscribe': '<mailto:unsubscribe@cojauny.com>',
        },
        // Encoding settings for UTF-8 content
        encoding: 'utf-8',
        textEncoding: 'quoted-printable',
    };

    // Add BCC only if defined (for user-facing emails)
    if (bccEmail) {
        mailOptions.bcc = bccEmail;
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${template} to ${to} (ID: ${info.messageId})`);

        // Log successful email to Supabase
        await logEmailSent({
            recipient: to,
            subject: sanitizedSubject,
            template,
            status: 'sent',
            messageId: info.messageId,
            smtpHost: smtpConfig.host,
            locale: normalizedLocale,
            bcc: bccEmail || null,
            replyTo: replyToEmail
        });

        return info;
    } catch (error) {
        console.error('Error sending email:', error);

        // Log failed email to Supabase
        await logEmailSent({
            recipient: to,
            subject: sanitizedSubject,
            template,
            status: 'failed',
            errorMessage: error.message,
            smtpHost: smtpConfig.host,
            locale: normalizedLocale,
            bcc: bccEmail || null,
            replyTo: replyToEmail
        });

        throw error;
    }
}

module.exports = { sendEmail };
