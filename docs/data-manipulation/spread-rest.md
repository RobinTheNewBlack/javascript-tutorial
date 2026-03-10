# Spread & Rest Operator

ทั้งคู่ใช้ syntax เดียวกัน `...` แต่ทำหน้าที่ต่างกัน

- **Spread** — กระจายค่าออก (expand)
- **Rest** — รวบค่าเข้า (collect)

---

## Spread Operator

### กระจาย Array

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

const merged = [...a, ...b];       // [1, 2, 3, 4, 5, 6]
const copy = [...a];               // [1, 2, 3] — shallow copy
const withExtra = [...a, 99];      // [1, 2, 3, 99]
```

### กระจาย Object

```js
const person = { name: "สมชาย", age: 30 };

const clone = { ...person };                        // shallow copy
const updated = { ...person, age: 31 };             // override ค่า age
const merged = { ...person, job: "developer" };     // เพิ่ม property ใหม่
```

> ถ้า key ซ้ำกัน ตัวหลังจะทับตัวแรก

```js
const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };

const result = { ...a, ...b }; // { x: 1, y: 99, z: 3 }
```

### ส่ง Array เป็น Arguments

```js
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // 6 — เหมือนเรียก sum(1, 2, 3)

// ใช้กับ built-in functions
const numbers = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1
```

### กระจาย String

```js
const chars = [..."hello"]; // ["h", "e", "l", "l", "o"]
```

---

## Rest Operator

### Rest ใน Function Parameters

รวบ arguments ที่เหลือทั้งหมดเข้าเป็น array

```js
function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
```

```js
// รับ argument แรกแยก แล้วรวบที่เหลือ
function log(level, ...messages) {
    console.log(`[${level}]`, messages.join(" "));
}

log("INFO", "เริ่ม", "server", "แล้ว"); // "[INFO] เริ่ม server แล้ว"
```

> `...rest` ต้องอยู่ตำแหน่งสุดท้ายเสมอ

### Rest ใน Array Destructuring

```js
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]
```

### Rest ใน Object Destructuring

```js
const { name, age, ...rest } = { name: "สมหญิง", age: 25, city: "เชียงใหม่", job: "designer" };
console.log(name); // "สมหญิง"
console.log(age);  // 25
console.log(rest); // { city: "เชียงใหม่", job: "designer" }
```

---

## สรุปความต่าง

| | Spread `...` | Rest `...` |
|---|---|---|
| หน้าที่ | กระจายค่าออก | รวบค่าเข้า |
| ใช้ที่ไหน | ตอน call function, สร้าง array/object | ตอน define function, destructuring |
| ผลลัพธ์ | ค่าแต่ละตัว | array |

```js
// Spread — กระจายออก
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3

// Rest — รวบเข้า
function collect(...args) {
    console.log(args); // [1, 2, 3]
}
collect(1, 2, 3);
```
