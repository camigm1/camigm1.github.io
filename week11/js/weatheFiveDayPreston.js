const apiPrestonURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiPrestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const evening = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    let day = 0;
    evening.forEach((forecast) => {
      let imgsrc =
        "https://openweathermap.org/img/wn/" +
        forecast.weather[0].icon +
        ".png";
      //let imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
      let thedate = new Date(forecast.dt_txt);
      document.querySelector(`#dayPreston${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempPreston${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);
      document
        .querySelector(`#iconPreston${day + 1}`)
        .setAttribute("src", `${imgsrc}`);
      document
        .querySelector(`#iconPreston${day + 1}`)
        .setAttribute("alt", `${forecast.weather[0].description}`);
      day++;
    });
  });
