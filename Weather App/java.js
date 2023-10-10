let API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
// let API = `https://api.openweathermap.org/data/2.5/weather?
//     q=${city}&appid=${API_KEY}&units=metric`
// let IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let collect = document.getElementById("weather");
let form = document.querySelector("form");
let srch = document.querySelector("#search");

let getWeather = async (city) => {
  collect.innerHTML = `<h2> Loading.... </h2>`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  return showWeather(data);
};

let showWeather = (data) => {
  if (data.cod == "404") {
    collect.innerHTML = `<h2>${data.message}</h2>`;
    return;
  } else {
    collect.innerHTML = `<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
    <h2>${data.main.temp}</h2>
    <h4>${data.weather[0].main}</h4>
    </div>`;
  }
};

form.addEventListener("submit", function (event) {
  getWeather(srch.value);
  event.preventDefault();
});
