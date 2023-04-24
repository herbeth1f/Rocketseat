import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonminute,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  containerForest,
  containerRain,
  containerCoffee,
  containerFireplace,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
} from "./elements.js";

export default function Events({ timer, sound, controls }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countDown();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
  });

  buttonPlus.addEventListener("click", function () {
    timer.minutes = timer.minutes + 1;
    timer.updateDisplay(timer.minutes, 0);
  });

  buttonminute.addEventListener("click", function () {
    timer.minutes = timer.minutes - 1;
    timer.updateDisplay(timer.minutes, 0);
  });

  buttonForest.addEventListener("click", function () {
    if (containerForest.classList.contains("enable")) {
      containerForest.classList.remove("enable");
      sound.floresta.pause();
      return;
    }

    containerForest.classList.add("enable");
    sound.floresta.play();
  });

  buttonRain.addEventListener("click", function () {
    if (containerRain.classList.contains("enable")) {
      containerRain.classList.remove("enable");
      sound.chuva.pause();
      return;
    }

    containerRain.classList.add("enable");
    sound.chuva.play();
  });

  buttonCoffee.addEventListener("click", function () {
    if (containerCoffee.classList.contains("enable")) {
      containerCoffee.classList.remove("enable");
      sound.cafeteria.pause();
      return;
    }

    containerCoffee.classList.add("enable");
    sound.cafeteria.play();
  });

  buttonFireplace.addEventListener("click", function () {
    if (containerFireplace.classList.contains("enable")) {
      containerFireplace.classList.remove("enable");
      sound.lareira.pause();
      return;
    }

    containerFireplace.classList.add("enable");
    sound.lareira.play();
  });

  volumeForest.addEventListener("mousemove", setvolume);
  volumeRain.addEventListener("mousemove", setvolume);
  volumeCoffee.addEventListener("mousemove", setvolume);
  volumeFireplace.addEventListener("mousemove", setvolume);

  function setvolume() {
    sound.floresta.volume = volumeForest.value;
    sound.chuva.volume = volumeRain.value;
    sound.cafeteria.volume = volumeCoffee.value;
    sound.lareira.volume = volumeFireplace.value;
  }
}
