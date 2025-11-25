import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { load } from 'cheerio';

const OUTPUT_DIR = path.join(process.cwd(), 'docs');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'extracted-content.json');

async function getHtmlFromEnv(): Promise<string | null> {
  const html = process.env.CURRENT_SITE_HTML;
  if (html && html.trim().length > 0) {
    return html;
  }
  return null;
}

async function fetchCurrentSite(): Promise<string | null> {
  const url = process.env.CURRENT_SITE_URL;
  if (!url) {
    return null;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    return null;
  }
}

function extractContent(html: string) {
  const $ = load(html);
  const title = $('title').first().text();
  const metaDescription = $('meta[name="description"]').attr('content') ?? '';

  const heroHeading = $('h1').first().text();
  const heroParagraph = $('p').first().text();

  const links = $('a')
    .map((index: number, el) => ({
      position: index,
      text: $(el).text().trim(),
      href: el.attribs?.href ?? ''
    }))
    .get();

  const images = $('img')
    .map((index: number, el) => ({
      position: index,
      alt: $(el).attr('alt') ?? '',
      src: $(el).attr('src') ?? ''
    }))
    .get();

  return {
    retrievedAt: new Date().toISOString(),
    title,
    metaDescription,
    hero: {
      heading: heroHeading,
      paragraph: heroParagraph
    },
    links,
    images,
    rawHtmlLength: html.length
  };
}

async function main() {
  const html = (await fetchCurrentSite()) ?? (await getHtmlFromEnv());

  if (!html) {
    return;
  }

  const content = extractContent(html);
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(content, null, 2), 'utf-8');
}

main().catch((error) => {
  process.exit(1);
});
