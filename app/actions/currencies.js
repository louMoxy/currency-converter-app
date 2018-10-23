export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "change_currency_amount";
export const CHANGE_BASE_CURRENCY = "change_base_currency";
export const CHANGE_QUOTE_CURRENCY = "change_quote_currency";

export const swapCurrency = () => ({
  type: SWAP_CURRENCY
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount)
});

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency
});

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency
});
