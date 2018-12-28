import { spawn } from "redux-saga/effects";
import characterSaga from "./character/characterSaga";

export default function* rootSaga() {
  yield spawn(characterSaga);
}
