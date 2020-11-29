import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";
import { watchFetchPic } from "./images/sagas";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(watchFetchPic);
