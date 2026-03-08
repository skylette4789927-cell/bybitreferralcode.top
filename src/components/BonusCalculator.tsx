'use client';

import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import { calculateBonus, EXCHANGE_LIST, type ExchangeKey } from '@/config/referral-codes';
import { useTranslations } from '@/hooks/useTranslations';

export function BonusCalculator() {
  const { t } = useTranslations();
  const [volume, setVolume] = useState<string>('5000');

  const volumeNum = parseInt(volume) || 0;

  const getBonusAmount = (exchange: ExchangeKey): number => {
    return calculateBonus(exchange, volumeNum);
  };

  const getBestExchange = (): ExchangeKey => {
    let best: ExchangeKey = 'bybit';
    let maxBonus = 0;
    
    EXCHANGE_LIST.forEach((exchange) => {
      const bonus = getBonusAmount(exchange);
      if (bonus > maxBonus) {
        maxBonus = bonus;
        best = exchange;
      }
    });
    
    return best;
  };

  const bestExchange = getBestExchange();

  return (
    <section id="calculator" className="w-full bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
              <Calculator className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.calculator.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.calculator.subtitle}
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.calculator.tradingVolume}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder={t.calculator.volumePlaceholder}
                className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-lg font-semibold text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[1000, 5000, 10000, 50000, 100000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setVolume(amount.toString())}
                  className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t.calculator.yourBonus}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {EXCHANGE_LIST.slice(0, 3).map((exchange) => {
                const bonus = getBonusAmount(exchange);
                const isBest = exchange === bestExchange;
                
                return (
                  <div
                    key={exchange}
                    className={`relative rounded-2xl border-2 p-5 transition-all ${
                      isBest
                        ? 'border-green-500 bg-green-50 dark:border-green-500/50 dark:bg-green-900/20'
                        : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
                    }`}
                  >
                    {isBest && (
                      <div className="absolute -top-3 left-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                        BEST
                      </div>
                    )}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                        {exchange[0].toUpperCase()}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white capitalize">
                        {exchange}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-green-600">
                        ${bonus.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">bonus</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Insight */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">
                  Best Choice for ${volumeNum.toLocaleString()} Volume
                </h4>
                <p className="text-blue-100">
                  Based on your trading volume, <strong className="capitalize">{bestExchange}</strong> offers the highest bonus of{' '}
                  <strong>${getBonusAmount(bestExchange).toLocaleString()}</strong>. 
                  This could save you more on trading fees and provide better overall value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
