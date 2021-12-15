var closebtn = document.querySelector(".banner-btn");
console.log(closebtn);
closebtn.addEventListener("click", function () {
  let bannerDiv = document.querySelector(".banner");
  let btnDiv = document.querySelector(".btn-div");
  bannerDiv.style.display = "none";
  closebtn.style.display = "none";
  btnDiv.style.display = "none";
});
