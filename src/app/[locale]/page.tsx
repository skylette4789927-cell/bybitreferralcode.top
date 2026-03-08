import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { BonusDisplay } from '@/components/BonusDisplay';
import { ExchangeComparison } from '@/components/ExchangeComparison';
import { BonusCalculator } from '@/components/BonusCalculator';
import { HowToUse } from '@/components/HowToUse';
import { RedditProof } from '@/components/RedditProof';
import { FAQ } from '@/components/FAQ';
import { AdBanner } from '@/components/AdBanner';
import { Partners } from '@/components/Partners';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Ad Banner 1 - OKX Editor's Pick */}
        <AdBanner type="okx" />
        
        {/* Bonus Display */}
        <BonusDisplay />
        
        {/* Exchange Comparison */}
        <ExchangeComparison />
        
        {/* Ad Banner 2 - Bigger Bonus */}
        <AdBanner type="bigger-bonus" />
        
        {/* Bonus Calculator */}
        <BonusCalculator />
        
        {/* How to Use */}
        <HowToUse />
        
        {/* Reddit Proof */}
        <RedditProof />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Ad Banner 3 - Top Exchanges */}
        <AdBanner type="top-exchanges" />
        
        {/* Binance Banner */}
        <AdBanner type="binance" />
        
        {/* Partners Section */}
        <Partners />
      </main>
      
      <Footer />
    </div>
  );
}
