const apikey = "95f24980fa591d097207bfec5247d884";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn = document.querySelector(".search button");
const searchcity = document.querySelector(".search input");
let weather_img = document.querySelector(".img_container img");

async function checkweather(city) {
  let response = await fetch(url + city + `&appid=${apikey}`);
  let data = await response.json();
  console.log(data);

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = `${data.main.temp}°C`;
  document.querySelector("#humid-value").innerHTML = `${data.main.humidity}%`;
  document.querySelector("#wind-value").innerHTML = `${data.wind.speed}km/h`;

  if (data.weather[0].main == "Clear") {
    weather_img.src = "clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weather_img.src = "clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_img.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_img.src = "mist.png";
  } else if (data.weather[0].main == "Rain") {
    weather_img.src = "rain.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchcity.value);
});
