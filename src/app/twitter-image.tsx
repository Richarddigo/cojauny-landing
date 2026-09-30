import { renderSocialImage } from '@/lib/socialImage';
export const dynamic = 'force-static';
export const alt = 'Cojauny — airport transfer beta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() { return renderSocialImage('en'); }
