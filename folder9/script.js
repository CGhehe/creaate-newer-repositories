"use strict";

// Load init app & init app function

window.addEventListener("load", initApp);

async function initApp() {
  const ike = await getCharacter("app.json");
  console.log(ike);
  showCharacter(ike);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function showCharacter(character) {
  console.log(character);
  document.querySelector("body").insertAdjacentHTML(
    "beforebegin",
    /*html*/ `
            <article>
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="">/
            </article>
        `
  );
}
