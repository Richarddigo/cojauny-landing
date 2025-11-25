const fs = require('fs');
const path = 'c:/Users/rdiaz/Documents/Development/cojauny-landing/supabase/functions/send-beta-email/index.ts';
const s = fs.readFileSync(path, 'utf8');
const start = s.indexOf('const localizedTemplates');
const end = s.indexOf('const staticTemplates');
if (start === -1 || end === -1) { process.exit(1); }
const c = s.slice(start, end);
let depth = 0;
let line = 1;
let maxDepth = 0;
for (let i = 0; i < c.length; i++) {
    const ch = c[i];
    if (ch === '\n') { line++; continue; }
    if (ch === '{') {
        depth++;
        if (depth > maxDepth) maxDepth = depth;
    } else if (ch === '}') {
        depth--;
    }
}