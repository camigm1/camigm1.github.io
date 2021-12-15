document.querySelector(".btn-grid").addEventListener("click", () => {
  let cardGrid = document.querySelector(".section");
  console.log("card grid!!!");
  if (document.querySelector(".card-list")) {
    cardGrid.classList.remove("card-list");
  }
  cardGrid.classList.add("card");
});

document.querySelector(".btn-list").addEventListener("click", () => {
  let cardList = document.querySelector(".section");
  console.log("This is card list");
  if (document.querySelector(".card")) {
    cardList.classList.remove("card");
  }
  cardList.classList.add("card-list");
});
