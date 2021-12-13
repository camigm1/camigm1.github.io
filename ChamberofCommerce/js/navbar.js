const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 768) {
    mainnav.classList.remove("responsive");
  }
};

function selectResponse() {
  const s = document.querySelector("#selected");
  const sel = document.querySelector("#selectbrowser");
  s.style.display = "block";
  s.textContent = sel.value;
}
