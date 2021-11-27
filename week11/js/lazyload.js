/**let imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 600px 0px",
};
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
  }, imgOptions);
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}**/

window.addEventListener("load", (event) => {
  const images = document.querySelectorAll("[data-src]");
  function preloadImage(img) {
    console.log("trying to load " + img);
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }
  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 400px 0px",
  };
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);
  images.forEach((image) => {
    imgObserver.observe(image);
  });
});
