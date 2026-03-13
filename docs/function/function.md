# JavaScript Fundamentals

# ส่วนที่ 6: ฟังก์ชัน (Functions)

## Function คืออะไร?

Function คือบล็อกโค้ดที่เขียนไว้ครั้งเดียวแล้วเรียกใช้ซ้ำได้หลายครั้ง ช่วยให้โค้ดเป็นระเบียบ ไม่ซ้ำซ้อน และแก้ไขได้ง่าย

---

## 1. Function Declaration

วิธีประกาศ function แบบพื้นฐานที่สุด สามารถเรียกใช้ก่อนประกาศได้ (Hoisting)

```js
function greet(name) {
    console.log(`สวัสดี, ${name}!`);
}

greet("สมชาย"); // "สวัสดี, สมชาย!"
greet("สมหญิง"); // "สวัสดี, สมหญิง!"
```

### Hoisting — เรียกก่อนประกาศได้

```js
sayHello(); // "สวัสดี!" — ใช้งานได้แม้ประกาศทีหลัง

function sayHello() {
    console.log("สวัสดี!");
}
```

---

## 2. Function Expression

เก็บ function ไว้ในตัวแปร **ไม่รองรับ Hoisting** ต้องประกาศก่อนใช้งาน

```js
const greet = function (name) {
    console.log(`สวัสดี, ${name}!`);
};

greet("สมศรี"); // "สวัสดี, สมศรี!"
```

> **หมายเหตุ:** ถ้าเรียก `greet()` ก่อนบรรทัดที่ประกาศ จะเกิด Error: `Cannot access 'greet' before initialization`

---

## 3. Arrow Function

รูปแบบการเขียน function ที่กระชับในสไตล์ Modern JavaScript เหมาะสำหรับ callback และ function สั้นๆ

```js
// แบบปกติ
const add = function (a, b) {
    return a + b;
};

// แบบ Arrow Function
const add = (a, b) => {
    return a + b;
};

// แบบสั้นที่สุด (Implicit Return) — ถ้ามีแค่ expression เดียว
const add = (a, b) => a + b;

console.log(add(3, 5)); // 8
```

### กรณีพิเศษ

```js
// parameter เดียว — ไม่ต้องใส่วงเล็บ
const double = (n) => n * 2;
console.log(double(4)); // 8

// ไม่มี parameter — ต้องใส่วงเล็บว่าง
const sayHi = () => console.log("สวัสดี!");
sayHi(); // "สวัสดี!"

// return เป็น Object — ต้องใส่วงเล็บครอบ
const makeUser = (name) => ({ name: name, role: "user" });
console.log(makeUser("สมชาย")); // { name: "สมชาย", role: "user" }
```

---

## 4. Parameters และ Arguments

**Parameter** คือตัวแปรที่กำหนดในฟังก์ชัน ส่วน **Argument** คือค่าจริงที่ส่งเข้ามาเมื่อเรียกใช้

```js
// name และ age คือ Parameter
function introduce(name, age) {
    console.log(`ฉันชื่อ ${name} อายุ ${age} ปี`);
}

// "สมชาย" และ 25 คือ Argument
introduce("สมชาย", 25); // "ฉันชื่อ สมชาย อายุ 25 ปี"
```

### Default Parameter — ค่าเริ่มต้น

กำหนดค่า default สำหรับ parameter ที่ไม่ถูกส่งเข้ามา

```js
function greet(name = "ผู้เยี่ยมชม") {
    console.log(`สวัสดี, ${name}!`);
}

greet("สมชาย"); // "สวัสดี, สมชาย!"
greet(); // "สวัสดี, ผู้เยี่ยมชม!"
```

### Rest Parameter — รับ argument ไม่จำกัดจำนวน

```js
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
```

> **หมายเหตุ:** Rest Parameter ต้องอยู่ตำแหน่งสุดท้ายเสมอ

```js
function log(label, ...messages) {
    messages.forEach((msg) => console.log(`[${label}] ${msg}`));
}

log("INFO", "เริ่มต้น", "โหลดข้อมูล", "เสร็จสิ้น");
// [INFO] เริ่มต้น
// [INFO] โหลดข้อมูล
// [INFO] เสร็จสิ้น
```

---

## 5. Return Value

ใช้ `return` เพื่อส่งค่ากลับออกจาก function ถ้าไม่มี `return` จะคืนค่า `undefined`

```js
function multiply(a, b) {
    return a * b;
}

const result = multiply(6, 7);
console.log(result); // 42
```

### Return หยุดการทำงานทันที

```js
function checkAge(age) {
    if (age < 18) {
        return "อายุไม่ถึง"; // หยุดที่นี่เลย
    }
    return "เข้าได้";
}

console.log(checkAge(15)); // "อายุไม่ถึง"
console.log(checkAge(20)); // "เข้าได้"
```

### Return หลายค่าด้วย Object หรือ Array

```js
function getMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
    };
}

const { min, max } = getMinMax([3, 1, 7, 2, 9]);
console.log(min); // 1
console.log(max); // 9
```

---

## 6. Scope — ขอบเขตของตัวแปร

ตัวแปรที่ประกาศในฟังก์ชันจะมองเห็นได้เฉพาะภายในฟังก์ชันนั้น ไม่สามารถเข้าถึงจากภายนอกได้

### Local Scope

```js
function makeGreeting() {
    const message = "สวัสดีจากภายใน"; // Local variable
    console.log(message);
}

makeGreeting(); // "สวัสดีจากภายใน"
console.log(message); // ReferenceError: message is not defined
```

### Global Scope

```js
const appName = "MyApp"; // Global variable

function showApp() {
    console.log(appName); // เข้าถึง global variable ได้
}

showApp(); // "MyApp"
```

### Scope Chain — ค้นหาตัวแปรจากใน → ออกนอก

```js
const language = "JavaScript"; // Global

function outer() {
    const version = "ES2024"; // Outer local

    function inner() {
        // inner เข้าถึงทั้ง language และ version ได้
        console.log(`${language} ${version}`);
    }

    inner();
}

outer(); // "JavaScript ES2024"
```

---

## 7. Closure

Function ที่ "จำ" ตัวแปรจาก Scope ที่มันถูกสร้างขึ้นมา แม้ว่า Scope นั้นจะสิ้นสุดไปแล้ว

```js
function makeCounter() {
    let count = 0; // ตัวแปรนี้ถูก "จำ" ไว้โดย counter

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### ประโยชน์ของ Closure — สร้าง Private State

```js
function createBankAccount(initialBalance) {
    let balance = initialBalance; // ไม่มีใครแก้ตรงๆ ได้

    return {
        deposit(amount) {
            balance += amount;
            console.log(`ฝาก ${amount} บาท ยอดคงเหลือ: ${balance} บาท`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("ยอดเงินไม่พอ");
                return;
            }
            balance -= amount;
            console.log(`ถอน ${amount} บาท ยอดคงเหลือ: ${balance} บาท`);
        },
        getBalance() {
            return balance;
        },
    };
}

const account = createBankAccount(1000);
account.deposit(500); // "ฝาก 500 บาท ยอดคงเหลือ: 1500 บาท"
account.withdraw(200); // "ถอน 200 บาท ยอดคงเหลือ: 1300 บาท"
console.log(account.getBalance()); // 1300
```

---

## 8. Higher-Order Function

Function ที่รับ function อื่นเป็น argument หรือ return function กลับออกมา

### รับ Function เป็น Argument (Callback)

```js
function runTwice(fn) {
    fn();
    fn();
}

runTwice(() => console.log("สวัสดี!"));
// "สวัสดี!"
// "สวัสดี!"
```

### ตัวอย่างจริง — ใช้ callback กับ Array

```js
const products = [
    { name: "แอปเปิ้ล", price: 30 },
    { name: "กล้วย", price: 15 },
    { name: "ส้ม", price: 25 },
];

// กรองสินค้าราคาเกิน 20 บาท
const expensive = products.filter((p) => p.price > 20);
console.log(expensive);
// [{ name: "แอปเปิ้ล", price: 30 }, { name: "ส้ม", price: 25 }]

// ดึงแค่ชื่อสินค้า
const names = products.map((p) => p.name);
console.log(names); // ["แอปเปิ้ล", "กล้วย", "ส้ม"]
```

### Return Function (Function Factory)

```js
function multiplyBy(factor) {
    return (number) => number * factor;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## 9. Pure Function vs Impure Function

### Pure Function — ผลลัพธ์ขึ้นอยู่กับ input เท่านั้น ไม่มี Side Effect

```js
// Pure — ส่ง input เดิมได้ผลลัพธ์เดิมเสมอ ไม่แก้ไขอะไรภายนอก
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5 (เสมอ)
```

### Impure Function — มี Side Effect หรือผลลัพธ์ไม่แน่นอน

```js
let total = 0;

// Impure — แก้ไขตัวแปรภายนอก
function addToTotal(n) {
    total += n; // Side Effect!
}

addToTotal(5);
console.log(total); // 5
addToTotal(5);
console.log(total); // 10 — เรียกเหมือนกัน แต่ผลต่างกัน
```

> **แนะนำ:** เขียน Pure Function ให้มากที่สุด เพราะ test ง่าย คาดเดาได้ และ debug ง่ายกว่า

---

## 10. IIFE — Immediately Invoked Function Expression

Function ที่ประกาศและเรียกใช้พร้อมกันทันที ใช้สร้าง Scope แยกเพื่อไม่ให้ตัวแปรรั่วไปยัง Global Scope

```js
(function () {
    const secret = "ข้อมูลส่วนตัว";
    console.log("IIFE ทำงาน!");
})();

// console.log(secret); // ReferenceError — เข้าถึงจากนอกไม่ได้
```

### IIFE แบบ Arrow Function

```js
(() => {
    console.log("IIFE แบบ Arrow Function");
})();
```

---

## สรุปการเลือกใช้งาน

| สถานการณ์                                   | ใช้                              |
| ------------------------------------------- | -------------------------------- |
| function ทั่วไป ต้องการ Hoisting            | Function Declaration             |
| เก็บ function ในตัวแปร หรือส่งเป็น callback | Function Expression              |
| function สั้นๆ หรือ callback                 | Arrow Function                   |
| ต้องการค่า default ของ parameter            | Default Parameter                |
| รับ argument ไม่จำกัดจำนวน                  | Rest Parameter (`...args`)       |
| ต้องการ Private State                       | Closure                          |
| รับหรือ return function                     | Higher-Order Function            |
| ไม่ต้องการให้ตัวแปรรั่วสู่ Global          | IIFE                             |
