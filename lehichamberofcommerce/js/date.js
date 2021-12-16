// let daynames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let d = new Date(document.lastModified);
// let dayName = daynames[d.getDay()];
// let monthName = months[d.getMonth()];
// let year = d.getFullYear();
// let fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

// document.querySelector("#copyrightYear").textContent = fulldate;

function lastDate() {
  const latestDate = new Date(document.lastModified);
  document.querySelector("#copyrightYear").innerHTML = latestDate;
}

lastDate();
