
export default function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
}) {
  let minutes = Number(displayMinutes.textContent);
  let StopCount;

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    displayMinutes.textContent = String(newMinutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(StopCount);
  }

  function countDown() {
    StopCount = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent);
      let minutes = Number(displayMinutes.textContent);
  
      updateDisplay(minutes, 0);
  
      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        updateDisplay();
        return;
      }
  
      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
  
      if (minutes <= 0) {
        resetControls();
        updateDisplay();
        return;
      }
  
      updateDisplay(minutes, String(seconds - 1));
  
      countDown();
    }, 1000);
  }
  
  
  function hold() {
    clearTimeout(StopCount);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  return {
    minutes,
    updateDisplay,
    reset,
    countDown,
    hold,
    updateMinutes,
  };
}
