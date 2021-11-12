const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.log(prophets);
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let image = document.createElement("img");
      let paragraph = document.createElement("p");
      let paragraphTwo = document.createElement("p");
      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      paragraph.innerHTML = `Date of Birth: ${prophets[i].birthdate}`;
      paragraphTwo.innerHTML = `Birthplace: ${prophets[i].birthplace}`;
      image.setAttribute("src", prophets[i].imageurl);
      card.appendChild(h2);
      card.appendChild(paragraph);
      card.appendChild(paragraphTwo);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  });
