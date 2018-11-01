import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "developement") {
  middleware.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
