const supBro = (name: string) => {
  console.log(`Hey ${name}, what are you?`);
};

export { supBro };

// import { supBro } from "./weather";
// import { changeScale } from "./scalecheck";

// const input = <HTMLInputElement>document.querySelector(`input[type="text"]`);
// const city = <HTMLHeadingElement>document.querySelector(".name");
// const temperature = <HTMLParagraphElement>(
//   document.querySelector(".temperature")
// );
// const icon = <HTMLParagraphElement>document.querySelector(".icon");
// const description = <HTMLParagraphElement>(
//   document.querySelector(".description")
// );
// const scaleToggleContainer = <HTMLDivElement>(
//   document.querySelector(".scale-container")
// );
// const weatherDisplay = <HTMLDivElement>document.querySelector(".display");
// const scaleSwitch = <HTMLInputElement>(
//   document.querySelector("#temperature-scale")
// );
// const weatherCardsContainer = <HTMLDivElement>(
//   document.querySelector(".weather-cards-container")
// );
// const cardTemplate = <HTMLTemplateElement>(
//   document.querySelector("#card-template")
// );
// let cities = JSON.parse(localStorage.getItem("cities") || "{}");
// console.log(cities);

// class City {
//   city: string;
//   temperature: string;
//   icon: string;
//   description: string;
//   constructor(
//     city: string,
//     temperature: string,
//     icon: string,
//     description: string
//   ) {
//     this.city = city;
//     this.temperature = temperature;
//     this.icon = icon;
//     this.description = description;
//   }
// }

// function save() {
//   localStorage.setItem("cities", JSON.stringify(cities));
// }

// // function renderCities() {
// //   cities.forEach((city) => {
// //     const weatherCard = document.importNode(cardTemplate.content, true);
// //   });
// // }

// async function getWeather() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1c954fe59dca8548d2eb13416b4f9da3`,
//       { mode: "cors" }
//     );
//     const data = await response.json();

//     const city = createCityCard(data);

//     // const cityValue = data["name"];
//     // const countryValue = data["sys"]["country"];
//     // const temperatureValue = data["main"]["temp"];
//     // const descriptionValue = data["weather"][0]["description"];

//     // city.innerHTML = `${cityValue}, ${countryValue}`;
//     // // convert kelvin to fahrenheit
//     // temperature.innerHTML =
//     //   Math.round(((temperatureValue - 273.15) * 9) / 5 + 32).toString() +
//     //   "&deg";
//     // icon.innerHTML = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg" />`;
//     // description.innerHTML = descriptionValue;

//     weatherDisplay.style.display = "block";
//     scaleToggleContainer.style.display = "block";
//     weatherCardsContainer.appendChild(weatherDisplay);
//     cities.push(city);
//     save();
//     console.log(cities);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createCityCard(data: any) {
//   const cityValue = data["name"];
//   const countryValue = data["sys"]["country"];
//   const temperatureValue = data["main"]["temp"];
//   const descriptionValue = data["weather"][0]["description"];

//   city.innerHTML = `${cityValue}, ${countryValue}`;
//   // convert kelvin to fahrenheit
//   temperature.innerHTML =
//     Math.round(((temperatureValue - 273.15) * 9) / 5 + 32).toString() + "&deg";
//   icon.innerHTML = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg" />`;
//   description.innerHTML = descriptionValue;
//   const cityCard = new City(
//     city.innerHTML,
//     temperature.innerHTML,
//     icon.innerHTML,
//     description.innerHTML
//   );
//   cities.push(cityCard);
//   save();
// }

// supBro("Josh");

// input.addEventListener("keyup", () => {
//   getWeather();
// });

// scaleSwitch.addEventListener("click", changeScale);

// export { scaleSwitch };
