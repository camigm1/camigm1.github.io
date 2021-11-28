const apiURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector("#current-temp");
    const weathericon = document.querySelector("#imagesrc");

    let imgsrc = `https://openweathermap.org/img/wn/${jsObject.list[0].weather[0].icon}.png`;
    let imgalt = jsObject.list[0].weather[0].description;
    console.log(jsObject.list[0].weather[0].icon);
    currentTemp.textContent = jsObject.list[0].main.temp.toFixed(0);
    weathericon.setAttribute("src", imgsrc);
    weathericon.setAttribute("alt", imgalt);
  });
