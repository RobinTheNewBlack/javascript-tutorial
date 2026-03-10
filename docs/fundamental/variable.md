# JavaScript Fundamentals

# ส่วนที่ 1: ตัวแปร (Variables)

## ตัวแปรคืออะไร?

ตัวแปร (Variable) คือกล่องสำหรับเก็บข้อมูล ใน JavaScript มีวิธีประกาศตัวแปร 3 แบบ ได้แก่ `var`, `let`, และ `const`

---

## 1. `var`

`var` เป็นวิธีดั้งเดิมในการประกาศตัวแปรใน JavaScript (ก่อน ES6)

### คุณสมบัติ

- **Function-scoped** — เข้าถึงได้ทุกที่ภายใน function ที่ประกาศ
- **Hoisting** — การประกาศตัวแปรจะถูกยกขึ้นไปด้านบนของ scope อัตโนมัติ แต่ค่าจะยังไม่ถูกกำหนด
- สามารถ **ประกาศซ้ำ** และ **กำหนดค่าใหม่** ได้

### ตัวอย่าง

```js
var name = "สมชาย";
var name = "สมหญิง"; // ประกาศซ้ำได้
name = "สมศรี"; // กำหนดค่าใหม่ได้

console.log(name); // "สมศรี"
```

### พฤติกรรม Hoisting

```js
console.log(age); // undefined (ไม่ error)
var age = 25;
```

JavaScript ตีความโค้ดข้างต้นเป็น:

```js
var age;
console.log(age); // undefined
age = 25;
```

### ปัญหา Scope ของ `var`

```js
if (true) {
    var city = "กรุงเทพ";
}
console.log(city); // "กรุงเทพ" — ตัวแปรรั่วออกมานอก block!
```

---

## 2. `let`

`let` ถูกเพิ่มเข้ามาใน **ES6 (2015)** เพื่อแก้ปัญหา scope ของ `var`

### คุณสมบัติ

- **Block-scoped** — เข้าถึงได้เฉพาะภายใน `{}` ที่ประกาศเท่านั้น
- **Hoisting** แต่ยังไม่ถูก initialize (ถ้าเรียกใช้ก่อนประกาศจะเกิด `ReferenceError`)
- สามารถ **กำหนดค่าใหม่** ได้ แต่ **ประกาศซ้ำไม่ได้** ใน scope เดียวกัน

### ตัวอย่าง

```js
let score = 10;
score = 20; // กำหนดค่าใหม่ได้

// let score = 30; // Error: ประกาศซ้ำไม่ได้
```

### Block Scope

```js
if (true) {
    let country = "ไทย";
    console.log(country); // "ไทย"
}
// console.log(country); // ReferenceError: country is not defined
```

### Temporal Dead Zone (TDZ)

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

---

## 3. `const`

`const` ก็มาจาก **ES6** เช่นกัน ใช้สำหรับค่าที่ไม่ควรเปลี่ยนแปลง

### คุณสมบัติ

- **Block-scoped** — เหมือนกับ `let`
- **ต้องกำหนดค่าทันที** ตอนประกาศ
- **กำหนดค่าใหม่ไม่ได้** และ **ประกาศซ้ำไม่ได้**
- สำหรับ Object และ Array — **reference** จะคงที่ แต่ **ข้อมูลภายใน** ยังเปลี่ยนได้

### ตัวอย่าง

```js
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable

const language = "JavaScript";
// const language = "Python"; // Error: ประกาศซ้ำไม่ได้
```

### Object และ Array กับ `const`

```js
const person = { name: "สมชาย", age: 25 };
person.age = 26; // ได้ — แก้ไขข้อมูลภายใน object ได้
// person = {};        // TypeError — เปลี่ยน reference ไม่ได้

const colors = ["แดง", "เขียว"];
colors.push("น้ำเงิน"); // ได้ — เพิ่มข้อมูลใน array ได้
// colors = [];        // TypeError — เปลี่ยน reference ไม่ได้
```

---

## ตารางเปรียบเทียบ

| คุณสมบัติ             | `var`           | `let`     | `const`   |
| --------------------- | --------------- | --------- | --------- |
| Scope                 | Function        | Block     | Block     |
| Hoisting              | ได้ (undefined) | ได้ (TDZ) | ได้ (TDZ) |
| ประกาศซ้ำได้          | ได้             | ไม่ได้    | ไม่ได้    |
| กำหนดค่าใหม่ได้       | ได้             | ได้       | ไม่ได้    |
| ต้องกำหนดค่าตอนประกาศ | ไม่บังคับ       | ไม่บังคับ | บังคับ    |

---

## แนวทางปฏิบัติที่ดี (Best Practices)

1. **ใช้ `const` เป็นหลัก** — ช่วยให้โค้ดอ่านง่ายและป้องกันการเปลี่ยนค่าโดยไม่ตั้งใจ
2. **ใช้ `let`** เมื่อรู้ว่าค่าจะต้องเปลี่ยนแปลง เช่น ตัวนับใน loop
3. **หลีกเลี่ยง `var`** เพราะพฤติกรรม hoisting และ function scope อาจก่อให้เกิด bug ได้ง่าย

```js
// แนวทางที่แนะนำ
const MAX_RETRIES = 3; // ค่าคงที่
let currentRetry = 0; // ค่าที่จะเปลี่ยนแปลง

while (currentRetry < MAX_RETRIES) {
    currentRetry++;
}
```

---
