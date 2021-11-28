const apiSodaURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiSodaURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //forecast
    const noon = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    noon.forEach((forecast) => {
      let thedate = new Date(forecast.dt_txt);

      document.querySelector(`#daySoda${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempSoda${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);
      day++;
    });
  });
