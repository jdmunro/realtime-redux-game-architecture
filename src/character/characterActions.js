export function moveCharacter(frameDelta) {
  return {
    type: "MOVE_CHARACTER",
    payload: { frameDelta }
  };
}

export function setTargetPosition(x, y) {
  return {
    type: "SET_TARGET_POSITION",
    payload: { x, y }
  };
}

export function generateRandomTarget() {
  const x = Math.floor(Math.random() * Math.floor(800));
  const y = Math.floor(Math.random() * Math.floor(800));
  return setTargetPosition(x, y);
}
