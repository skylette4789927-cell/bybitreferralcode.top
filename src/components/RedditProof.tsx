'use client';

import { MessageSquare, ThumbsUp, Award } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export function RedditProof() {
  const { t } = useTranslations();

  const reviews = [
    {
      quote: t.reddit.quote1,
      user: t.reddit.user1,
      upvotes: 47,
      award: true,
    },
    {
      quote: t.reddit.quote2,
      user: t.reddit.user2,
      upvotes: 32,
      award: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30">
              <MessageSquare className="h-7 w-7 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              {t.reddit.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.reddit.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                {/* Reddit Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-xs font-bold">
                      r/
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      r/CryptoReferrals
                    </span>
                  </div>
                  {review.award && (
                    <Award className="h-5 w-5 text-yellow-500" />
                  )}
                </div>

                {/* Quote */}
                <blockquote className="mb-4 text-gray-800 dark:text-gray-200">
                  "{review.quote}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {review.user}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.upvotes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://www.reddit.com/r/CryptoReferrals/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-600 transition-all hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20"
            >
              <MessageSquare className="h-5 w-5" />
              View More on Reddit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
