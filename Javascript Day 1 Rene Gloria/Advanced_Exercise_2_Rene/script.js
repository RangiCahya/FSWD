let people = ["Greg", "Mary", "Devon","James"];

// delete first name
people.shift();

// add Matt instead of first name 
people.unshift("Matt");

// remove last name
people.pop();
console.log(people);

// add your name at the end
people.push("René");

// slice first 3 names (only in console)
console.log(people.slice(2));

// Position of "Mary"
console.log(people.indexOf("Mary"));

// Position of "Foo"
console.log(people.indexOf("Foo"));


// first step Part 2
people.splice(0, 5, "Greg", "Mary", "Devon","James");

// first number: position of the beginning ("Devon")
// second number: how many names are to delete (1 --> "Devon")
people.splice(2, 1, "Elizabeth", "Anna");

console.log(people);

let bob = "Bob"
let withBob = [people + "," + bob];
console.log(withBob);




//people.unshift("Greg", "Mary", "Devon","James");
//people.slice(6);








