const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5777224&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector("#averageTemp");
    const humidity = document.querySelector("#humidity");
    const description = document.querySelector("#description");
    //const weathericon = document.querySelector("#imagesrc");

    //let imgsrc = `https://openweathermap.org/img/wn/${jsObject.list[0].weather[0].icon}.png`;
    //let imgalt = jsObject.list[0].weather[0].description;

    currentTemp.textContent = jsObject.list[0].main.temp.toFixed(0);
    humidity.textContent = jsObject.list[0].main.humidity.toFixed(0);
    description.textContent = jsObject.list[0].weather[0].description;
    //weathericon.setAttribute("src", imgsrc);
    //weathericon.setAttribute("alt", imgalt);
  });
