import { takeEvery, select, call, put } from "redux-saga/effects";
// import { select } from "redux-saga";
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CORVERSION,
  CONVERSON_ERROR,
  CONVERSION_RESULT
} from "../actions/currencies";

const getLatestRate = currency =>
  fetch(`https://ratesapi.io/api/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
  try {
    let currency = action.currency;
    if (!currency) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSON_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSON_ERROR, error: e.message });
  }
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CORVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}
