import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import * as patientSagas from "./sagas/patientSagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  for (let saga in patientSagas) {
    sagaMiddleware.run(patientSagas[saga]);
  }

  return Store;
}
