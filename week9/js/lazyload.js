let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  console.log("image");
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
imagesToLoad.forEach((img) => {
  loadImages(img);
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
