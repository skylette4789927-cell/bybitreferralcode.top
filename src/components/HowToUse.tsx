'use client';

import { Monitor, UserPlus, KeyRound, Gift, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export function HowToUse() {
  const { t } = useTranslations();

  const steps = [
    { icon: Monitor, title: t.howToUse.steps['1'].title, description: t.howToUse.steps['1'].description },
    { icon: UserPlus, title: t.howToUse.steps['2'].title, description: t.howToUse.steps['2'].description },
    { icon: KeyRound, title: t.howToUse.steps['3'].title, description: t.howToUse.steps['3'].description },
    { icon: Gift, title: t.howToUse.steps['4'].title, description: t.howToUse.steps['4'].description },
  ];

  return (
    <section id="how-to-use" className="w-full bg-gray-50 py-16 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.howToUse.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.howToUse.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                      <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
