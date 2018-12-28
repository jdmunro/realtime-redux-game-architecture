const defaultState = 0;

export default function timerReducer(state = defaultState, action) {
  switch (action.type) {
    case "GAME_TICK":
      return action.payload.timestamp;
    default:
      return state;
  }
}
