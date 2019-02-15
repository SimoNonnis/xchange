export const filterCurrencyCodes = (pocketsList, selected) =>
  pocketsList.filter(code => !(code === selected));

export const calculateExchange = (amount, rate) =>
  Number(parseFloat(amount * rate).toFixed(2));

export const incrementPocketAmount = (pocketAmount, amountToAdd) =>
  Number(parseFloat(pocketAmount + amountToAdd).toFixed(2));

export const decrementPocketAmount = (pocketAmount, amountToMove) =>
  Number(parseFloat(pocketAmount - amountToMove).toFixed(2));
