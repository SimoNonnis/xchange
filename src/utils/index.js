export const filterCurrencyCodes = (pockets, selected) =>
  pockets.filter(p => !(p.code === selected)).map(p => p.code);
