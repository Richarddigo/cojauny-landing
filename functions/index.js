const { onRequest } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const cors = require('cors')({ origin: true });

const { submitContactForm } = require('./src/controllers/contact');
const { submitFeedback } = require('./src/controllers/feedback');
const { submitBetaSignup } = require('./src/controllers/beta');
const { trackReferralVisit, getReferralStats } = require('./src/controllers/referral');

// Import secrets from config
const { supabaseKey, smtpPass } = require('./config');

// Set global options for all functions
setGlobalOptions({
    region: 'europe-west1',
    maxInstances: 10,
    secrets: [supabaseKey, smtpPass]
});

// --- Cloud Functions (2nd gen) ---

exports.submitContactForm = onRequest((req, res) => {
    cors(req, res, () => submitContactForm(req, res));
});

exports.submitFeedback = onRequest((req, res) => {
    cors(req, res, () => submitFeedback(req, res));
});

exports.submitBetaSignup = onRequest((req, res) => {
    cors(req, res, () => submitBetaSignup(req, res));
});

exports.trackReferralVisit = onRequest((req, res) => {
    cors(req, res, () => trackReferralVisit(req, res));
});

exports.getReferralStats = onRequest((req, res) => {
    cors(req, res, () => getReferralStats(req, res));
});
