const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.list[0].weather[0].icon);
    const currentTemp = document.querySelector("#averageTemp");
    const humidity = document.querySelector("#humidity");
    const description = document.querySelector("#description");
    const wind = document.querySelector("#windSpeed");
    const weathericon = document.querySelector("#imagesrc");

    let imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    let imgalt = jsObject.list[0].weather[0].description;

    currentTemp.textContent = jsObject.list[0].main.temp.toFixed(0);
    humidity.textContent = jsObject.list[0].main.humidity.toFixed(0);
    description.textContent = jsObject.list[0].weather[0].description;
    wind.textContent = jsObject.list[0].wind.speed;
    weathericon.setAttribute("src", imgsrc);
    weathericon.setAttribute("alt", imgalt);

    //forecast
    const evening = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(evening);
  });
