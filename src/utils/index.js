export const filterCurrencyCodes = (pocketsList, selected) =>
  pocketsList.filter(code => !(code === selected));
