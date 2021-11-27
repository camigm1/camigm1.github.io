const apiURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.list[0].weather[0].icon);
    const currentTempSoda = document.querySelector("#averageTempSoda");
    const humiditySoda = document.querySelector("#humiditySoda");
    const descriptionSoda = document.querySelector("#descriptionSoda");
    const windSoda = document.querySelector("#windSpeedSoda");
    const weathericonSoda = document.querySelector("#imagesrc");

    let imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    let imgalt = jsObject.list[0].weather[0].description;

    currentTempSoda.textContent = jsObject.list[0].main.temp.toFixed(0);
    humiditySoda.textContent = jsObject.list[0].main.humidity.toFixed(0);
    descriptionSoda.textContent = jsObject.list[0].weather[0].description;
    windSoda.textContent = jsObject.list[0].wind.speed;
    weathericonSoda.setAttribute("src", imgsrc);
    weathericonSoda.setAttribute("alt", imgalt);

    //forecast
    const noon = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(noon);
  });
