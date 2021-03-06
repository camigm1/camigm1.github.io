const windchillValue = document.querySelector("#windChillValue");
const averageTemp = document.querySelector("#averageTemp").innerHTML;
const windSpeed = document.querySelector("#windSpeed").innerHTML;

function windChill(averageTemp, windSpeed) {
  let windchill =
    35.74 +
    0.6215 * averageTemp -
    35.75 * windSpeed ** 0.16 +
    0.4275 * windSpeed ** 0.16;
  if (windchill <= 50 && windSpeed > 4.8) {
    return windchill.toFixed(0);
  } else {
    return "N/A";
  }
}

windchillValue.innerHTML = windChill(averageTemp, windSpeed);
