const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const { submitContactForm } = require('./src/controllers/contact');
const { submitFeedback } = require('./src/controllers/feedback');
const { submitBetaSignup } = require('./src/controllers/beta');
const { trackReferralVisit, getReferralStats } = require('./src/controllers/referral');

// --- Cloud Functions ---

exports.submitContactForm = functions.https.onRequest((req, res) => {
    cors(req, res, () => submitContactForm(req, res));
});

exports.submitFeedback = functions.https.onRequest((req, res) => {
    cors(req, res, () => submitFeedback(req, res));
});

exports.submitBetaSignup = functions.https.onRequest((req, res) => {
    cors(req, res, () => submitBetaSignup(req, res));
});

exports.trackReferralVisit = functions.https.onRequest((req, res) => {
    cors(req, res, () => trackReferralVisit(req, res));
});

exports.getReferralStats = functions.https.onRequest((req, res) => {
    cors(req, res, () => getReferralStats(req, res));
});
