let people = ['Greg', 'Mary', 'Devon', 'James'];

//1.Remove "Greg" from the array.
people.shift();
console.log(people);

//2.Add "Matt" to the front of the array.
people.unshift('Matt');
console.log(people);

// 3.Remove “James” from the array.
people.pop();
console.log(people);

//4.Add your name to the end of the array.
people.push('Gloria');
console.log(people);

//5. copy  array + remove first 2 elements
console.log(people.slice(2));

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

//8. Redefine the people variable with the values you started with.
people.splice(0, 5, 'Greg', 'Mary', 'Devon', 'James');
console.log(people);

// 9.splice(start, deleteCount, item1). We remove "Devon" from the array & add "Elizabeth" & "Anna"
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);

// 10. slice - it will copy first array & we add "bob"
let withBob = people.slice(0, 5);
withBob.push("Bob");
console.log(withBob);
console.log(people)

// 1- another solution option
// let withBob = [...people.slice(0, 5),"Bob"]
// console.log(withBob)

// 2- another solution option
// let withBobs= people.concat("Bob");
// console.log(withBobs);

