const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

document.addEventListener("DOMContentLoaded", () => {
  getStoredList();
});

function getStoredList() {
  let myChapter = localStorage.getItem("bommchaps");
  if (myChapter.length > 0) {
    count.textContent = myChapter.length;
  }
}

button.addEventListener("click", function () {
  let myChapter = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myChapter;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });

  input.focus();
});
