import { put, select, takeLatest } from "redux-saga/effects";
import gameLoop from "../gameLoop/gameLoop";
import { moveCharacter, generateRandomTarget } from "./characterActions";

function* characterController(action) {
  const { character } = yield select();
  const currentPosition = character.currentPosition;
  const targetPosition = character.targetPosition;

  if (
    currentPosition.x !== targetPosition.x ||
    currentPosition.y !== targetPosition.y
  ) {
    yield put(moveCharacter(action.payload.frameDelta));
  } else {
    yield put(generateRandomTarget());
  }
}

export default function* characterSaga() {
  yield takeLatest(gameLoop, characterController);
}
