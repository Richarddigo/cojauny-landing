"use client";

import { useMessages } from 'next-intl';

import type { AppMessages } from '@/lib/i18nMessages';

export function useAppMessages(): AppMessages {
    return useMessages() as unknown as AppMessages;
}
