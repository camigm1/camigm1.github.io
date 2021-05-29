

const windchillValue = document.querySelector('#windchill');
const averageTemp = document.querySelector('#averageTemp').innerHTML;
const windSpeed = document.querySelector('#windSpeed').innerHTML;

function windChill(averageTemp, windSpeed){
    let windchill = 35.74 + 0.6215 *averageTemp - 35.75*windSpeed**0.16 + 0.4275*windSpeed**0.16;
    if ( ( windchill <= '50') &&  windspeed > '4.8')
    return windchill;
 }

 windchillValue.innerHTML= windChill(averageTemp, windSpeed);