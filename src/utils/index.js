export const filterCurrencyCodes = (pocketsList, selected) =>
  pocketsList.filter(code => !(code === selected));

export const calculateExchange = (amount, rate) =>
  parseFloat(amount * rate).toFixed(2);

export const updatePocketAmount = (pocketAmount, amountToAdd) =>
  Number(parseFloat(pocketAmount + amountToAdd).toFixed(2));
