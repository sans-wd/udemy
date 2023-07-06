"use strict";
// -----------------------INTERPOLACIYA START-----------------------

/*const cat = "huy";
console.log(`huy.com/${cat}/5/10`);

const user = "Ivan";
alert(`Priver, ${user}`);*/

// -----------------------INTERPOLACIYA END-----------------------

// -----------------------OPERATORI START-----------------------
/* console.log(4 + "5"); 
let incr = 10,
  decr = 10;
let incr2 = 10,
  decr2 = 10;
// ---PREFIX METOD start---
// can be used imediately
++incr;
--decr;
// ---PREFIX METOD end---

// ---POSTFIX METOD start---
// cannot be used imediately
incr2++;
decr2--;
// ---POSTFIX METOD end---
console.log(incr);
console.log(decr);
console.log(incr2);
console.log(decr2);

console.log(5 % 2); //poluchayem ostatok
console.log(2 * 4 == 8); //sravneniye resultat boolean znacheniye
console.log(2 * 4 == "8"); //sravneniye s str resultat boolean vse rabotaet sravnivayem tolko znachenie
console.log(2 * 4 === "8"); //strogoye sravneniye s str resultat boolean sravnivayem snacheniye i tip dannix

// && - operator "and" true tolko v sluchae eesli vse tru
// || - opeeator "or" true esli xotabi odin true
// ! - operator "not" ivertiruet znacheniye true --> false , false --> true
// != - operator "not equal " ne ravno
const isChecked = true,
  isClose = true;
console.log(isChecked || isClose);
*/
// -----------------------OPERATORI END-----------------------
// -----------------------USLOVIA START-----------------------
/* const num = "50"; // vsegda strogoye sootvetsviye "==="
switch (num) {
  case "49":
    console.log("error");
  case "100":
    console.log("error");
  case "51":
    console.log("correct");
  default:
    console.log("no this time");
    break;
} */
// -----------------------USLOVIA END-----------------------
// -----------------------LOG OPERATORI START-----------------------
/*const burger = 5;
const fries = 0;
// null, underfind, '' , NaN, 0 - false
// vse ostalnoy - true
if (burger && fries) {
  console.log("Im full");
} 

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "segesgsgse");

const burger = 3,
  fries = 3,
  cola = 0,
  nuggets = 2;
if ((burger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Shtoto est");
} else {
  console.log("We are leaving");
}

console.log((burger === 3 && cola === 2) || (fries === 3 && nuggets));
console.log(!0);
// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);

*/
// -----------------------LOG OPERATORI END-----------------------
let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

for (let i = 1; i < 5; i++) {
  console.log("*" * i);
}

// let result = "";
// const length = 7;
// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

let result = "";
const length = 7;
first: for (let i = 0; i < 3; i++) {
  console.log(`first level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`second level: ${j}`);
    for (let k = 0; k < 5; k++) {
      if (k == 2) break first;
      console.log(`third level: ${k}`);
    }
  }
}

let chis = 5;
while (chis < 11) {
  console.log(chis);
  chis++;
}

for (let i = 20; i < 21; i--) {
  console.log(i);
  if (i == 14) {
    break;
  }
}

for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
let ss = 1;
while (ss < 15) {
  ss += 2;
  console.log(ss);
}

let obj = [];
let count = 0;
for (let i = 5; i <= 10; i++) {
  obj[count] = i;
  count++;
}
console.log(obj);

const arr = [3, 5, 8, 16, 20, 23, 50];
const resultt = [];

for (let i = 0; i < 7; i++) {
  resultt[i] = arr[i];
}

console.log(typeof "awfwaf");

// const data = [5, 10, "Shopping", 20, "Homework"];

// for (let i = 0; i < 5; i++) {
//   if (typeof data[i] == "string") {
//     data[i] += " - done";
//     continue;
//   }
//   data[i] *= 2;
// }
// console.log(data);

const data = [5, 10, "Shopping", 20, "Homework"];
const resulttt = [];
let counter = 4;
for (let i = 0; i < 5; i++) {
  resulttt[i] = data[counter];
  counter--;
}

console.log(resulttt);
