const apiURL =
  "api.openweathermap.org/data/2.5/weather?id={5604473}&appid={6264907c356acd8459c6986df7d80592}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
