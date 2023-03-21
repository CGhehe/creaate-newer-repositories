"use strict";

const harry = {
  firstName: "Harry",
  lastName: "Potter",
};

const ron = {
  firstName: "Ron",
  lastName: "Weasley",
};

const hermione = {
  firstName: "Hermione",
  lastName: "Granger",
};

console.log(harry);
console.log(ron);
console.log(hermione);

console.log(harry.lastName);
harry.firstName = "Potty";

const chosenOne = harry;
chosenOne.firstName = "(The chosen one)";

console.log(harry);
