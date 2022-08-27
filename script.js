console.log("jonas");
console.log(23);

// Data type
let firstName = "Sima";
console.log(firstName);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1997;
console.log(typeof year);
console.log(typeof null);

const now = 2037;
const ageJonas = now - 1991;
const ageSareh = now - 2018;
console.log(ageJonas, ageSareh);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstNam = "Sima";
const lastName = "Ghanadiyan";
console.log(firstNam + " " + lastName);

let x = 10 + 5; //15
x += 10; // x = x+10;//25
x *= 4; // x = x*4;//
x++;
x--;
console.log(x);

console.log(ageJonas > ageSareh); // > < >= <=

console.log(ageSareh >= 18);
const isFullAge = ageSareh >= 18;

let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const averageAge = (ageJonas + ageSareh) / 2;

// #Coding Challenge1
const marksMass = 78;
const marksheight = 1.69;
const johnsMass = 95;
const johnheight = 1.88;
const markBMI = marksMass / marksheight ** 2;
console.log(markBMI);
const johnBMI = johnsMass / johnheight ** 2;
console.log(johnBMI);
const markHigherBMI = markBMI >= johnBMI;
console.log(markHigherBMI);

// template literals
const nam = "Sima";
const job = "Frontend Developer";
const birthYear = 1997;
const years = 2037;

const sima =
  "I'm " + nam + " ,a " + (years - birthYear) + " yearsold " + job + " ! ";
console.log(sima);
const simaNew = `I'm ${nam} , a ${years - birthYear} years old ${job} !`;
console.log(simaNew);
console.log(`Just a regular string....`);
console.log(`string
with
multiple
line`);

// If Else statement
const age = 15;
const isAgeEnough = age >= 18;
if (isAgeEnough) {
  console.log(`Sareh can start driving licence`);
} else {
  const yearsLeft = 18 - age;
  console.log(`sareh is too young wait another ${yearsLeft} years`);
}

const sal = 2012;
let century;
if (sal <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Coding Challeng2
if (markBMI >= johnBMI) {
  console.log(`john's BMI is higher than Mark's `);
} else {
  console.log(`marks's BMI is higher than marks `);
}
const higherBMI = `marks's BMI is ${markBMI - johnBMI} higher than john's`;
console.log(higherBMI);

// type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number("jonas"));
console.log(typeof NaN); //it's invalid number;
console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values:0,"",undefine,null,NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log(`don't spend it all`);
} else {
  console.log(`you should get a job`);
}

let height;
if (height) {
  console.log(`height is define`);
} else {
  console.log(`height is undefine`);
}

const sen = 19;
if (sen === 19) console.log(`you just become an adult`);

const favorite = Number(prompt(`what's your favorite number?`));
// console.log(favorite);

if (favorite === 23) {
  console.log(`cool! 23 is an amazing number!`);
} else if (favorite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log(`number is not 23 or 7`);
}
if (favorite !== 23) console.log(`why not 23?`);

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = true; //C

console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log(`sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

// Coding Chanllenge 3
//part1
// const avgDolhins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolhins, avgKoalas);
// if (avgDolhins > avgKoalas) {
//   console.log("Dolhins win the trophy🥇");
// } else if (avgKoalas > avgDolhins) {
//   console.log("Koalas win the trophy🥇");
// } else if (avgDolhins === avgKoalas) {
//   console.log("Both win the trophy!");
// }
// //part2
const avgDolhins = (97 + 112 + 80) / 3;
const avgKoalas = (109 + 95 + 50) / 3;
if (avgDolhins > avgKoalas && avgDolhins >= 100) {
  console.log("Dolhins win the trophy🥇");
} else if (avgKoalas > avgDolhins && avgKoalas >= 100) {
  console.log("Koalas win the trophy🥇");
} else if (avgDolhins === avgKoalas && avgDolhins >= 100 && avgKoalas >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("no one wins the trophy😪");
}

const day = "monday";
switch (day) {
  case "monday": // day==='monday'
    console.log(`plane course structure`);
    console.log("go to coding meeting");
    break;
  case "tuesday":
    console.log(`prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`write code examples`);
    break;
  case "friday":
    console.log(`record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`enjoy the weekend`);
    break;
  default:
    console.log(`not a valid day!`);
}

const days = "monday";

if (day === "monday") {
  console.log("plane course structure");
  console.log(`go to coding meeting`);
} else if (day === "tuesday") {
  console.log(`prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`write code examples`);
} else if (day === "friday") {
  console.log(`record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`enjoy the weekend`);
} else {
  console.log(`not a valid day!`);
}

const senSall = 23;
senSall >= 18
  ? console.log("i like to drink wine")
  : console.log("i love to drink water");

const drink = senSall >= 18 ? "wine" : "water";
console.log(drink);
console.log(` i like to drink ${senSall >= 18 ? "wine" : "water"}`);

//Coding Challenge 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill},the tip was ${tip},and the total value ${bill + tip}`
);
