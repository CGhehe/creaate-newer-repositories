"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const harry = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  console.log(harry);
  showCharacter(harry);
  const draco = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json"
  );
  console.log(draco);
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
                <img src="${character.image}" alt="" />
            </article>
        `
  );
}
