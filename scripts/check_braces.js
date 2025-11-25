const fs = require('fs');
const path = 'c:/Users/rdiaz/Documents/Development/cojauny-landing/supabase/functions/send-beta-email/index.ts';
const s = fs.readFileSync(path, 'utf8');
const start = s.indexOf('const localizedTemplates');
const end = s.indexOf('const staticTemplates');
if (start === -1 || end === -1) {
    process.exit(1);
}
const chunk = s.slice(start, end);