let banner = document.querySelector(".banner");
let date = new Date();
let currentDay = date.getDay();

function displayBanner() {
  if (currentDay === 5) {
    banner.style.display = "block";
    //alert("Hello\nHow are you?");
  } else {
    banner.style.display = "none";
  }
}

displayBanner();
