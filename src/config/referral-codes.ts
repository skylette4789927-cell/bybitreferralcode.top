export const REFERRAL_CODES = {
  bybit: {
    code: 'BYBIT2026',
    bonus: '$4100',
    feeDiscount: '10%',
    signupUrl: 'https://www.bybit.com/invite?ref=BYBIT2026',
    rating: 4,
    features: ['Deposit Bonus', 'Trading Fee Discount', 'Rewards Hub']
  },
  okx: {
    code: 'OKX2026',
    bonus: '$10000',
    feeDiscount: '20%',
    signupUrl: 'https://www.okx.com/join/OKX2026',
    rating: 5,
    features: ['Highest Bonus', 'Lowest Fees', 'New User Rewards']
  },
  binance: {
    code: 'BINANCE2026',
    bonus: '$600',
    feeDiscount: '20%',
    signupUrl: 'https://www.binance.com/register?ref=BINANCE2026',
    rating: 5,
    features: ['World Largest', 'Fee Discount', 'Multiple Rewards']
  },
  bitget: {
    code: 'BITGET2026',
    bonus: '$5000',
    feeDiscount: '15%',
    signupUrl: 'https://www.bitget.com/referral/register?clacCode=BITGET2026',
    rating: 4,
    features: ['Copy Trading', 'Fee Discount', 'Welcome Bonus']
  },
  mexc: {
    code: 'MEXC2026',
    bonus: '$1000',
    feeDiscount: '10%',
    signupUrl: 'https://www.mexc.com/register?inviteCode=MEXC2026',
    rating: 4,
    features: ['Low Fees', 'Many Altcoins', 'Welcome Bonus']
  }
} as const;

export type ExchangeKey = keyof typeof REFERRAL_CODES;

export const EXCHANGE_LIST: ExchangeKey[] = ['okx', 'binance', 'bybit', 'bitget', 'mexc'];

export const calculateBonus = (exchange: ExchangeKey, volume: number): number => {
  const rates: Record<ExchangeKey, number> = {
    bybit: 0.024,
    okx: 0.036,
    binance: 0.03,
    bitget: 0.028,
    mexc: 0.022
  };
  
  const baseBonus = volume * rates[exchange];
  const maxBonuses: Record<ExchangeKey, number> = {
    bybit: 4100,
    okx: 10000,
    binance: 600,
    bitget: 5000,
    mexc: 1000
  };
  
  return Math.min(baseBonus, maxBonuses[exchange]);
};
