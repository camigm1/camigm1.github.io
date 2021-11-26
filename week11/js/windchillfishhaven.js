const windchillValueFish = document.querySelector("#windChillValueFish");
const averageTempFish = document.querySelector("#averageTempFish").innerHTML;
const windSpeedFish = document.querySelector("#windSpeedFish").innerHTML;

function windChill(averageTempFish, windSpeedFish) {
  let windchill =
    35.74 +
    0.6215 * averageTempFish -
    35.75 * windSpeedFish ** 0.16 +
    0.4275 * windSpeedFish ** 0.16;
  console.log(windchill);
  if (windchill <= 50 && windSpeedFish > 4.8) {
    return windchill.toFixed(0);
  } else {
    return 0;
  }
}

windchillValueFish.innerHTML = windChill(averageTempFish, windSpeedFish);
