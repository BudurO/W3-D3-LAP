// LAP Q1
function multy(num0, num1) {
  console.log(num0 * num1);
}
multy(3, 6);
function sub(num2, num3) {
  console.log(num2 - num3);
}
sub(3, 8);
const add = (num4, num5) => {
  console.log(num4 + num5);
};
add(6, 9);
const dev = (num6, num7) => {
  console.log(num6 / num7);
};
dev(5, 9);

// LAP Q2
let numberEven = [3, 9, 8, 20, 6, 2, 20, 21, 23, 34, 30];
const evenNumbersEven = numberEven.filter(function (currentValue) {
  return currentValue % 2 === 0;
});
console.log(evenNumbersEven);

let numbersodd = [3, 9, 8, 20, 6, 2, 20, 21, 23, 34, 30];
const evenNumbersOdd = numbersodd.filter(function (currentValue) {
  return currentValue % 2 != 0;
});
console.log(evenNumbersOdd);

// LAP Q3

characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

// Find
function Name(Names) {
  return Names.name === "Leia Organa";
}
function Gender(Genders) {
  return Genders.gender == "male";
}
console.log(characters.find(Name));
console.log(characters.find(Gender));

console.log("----------------------------------------");
// FILTER
const heightLess = characters.filter(function (currentValueH) {
  return currentValueH.height < 200;
});
console.log(heightLess);

console.log("----------------------------------------");

const maleAll = characters.filter(function (currentValueM) {
  return currentValueM.gender === "male";
});
console.log(maleAll);

console.log("----------------------------------------");
// MAP
const allNames = characters.map(function (currentValueAll) {
  return currentValueAll.name;
});
console.log(allNames);

console.log("----------------------------------------");

const allHeights = characters.map(function (currentValueHeights) {
  return currentValueHeights.height;
});
console.log(allHeights);

console.log("----------------------------------------");

// SORT

characters.sort((a, b) => b.mass - a.mass);
characters.forEach((currentValuemasslow) => {
  console.log(currentValuemasslow.mass);
});

console.log("----------------------------------------");

characters.sort((a, b) => a.height - b.height);
characters.forEach((currentValuemassheight) => {
  console.log(currentValuemassheight.height);
});

console.log("----------------------------------------");

// EVERY
console.log("----------------------------------------");

const massMorethan = (currentValuemassMorethan) =>
  currentValuemassMorethan.mass > 40;

console.log(characters.every(massMorethan));

const masssHorterthan = (currentValuemasssHorterthan) =>
  currentValuemasssHorterthan.height < 200;

console.log(characters.every(masssHorterthan));

console.log("----------------------------------------");

//SOME
console.log("----------------------------------------");

const leastOneeyes = (currentValueleastOnecharacter) =>
  currentValueleastOnecharacter.eye_color == "blue";

console.log(characters.some(leastOneeyes));

const leastOnetaller = (currentValuemasssleastOnetaller) =>
  currentValuemasssleastOnetaller.height > 210;

console.log(characters.some(leastOnetaller));
