const apiPrestonURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6264907c356acd8459c6986df7d80592&units=imperial";
fetch(apiPrestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const noon = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    //let imgsrc = `https://openweathermap.org/img/wn/${jsObject.list[0].weather.icon}.png`;
    let day = 0;
    noon.forEach((forecast) => {
      let thedate = new Date(forecast.dt_txt);
      document.querySelector(`#dayPreston${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#tempPreston${day + 1}`).textContent =
        forecast.main.temp.toFixed(0);
      //document.querySelector(`#iconPreston${day + 1}`).setAttribute("src", `${imgsrc}`);
      //document.querySelector(`#iconPreston${day + 1}`).setAttribute("alt", `${forecast.list[0].weather[0].description}`);
      day++;
    });
  });
