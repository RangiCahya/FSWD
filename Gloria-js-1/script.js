
// sum
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let newValue = parseInt(c);
let dUpdatedValue = parseInt(d);

let updatedSum = a + b + newValue + dUpdatedValue + e;
// console.log(updatedSum);

// multiply

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let updatedValueF = parseInt(f);
// console.log(updatedValueF);

let updatedValueI = parseInt(f);
// console.log(updatedValueI);

let multiplicationVar = updatedValueF * g * h * updatedValueI;
// console.log(multiplicationVar);



// exercise 3
// Select and output the numbers 11, 25, 17, 27 and 0 in the console.
const multidimensionArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]];
console.log(multidimensionArray[1][1]);
console.log(multidimensionArray[4][2]);
console.log(multidimensionArray[5][3]);
console.log(multidimensionArray[2][3]);
console.log(multidimensionArray[2][1]);


// exercise 2
let people = ['Greg', 'Mary', 'Devon', 'James'];

// let removedGreg = people.filter(name => {
//    if(name !== 'Greg'){
//     return name
//    }
// })
// console.log(removedGreg);

people.shift();
console.log(people);
people.unshift('Matt');
console.log(people);
people.pop();
console.log(people);
people.push('Gloria');
console.log(people)
// new array without first 2 elem
console.log(people.slice(2));
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

// Redefine the people variable with the values you started with.
people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people);

people.splice(2, 1, "elizabeth", "anna");
console.log(people);

let withBob = people + "," + "Bob";
console.log(withBob);

// let withBob = people.splice(0, 5);
// withBob.push("Bob");
// console.log(withBob);



// advanced
// ex 3

let fruitsArray = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(fruitsArray.split('/').join(' '));
// console.log(fruitsArray.replaceAll("/").join(""))

// ex 2
let animals = ["monkey", "horse", "dog"];
console.log(animals.sort());
animals.unshift("cat");
console.log(animals);

// ex 1
let fruitArray = ["apple", "banana", "kiwi"];

fruitArray.push("orange");
console.log(fruitArray);

fruitArray.pop();
console.log(fruitArray)


// challenge
let newText = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

// console.log(newText.replaceAll('$', ' '));

console.log(newText.split("$").join(" "));

// for(let i =0; i< newText.length; i++ ){
//   if(newText[i] == "$"){
//     console.log(newText[i])
//     newText = newText.replace(newText[i], " ");
//     console.log(newText);
//   }
// }



