// import thunk from "redux-thunk";

import { createStore, compose, applyMiddleware } from "redux";
import reducers from "reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
