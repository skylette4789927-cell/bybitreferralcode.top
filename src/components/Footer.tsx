'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';

export function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const { t } = useTranslations();

  const footerLinks = [
    {
      title: t.nav.bybit,
      links: [
        { label: 'Bybit', href: `/${locale}/bybit-referral-code` },
        { label: 'OKX', href: `/${locale}#okx` },
        { label: 'Binance', href: `/${locale}#binance` },
      ],
    },
    {
      title: t.nav.comparison,
      links: [
        { label: t.nav.calculator, href: `/${locale}#calculator` },
        { label: t.nav.comparison, href: `/${locale}#comparison` },
        { label: t.howToUse.title, href: `/${locale}#how-to-use` },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Disclaimer', href: `/${locale}#disclaimer` },
        { label: 'Privacy Policy', href: `/${locale}/privacy` },
        { label: 'Terms of Service', href: `/${locale}/terms` },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                C
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                CryptoBonus
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find the best crypto exchange bonuses and referral codes. Compare rewards from Bybit, OKX, Binance and more.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            {t.footer.disclaimer}
          </p>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
