import { supBro } from "./weather";
import { changeScale } from "./scalecheck";

const form = <HTMLFormElement>document.querySelector("form");
const input = <HTMLInputElement>document.querySelector(`input[type="text"]`);
const scaleToggleContainer = <HTMLDivElement>(
  document.querySelector(".scale-container")
);
const scaleSwitch = <HTMLInputElement>(
  document.querySelector("#temperature-scale")
);
const weatherCardsContainer = <HTMLDivElement>(
  document.querySelector(".weather-cards-container")
);
let cities = JSON.parse(localStorage.getItem("cities") || "[]");

displayCards();

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

function save() {
  localStorage.setItem("cities", JSON.stringify(cities));
}

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1c954fe59dca8548d2eb13416b4f9da3`,
      { mode: "cors" }
    );
    const data = await response.json();

    createCityCard(data);

    // weatherDisplay.style.display = "block";
    scaleToggleContainer.style.display = "block";

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function createCityCard(data: any) {
  const cityAndCountry = `${data["name"]}, ${data["sys"]["country"]}`;
  const realTemperature =
    Math.round(((data["main"]["temp"] - 273.15) * 9) / 5 + 32).toString() +
    "&deg";
  const icon = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg"`;
  const description = data["weather"][0]["description"];

  const cityCard = new City(cityAndCountry, realTemperature, icon, description);

  cities.push(cityCard);
  displayCards();
  scaleSwitch.checked = false;
  temperatures = [...Array.from(document.querySelectorAll(".temperature"))];
  // save();
}

function displayCards() {
  weatherCardsContainer.innerHTML = cities
    .map((city: any) => {
      return `<div class="display">
      <span class="close"><i class="fas fa-times"></i></span>
      <h2 class="name">${city.city}</h2>
      <p class="icon">${city.icon}</p>
      <p class="temperature">${city.temperature}</p>
      <p class="description">${city.description.toUpperCase()}</p>
    </div>`;
    })
    .join("");
  const closeIcons = [...Array.from(document.querySelectorAll(".close"))];
  const weatherDisplay = [...Array.from(document.querySelectorAll(".display"))];
  closeIcons.forEach((icon) =>
    icon.addEventListener("click", (e) => {
      const target = e.target as Element;
      target.remove();
    })
  );
}

supBro("Mike");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
  form.reset();
});

scaleSwitch.addEventListener("click", changeScale);

let temperatures = [...Array.from(document.querySelectorAll(".temperature"))];

export { scaleSwitch, temperatures };
