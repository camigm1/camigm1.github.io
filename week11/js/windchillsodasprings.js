const windchillValueSoda = document.querySelector("#windChillValueSoda");
const averageTempSoda = document.querySelector("#averageTempSoda").innerHTML;
const windSpeedSoda = document.querySelector("#windSpeedSoda").innerHTML;

function windChill(averageTempSoda, windSpeedSoda) {
  let windchill =
    35.74 +
    0.6215 * averageTempSoda -
    35.75 * windSpeedSoda ** 0.16 +
    0.4275 * windSpeedSoda ** 0.16;
  console.log(windchill);
  if (windchill <= 50 && windSpeedSoda > 4.8) {
    return windchill.toFixed(0);
  } else {
    return "N/A";
  }
}

windchillValueSoda.innerHTML = windChill(averageTempSoda, windSpeedSoda);
