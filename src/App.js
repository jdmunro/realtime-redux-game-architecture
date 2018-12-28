import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    window.requestAnimationFrame(this.renderFrame);
  }

  renderFrame = () => {
    this.forceUpdate();
    window.requestAnimationFrame(this.renderFrame);
  };

  render() {
    const { store } = this.props;
    const state = store.getState();
    const characterPosition = state.character.currentPosition;

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
