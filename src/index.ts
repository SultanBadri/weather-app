import { toggleErrorModal } from "./modal";
import { changeScale } from "./scalecheck";

const form = <HTMLFormElement>document.querySelector("form");
const input = <HTMLInputElement>document.querySelector(`input[type="text"]`);
const weatherCardsContainer = <HTMLDivElement>(
  document.querySelector(".weather-cards-container")
);
const scaleToggleContainer = <HTMLDivElement>(
  document.querySelector(".scale-container")
);
const scaleSwitch = <HTMLInputElement>(
  document.querySelector("#temperature-scale")
);
let cities = JSON.parse(localStorage.getItem("cities") || "[]");

displayCards();
window.addEventListener("load", () => weatherCardsContainer.style.opacity = "1");

class City {
  city: string;
  temperature: string;
  icon: string;
  description: string;
  constructor(
    city: string,
    temperature: string,
    icon: string,
    description: string
  ) {
    this.city = city;
    this.temperature = temperature;
    this.icon = icon;
    this.description = description;
  }
}

function save(): void {
  localStorage.setItem("cities", JSON.stringify(cities));
}

async function getWeather(): Promise<void> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1c954fe59dca8548d2eb13416b4f9da3`,
      { mode: "cors" }
    );
    const data = await response.json();

    createCityCard(data);
    scaleToggleContainer.style.display = "block";
    console.log(data);
  } catch {
    toggleErrorModal();
  }
}

function createCityCard(data: any): void {
  const cityAndCountry = `${data["name"]}, ${data["sys"]["country"]}`;
  const realTemperature =
    Math.round(((data["main"]["temp"] - 273.15) * 9) / 5 + 32).toString() +
    "&deg";
  const icon = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg">`;
  const description = data["weather"][0]["description"];

  const cityCard = new City(cityAndCountry, realTemperature, icon, description);

  cities.push(cityCard);
  displayCards();
  scaleSwitch.checked = false;
  temperatures = [...Array.from(document.querySelectorAll(".temperature"))];
  save();
}

function displayCards(): void {
  if (cities.length === 0) {
    weatherCardsContainer.textContent = "hi";
  } 

  weatherCardsContainer.innerHTML = cities
    .map((city: any, i: number) => {
      return `<div class="display" id="display" data-index=${i}>
      <span class="close">x</span>
      <h2 class="name">${city.city}</h2>
      <p class="icon">${city.icon}</p>
      <p class="temperature">${city.temperature}</p>
      <p class="description">${city.description.toUpperCase()}</p>
    </div>`;
    })
    .join("");
  const closeIcons = [...Array.from(document.querySelectorAll(".close"))];
  closeIcons.forEach((icon) =>
    icon.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const parent = target.parentElement;
      parent?.remove();
      cities.splice(parent?.dataset.index, 1);
      save();
    })
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
  form.reset();
});
scaleSwitch.addEventListener("click", changeScale);

let temperatures = [...Array.from(document.querySelectorAll(".temperature"))];

export { scaleSwitch, temperatures };
