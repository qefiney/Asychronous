// // ===1. Arrays > A variable that can store multiple values
// let fruits = ["mango", "orange", "banana", "berries"];

// fruits.push("lemon"); //adds an element next to the last element
// fruits.pop(); //removes the last element from the array
// fruits.unshift("mango"); //adds element to the beginning
// fruits.shift(); //removes element from beginning

// let length = fruits.length; //shows length of the array
// let index = fruits.indexOf("mango"); //shows the position of an element in an array

// console.log(fruits);
// console.log(length);
// console.log(index);

// // Looping/ Iterating through elements in an array

// //(A) For Loop
// let prices = [5, 10, 15, 20];

// for (let i = 0; i < prices.length; i++) {
// 	console.log(prices[i]);
// }

// //Reversing with standard for loop
// let pricesReverse = [5, 10, 15, 20];

// for (let i = pricesReverse.length - 1; i >= 0; i--) {
// 	console.log(pricesReverse[i]);
// }

// // For of statement
// let prices = [5, 10, 15, 20];

// for(let price of prices){ // This isolates the items in prices array into standalone items
//   console.log(price);
// }

// // Sorting an array of strings
// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort(); // sorts the array according to alphabetical order
// fruits = fruits.sort().reverse(); // reverses the sorted array

// for (let fruit of fruits) {
// 	console.log(fruit);
// }

// // ===2. 2D Arrays > An array made up of other Arrays

// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let foodItems = [fruits, vegetables, meats]; // This is the 2D array since it contains other arrays inside it.
// foodItems[1][2] = "cassava"; // We use two indices to access the elements of the arrays in 2D Array

// // To iterate through thr elements of a 2D array we use Nested loops.
// // For this example I will use For of loops.

// for(let item of foodItems) {// This loop will be in-charge of managing each item in the 2D array
//   for(let food of item){ // This loop will be in-charge of managing each item in the Arrays within the 2D Array
//     console.log(food);
//   }
// }

// // ===3. Spread Operator ... > This unpacks the elements of an array to individual pieces

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers); // This wil display the array of numbers i.e [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(...numbers); // This will display each number individually i.e 1 2 3 4 5 6 7 8 9

// // Application Example: Find the maximum number in the numbers array
// let maxNum = Math.max(...numbers);
// let minNum = Math.min(...numbers);
// console.log(maxNum); // This will display 9
// console.log(minNum); // This will display 1

// // ===4. rest parameters ... > Packs arguments into an array to represent an indefinite number of parameters when called to a function

// // Application Example:
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,c,e)); // This will disp;ay the sum of  a, c and e

// function sum(...numbers){ // ...numbers is a rest parameter that represents all the variables above in one array
//   let total = 0;
//   for (let number of numbers){
//     total += number
//   }
//   return total;
// }

// // ===5. callback > a function passed as an argument in another function. This ensures a function won't run unless a certain task is completed

// sum(2, 3, displayDom);

// function sum(x, y, callBack) {
// 	let result = x + y;
// 	callBack(result);
// }

// function displayConsole(output) {
// 	console.log(output);
// }

// function displayDom(output) {
// 	document.getElementById("myLabel").innerHTML = output;
// }

// ===6. array.forEach() method > executes a provided callback function once for each array element

// ==> Example
let total = 0;
let cart = [4, 5, 6, 7, 8, 10];

function checkOut(element) {
	total += element;
}
cart.forEach(checkOut);

console.log("The total amount of your items is $" + total);
