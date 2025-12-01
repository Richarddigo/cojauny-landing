const nodemailer = require('nodemailer');
const config = require('../config');
const { resolveTemplate, render, emailSignatureHtml, emailSignatureText, templateSenders, normalizeLocale } = require('./email-templates');
const { logEmailSent } = require('./supabase');

// Lazy getters to avoid errors during module load
const getSMTPConfig = () => ({
    host: config.smtpHost.value(),
    port: parseInt(config.smtpPort.value()),
    secure: true,
    auth: {
        user: config.smtpUser.value(),
        pass: config.smtpPass.value()
    }
});

const getEmailAliases = () => ({
    beta: config.emailBeta.value(),
    feedback: config.emailFeedback.value(),
    support: config.emailSupport.value()
});

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
 * @param {string} template - Template key
 * @returns {string} BCC email address
 */
function getBccEmail(template) {
    const aliases = getEmailAliases();
    const profileKey = templateSenders[template];

    const bccMap = {
        beta: aliases.beta,
        feedback: aliases.feedback,
        support: aliases.support
    };

    return bccMap[profileKey] || aliases.support;
}

/**
 * Send an email using the configured templates and transporter.
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

    // Append signature
    const htmlWithSignature = rendered.html + emailSignatureHtml(normalizedLocale);
    const textWithSignature = rendered.text + emailSignatureText(normalizedLocale);

    const sender = resolveSender(template);
    const smtpConfig = getSMTPConfig();
    const bccEmail = getBccEmail(template);

    // Create transporter with resolved credentials
    const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure,
        auth: {
            user: sender.authEmail,
            pass: sender.authPassword,
        },
    });

    const mailOptions = {
        from: `"${sender.name}" <${sender.authEmail}>`,
        to,
        bcc: bccEmail,
        subject: rendered.subject,
        html: htmlWithSignature,
        text: textWithSignature,
        replyTo: `"${sender.name}" <${sender.email}>`,
        headers: {
            'X-Sender': sender.authEmail,
            'X-Mailer': 'Cojauny Mailer'
        }
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${template} to ${to} (ID: ${info.messageId})`);

        // Log successful email to Supabase
        await logEmailSent({
            recipient: to,
            subject: rendered.subject,
            template,
            status: 'sent',
            messageId: info.messageId,
            smtpHost: smtpConfig.host,
            locale: normalizedLocale
        });

        return info;
    } catch (error) {
        console.error('Error sending email:', error);

        // Log failed email to Supabase
        await logEmailSent({
            recipient: to,
            subject: rendered.subject,
            template,
            status: 'failed',
            errorMessage: error.message,
            smtpHost: smtpConfig.host,
            locale: normalizedLocale
        });

        throw error;
    }
}

module.exports = { sendEmail };
