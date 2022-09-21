let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

// strings to numbers
let newValue1 = Number(c);
let newValue2 = Number(d);


let sum = a + b + newValue1 + newValue2 + e;
console.table(sum);


let f = '1';

let g = 15;

let h = 8;

let i = "1";

let newValue3 = Number(f);
let newValue4 = Number(i);

let mul = newValue3 * g * h * newValue4;
console.table(mul);

let solution = sum / mul;

document.write(solution);