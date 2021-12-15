const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.3916&lon=-111.8508&appid=6264907c356acd8459c6986df7d80592&units=imperial";

https: fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector("#averageTemp");
    const humidity = document.querySelector("#humidity");
    const description = document.querySelector("#description");

    currentTemp.textContent = jsObject.current.temp.toFixed(0);
    humidity.textContent = jsObject.current.humidity.toFixed(0);
    description.textContent = jsObject.current.weather[0].description;
  });
