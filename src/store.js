import { applyMiddleware, createStore, combineReducers } from "redux";
import characterReducer from "./character/characterReducer";
import timerReducer from "./timer/timerReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    character: characterReducer,
    timer: timerReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
