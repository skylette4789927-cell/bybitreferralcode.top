'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const locales = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
];

const bybitPages = [
  { href: '/bybit-referral-code', labelKey: 'referralCode' },
  { href: '/bybit-invite-code', labelKey: 'inviteCode' },
  { href: '/bybit-promo-code', labelKey: 'promoCode' },
  { href: '/bybit-bonus-code', labelKey: 'bonusCode' },
  { href: '/bybit-voucher-code', labelKey: 'voucherCode' },
  { href: '/bybit-redeem-code', labelKey: 'redeemCode' },
  { href: '/bybit-signup-bonus', labelKey: 'signupBonus' },
  { href: '/bybit-refer-and-earn', labelKey: 'referEarn' },
  { href: '/bybit-referral-code-reddit', labelKey: 'reddit' },
  { href: '/best-bybit-referral-code', labelKey: 'bestCode' },
];

export function Header() {
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as string) || 'en';
  const { t } = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [bybitMenuOpen, setBybitMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const bybitMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/bybit-referral-code`, label: 'Bybit', hasDropdown: true },
    { href: `/${locale}#comparison`, label: t.nav.comparison },
    { href: `/${locale}#calculator`, label: t.nav.calculator },
    { href: `/${locale}/blog`, label: t.nav.blog },
  ];

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  // Get the path without locale prefix
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/');
    if (segments[1] === locale) {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale() || '/';

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
      if (bybitMenuRef.current && !bybitMenuRef.current.contains(event.target as Node)) {
        setBybitMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            C
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
            CryptoBonus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.href} ref={bybitMenuRef} className="relative">
                <button
                  onClick={() => setBybitMenuOpen(!bybitMenuOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${bybitMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {bybitMenuOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800 max-h-80 overflow-y-auto">
                    {bybitPages.map((page) => (
                      <Link
                        key={page.href}
                        href={`/${locale}${page.href}`}
                        onClick={() => setBybitMenuOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === `/${locale}${page.href}`
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                      >
                        {t.nav[page.labelKey as keyof typeof t.nav] || page.labelKey}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Switcher - Desktop */}
          <div ref={langMenuRef} className="relative hidden md:block">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLocale.flag}</span>
              <span className="hidden lg:inline">{currentLocale.label}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                {locales.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}${pathWithoutLocale}`}
                    onClick={() => setLangMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                      l.code === locale
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{l.flag}</span>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <nav className="container mx-auto flex flex-col py-4 px-4">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-800"
            >
              {t.nav.home}
            </Link>
            
            {/* Mobile Bybit Pages */}
            <div className="py-3 border-b border-gray-100 dark:border-gray-800">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                Bybit
              </p>
              <div className="flex flex-col gap-1 pl-2">
                {bybitPages.map((page) => (
                  <Link
                    key={page.href}
                    href={`/${locale}${page.href}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-sm transition-colors ${
                      pathname === `/${locale}${page.href}`
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`}
                  >
                    {t.nav[page.labelKey as keyof typeof t.nav] || page.labelKey}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href={`/${locale}#comparison`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-800"
            >
              {t.nav.comparison}
            </Link>
            <Link
              href={`/${locale}#calculator`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-800"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-800"
            >
              {t.nav.blog}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                Language
              </p>
              <div className="flex flex-col gap-1">
                {locales.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}${pathWithoutLocale}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      l.code === locale
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{l.flag}</span>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
