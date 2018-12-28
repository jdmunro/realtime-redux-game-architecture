const defaultState = Object.freeze({
  target: {
    x: 600,
    y: 600
  },
  position: {
    x: 400,
    y: 400
  }
});

export default function characterReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_TARGET_POSITION":
      return { ...state, target: action.payload };
    case "MOVE_CHARACTER":
      return {
        ...state,
        position: { x: state.position.x + 1, y: state.position.y + 1 }
      };
    default:
      return state;
  }
}
