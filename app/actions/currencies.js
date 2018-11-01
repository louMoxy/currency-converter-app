export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "change_currency_amount";
export const CHANGE_BASE_CURRENCY = "change_base_currency";
export const CHANGE_QUOTE_CURRENCY = "change_quote_currency";
export const GET_INITIAL_CORVERSION = "get_initial_conversion";
export const CONVERSION_RESULT = "conversion_result";
export const CONVERSON_ERROR = "conversion_error";

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

export const getInitialConversion = currency => ({
  type: GET_INITIAL_CORVERSION,
  currency
});
