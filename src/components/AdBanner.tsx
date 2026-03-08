'use client';

import { ExternalLink, Crown, TrendingUp, Star } from 'lucide-react';
import { REFERRAL_CODES } from '@/config/referral-codes';
import { useTranslations } from '@/hooks/useTranslations';

interface AdBannerProps {
  type: 'okx' | 'binance' | 'top-exchanges' | 'bigger-bonus';
}

export function AdBanner({ type }: AdBannerProps) {
  const { t } = useTranslations();

  if (type === 'okx') {
    const okx = REFERRAL_CODES.okx;
    return (
      <section id="okx" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  <Crown className="h-4 w-4" />
                  {t.exchanges.okx.badge}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {t.exchanges.okx.name} {t.nav.bybit}
                </h3>
                <p className="text-white/90">
                  {t.exchanges.okx.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition-all hover:bg-gray-100">
                  Copy OKX Code
                </button>
                <a
                  href={okx.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black/20 px-6 py-3 font-semibold text-white transition-all hover:bg-black/30"
                >
                  Open OKX
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === 'binance') {
    const binance = REFERRAL_CODES.binance;
    return (
      <section id="binance" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  <Star className="h-4 w-4" />
                  {t.exchanges.binance.badge}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {t.exchanges.binance.name} {t.nav.bybit}
                </h3>
                <p className="text-white/90">
                  {t.exchanges.binance.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-white px-6 py-3 font-semibold text-yellow-600 transition-all hover:bg-gray-100">
                  Copy Binance Code
                </button>
                <a
                  href={binance.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black/20 px-6 py-3 font-semibold text-white transition-all hover:bg-black/30"
                >
                  Open Binance
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === 'bigger-bonus') {
    const okx = REFERRAL_CODES.okx;
    return (
      <section className="w-full bg-gradient-to-br from-indigo-600 to-purple-700 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-white">
              {t.adSections.biggerBonus.title}
            </h3>
            <p className="mb-6 text-lg text-white/90">
              {t.adSections.biggerBonus.subtitle}
            </p>
            <a
              href={okx.signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-indigo-600 transition-all hover:bg-gray-100"
            >
              Get {okx.bonus} Bonus
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // top-exchanges
  return (
    <section className="w-full bg-gray-900 py-12 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {t.adSections.topExchanges.title}
            </h3>
            <p className="mt-2 text-gray-400">
              {t.adSections.topExchanges.subtitle}
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            {['okx', 'binance', 'bybit'].map((exchange) => {
              const data = REFERRAL_CODES[exchange as keyof typeof REFERRAL_CODES];
              return (
                <a
                  key={exchange}
                  href={data.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl bg-gray-800 p-5 transition-all hover:bg-gray-700"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-lg font-bold capitalize text-white">
                      {exchange}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400">{data.bonus}</div>
                  <div className="text-sm text-gray-400">Bonus</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
