// const helloWorld = "Hello World";
// console.log(helloWorld.toUpperCase());
// console.log(helloWorld.toLowerCase());
// console.log(helloWorld.length);
// console.log(helloWorld.includes("Hello"));
// console.log(helloWorld.replace("World", "JavaScript"));
// console.log(helloWorld.split(" "));
// console.log(helloWorld.slice(0, 5));

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(person.name);
// console.log(person["name"]);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log("=================================")

// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits.includes("Banana"));
// fruits.push("Date");
// console.log(fruits);
// console.log("=================================")

// const map = new Map();
// map.set("name", "Alice");
// map.set("age", 25);
// console.log(...map)
// console.log(map);
// console.log(map.get("name"));
// console.log(map.has("age"));
// map.delete("age");
// console.log(map);
// console.log("=================================")

const scores = new Map([
  ["Alice", 90],
  ["Bob", 85],
  ["Charlie", 92]
]);
console.log(scores)

scores.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

for (const [key, value] of scores) {
  console.log(`${key}: ${value}`);
}
// scores.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// for (const [key, value] of scores) {
//   console.log(`${key}: ${value}`);
// }

// console.log(...scores)
// console.log([...scores.keys()]);
// console.log([...scores.values()]);

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj));
// const mapFromObj = new Map(Object.entries(obj));
// console.log(mapFromObj);
// const objFromMap = Object.fromEntries(mapFromObj);
// console.log(objFromMap);

// function greet(name) {
//   console.log(`Hello ${name}`)
// }

// const greeting = (name) => {
//   console.log(`Hello ${name}`)
// }

// const greets = (name) => console.log(`Hello ${name}`)

// greet("Alice");
// greeting("Bob");
// greets("Charlie");

// const age = 25;
// const hasID = true;

// console.log(age >= 18 || !hasID)

// console.log(true && console.log("ไม่ถูกเรียก"));
// console.log(false && console.log("ไม่ถูกเรียก"));
// console.log(true || console.log("ไม่ถูกเรียก"));
// console.log(false || console.log("ไม่ถูกเรียก"));
// console.log(true ?? console.log("ไม่ถูกเรียก"));
// console.log(false ?? console.log("ไม่ถูกเรียก"));
// console.log(null ?? console.log("ไม่ถูกเรียก"));
// console.log(undefined ?? console.log("ไม่ถูกเรียก"));

// const user = {
//   name: "สมชาย",
//   address: {
//     city: "กรุงเทพ",
//   },
// };

// console.log(user.address?.city);
// console.log(user.address?.street);

// const score = 85;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else if (score >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// if (score < 60) {
//   console.log("Grade: F");
// } else if (score < 70) {
//   console.log("Grade: D");
// } else if (score < 80) {
//   console.log("Grade: C");
// } else if (score < 90) {
//   console.log("Grade: B");
// } else {
//   console.log("Grade: A");
// }

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week");
//     break;
//   case "Tuesday":
//     console.log("Second day of the week");
//     break;
//   case "Wednesday":
//     console.log("Midweek");
//     break;
//   case "Thursday":
//     console.log("Almost the weekend");
//     break;
//   case "Friday":
//     console.log("End of the week");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid day");
// }

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((num) => {
//   console.log(num);
// });

// const newArr = arr.map((num) => num * 2);
// console.log(newArr);

// const strMOck = "Hello World";
// strMOck.forEach((char) => {
//   console.log(char);
// });