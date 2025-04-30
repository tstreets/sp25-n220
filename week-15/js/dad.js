const dayCareRef = document.querySelector("#daycare");
const benchRef = document.querySelector("#bench");

function onPokemonDrop(e) {
  if (e.currentTarget.parentElement.id === "bench") {
    //   move that exact element into the daycare
    // dayCareRef.appendChild(e.currentTarget);

    //   make a copy of that element into the daycare
    // dayCareRef.innerHTML += e.currentTarget.outerHTML;

    let pokemonHTML = String(e.currentTarget.outerHTML);
    pokemonHTML = pokemonHTML.replace("</div>", "");
    pokemonHTML += "<button class='evolve'>Evolve</button>";
    pokemonHTML += "</div>";
    dayCareRef.innerHTML += pokemonHTML;
  } else {
    // benchRef.appendChild(e.currentTarget);

    dayCareRef.removeChild(e.currentTarget);
  }

  setDragListeners();
}

function setDragListeners() {
  const cardsRef = document.querySelectorAll(".card");

  for (let i = 0; i < cardsRef.length; i++) {
    cardsRef[i].ondragend = onPokemonDrop;
  }

  const evolveButtonsRef = document.querySelectorAll(".evolve");

  for (let i = 0; i < evolveButtonsRef.length; i++) {
    evolveButtonsRef[i].onclick = evolvePokemon;
  }
}

function evolvePokemon(e) {
  const parent = e.target.parentElement;
  const pokemonImage = parent.querySelector("img");

  let imageName = pokemonImage.src.replace(
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/",
    ""
  );
  imageName = imageName.replace(".png", "");
  imageName = Number(imageName) + 1;
  imageName = String(imageName);
  if (imageName.length == 1) {
    imageName = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/00${imageName}.png`;
  } else if (imageName.length == 2) {
    imageName = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/0${imageName}.png`;
  } else {
    imageName = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${imageName}.png`;
  }

  console.log(imageName);
  pokemonImage.src = imageName;
}

setDragListeners();
