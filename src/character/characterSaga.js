import { put, select, takeLatest } from "redux-saga/effects";
import gameLoop from "../gameLoop/gameLoop";

function* moveCharacter(action) {
  const { character } = yield select();
  const currentPosition = character.currentPosition;
  const targetPosition = character.targetPosition;

  if (
    currentPosition.x !== targetPosition.x ||
    currentPosition.y !== targetPosition.y
  ) {
    yield put({
      type: "MOVE_CHARACTER",
      payload: { frameDelta: action.payload.frameDelta }
    });
  } else {
    const x = Math.floor(Math.random() * Math.floor(800));
    const y = Math.floor(Math.random() * Math.floor(800));

    yield put({
      type: "SET_TARGET_POSITION",
      payload: { x, y, startTime: new Date().getTime() }
    });
  }
}

export default function* characterSaga() {
  yield takeLatest(gameLoop, moveCharacter);
}
