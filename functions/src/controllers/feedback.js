const { z } = require('zod');
const { getSupabase } = require('../../lib/supabase');
const { sendEmail } = require('../../lib/email');


const feedbackSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    message: z.string().min(10),
    usecase: z.string(),
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

exports.submitFeedback = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = feedbackSchema.parse(req.body);

        if (!isHuman(data.honeypot)) {
            return res.status(403).json({ error: 'Bot detected' });
        }

        // 1. Save to Supabase
        const supabase = getSupabase();
        const { error: dbError } = await supabase
            .from('feedback')
            .insert({
                email: data.email,
                name: data.name,
                message: data.message,
                usecase: data.usecase,
                language: getLanguageName(data.locale),
                ip_address: req.ip,
                user_agent: req.get('user-agent') || '',
            });

        if (dbError) {
            console.error('Supabase error:', dbError);
            return res.status(500).json({ error: 'Database error' });
        }

        // Determine template based on usecase
        let templateKey = 'feedback-confirmation';

        const normalizedUsecase = data.usecase.toLowerCase().replace(/\s+/g, '_');
        if (normalizedUsecase.includes('idea')) {
            templateKey = 'idea-confirmation';
        } else if (normalizedUsecase.includes('business') || normalizedUsecase.includes('proposal')) {
            templateKey = 'business-proposal-confirmation';
        }

        // 2. Send User Confirmation Email (with BCC to feedback alias)
        await sendEmail({
            to: data.email,
            template: templateKey,
            locale: data.locale,
            variables: {
                name: data.name,
                message: data.message
            }
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error processing feedback:', error);
        return res.status(400).json({ error: error.message });
    }
};
