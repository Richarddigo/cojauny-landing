// @ts-nocheck

import { promises as fs } from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const OUTPUT_DIR = path.join(process.cwd(), 'docs', 'backups');
const tables = ['waitlist', 'feedback', 'emails_sent'] as const;

type TableName = (typeof tables)[number];

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}`);
  }
  return value;
}

async function exportTable(client: ReturnType<typeof createClient>, table: TableName) {
  const { data, error } = await client.from(table).select('*');
  if (error) {
    throw new Error(`No se pudo exportar ${table}: ${error.message}`);
  }

  const filePath = path.join(
    OUTPUT_DIR,
    `${new Date().toISOString().replace(/[:.]/g, '-')}-${table}.json`
  );
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  return filePath;
}

async function main() {
  const url = requireEnv('BASE_URL');
  const key = requireEnv('BASE_SERVICE_ROLE_KEY');

  const supabase = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const files: string[] = [];
  for (const table of tables) {
    const filePath = await exportTable(supabase, table);
    files.push(filePath);
  }

  console.log('Export completado:', files);
}

main().catch((error) => {
  console.error('Error exportando datos de Supabase:', error);
  process.exit(1);
});
