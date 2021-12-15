const apiLehiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.3916&lon=-111.8508&appid=6264907c356acd8459c6986df7d80592&units=imperial";

fetch(apiLehiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // const evening = jsObject.daily.filter((x) => {
    //   let date = new Date(x.dt * 1000);
    //   return date.getHours() === 15 && date.getMinutes() === 0;
    // });
    const evening = jsObject.daily.slice(1, 4);
    console.log(evening);
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    evening.forEach((forecast) => {
      let thedate = new Date(forecast.dt * 1000);
      let imgsrc =
        "https://openweathermap.org/img/wn/" +
        forecast.weather[0].icon +
        ".png";
      document.querySelector(`#day${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempLehi${day + 1}`).textContent =
        forecast.temp.eve.toFixed(0);
      document
        .querySelector(`#icon${day + 1}`)
        .setAttribute("src", `${imgsrc}`);
      document
        .querySelector(`#icon${day + 1}`)
        .setAttribute("alt", `${forecast.weather[0].description}`);
      day++;
    });

    let banner = document.querySelector(".banner");
    let date = new Date();
    let currentDay = date.getDay();

    if (jsObject["alerts"] === undefined) {
      banner.innerHTML = "Weather alerts not available in this area.";
    } else {
      //we have alerts
      jsObject.alerts.forEach((alert) => {
        banner.textContent = alert.description;
      });
    }
  });
