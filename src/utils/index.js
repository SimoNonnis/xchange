export const filterCurrencyCodes = (pocketsList, selected) =>
  pocketsList.filter(code => !(code === selected));

export const calculateExchange = (amount, rate) =>
  Number(parseFloat(amount * rate).toFixed(2));

export const sum = (pocketAmount, amount) => pocketAmount + amount;
export const substract = (pocketAmount, amount) => pocketAmount - amount;
export const updatePocketAmount = operation => (pocketAmount, amount) =>
  Number(parseFloat(operation(pocketAmount, amount)).toFixed(2));

export const incrementPocketAmount = updatePocketAmount(sum);
export const decrementPocketAmount = updatePocketAmount(substract);
