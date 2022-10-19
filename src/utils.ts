export const formatCurrencyValue = (
  value: number,
  currency = "USD",
  locale = "en-US"
) =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);

export const currenciesOptions = [
  {
    label: "ETH",
    value: "ETH",
  },
  {
    label: "BTC",
    value: "BTC",
  },
];
