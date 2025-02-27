const h1Ref = document.querySelector("h1");
const nameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size");
const characterRaceRef = document.querySelector("select");
const characterImgRef = document.querySelector("img");

const dndImages = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1ccf940-4a6f-49b5-9ed5-a2a286388884/def3gbq-afe1b8e2-2afb-42f5-a251-ed97b17a7d01.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxY2NmOTQwLTRhNmYtNDliNS05ZWQ1LWEyYTI4NjM4ODg4NFwvZGVmM2dicS1hZmUxYjhlMi0yYWZiLTQyZjUtYTI1MS1lZDk3YjE3YTdkMDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JgCDekk0iMXJpI9wFi0sD5F0gLox4zvbdALWqURkeog",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75d97ee6-7268-47e7-a469-4d6a6ab67c7b/dcll23b-f2a392d0-35ee-41c8-86ff-255bc032dc79.jpg/v1/fill/w_900,h_1223,q_75,strp/dnd_high_elf_redesign__kainos_the_bladesinger_by_jruva_dcll23b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyMyIsInBhdGgiOiJcL2ZcLzc1ZDk3ZWU2LTcyNjgtNDdlNy1hNDY5LTRkNmE2YWI2N2M3YlwvZGNsbDIzYi1mMmEzOTJkMC0zNWVlLTQxYzgtODZmZi0yNTViYzAzMmRjNzkuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.i4uS2JoO9v13aHF8aUrY5JNv7RtbNO_pOfYb-QsNH_4",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a487f4d7-1b1e-4500-b1db-2887ee104c89/debt0l9-f49a247e-8116-40f5-93b4-da339aad46e6.png/v1/fill/w_1024,h_1449,q_80,strp/human_rogue_dnd_design_by_xloboblanco_debt0l9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0ODdmNGQ3LTFiMWUtNDUwMC1iMWRiLTI4ODdlZTEwNGM4OVwvZGVidDBsOS1mNDlhMjQ3ZS04MTE2LTQwZjUtOTNiNC1kYTMzOWFhZDQ2ZTYucG5nIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTQ4N2Y0ZDctMWIxZS00NTAwLWIxZGItMjg4N2VlMTA0Yzg5XC94bG9ib2JsYW5jby00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.mBhBQVsAGW_HCetZwW2yIwQvCebcmAheK73jwe44SYk",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d3c2e86-6d7f-47c3-a363-0f311e463d9a/dcmxdg4-5dcd6486-d7e7-4bf7-931a-f69af0c00f9f.jpg/v1/fill/w_1024,h_859,q_75,strp/dwarf_by_ncorva_dcmxdg4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU5IiwicGF0aCI6IlwvZlwvMmQzYzJlODYtNmQ3Zi00N2MzLWEzNjMtMGYzMTFlNDYzZDlhXC9kY214ZGc0LTVkY2Q2NDg2LWQ3ZTctNGJmNy05MzFhLWY2OWFmMGMwMGY5Zi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Z2ujytAsXmrufdX3tWel34WV9RAkPq6LObAWibJuugo",
];

// Cmd + / or Ctrl + /

function changeH1Style() {
  if (h1Ref.style.backgroundColor !== "red") {
    h1Ref.style.backgroundColor = "red";
  } else {
    h1Ref.style.backgroundColor = "white";
  }
}

function changeH1Color(e) {
  h1Ref.style.color = e.target.value;
}

function changeH1Size(e) {
  const fontSize = Number(e.target.value);
  if (fontSize >= 8) {
    h1Ref.style.fontSize = fontSize + "px";
  }
  // else {
  //   e.target.value = 8;
  //   h1Ref.style.fontSize = "8px";
  // }
}

function cleanUpH1Size(e) {
  const fontSize = Number(e.target.value);
  if (fontSize < 8) {
    e.target.value = 8;
    h1Ref.style.fontSize = "8px";
  }
}

function changeCharacterRace(e) {
  const optionRef = document.querySelector(
    "option[value=" + e.target.value + "]"
  );
  characterImgRef.src = dndImages[optionRef.dataset.img];
}

function showCharacterRaceDetails(e) {
  document.querySelector("section p").innerHTML = e.target.value;
}

h1Ref.onclick = changeH1Style;

nameRef.onchange = changeH1Color;

sizeRef.oninput = changeH1Size;
sizeRef.onchange = cleanUpH1Size;

characterRaceRef.oninput = changeCharacterRace;
characterRaceRef.onblur = showCharacterRaceDetails;
