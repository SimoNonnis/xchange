const GBP = 'GBP';
const EUR = 'EUR';
const USD = 'USD';
const RUB = 'RUB';

export const pocketsInfo = {
  [GBP]: {
    code: GBP,
    name: 'British Pound',
    symbol: '£'
  },
  [EUR]: {
    code: EUR,
    name: 'Euro',
    symbol: '€'
  },
  [USD]: {
    code: USD,
    name: 'American Dollar',
    symbol: '$'
  },
  [RUB]: {
    code: RUB,
    name: 'Russian Ruble',
    symbol: '₽'
  }
};

export const pocketsAmount = {
  [GBP]: {
    amount: 1000
  },
  [EUR]: {
    amount: 1500
  },
  [USD]: {
    amount: 2000
  },
  [RUB]: {
    amount: 2500
  }
};

export const currenciesList = [GBP, EUR, USD];

export const pocketsList = [GBP, EUR, USD, RUB];

export const selected = RUB;

export const rates = {
  [GBP]: 1000,
  [EUR]: 2000,
  [USD]: 3000
};
