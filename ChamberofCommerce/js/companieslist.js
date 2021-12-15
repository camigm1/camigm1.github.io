const requestURL = "./companies.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    console.log(companies);
    for (let i = 0; i < companies.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let image = document.createElement("img");
      let paragraph = document.createElement("p");
      let paragraphTwo = document.createElement("p");
      let paragraphThree = document.createElement("p");
      let paragraphFour = document.createElement("p");
      h2.textContent = companies[i].name;
      paragraph.innerHTML = `Employees: ${companies[i].employees}`;
      paragraphTwo.innerHTML = `Industry: ${companies[i].industry}`;
      paragraphThree.innerHTML = `Contact: ${companies[i].contact}`;
      paragraphFour.innerHTML = `<a href="${companies[i].weblink}" target="_blank">Company Website</a>`;
      image.setAttribute("src", companies[i].logo);
      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(paragraph);
      card.appendChild(paragraphTwo);
      card.appendChild(paragraphThree);
      card.appendChild(paragraphFour);

      document.querySelector(".card").appendChild(card);
    }
  });
