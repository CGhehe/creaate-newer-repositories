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

function showStudent(student) {
  document.querySelector("#firstName").textContent = student.firstName;
  document.querySelector("#middleName").textContent = student.middleName;
  document.querySelector("#lastName").textContent = student.lastName;
}

harry.middleName = "James";
ron.middleName = "Bilius";
hermione.middleName = "Jean";

const list = document.querySelector("#studentList");

function addStudent(student) {
  const listItem = document.createElement("li");
  //const listText = document.createElement("span");

  listItem.textContent = `${student.firstName}, ${student.middleName}, ${student.lastName}`;
  list.appendChild(listItem);
}

addStudent(harry);
addStudent(ron);
addStudent(hermione);


//southpark:

name: text
image: URL
occupation: student,teacher
age: Number
voicedBy: text
gender: male, female
catchphrase: text 
haircolor: text
schoolgrade: Number
episodes: xD 
appereances: number 
firstAppereance: hehe 
½



