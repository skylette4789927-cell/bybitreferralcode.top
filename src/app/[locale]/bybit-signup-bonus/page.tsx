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
    title: messages.pages.bybitSignupBonus.title + ' 2026 | $4100 New User Reward',
    description: messages.pages.bybitSignupBonus.description.replace('{code}', REFERRAL_CODES.bybit.code),
    keywords: 'bybit signup bonus, bybit welcome bonus, bybit new user bonus, crypto signup bonus',
  };
}

export default async function BybitSignupBonusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.pages.bybitSignupBonus;
  
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
