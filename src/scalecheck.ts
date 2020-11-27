import { scaleSwitch, temperature } from "./index";

function changeScale(): void {
  if (scaleSwitch.checked) {
    toggleFahrenheit();
  } else {
    toggleCelsius();
  }
}

function toggleFahrenheit(): void {
  temperature.map((temp: any) => {
    temp.innerHTML =
      Math.round((5 / 9) * (parseInt(temp.innerHTML) - 32)).toString() + "&deg";
  });
}

function toggleCelsius(): void {
  temperature.map((temp: any) => {
    temp.innerHTML =
      Math.round((9 / 5) * parseInt(temp.innerHTML) + 32).toString() + "&deg";
  });
}

export { changeScale };
