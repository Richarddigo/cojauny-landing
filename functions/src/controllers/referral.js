const { getSupabase } = require('../../lib/supabase');


exports.trackReferralVisit = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { referralCode } = req.body;
        if (!referralCode) {
            return res.status(400).json({ error: 'referralCode is required' });
        }

        const supabase = getSupabase();
        const { data, error } = await supabase.rpc('increment_referral_visits', {
            ref_code: referralCode
        });

        if (error) {
            console.error('Supabase RPC error:', error);
            return res.status(500).json({ error: 'Failed to track visit' });
        }

        if (data && data.error) {
            return res.status(404).json({ error: data.error });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error tracking referral visit:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getReferralStats = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const supabase = getSupabase();
        // 1. Find user
        const { data: userData, error: userError } = await supabase
            .from('waitlist')
            .select('id')
            .eq('email', email.toLowerCase().trim())
            .single();

        if (userError || !userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        // 2. Fetch stats
        const { data: referralData, error: referralError } = await supabase
            .from('referral_stats')
            .select('referral_code, referral_link, visits, signups')
            .eq('uuid', userData.id)
            .single();

        if (referralError) {
            console.error('Supabase stats error:', referralError);
            return res.status(500).json({ error: 'Failed to fetch referral stats' });
        }

        return res.status(200).json({ success: true, data: [referralData] });
    } catch (error) {
        console.error('Error fetching referral stats:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
