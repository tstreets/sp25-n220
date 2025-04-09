console.log("Shine bright like a diamond");

const starsListRef = document.querySelector("#starsList");

async function getStars() {
  try {
    const starsResponse = await fetch(`data/stars.json`);

    const starsData = await starsResponse.json();

    console.log(starsData);

    starsListRef.innerHTML = "";
    for (let i = 0; i < starsData.length; i++) {
      const currentStar = starsData[i];

      starsListRef.innerHTML += `<li>
            ${currentStar.current} <i>(${currentStar.latin})</i>
        </li>`;
    }
  } catch (e) {
    console.warn(e);
  }
}

getStars();
