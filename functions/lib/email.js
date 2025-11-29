const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const { resolveTemplate, render, emailSignatureHtml, emailSignatureText, templateSenders, normalizeLocale } = require('./email-templates');

// Default credentials
const defaultUser = functions.config().smtp.user;
const defaultPass = functions.config().smtp.pass;
const smtpHost = functions.config().smtp.host || 'smtppro.zoho.eu'; // Fallback or config
const smtpPort = parseInt(functions.config().smtp.port || '465');
const smtpSecure = functions.config().smtp.secure === 'true' || true;

// Sender profiles configuration
const senderProfiles = {
    beta: {
        email: functions.config().email.beta,
        password: functions.config().smtp.pass, // Usually same pass, or add specific config if needed
        name: 'Cojauny Beta'
    },
    feedback: {
        email: functions.config().email.feedback,
        password: functions.config().smtp.pass,
        name: 'Cojauny Feedback'
    },
    support: {
        email: functions.config().email.support,
        password: functions.config().smtp.pass,
        name: 'Cojauny Support Team'
    }
};

function resolveSender(key) {
    // Special case for contact confirmation to force visible sender
    if (key === 'contact-confirmation') {
        const contactProfile = {
            email: 'contact@cojauny.com',
            name: 'Cojauny Contact'
        };
        const authEmail = senderProfiles.support.email || defaultUser;
        const authPassword = senderProfiles.support.password || defaultPass;

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
            authPassword: profile.password || defaultPass // Use default pass if specific not set
        };
    }

    if (!defaultUser || !defaultPass) {
        throw new Error('No default SMTP credentials configured');
    }

    // Fallback to default credentials if specific ones aren't set
    return {
        email: (profile && profile.email) || defaultUser,
        name: (profile && profile.name) || 'Cojauny',
        authEmail: defaultUser,
        authPassword: defaultPass
    };
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

    // Create transporter with resolved credentials
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
            user: sender.authEmail,
            pass: sender.authPassword,
        },
    });

    const mailOptions = {
        from: `"${sender.name}" <${sender.authEmail}>`,
        to,
        subject: rendered.subject,
        html: htmlWithSignature,
        text: textWithSignature,
        replyTo: `"${sender.name}" <${sender.email}>`, // Important for contact/feedback aliases
        headers: {
            'X-Sender': sender.authEmail,
            'X-Mailer': 'Cojauny Mailer'
        }
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${template} to ${to} (ID: ${info.messageId})`);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendEmail };
