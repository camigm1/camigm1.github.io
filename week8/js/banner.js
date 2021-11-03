let banner = document.querySelector(".banner");
console.log(banner.innerHTML);
let date = new Date();
let currentDay = date.getDay();
console.log(currentDay);

function displayBanner() {
  if (currentDay === 6) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

displayBanner();
