# JavaScript Fundamentals

# ส่วนที่ 5: การวนซ้ำ (Loops)

## Loops คืออะไร?

Loop คือโครงสร้างที่ใช้ทำงานซ้ำๆ หลายรอบโดยไม่ต้องเขียนโค้ดซ้ำ เช่น การวนผ่านข้อมูลใน Array หรือทำงานจนกว่าเงื่อนไขจะเป็นเท็จ

---

## 1. `for` Loop

Loop พื้นฐานที่ใช้บ่อยที่สุด เหมาะเมื่อรู้จำนวนรอบที่แน่นอน

รูปแบบ: `for (เริ่มต้น; เงื่อนไข; อัปเดต) { ... }`

```js
for (let i = 0; i < 5; i++) {
    console.log(`รอบที่ ${i + 1}`);
}
// รอบที่ 1
// รอบที่ 2
// รอบที่ 3
// รอบที่ 4
// รอบที่ 5
```

### วนย้อนหลัง

```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// 5, 4, 3, 2, 1
```

### วนผ่าน Array

```js
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// 0: แอปเปิ้ล
// 1: กล้วย
// 2: ส้ม
```

---

## 2. `while` Loop

วนซ้ำตราบเท่าที่เงื่อนไขยังเป็น `true` เหมาะเมื่อไม่รู้จำนวนรอบล่วงหน้า แต่รู้ว่าต้องหยุดเมื่อเงื่อไนขอะไรเกิดขึ้น

```js
let count = 0;

while (count < 3) {
    console.log(`นับ: ${count}`);
    count++;
}
// นับ: 0
// นับ: 1
// นับ: 2
```

### ตัวอย่างการใช้งานจริง

```js
let userInput = "";

while (userInput !== "หยุด") {
    userInput = prompt("พิมพ์คำสั่ง (พิมพ์ 'หยุด' เพื่อออก):");
}
console.log("จบการทำงาน");
```

> **ระวัง:** ถ้าเงื่อนไขไม่มีวันเป็น `false` จะเกิด **Infinite Loop** ทำให้โปรแกรมค้าง

---

## 3. `do...while` Loop

คล้ายกับ `while` แต่จะทำงานอย่างน้อย **1 รอบเสมอ** แม้เงื่อนไขจะเป็น `false` ตั้งแต่แรก

```js
let i = 0;

do {
    console.log(`ทำงานรอบที่ ${i + 1}`);
    i++;
} while (i < 3);
// ทำงานรอบที่ 1
// ทำงานรอบที่ 2
// ทำงานรอบที่ 3
```

### เปรียบเทียบกับ `while`

```js
let x = 10;

// while — ไม่ทำงานเลยเพราะเงื่อนไขเป็น false ตั้งแต่แรก
while (x < 5) {
    console.log("while:", x);
}

// do...while — ทำงาน 1 รอบเสมอ แม้เงื่อนไขจะเป็น false
do {
    console.log("do...while:", x); // "do...while: 10"
} while (x < 5);
```

---

## 4. `for...of` Loop

ใช้วนผ่านค่าใน **Iterable** เช่น Array, String, Map, Set เขียนง่ายและอ่านชัดกว่า `for` ทั่วไป

```js
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

for (const fruit of fruits) {
    console.log(fruit);
}
// แอปเปิ้ล
// กล้วย
// ส้ม
```

### วนผ่าน String

```js
const word = "สวัสดี";

for (const char of word) {
    console.log(char);
}
// ส, ว, ั, ส, ด, ี
```

### วนพร้อม index โดยใช้ `entries()`

```js
const colors = ["แดง", "เขียว", "น้ำเงิน"];

for (const [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}
// 0: แดง
// 1: เขียว
// 2: น้ำเงิน
```

---

## 5. `for...in` Loop

ใช้วนผ่าน **key** ของ Object เหมาะสำหรับการดู property ทั้งหมดของ object

```js
const person = {
    name: "สมชาย",
    age: 30,
    city: "กรุงเทพ",
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: สมชาย
// age: 30
// city: กรุงเทพ
```

> **หมายเหตุ:** ไม่ควรใช้ `for...in` กับ Array เพราะอาจวนผ่าน property ที่ไม่ต้องการด้วย ให้ใช้ `for...of` แทน

---

## 6. Array Methods แทน Loop (Functional Style)

JavaScript มี built-in method ที่ช่วยวน Array ได้กระชับและอ่านง่ายกว่า loop ทั่วไป

### `forEach` — วนทำงานกับทุก element

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * 2);
});
// 2, 4, 6, 8, 10
```

### `map` — วนและสร้าง Array ใหม่

```js
const prices = [100, 200, 300];
const discounted = prices.map((price) => price * 0.9);

console.log(discounted); // [90, 180, 270]
```

### `filter` — กรองเฉพาะ element ที่ผ่านเงื่อนไข

```js
const scores = [45, 72, 88, 55, 91];
const passed = scores.filter((score) => score >= 60);

console.log(passed); // [72, 88, 91]
```

### `reduce` — รวม Array เป็นค่าเดียว

```js
const cart = [120, 350, 80, 200];
const total = cart.reduce((sum, price) => sum + price, 0);

console.log(total); // 750
```

### `find` — หา element แรกที่ผ่านเงื่อนไข

```js
const users = [
    { id: 1, name: "สมชาย" },
    { id: 2, name: "สมหญิง" },
    { id: 3, name: "สมศรี" },
];

const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "สมหญิง" }
```

### `some` และ `every` — ตรวจสอบเงื่อนไข

```js
const ages = [15, 22, 18, 30];

console.log(ages.some((age) => age >= 18)); // true — มีอย่างน้อยหนึ่งคนที่อายุ >= 18
console.log(ages.every((age) => age >= 18)); // false — ไม่ใช่ทุกคนที่อายุ >= 18
```

---

## 7. `break` และ `continue`

### `break` — หยุด loop ทันที

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // หยุดเมื่อถึง 5
    console.log(i);
}
// 0, 1, 2, 3, 4
```

### `continue` — ข้ามรอบนี้ไปรอบถัดไป

```js
for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) continue; // ข้ามเลขคู่
    console.log(i);
}
// 1, 3, 5
```

### `break` ใน Nested Loop ด้วย Label

```js
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer; // หยุด loop นอกสุด
        console.log(`i=${i}, j=${j}`);
    }
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

---

## สรุปการเลือกใช้งาน

| สถานการณ์                                 | ใช้                       |
| ----------------------------------------- | ------------------------- |
| รู้จำนวนรอบแน่นอน                         | `for`                     |
| ไม่รู้จำนวนรอบ วนจนกว่าเงื่อนไขจะเป็นเท็จ | `while`                   |
| ต้องทำงานอย่างน้อย 1 รอบ                  | `do...while`              |
| วนผ่านค่าใน Array หรือ Iterable           | `for...of`                |
| วนผ่าน key ของ Object                     | `for...in`                |
| แปลง / กรอง / รวม Array                   | `map`, `filter`, `reduce` |
| วนทำงานกับ Array โดยไม่ต้องการค่าคืน      | `forEach`                 |
