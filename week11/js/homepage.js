const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns2 = jsonObject["towns"];

    console.log(towns2);

    for (let i = 0; i < towns2.length; i++) {
      if (
        towns2[i] === towns2[1] ||
        towns2[i] === towns2[3] ||
        towns2[i] === towns2[4] ||
        towns2[i] === towns2[5]
      )
        continue;

      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let image = document.createElement("img");
      let paragraph = document.createElement("p");
      let paragraphTwo = document.createElement("p");
      let motto = document.createElement("p");
      let rainfall = document.createElement("p");
      //let div = document.createElement("div");
      h2.textContent = `${towns2[i].name}`;
      paragraph.innerHTML = `Year Founded: ${towns2[i].yearFounded}`;
      paragraphTwo.innerHTML = `Population: ${towns2[i].currentPopulation}`;
      motto.innerHTML = `${towns2[i].motto.italics()}`;
      rainfall.innerHTML = `Average Rainfall: ${towns2[i].averageRainfall}`;
      image.setAttribute("src", `images/${towns2[i].photo}`);
      // image.setAttribute("class", "cityImage" + i);

      card.appendChild(h2);
      card.appendChild(motto);
      card.appendChild(paragraph);
      card.appendChild(paragraphTwo);
      card.appendChild(rainfall);
      // card.appendChild(div);
      card.appendChild(image);

      document.querySelector("div.cities").appendChild(card);
    }
  });
