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

/**
 * Log an email sent to the emails_sent table for auditing.
 * @param {Object} options
 * @param {string} options.recipient - Email recipient
 * @param {string} options.subject - Email subject
 * @param {string} options.template - Template key used
 * @param {string} options.status - 'sent' or 'failed'
 * @param {string} [options.errorMessage] - Error message if failed
 * @param {string} [options.messageId] - SMTP message ID
 * @param {string} [options.smtpHost] - SMTP host used
 * @param {string} [options.locale] - Email locale
 * @param {Object} [options.metadata] - Additional metadata
 */
async function logEmailSent({
    recipient,
    subject,
    template,
    status,
    errorMessage = null,
    messageId = null,
    smtpHost = null,
    locale = 'es',
    metadata = null
}) {
    try {
        const supabase = getSupabase();
        const { error } = await supabase
            .from('emails_sent')
            .insert({
                recipient,
                subject,
                template,
                status,
                error_message: errorMessage,
                message_id: messageId,
                smtp_host: smtpHost,
                locale,
                metadata
            });

        if (error) {
            console.error('Error logging email to Supabase:', error);
        }
    } catch (err) {
        // Don't throw - logging should not break email flow
        console.error('Failed to log email:', err);
    }
}

module.exports = { getSupabase, logEmailSent };
