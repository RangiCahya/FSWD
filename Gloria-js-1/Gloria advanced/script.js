let people = ['Greg', 'Mary', 'Devon', 'James'];


//   Remove "Greg" from the array.
people.shift();
console.log(people);

// Add "Matt" to the front of the array.
people.unshift('Matt');
console.log(people);

//   Remove “James” from the array.
people.pop();
console.log(people);

//  Add your name to the end of the array.
people.push('Gloria');
console.log(people);

// copy + new array without first 2 elements
console.log(people.slice(2));

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

// Redefine the people variable with the values you started with.
people.splice(0, 5, 'Greg','Mary','Devon','James')
console.log(people);

// 9.splice(start, deleteCount, item1), remove "Devon" from the array and add "Elizabeth" and "Anna"
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);

// 10 slice - it will copy first array + we add bob (end-1)
let withBob = people.slice(0, 5);
withBob.push("Bob");
console.log(withBob);





// let withBobName = people + "," + "Bob";
// console.log(withBobName);




