'use client';

import { ExternalLink, Handshake } from 'lucide-react';

interface Partner {
  name: string;
  url: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: 'OKX Referral Code',
    url: 'https://okxreferralcode.vip/en/',
    description: 'Get the best OKX referral bonuses and trading fee discounts',
  },
  {
    name: 'Binance Referral Code',
    url: 'https://binancereferralcode.cc/en',
    description: 'Find verified Binance referral codes for maximum rewards',
  },
  {
    name: 'MEXC Referral Code',
    url: 'https://mexcreferralcode.vip/en/',
    description: 'Claim MEXC signup bonuses and exclusive promotions',
  },
  {
    name: 'Best Fees Crypto Exchange',
    url: 'https://bestfeescryptoexchange.com/',
    description: 'Compare crypto exchanges with the lowest trading fees',
  },
  {
    name: 'ALT to USD',
    url: 'https://hibt.com/coinnews/ALT',
    description: 'Latest ALT coin news and USD conversion rates',
  },
];

export function Partners() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
              <Handshake className="h-7 w-7 text-blue-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Our Partners
            </h2>
            <p className="text-gray-400">
              Trusted platforms for crypto trading and referral bonuses
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-gray-700 bg-gray-800/50 p-6 transition-all hover:border-blue-500/50 hover:bg-gray-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400">
                    {partner.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Want to become a partner?{' '}
              <a 
                href="mailto:contact@bybitreferralcode.top" 
                className="text-blue-400 hover:text-blue-300"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
