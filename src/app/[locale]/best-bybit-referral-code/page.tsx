import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ExchangeComparison } from '@/components/ExchangeComparison';
import { FAQ } from '@/components/FAQ';
import { REFERRAL_CODES } from '@/config/referral-codes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  
  return {
    title: messages.pages.bestBybitReferralCode.title + ' 2026 | Top Rated Codes',
    description: messages.pages.bestBybitReferralCode.description.replace('{code}', REFERRAL_CODES.bybit.code),
    keywords: 'best bybit referral code, top bybit code, bybit referral comparison, best crypto referral',
  };
}

export default async function BestBybitReferralCodePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.pages.bestBybitReferralCode;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="w-full bg-white py-16 dark:bg-gray-900">
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
        <ExchangeComparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
