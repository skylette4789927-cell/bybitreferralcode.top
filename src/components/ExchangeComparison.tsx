'use client';

import { Star, ExternalLink, Crown, ThumbsUp, Award } from 'lucide-react';
import { REFERRAL_CODES, EXCHANGE_LIST, type ExchangeKey } from '@/config/referral-codes';
import { useTranslations } from '@/hooks/useTranslations';

export function ExchangeComparison() {
  const { t } = useTranslations();

  const getBadge = (exchange: ExchangeKey) => {
    switch (exchange) {
      case 'okx':
        return { icon: Crown, text: t.comparison.editorPick, color: 'bg-yellow-100 text-yellow-800' };
      case 'binance':
        return { icon: ThumbsUp, text: t.comparison.recommended, color: 'bg-green-100 text-green-800' };
      default:
        return { icon: Award, text: t.comparison.bestChoice, color: 'bg-blue-100 text-blue-800' };
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const exchangeNames: Record<ExchangeKey, string> = {
    okx: 'OKX',
    binance: 'Binance',
    bybit: 'Bybit',
    bitget: 'Bitget',
    mexc: 'MEXC'
  };

  return (
    <section id="comparison" className="w-full bg-gray-50 py-16 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.comparison.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.comparison.subtitle}
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 md:block">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t.comparison.exchange}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t.comparison.bonus}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t.comparison.feeDiscount}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t.comparison.rating}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t.buttons.signUp}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {EXCHANGE_LIST.map((exchange) => {
                  const data = REFERRAL_CODES[exchange];
                  const badge = getBadge(exchange);
                  return (
                    <tr key={exchange} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                            {exchange[0].toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {exchangeNames[exchange]}
                            </div>
                            <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${badge.color}`}>
                              <badge.icon className="h-3 w-3" />
                              {badge.text}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-green-600">{data.bonus}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900 dark:text-white">{data.feeDiscount}</span>
                      </td>
                      <td className="px-6 py-4">
                        {renderStars(data.rating)}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={data.signupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                          {t.comparison.getBonus}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid gap-4 md:hidden">
            {EXCHANGE_LIST.map((exchange) => {
              const data = REFERRAL_CODES[exchange];
              const badge = getBadge(exchange);
              return (
                <div
                  key={exchange}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                        {exchange[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {exchangeNames[exchange]}
                        </div>
                        <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${badge.color}`}>
                          <badge.icon className="h-3 w-3" />
                          {badge.text}
                        </div>
                      </div>
                    </div>
                    {renderStars(data.rating)}
                  </div>
                  
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400">{t.comparison.bonus}</div>
                      <div className="text-lg font-bold text-green-600">{data.bonus}</div>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400">{t.comparison.feeDiscount}</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{data.feeDiscount}</div>
                    </div>
                  </div>

                  <a
                    href={data.signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    {t.comparison.getBonus}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
