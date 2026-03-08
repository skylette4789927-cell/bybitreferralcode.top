'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslations();

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer,
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer,
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer,
    },
    {
      question: t.faq.q4.question,
      answer: t.faq.q4.answer,
    },
    {
      question: t.faq.q5.question,
      answer: t.faq.q5.answer,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
              <HelpCircle className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.faq.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform dark:text-gray-400 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="border-t border-gray-100 px-6 pb-6 pt-0 dark:border-gray-700">
                    <p className="pt-4 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
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
