const { createClient } = require('@supabase/supabase-js');
const { supabaseUrl, supabaseKey } = require('../config');

// Lazy initialization to avoid errors during module load
let supabaseClient = null;

function getSupabase() {
    if (!supabaseClient) {
        supabaseClient = createClient(
            supabaseUrl.value(),
            supabaseKey.value(),
            {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false,
                },
            }
        );
    }
    return supabaseClient;
}

module.exports = { getSupabase };
