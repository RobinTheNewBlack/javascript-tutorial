# JavaScript Fundamentals

# ส่วนที่ 2: ชนิดข้อมูล (Data Types)

## ชนิดข้อมูลใน JavaScript คืออะไร?

JavaScript เป็นภาษาแบบ **Dynamic Typing** หมายความว่าตัวแปรหนึ่งตัวสามารถเก็บข้อมูลได้หลายชนิด และชนิดข้อมูลจะถูกกำหนดอัตโนมัติตอน runtime

ชนิดข้อมูลแบ่งออกเป็น 2 กลุ่มหลัก:

- **Primitive Types** — ข้อมูลพื้นฐาน เก็บค่าโดยตรง
- **Reference Types** — ข้อมูลอ้างอิง เก็บที่อยู่ (address) ของข้อมูลในหน่วยความจำ

---

## Primitive Types (ชนิดข้อมูลพื้นฐาน)

### 1. `String` — ข้อความ

ใช้เก็บตัวอักษรและข้อความ ครอบด้วย `" "`, `' '`, หรือ `` ` ` ``

```js
const firstName = "สมชาย";
const lastName = "ใจดี";
const greeting = `สวัสดี ${firstName}`; // Template Literal

console.log(greeting); // "สวัสดี สมชาย"
console.log(typeof firstName); // "string"
```

เมธอดที่ใช้บ่อย:

```js
const text = "Hello World";

console.log(text.length); // 11
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text.includes("World")); // true
console.log(text.slice(0, 5)); // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"
console.log(text.split(" ")); // ["Hello", "World"]
```

---

### 2. `Number` — ตัวเลข

ใช้เก็บตัวเลขทั้งจำนวนเต็มและทศนิยม

```js
const age = 25;
const price = 99.99;
const negative = -10;

console.log(typeof age); // "number"
```

ค่าพิเศษของ Number:

```js
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log("abc" * 2); // NaN (Not a Number)
console.log(isNaN("abc")); // true
```

การคำนวณพื้นฐาน:

```js
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.3333...
console.log(10 % 3); // 1 (เศษจากการหาร)
console.log(2 ** 10); // 1024 (ยกกำลัง)
```

---

### 3. `Boolean` — ค่าความจริง

มีแค่ 2 ค่าเท่านั้น คือ `true` หรือ `false`

```js
const isLoggedIn = true;
const hasPermission = false;

console.log(typeof isLoggedIn); // "boolean"
```

ค่าที่ถือว่าเป็น `false` ใน JavaScript (Falsy values):

```js
Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
// ค่าอื่นๆ ทั้งหมดถือว่าเป็น true (Truthy)
```

---

### 4. `undefined` — ยังไม่มีค่า

ตัวแปรที่ถูกประกาศแต่ยังไม่ได้กำหนดค่า จะมีค่าเป็น `undefined` โดยอัตโนมัติ

```js
let score;
console.log(score); // undefined
console.log(typeof score); // "undefined"
```

---

### 5. `null` — ไม่มีค่า (ตั้งใจ)

ใช้แสดงว่า "ไม่มีค่า" อย่างตั้งใจ ต่างจาก `undefined` ที่เกิดโดยอัตโนมัติ

```js
let selectedUser = null; // ยังไม่ได้เลือก user

console.log(selectedUser); // null
console.log(typeof selectedUser); // "object" (quirk ของ JavaScript)
```

ความแตกต่างระหว่าง `null` และ `undefined`:

```js
console.log(null == undefined); // true  (loose equality)
console.log(null === undefined); // false (strict equality)
```

---

### 6. `BigInt` — จำนวนเต็มขนาดใหญ่

ใช้เก็บจำนวนเต็มที่มีขนาดใหญ่เกินกว่าที่ `Number` จะรองรับได้ (เพิ่มใน ES2020)

```js
const bigNumber = 9007199254740991n; // เติม n ต่อท้าย
const anotherBig = BigInt("12345678901234567890");

console.log(typeof bigNumber); // "bigint"
```

---

### 7. `Symbol` — ค่าที่ไม่ซ้ำกัน

ใช้สร้างค่า unique ที่ไม่ซ้ำกันเลย แม้จะสร้างด้วย description เดียวกัน (เพิ่มใน ES6)

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false — ไม่เท่ากันแม้ description เหมือนกัน
console.log(typeof id1); // "symbol"
```

---

## Reference Types (ชนิดข้อมูลอ้างอิง)

### 1. `Object` — วัตถุ

ใช้เก็บข้อมูลในรูปแบบ key-value pairs

```js
const person = {
    name: "สมชาย",
    age: 30,
    isStudent: false,
};

console.log(person.name); // "สมชาย"
console.log(person["age"]); // 30
console.log(typeof person); // "object"

// เพิ่มหรือแก้ไข property
person.email = "somchai@example.com";
person.age = 31;

// ลบ property
delete person.isStudent;
```

ดูเมธอดทั้งหมดได้ที่ [Object Manipulation](../data-manipulation/object-methods.md)

---

### 2. `Array` — อาร์เรย์

ใช้เก็บข้อมูลหลายค่าในลำดับที่ต่อเนื่อง (index เริ่มจาก 0)

```js
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

console.log(fruits[0]); // "แอปเปิ้ล"
console.log(fruits.length); // 3
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true
```

ดูเมธอดทั้งหมดได้ที่ [Array Manipulation](../data-manipulation/array-methods.md)

---

### 3. `Map` — แผนที่ key-value

เหมือน Object แต่ key เป็นชนิดใดก็ได้ (object, function, number ฯลฯ) และรักษาลำดับการ insert เสมอ

```js
const map = new Map();

map.set("name", "สมชาย");
map.set(42, "หมายเลข");
map.set(true, "บูลีน");

console.log(map); // Map(3) { 'name' => 'สมชาย', 42 => 'หมายเลข', true => 'บูลีน' }
console.log(map.get("name")); // "สมชาย"
console.log(map.get(42)); // "หมายเลข"
console.log(map.size); // 3
console.log(map.has("name")); // true

map.delete(42); // ลบ key 42
map.clear(); // ลบทั้งหมด
```

วนซ้ำ Map:

```js
const scores = new Map([
    ["Alice", 90],
    ["Bob", 85],
    ["Charlie", 92],
]);

scores.forEach((value, key) => console.log(`${key}: ${value}`));

for (const [key, value] of scores) {
    console.log(`${key}: ${value}`);
}
console.log(scores); // Map(3) { 'Alice' => 90, 'Bob' => 85, 'Charlie' => 92 }
console.log([...scores.keys()]); // ["Alice", "Bob", "Charlie"]
console.log([...scores.values()]); // [90, 85, 92]
console.log([...scores.entries()]); // [["Alice", 90], ...]
```

แปลงระหว่าง Map และ Object:

```js
// Object → Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));

// Map → Object
const objFromMap = Object.fromEntries(scores);
```

---

### 4. `Set` — เซต (ค่าไม่ซ้ำ)

เก็บค่าที่ไม่ซ้ำกัน มักใช้กรองค่าซ้ำออกจาก Array

```js
const set = new Set([1, 2, 3, 2, 1]);

console.log(set); // Set(3) { 1, 2, 3 }
console.log(set.size); // 3

set.add(4); // เพิ่มค่า
set.delete(2); // ลบค่า
console.log(set.has(3)); // true
set.clear(); // ลบทั้งหมด
```

กรองค่าซ้ำออกจาก Array:

```js
const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)]; // [1, 2, 3, 4]
```

วนซ้ำ Set:

```js
const colors = new Set(["red", "green", "blue"]);

colors.forEach((c) => console.log(c));

for (const color of colors) {
    console.log(color);
}
```

---

### 5. `Function` — ฟังก์ชัน

ฟังก์ชันใน JavaScript ก็ถือเป็นชนิดข้อมูลประเภทหนึ่ง (First-class Function)

```js
function greet(name) {
    return `สวัสดี ${name}`;
}

console.log(typeof greet); // "function"
console.log(greet("สมหญิง")); // "สวัสดี สมหญิง"
```

---

## การตรวจสอบชนิดข้อมูล

ใช้ `typeof` เพื่อตรวจสอบชนิดข้อมูล:

```js
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ⚠️ (ข้อผิดพลาดเก่าของ JS)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" ⚠️ (ใช้ Array.isArray() แทน)
console.log(typeof function () {}); // "function"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 1n); // "bigint"
```

---

## ตารางสรุปชนิดข้อมูล

| ชนิด        | ประเภท    | ตัวอย่าง                        |
| ----------- | --------- | ------------------------------- |
| `String`    | Primitive | `"สวัสดี"`, `'Hello'`           |
| `Number`    | Primitive | `42`, `3.14`, `NaN`, `Infinity` |
| `Boolean`   | Primitive | `true`, `false`                 |
| `undefined` | Primitive | `undefined`                     |
| `null`      | Primitive | `null`                          |
| `BigInt`    | Primitive | `9007199254740991n`             |
| `Symbol`    | Primitive | `Symbol("id")`                  |
| `Object`    | Reference | `{ name: "สมชาย" }`             |
| `Array`     | Reference | `["แดง", "เขียว"]`              |
| `Function`  | Reference | `function() {}`                 |

---

## Type Conversion (การแปลงชนิดข้อมูล)

### Implicit Conversion (แปลงอัตโนมัติ)

```js
console.log("5" + 3); // "53" — number ถูกแปลงเป็น string
console.log("5" - 3); // 2   — string ถูกแปลงเป็น number
console.log(true + 1); // 2   — true = 1
console.log(false + 1); // 1   — false = 0
```

### Explicit Conversion (แปลงเอง)

```js
// แปลงเป็น Number
Number("42"); // 42
Number("abc"); // NaN
Number(true); // 1
Number(false); // 0
parseInt("42.9"); // 42
parseFloat("42.9"); // 42.9

// แปลงเป็น String
String(42); // "42"
String(true); // "true"
(42).toString(); // "42"

// แปลงเป็น Boolean
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
```

---
