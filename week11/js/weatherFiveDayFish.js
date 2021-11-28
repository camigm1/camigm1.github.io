const apiFishURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiFishURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const evening = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    evening.forEach((forecast) => {
      let thedate = new Date(forecast.dt_txt);

      document.querySelector(`#dayFish${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempFish${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);

      day++;
    });
  });
