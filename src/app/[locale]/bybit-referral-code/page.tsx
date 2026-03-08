import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { BonusDisplay } from '@/components/BonusDisplay';
import { ExchangeComparison } from '@/components/ExchangeComparison';
import { FAQ } from '@/components/FAQ';
import { REFERRAL_CODES } from '@/config/referral-codes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  
  return {
    title: messages.pages.bybitReferralCode.title + ' + 10% Fee Discount',
    description: messages.pages.bybitReferralCode.intro.replace('{code}', REFERRAL_CODES.bybit.code),
    keywords: 'bybit referral code, bybit invite code, bybit bonus, crypto referral code, bybit signup bonus',
  };
}

export default async function BybitReferralCodePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.pages.bybitReferralCode;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Content Section */}
        <section className="w-full bg-white py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h1>
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-400"
                   dangerouslySetInnerHTML={{ __html: t.intro.replace('{code}', `<strong>${REFERRAL_CODES.bybit.code}</strong>`) }}>
                </p>
                
                <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                  {t.whatYouGet}
                </h2>
                
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>{t.benefits.depositBonus}</li>
                  <li>{t.benefits.feeDiscount}</li>
                  <li>{t.benefits.rewardsHub}</li>
                  <li>{t.benefits.instantActivation}</li>
                </ul>
                
                <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                  {t.howToUse}
                </h2>
                
                <ol className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Click the &quot;Sign Up&quot; button above or visit Bybit directly</li>
                  <li>Click &quot;Register&quot; to start the signup process</li>
                  <li dangerouslySetInnerHTML={{ __html: `Enter referral code: <strong>${REFERRAL_CODES.bybit.code}</strong>` }}></li>
                  <li>Complete your registration and verification</li>
                  <li>Claim your bonus in the Rewards Hub</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        <BonusDisplay />
        <ExchangeComparison />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
