const { z } = require('zod');
const { getSupabase } = require('../../lib/supabase');
const { sendEmail } = require('../../lib/email');


const betaSignupSchema = z.object({
    email: z.string().email(),
    fullName: z.string().min(2),
    useCase: z.string().optional(),
    homeAirport: z.string().optional(),
    country: z.string().optional(),
    flightFrequency: z.string().optional(),
    locale: z.string().default('es'),
    updatesOptIn: z.boolean().optional(),
    termsAccepted: z.boolean(),
    privacyAccepted: z.boolean(),
    honeypot: z.string().optional(),
    referralCode: z.string().optional(),
});

function isHuman(honeypot) {
    return !honeypot || honeypot.length === 0;
}

exports.submitBetaSignup = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = betaSignupSchema.parse(req.body);

        if (!isHuman(data.honeypot)) {
            return res.status(403).json({ error: 'Bot detected' });
        }

        const confirmationToken = require('crypto').randomUUID();

        // 1. Save to Supabase
        const supabase = getSupabase();
        const { data: insertedData, error: dbError } = await supabase
            .from('waitlist')
            .insert({
                email: data.email,
                name: data.fullName,
                home_airport: data.homeAirport || null,
                flight_frequency: data.flightFrequency || 'once',
                marketing_opt_in: !!data.updatesOptIn,
                beta_tester: true,
                terms_accepted: data.termsAccepted,
                privacy_accepted: data.privacyAccepted,
                language: data.locale,
                confirmation_token: confirmationToken,
                ip_address: req.ip,
                user_agent: req.get('user-agent') || '',
                usecase: data.useCase,
                country: data.country,
                referral_code_used: data.referralCode
            })
            .select()
            .single();

        if (dbError) {
            if (dbError.code === '23505') { // Unique violation
                return res.status(409).json({ errorCode: 'beta_duplicate_email' });
            }
            console.error('Supabase error:', dbError);
            return res.status(500).json({ error: 'Database error' });
        }

        // Handle referral increment if needed
        if (data.referralCode) {
            try {
                await supabase.rpc('increment_referral_signups', { ref_code: data.referralCode });
            } catch (e) {
                console.error('Error incrementing referral:', e);
            }
        }

        // 2. Send User Confirmation Email (with BCC to beta alias)
        const siteUrl = 'https://www.cojauny.com';
        const referralLink = insertedData.referral_code ? `${siteUrl}/${data.locale}?ref=${insertedData.referral_code}` : siteUrl;

        await sendEmail({
            to: data.email,
            template: 'beta-confirmation',
            locale: data.locale,
            variables: {
                name: data.fullName,
                referral_link: referralLink
            }
        });

        return res.status(200).json({
            success: true,
            id: insertedData.id,
            confirmationToken,
            referralLink
        });
    } catch (error) {
        console.error('Error processing beta signup:', error);
        return res.status(400).json({ error: error.message });
    }
};
