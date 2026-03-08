import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { BonusDisplay } from '@/components/BonusDisplay';
import { FAQ } from '@/components/FAQ';
import { REFERRAL_CODES } from '@/config/referral-codes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  
  return {
    title: messages.pages.bybitBonusCode.title + ' 2026 | Up to $4100 Rewards',
    description: messages.pages.bybitBonusCode.description.replace('{code}', REFERRAL_CODES.bybit.code),
    keywords: 'bybit bonus code, bybit signup bonus, bybit deposit bonus, crypto bonus code',
  };
}

export default async function BybitBonusCodePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.pages.bybitBonusCode;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BonusDisplay />
        <section className="w-full bg-gray-50 py-16 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400"
                 dangerouslySetInnerHTML={{ __html: t.description.replace('{code}', `<strong>${REFERRAL_CODES.bybit.code}</strong>`) }}>
              </p>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
