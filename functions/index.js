const { onRequest } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');

// Lista blanca de dominios permitidos para CORS
const ALLOWED_ORIGINS = [
    'https://cl-coride.web.app',
    'https://cl-coride.firebaseapp.com',
    'https://cojauny.com',
    'https://www.cojauny.com'
];

// Configuración CORS segura - solo permite orígenes autorizados
const cors = require('cors')({
    origin: function (origin, callback) {
        // Permitir requests sin origin (como curl, Postman en desarrollo)
        // En producción, considera rechazar estos también
        if (!origin) {
            return callback(null, true);
        }

        if (ALLOWED_ORIGINS.includes(origin)) {
            callback(null, true);
        } else {
            console.warn(`CORS blocked request from unauthorized origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400 // Cache preflight por 24 horas
});

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
