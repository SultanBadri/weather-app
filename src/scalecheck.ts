import { scaleSwitch } from "./index";

const temperature = [
  ...Array.from(document.querySelectorAll<HTMLElement>(".temperature")),
];

console.log(temperature);

function changeScale(): void {
  if (scaleSwitch.checked) {
    toggleFahrenheit();
  } else {
    toggleCelsius();
  }
}

function toggleFahrenheit(): void {
  temperature.innerHTML =
    Math.round((5 / 9) * (parseInt(temperature.innerHTML) - 32)).toString() +
    "&deg";
}

function toggleCelsius(): void {
  temperature.innerHTML =
    Math.round((9 / 5) * parseInt(temperature.innerHTML) + 32).toString() +
    "&deg";
}

export { changeScale };
