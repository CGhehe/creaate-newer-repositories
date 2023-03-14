"use strict";

function sayHello(firstName) {
  console.log("Hello", firstName, "Hvordan går det?");
}

const myName = "Peter";
sayHello(myName);
sayHello("Noget andet end Peter");

sayHello();

sayHello;
