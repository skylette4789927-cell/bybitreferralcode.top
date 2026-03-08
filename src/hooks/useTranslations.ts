'use client';

import { useParams } from 'next/navigation';
import en from '../../messages/en.json';
import vi from '../../messages/vi.json';
import id from '../../messages/id.json';

const messages: Record<string, typeof en> = {
  en,
  vi,
  id,
};

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = messages[locale] || messages.en;

  return { t, locale };
}
