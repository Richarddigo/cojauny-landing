const { defineString, defineSecret } = require('firebase-functions/params');

// Supabase
exports.supabaseUrl = defineString('SUPABASE_URL');
exports.supabaseKey = defineSecret('SUPABASE_KEY');

// SMTP
exports.smtpHost = defineString('SMTP_HOST', { default: 'smtp.zeptomail.eu' });
exports.smtpPort = defineString('SMTP_PORT', { default: '465' });
exports.smtpUser = defineString('SMTP_USER');
exports.smtpPass = defineSecret('SMTP_PASS');

// Email Aliases
exports.emailBeta = defineString('EMAIL_BETA', { default: 'beta@cojauny.com' });
exports.emailFeedback = defineString('EMAIL_FEEDBACK', { default: 'feedback@cojauny.com' });
exports.emailSupport = defineString('EMAIL_SUPPORT', { default: 'support@cojauny.com' });
