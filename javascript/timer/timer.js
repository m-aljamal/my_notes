class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);

    // the callbacks are optional
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaning);
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 20);
  };

  tick = () => {
    if (this.timeRemaning <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      //   seter                 geter
      this.timeRemaning = this.timeRemaning - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaning);
      }
    }
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  get timeRemaning() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaning(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
