declare module 'next-intl' {
  export * from 'next-intl/dist/types';
}

declare module 'next-intl/server' {
  export function getRequestConfig(config: {
    requestLocale: Promise<string | undefined>;
  }): Promise<{
    locale: string;
    messages: Record<string, unknown>;
  }>;
}
