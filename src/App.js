import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
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
            cx="400"
            cy="400"
            r="15"
            stroke="black"
            stroke-width="3"
            fill="red"
          />
        </svg>
      </div>
    );
  }
}

export default App;
