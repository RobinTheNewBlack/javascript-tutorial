// const numbers = [1, 2, 3, 4, 5];

// const emptyArr = new Array(5);
// const zeroArr = new Array(5).fill(0);
// console.log(emptyArr);
// console.log(zeroArr);

// const nums = Array.of(1, 2, 3, 4, 5);
// const single = Array.of(42);
// console.log(nums);
// console.log(single);

// const map = new Map([
//   ["Alice", 25],
//   ["Bob", 30],
//   ["Charlie", 35]
// ]);
// const newMapArr = Array.from(map);
// console.log(newMapArr);

// const fruits = ["Apple", "Banana", "Cherry"];
// // fruits.push("Mango");
// // console.log(fruits);
// // fruits.pop();
// // console.log(fruits);
// // fruits.unshift("Strawberry");
// // console.log(fruits);
// // fruits.shift();
// // console.log(fruits);
// fruits.splice(1, 2, "Grapes");
// console.log(fruits);
// fruits.splice(2, 1);
// console.log(fruits);

// const fruits = ["Apple", "Banana", "Cherry", "Mango", "Elderberry"];

// console.log(fruits.includes("Banana"))
// console.log(fruits.indexOf("Apple"))

const nums = [3, 1, 4, 1, 5];

const ascending = nums.toSorted((a, b) => a - b);
const descending = nums.toSorted((a, b) => b - a);
const reverse = nums.toReversed();
console.log(ascending);
console.log(descending);
console.log(reverse);