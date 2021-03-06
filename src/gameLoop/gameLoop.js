import { eventChannel } from "redux-saga";

function gameLoop() {
  let lastTimestamp: number = 0;

  return eventChannel(emitter => {
    const onAnimationFrame = timestamp => {
      const frameDelta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      emitter({ type: "GAME_TICK", payload: { frameDelta } });
      window.requestAnimationFrame(onAnimationFrame);
    };

    window.requestAnimationFrame(onAnimationFrame);

    return () => {};
  });
}

export default gameLoop();
