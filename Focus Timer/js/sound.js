import {
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
} from "./elements.js";

export default function Sound() {
  const floresta = new Audio("sound/floresta.wav");


  floresta.volume = volumeForest.value;
  floresta.loop = true;

  const chuva = new Audio("sound/chuva.wav");

  chuva.volume = volumeRain.value;
  chuva.loop = true;

  const cafeteria = new Audio(
  );

  cafeteria.volume = volumeCoffee.value;
  cafeteria.loop = true;

  const lareira = new Audio(
  );

  lareira.volume = volumeFireplace.value;
  lareira.loop = true;

  return {
    floresta,
    chuva,
    cafeteria,
    lareira,
  };
}
