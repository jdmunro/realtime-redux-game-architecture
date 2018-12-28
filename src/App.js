import React, { Component } from "react";
import "./App.css";
import store from "./store";

setInterval(() => {
  store.dispatch({ type: "GAME_TICK" });
}, 500);

class App extends Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), (1 / 30) * 1000);
  }

  render() {
    const { store } = this.props;
    const state = store.getState();
    const characterPosition = state.character.position;

    return (
      <div className="App">
        <svg width="800" height="800" fill="red">
          <rect
            x={0}
            y={0}
            width="800"
            height="800"
            stroke="rgb(0, 0, 0)"
            fill="rgb(255, 255, 255)"
            strokeWidth={3}
          />
          <circle
            cx={characterPosition.x}
            cy={characterPosition.y}
            r="15"
            stroke="black"
            strokeWidth={3}
            fill="red"
          />
        </svg>
      </div>
    );
  }
}

export default App;
