let banner = document.querySelector(".banner")

let d = new Date();
let currentDay = d.getDay();


function displayBanner(){
  if( currentDay === 6)
  banner.style.display = block;
} 
  else {
  banner.style.display = 'none';

}
}

displayBanner();