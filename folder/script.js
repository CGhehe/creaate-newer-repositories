"use strict";

const fullName = "Carl-Gustav Elkjær Skaksen";

let lastName = fullName.lastIndexOf(" ");
let lastWord = fullName.substring(lastName + 1);
console.log(lastWord);

let middleName = fullName.indexOf(" ");
let middleWord = fullName.substring(middleName + 1, lastName);
console.log(middleWord);

let firstName = fullName.lastIndexOf(" ");
let firstWord = fullName.substring(0, middleName);
console.log(firstWord);

let firstWordCapitalize = fullName.indexOf(" ");
let firstBig = fullName.substring(0, +1);
let firstBig2 = firstBig.toUpperCase();

let firstSmall = fullName.substring(1, middleName);
let firstSmall2 = firstSmall.toLowerCase();
console.log(firstBig2 + firstSmall2);

let middleWordCapitalize = fullName.indexOf(" ");
let secondBig = fullName.substring(middleName + 1, middleName + 2);
let secondBig2 = secondBig.toUpperCase();

let secondSmall = fullName.substring(middleName + 2, lastName);
let secondSmall2 = secondSmall.toLowerCase();
console.log(secondBig2 + secondSmall2);

let lastWordCapitalize = fullName.lastIndexOf(" ");
let thirdBig = fullName.substring(lastName + 1, lastName + 2);
let thirdBig2 = thirdBig.toUpperCase();

let thirdSmall = fullName.substring(lastName + 2);
let thirdSmall2 = thirdSmall.toLowerCase();
console.log(thirdBig2 + thirdSmall2);

console.log()
