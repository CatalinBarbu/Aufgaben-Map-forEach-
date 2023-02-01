console.log("====================================");
/* Aufgabe Lvl 1_12 vertiefung arrays slice() */
let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg",
];
const newArray1 = array.slice(7, 15);
console.log(newArray1);
const newArray2 = array.slice(6, 12);
console.log(newArray2);
/* ========================================== */
console.log("==================================");

/* Aufgabe Lvl 1_3 Arrays Numbe Sort */

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a, b) => a - b);
console.log(numArray1);
/* let numberSort = numArray1.sort(function (a, b) {
  return a - b;
}); */
/* console.log(numberSort); */
/* ========================================== */
console.log("====================================");

/* Aufgabe Lvl 1_1 Array sort () */

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];
languages.sort();
console.log(languages);
/* ========================================== */
console.log("====================================");

/* Aufgabe Lvl 1_1 forEach () */
const body = document.querySelector("body");
let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
getraenke.sort();
getraenke.forEach((element, index) => {
  console.log(index + " : " + element);
  body.innerHTML += `<p>${"Index: " + index + " - " + element}</p>`;
});
function myDrinks() {
  console.log(getraenke);
}
myDrinks();
/* ========================================== */
console.log("====================================");

/* Aufgabe Lvl 1_12 vertiefung arrays slice() */
/* ========================================== */
/* Aufgabe Lvl 1_12 vertiefung arrays slice() */
/* ========================================== */
/* Aufgabe Lvl 1_12 vertiefung arrays slice() */
/* ========================================== */
/* Aufgabe Lvl 1_12 vertiefung arrays slice() */
/* ========================================== */
