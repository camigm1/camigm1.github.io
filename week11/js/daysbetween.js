if (localStorage.getItem("previousVisit")) {
  let milliSecondsPerDay = 86400000;
  let newVisitDate = Date.now();
  localStorage.setItem("newVisit", newVisitDate);
  let previousDate = localStorage.getItem("previousVisit");
  let dateDiff = newVisitDate - previousDate;
  let calculatedDate = Math.round(dateDiff / milliSecondsPerDay);
  let visit = document.querySelector(".last-visit");
  visit.innerHTML = `Days since last visit: ${calculatedDate}`;
} else {
  let visitDate = Date.now();
  localStorage.setItem(`previousVisit`, visitDate);
  let visit = document.querySelector(".last-visit");
  visit.innerHTML = `Days since last visit: ${visitDate}`;
}
