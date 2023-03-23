"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const ike = await getCharacter(app.json);
    console.log(ike);
    showCharacter(ike);
}

