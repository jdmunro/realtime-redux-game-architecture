import { put, select, takeLatest } from "redux-saga/effects";

function* moveCharacter() {
  const { character } = yield select();

  if (
    character.position.x !== character.target.x ||
    character.position.y !== character.target.y
  ) {
    yield put({ type: "MOVE_CHARACTER" });
    console.log("moving character");
  }
}

export default function* characterSaga() {
  yield takeLatest("GAME_TICK", moveCharacter);
}
