const { createClient } = require('@supabase/supabase-js');
const functions = require('firebase-functions');

const supabaseUrl = functions.config().supabase.url;
const supabaseKey = functions.config().supabase.key;

if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials not found in functions config.');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

module.exports = { supabase };
