export const filterCurrencyCodes = (pocketsList, selected) =>
  pocketsList.filter(code => !(code === selected));

export const calculateExchange = (amount, rate) =>
  parseFloat(amount * rate).toFixed(2);
