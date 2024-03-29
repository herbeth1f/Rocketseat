import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sound.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonminute,
  displayMinutes,
  displaySeconds,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonminute,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ timer, sound, controls });

