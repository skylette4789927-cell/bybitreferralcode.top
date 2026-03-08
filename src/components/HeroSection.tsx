'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink, Shield } from 'lucide-react';
import { REFERRAL_CODES } from '@/config/referral-codes';
import { useTranslations } from '@/hooks/useTranslations';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslations();
  const bybitCode = REFERRAL_CODES.bybit;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bybitCode.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">{t.hero.verified}</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-blue-100 sm:text-xl">
            {t.hero.subtitle}
          </p>

          {/* Code Card */}
          <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              {t.hero.codeLabel}
            </div>
            
            <div className="mb-6 flex items-center justify-center gap-3 rounded-xl bg-gray-100 p-4 dark:bg-gray-700">
              <span className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white sm:text-3xl">
                {bybitCode.code}
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleCopy}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5" />
                    {t.buttons.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    {t.hero.copyCode}
                  </>
                )}
              </button>
              
              <a
                href={bybitCode.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 active:scale-95"
              >
                <ExternalLink className="h-5 w-5" />
                {t.hero.signUp}
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Verified Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Instant Bonus</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
