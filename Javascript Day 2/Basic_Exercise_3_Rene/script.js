// Exercise 3
function crystalGazer(numberChildren, partnersName, location, jobTitle) {
  numberChildren = 4;
  partnersName = "Anna";
  location = "Austria";
  jobTitle = "Developer";
  let result = `You will be a ${jobTitle} in ${location} and married to ${partnersName} with ${numberChildren} cildren.`;
  console.log(result);
}
crystalGazer();


// Exercise 4
function ageCalculator(birthYear, currentYear) {
  let age = currentYear - birthYear;
  return age;
}
let age = ageCalculator(1989, 2022);
console.log(age);


// Exercise 4.1
function ageCalculator2(birthYear, currentYear) {
  let age1 = currentYear - birthYear;
  let age2 = currentYear - birthYear;
  return age2;
}

let age1 = ageCalculator2(1989, 2022);
let age2 = ageCalculator2(1989, 2022);
let age3 = age2 - 1;
console.log(age1, age3);

let result = `You are either ${age1} or ${age3} years old.`;
console.log(result);


// Exercise 5
/*function ageCalculator3(birthYear, year) {
  const year = new_Date().getFullYear();
  console.log(year);
  let age4 = currentYear - birthYear;
  let age5 = currentYear - birthYear;
  return age2;
}

let age4 = ageCalculator3(1989, 2022);
let age5 = ageCalculator3(1989, 2022);
let age6 = age5 - 1;
console.log(age4, age6);

let result2 = `You are either ${age4} or ${age6} years old.`;
console.log(result2);*/
