'use client';

import { Gift, Percent, Award, ArrowRight } from 'lucide-react';
import { REFERRAL_CODES } from '@/config/referral-codes';
import { useTranslations } from '@/hooks/useTranslations';

export function BonusDisplay() {
  const { t } = useTranslations();
  const bybitCode = REFERRAL_CODES.bybit;

  const bonuses = [
    {
      icon: Gift,
      label: t.bonusDisplay.depositBonus,
      value: bybitCode.bonus,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Percent,
      label: t.bonusDisplay.feeDiscount,
      value: bybitCode.feeDiscount,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Award,
      label: t.bonusDisplay.rewardsHub,
      value: t.bonusDisplay.yes,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section className="w-full bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t.bonusDisplay.title}
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${bonus.bgColor}`}>
                  <bonus.icon className={`h-7 w-7 ${bonus.color}`} />
                </div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {bonus.label}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bonus.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href={bybitCode.signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              {t.bonusDisplay.claimBonus}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
