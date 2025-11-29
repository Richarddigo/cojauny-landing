const { z } = require('zod');
const { supabase } = require('../../lib/supabase');
const { sendEmail } = require('../../lib/email');
const functions = require('firebase-functions');

const contactSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    message: z.string().min(10),
    topic: z.string(),
    locale: z.string().default('es'),
    honeypot: z.string().optional(),
});

function isHuman(honeypot) {
    return !honeypot || honeypot.length === 0;
}

function getLanguageName(locale) {
    const names = {
        es: 'Español',
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
    };
    return names[locale] || locale;
}

exports.submitContactForm = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = contactSchema.parse(req.body);

        if (!isHuman(data.honeypot)) {
            return res.status(403).json({ error: 'Bot detected' });
        }

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('feedback')
            .insert({
                email: data.email,
                name: data.name,
                message: data.message,
                usecase: 'contact',
                topic: data.topic,
                language: getLanguageName(data.locale),
                ip_address: req.ip,
                user_agent: req.get('user-agent') || '',
            });

        if (dbError) {
            console.error('Supabase error:', dbError);
            return res.status(500).json({ error: 'Database error' });
        }

        // 2. Send Emails

        // User Confirmation
        await sendEmail({
            to: data.email,
            template: 'contact-confirmation',
            locale: data.locale,
            variables: {
                name: data.name
            }
        });

        // Internal Notification
        await sendEmail({
            to: functions.config().email.support || 'support@cojauny.com',
            template: 'contact-internal',
            locale: 'es', // Internal emails usually in default lang or fixed
            variables: {
                name: data.name,
                email: data.email,
                topic: data.topic,
                message: data.message,
                locale: data.locale
            }
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return res.status(400).json({ error: error.message });
    }
};
