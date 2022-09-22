let favouriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];
let favouriteFoods2 = ["pizza", "hamburger", "ice cream", "chocolate","hamburger"];

function randomFood(arr) {

 const randomIndex = Math.floor(Math.random() * arr.length);
 
const item = arr[randomIndex];

 return item; 
}
const result = randomFood(favouriteFoods);
const result2 = randomFood(favouriteFoods2);

console.log(result);

console.log(result2);



