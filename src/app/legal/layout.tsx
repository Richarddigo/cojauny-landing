import type { ReactNode } from 'react';
import RootDocument from '@/components/RootDocument';

export { metadata } from '@/components/RootDocument';

export default function LegacyLegalLayout({ children }: { children: ReactNode }) {
  return <RootDocument>{children}</RootDocument>;
}
