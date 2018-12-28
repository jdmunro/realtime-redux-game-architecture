import Victor from "victor";

const zero = new Victor(0, 0);

const defaultState = Object.freeze({
  startPosition: zero.toObject(),
  targetPosition: zero.toObject(),
  currentPosition: zero.toObject(),
  currentJourneyTime: 0
});

const CHARACTER_JOURNEY_TIME = 3;

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function handleSetTargetPosition(state, action) {
  return {
    ...state,
    startPosition: state.currentPosition,
    targetPosition: action.payload,
    currentJourneyTime: 0
  };
}

function handleMoveCharacter(state, action) {
  const { frameDelta } = action.payload;
  const nextJourneyTime = state.currentJourneyTime + frameDelta;
  const t = clamp(nextJourneyTime / CHARACTER_JOURNEY_TIME, 0, 1);
  const nextPosition = Victor.fromObject(state.startPosition).mix(
    state.targetPosition,
    easeInOutQuad(t)
  );

  return {
    ...state,
    currentJourneyTime: nextJourneyTime,
    currentPosition: nextPosition
  };
}

export default function characterReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_TARGET_POSITION":
      return handleSetTargetPosition(state, action);
    case "MOVE_CHARACTER":
      return handleMoveCharacter(state, action);
    default:
      return state;
  }
}
