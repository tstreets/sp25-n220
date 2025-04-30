const melonsRef = document.querySelector("#melons");

async function getMelons() {
  const melonsResp = await fetch("data/melons.json");
  const melonsData = await melonsResp.json();

  melonsRef.innerHTML = "";
  for (let i = 0; i < melonsData.length; i++) {
    const currentMelon = melonsData[i];

    melonsRef.innerHTML += `
    <div>
        <h4>${currentMelon.name}</h4>
        <img src="${currentMelon.image}" alt="" />
    </div>
    `;
  }
}

getMelons();
