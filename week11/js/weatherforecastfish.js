const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTempFish = document.querySelector("#averageTempFish");
    const humidityFish = document.querySelector("#humidityFish");
    const descriptionFish = document.querySelector("#descriptionFish");
    const windFish = document.querySelector("#windSpeedFish");
    //const weathericonFish = document.querySelector("#imagesrc");

    //let imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    //let imgalt = jsObject.list[0].weather[0].description;

    currentTempFish.textContent = jsObject.list[0].main.temp.toFixed(0);
    humidityFish.textContent = jsObject.list[0].main.humidity.toFixed(0);
    descriptionFish.textContent = jsObject.list[0].weather[0].description;
    windFish.textContent = jsObject.list[0].wind.speed;
    //weathericonFish.setAttribute("src", imgsrc);
    //weathericonFish.setAttribute("alt", imgalt);
  });
