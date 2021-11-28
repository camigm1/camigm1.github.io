const apiSodaURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiSodaURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //forecast
    const evening = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    evening.forEach((forecast) => {
      let thedate = new Date(forecast.dt_txt);
      let imgsrc =
        "https://openweathermap.org/img/wn/" +
        forecast.weather[0].icon +
        ".png";
      document.querySelector(`#daySoda${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempSoda${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);
      document
        .querySelector(`#iconSoda${day + 1}`)
        .setAttribute("src", `${imgsrc}`);
      day++;
    });
  });
