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
name = "สมศรี";      // กำหนดค่าใหม่ได้

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
person.age = 26;       // ได้ — แก้ไขข้อมูลภายใน object ได้
// person = {};        // TypeError — เปลี่ยน reference ไม่ได้

const colors = ["แดง", "เขียว"];
colors.push("น้ำเงิน"); // ได้ — เพิ่มข้อมูลใน array ได้
// colors = [];        // TypeError — เปลี่ยน reference ไม่ได้
```

---

## ตารางเปรียบเทียบ

| คุณสมบัติ              | `var`            | `let`        | `const`      |
|------------------------|-----------------|-------------|-------------|
| Scope                  | Function        | Block       | Block       |
| Hoisting               | ได้ (undefined) | ได้ (TDZ)   | ได้ (TDZ)   |
| ประกาศซ้ำได้           | ได้             | ไม่ได้      | ไม่ได้      |
| กำหนดค่าใหม่ได้        | ได้             | ได้         | ไม่ได้      |
| ต้องกำหนดค่าตอนประกาศ  | ไม่บังคับ       | ไม่บังคับ   | บังคับ      |

---

## แนวทางปฏิบัติที่ดี (Best Practices)

1. **ใช้ `const` เป็นหลัก** — ช่วยให้โค้ดอ่านง่ายและป้องกันการเปลี่ยนค่าโดยไม่ตั้งใจ
2. **ใช้ `let`** เมื่อรู้ว่าค่าจะต้องเปลี่ยนแปลง เช่น ตัวนับใน loop
3. **หลีกเลี่ยง `var`** เพราะพฤติกรรม hoisting และ function scope อาจก่อให้เกิด bug ได้ง่าย

```js
// แนวทางที่แนะนำ
const MAX_RETRIES = 3;   // ค่าคงที่
let currentRetry = 0;    // ค่าที่จะเปลี่ยนแปลง

while (currentRetry < MAX_RETRIES) {
  currentRetry++;
}
```

---

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
const lastName = 'ใจดี';
const greeting = `สวัสดี ${firstName}`; // Template Literal

console.log(greeting);        // "สวัสดี สมชาย"
console.log(typeof firstName); // "string"
```

เมธอดที่ใช้บ่อย:

```js
const text = "Hello World";

console.log(text.length);         // 11
console.log(text.toUpperCase());  // "HELLO WORLD"
console.log(text.toLowerCase());  // "hello world"
console.log(text.includes("World")); // true
console.log(text.slice(0, 5));    // "Hello"
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
console.log(10 / 0);        // Infinity
console.log(-10 / 0);       // -Infinity
console.log("abc" * 2);     // NaN (Not a Number)
console.log(isNaN("abc"));  // true
```

การคำนวณพื้นฐาน:

```js
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.3333...
console.log(10 % 3);  // 1 (เศษจากการหาร)
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
Boolean(false);     // false
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
// ค่าอื่นๆ ทั้งหมดถือว่าเป็น true (Truthy)
```

---

### 4. `undefined` — ยังไม่มีค่า

ตัวแปรที่ถูกประกาศแต่ยังไม่ได้กำหนดค่า จะมีค่าเป็น `undefined` โดยอัตโนมัติ

```js
let score;
console.log(score);         // undefined
console.log(typeof score);  // "undefined"
```

---

### 5. `null` — ไม่มีค่า (ตั้งใจ)

ใช้แสดงว่า "ไม่มีค่า" อย่างตั้งใจ ต่างจาก `undefined` ที่เกิดโดยอัตโนมัติ

```js
let selectedUser = null; // ยังไม่ได้เลือก user

console.log(selectedUser);        // null
console.log(typeof selectedUser); // "object" (quirk ของ JavaScript)
```

ความแตกต่างระหว่าง `null` และ `undefined`:

```js
console.log(null == undefined);  // true  (loose equality)
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
console.log(typeof id1);  // "symbol"
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

console.log(person.name);      // "สมชาย"
console.log(person["age"]);    // 30
console.log(typeof person);    // "object"

// เพิ่มหรือแก้ไข property
person.email = "somchai@example.com";
person.age = 31;
```

---

### 2. `Array` — อาร์เรย์

ใช้เก็บข้อมูลหลายค่าในลำดับที่ต่อเนื่อง (index เริ่มจาก 0)

```js
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

console.log(fruits[0]);       // "แอปเปิ้ล"
console.log(fruits.length);   // 3
console.log(typeof fruits);   // "object"
console.log(Array.isArray(fruits)); // true
```

เมธอดที่ใช้บ่อย:

```js
fruits.push("มะม่วง");        // เพิ่มท้าย
fruits.pop();                  // ลบท้าย
fruits.unshift("องุ่น");      // เพิ่มหน้า
fruits.shift();                // ลบหน้า

console.log(fruits.includes("กล้วย")); // true
console.log(fruits.indexOf("ส้ม"));    // 2
```

---

### 3. `Function` — ฟังก์ชัน

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
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ⚠️ (ข้อผิดพลาดเก่าของ JS)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" ⚠️ (ใช้ Array.isArray() แทน)
console.log(typeof function(){}); // "function"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 1n);          // "bigint"
```

---

## ตารางสรุปชนิดข้อมูล

| ชนิด        | ประเภท    | ตัวอย่าง                        |
|-------------|----------|---------------------------------|
| `String`    | Primitive | `"สวัสดี"`, `'Hello'`           |
| `Number`    | Primitive | `42`, `3.14`, `NaN`, `Infinity` |
| `Boolean`   | Primitive | `true`, `false`                 |
| `undefined` | Primitive | `undefined`                     |
| `null`      | Primitive | `null`                          |
| `BigInt`    | Primitive | `9007199254740991n`             |
| `Symbol`    | Primitive | `Symbol("id")`                  |
| `Object`    | Reference | `{ name: "สมชาย" }`            |
| `Array`     | Reference | `["แดง", "เขียว"]`             |
| `Function`  | Reference | `function() {}`                 |

---

## Type Conversion (การแปลงชนิดข้อมูล)

### Implicit Conversion (แปลงอัตโนมัติ)

```js
console.log("5" + 3);    // "53" — number ถูกแปลงเป็น string
console.log("5" - 3);    // 2   — string ถูกแปลงเป็น number
console.log(true + 1);   // 2   — true = 1
console.log(false + 1);  // 1   — false = 0
```

### Explicit Conversion (แปลงเอง)

```js
// แปลงเป็น Number
Number("42");      // 42
Number("abc");     // NaN
Number(true);      // 1
Number(false);     // 0
parseInt("42.9");  // 42
parseFloat("42.9"); // 42.9

// แปลงเป็น String
String(42);        // "42"
String(true);      // "true"
(42).toString();   // "42"

// แปลงเป็น Boolean
Boolean(1);        // true
Boolean(0);        // false
Boolean("hello");  // true
Boolean("");       // false
```

---

# ส่วนที่ 3: ตัวดำเนินการ (Operators)

## ตัวดำเนินการคืออะไร?

Operator คือสัญลักษณ์ที่ใช้ในการประมวลผลค่าหรือตัวแปร เช่น การคำนวณ การเปรียบเทียบ หรือการรวมเงื่อนไข

---

## 1. Arithmetic Operators (ตัวดำเนินการทางคณิตศาสตร์)

ใช้สำหรับการคำนวณตัวเลข

```js
const a = 10;
const b = 3;

console.log(a + b);  // 13  — บวก
console.log(a - b);  // 7   — ลบ
console.log(a * b);  // 30  — คูณ
console.log(a / b);  // 3.333... — หาร
console.log(a % b);  // 1   — หารเอาเศษ (Modulus)
console.log(a ** b); // 1000 — ยกกำลัง (ES2016)
```

### Increment / Decrement

```js
let count = 5;

count++;           // เพิ่มทีละ 1 (Post-increment)
console.log(count); // 6

count--;           // ลดทีละ 1 (Post-decrement)
console.log(count); // 5

console.log(++count); // 6 — เพิ่มก่อนแล้วค่อยใช้ (Pre-increment)
console.log(--count); // 5 — ลดก่อนแล้วค่อยใช้ (Pre-decrement)
```

---

## 2. Assignment Operators (ตัวดำเนินการกำหนดค่า)

ใช้สำหรับกำหนดค่าให้กับตัวแปร

```js
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8

console.log(x); // 8
```

---

## 3. Comparison Operators (ตัวดำเนินการเปรียบเทียบ)

ใช้เปรียบเทียบค่า 2 ค่า และคืนค่าเป็น `true` หรือ `false`

```js
console.log(5 > 3);   // true  — มากกว่า
console.log(5 < 3);   // false — น้อยกว่า
console.log(5 >= 5);  // true  — มากกว่าหรือเท่ากับ
console.log(5 <= 4);  // false — น้อยกว่าหรือเท่ากับ
```

### `==` vs `===` (สำคัญมาก!)

```js
// == (Loose Equality) — เปรียบเทียบค่า แต่แปลงชนิดข้อมูลก่อน
console.log(5 == "5");   // true  ⚠️ — แปลง string เป็น number ก่อนเทียบ
console.log(0 == false); // true  ⚠️
console.log(null == undefined); // true ⚠️

// === (Strict Equality) — เปรียบเทียบทั้งค่าและชนิดข้อมูล
console.log(5 === "5");  // false ✅ — ชนิดต่างกัน
console.log(0 === false);// false ✅
console.log(5 === 5);    // true  ✅
```

### `!=` vs `!==`

```js
console.log(5 != "5");  // false — loose (ถือว่าเท่ากัน)
console.log(5 !== "5"); // true  — strict (ชนิดต่างกัน)
```

> แนะนำให้ใช้ `===` และ `!==` เสมอ เพื่อหลีกเลี่ยง bug จากการแปลงชนิดข้อมูล

---

## 4. Logical Operators (ตัวดำเนินการเชิงตรรกะ)

ใช้รวมหรือกลับเงื่อนไข Boolean

| Operator | ความหมาย | ตัวอย่าง |
|----------|----------|---------|
| `&&`     | AND — จริงทั้งคู่ถึงจะเป็นจริง | `true && false` → `false` |
| `\|\|`   | OR — จริงอย่างน้อยหนึ่งอันก็เป็นจริง | `true \|\| false` → `true` |
| `!`      | NOT — กลับค่า | `!true` → `false` |

```js
const age = 20;
const hasID = true;

console.log(age >= 18 && hasID);  // true  — อายุครบและมีบัตร
console.log(age < 18 || hasID);   // true  — อย่างน้อยเงื่อนไขหนึ่งจริง
console.log(!hasID);               // false — กลับค่า
```

### Short-circuit Evaluation

```js
// && — ถ้าฝั่งซ้ายเป็น false จะไม่ประเมินฝั่งขวา
console.log(false && console.log("ไม่ถูกเรียก")); // false

// || — ถ้าฝั่งซ้ายเป็น true จะไม่ประเมินฝั่งขวา
console.log(true || console.log("ไม่ถูกเรียก")); // true

// ใช้กำหนดค่า default
const username = null;
const displayName = username || "ผู้เยี่ยมชม";
console.log(displayName); // "ผู้เยี่ยมชม"
```

---

## 5. Nullish Coalescing Operator `??` (ES2020)

คล้ายกับ `||` แต่จะใช้ค่า fallback เฉพาะเมื่อเป็น `null` หรือ `undefined` เท่านั้น

```js
const score = 0;

console.log(score || 100);  // 100 ⚠️ — 0 เป็น falsy จึงใช้ค่า fallback
console.log(score ?? 100);  // 0   ✅ — 0 ไม่ใช่ null/undefined

const name = null;
console.log(name ?? "ไม่ระบุชื่อ"); // "ไม่ระบุชื่อ"
```

---

## 6. Optional Chaining Operator `?.` (ES2020)

ใช้เข้าถึง property ของ object โดยไม่ต้องกลัว error เมื่อค่าเป็น `null` หรือ `undefined`

```js
const user = {
  name: "สมชาย",
  address: {
    city: "กรุงเทพ",
  },
};

console.log(user.address?.city);    // "กรุงเทพ"
console.log(user.contact?.phone);   // undefined — ไม่ error แม้ contact ไม่มีอยู่
console.log(user.greet?.());        // undefined — เรียก method ที่อาจไม่มีอยู่ได้
```

---

## 7. Ternary Operator (ตัวดำเนินการเงื่อนไข)

เขียน if/else แบบสั้นในบรรทัดเดียว

รูปแบบ: `เงื่อนไข ? ค่าถ้าจริง : ค่าถ้าเท็จ`

```js
const age = 20;
const status = age >= 18 ? "ผู้ใหญ่" : "เด็ก";
console.log(status); // "ผู้ใหญ่"

// เทียบเท่ากับ
// if (age >= 18) { status = "ผู้ใหญ่" } else { status = "เด็ก" }
```

---

## 8. String Operators (ตัวดำเนินการสำหรับ String)

```js
const firstName = "สมชาย";
const lastName = "ใจดี";

// การต่อ string ด้วย +
const fullName = firstName + " " + lastName;
console.log(fullName); // "สมชาย ใจดี"

// การต่อ string ด้วย Template Literal (แนะนำ)
const greeting = `ชื่อของฉันคือ ${firstName} ${lastName}`;
console.log(greeting); // "ชื่อของฉันคือ สมชาย ใจดี"

// += กับ string
let message = "สวัสดี";
message += " โลก";
console.log(message); // "สวัสดี โลก"
```

---

## 9. Bitwise Operators (ตัวดำเนินการระดับ Bit)

ใช้งานกับข้อมูลระดับ binary (ใช้ในงานเฉพาะทาง)

```js
console.log(5 & 3);  // 1  — AND
console.log(5 | 3);  // 7  — OR
console.log(5 ^ 3);  // 6  — XOR
console.log(~5);     // -6 — NOT
console.log(5 << 1); // 10 — Left shift
console.log(5 >> 1); // 2  — Right shift
```

---

## ลำดับความสำคัญของ Operator (Operator Precedence)

JavaScript ประเมินค่า operator ตามลำดับความสำคัญ (สูงสุดถึงต่ำสุด):

| ลำดับ | Operator | ตัวอย่าง |
|-------|----------|---------|
| สูงสุด | `()` วงเล็บ | `(2 + 3) * 4` |
| | `**` ยกกำลัง | `2 ** 3` |
| | `* / %` คูณ หาร เศษ | `10 * 2 / 5` |
| | `+ -` บวก ลบ | `5 + 3 - 1` |
| | `> >= < <=` เปรียบเทียบ | `5 > 3` |
| | `== != === !==` เท่ากับ | `5 === 5` |
| | `&&` AND | `a && b` |
| | `\|\|` OR | `a \|\| b` |
| | `??` Nullish | `a ?? b` |
| ต่ำสุด | `= += -=` กำหนดค่า | `x = 5` |

```js
console.log(2 + 3 * 4);     // 14 — คูณก่อน แล้วค่อยบวก
console.log((2 + 3) * 4);   // 20 — วงเล็บก่อน
console.log(2 ** 3 ** 2);   // 512 — ยกกำลังประเมินจากขวาไปซ้าย (3**2=9, 2**9=512)
```

---

# ส่วนที่ 4: เงื่อนไข (Conditionals)

## Conditionals คืออะไร?

Conditionals คือโครงสร้างที่ใช้ควบคุมการทำงานของโปรแกรมตามเงื่อนไขที่กำหนด ถ้าเงื่อนไขเป็นจริงจะทำอย่างหนึ่ง ถ้าเท็จก็ทำอีกอย่างหนึ่ง

---

## 1. `if` Statement

รูปแบบพื้นฐานที่สุด ตรวจสอบเงื่อนไขและทำงานเมื่อเงื่อนไขเป็น `true`

```js
const age = 20;

if (age >= 18) {
  console.log("คุณเป็นผู้ใหญ่แล้ว");
}
```

---

## 2. `if...else` Statement

เพิ่มการทำงานสำรองเมื่อเงื่อนไขเป็น `false`

```js
const age = 15;

if (age >= 18) {
  console.log("เข้าได้");
} else {
  console.log("อายุไม่ถึง เข้าไม่ได้");
}
// "อายุไม่ถึง เข้าไม่ได้"
```

---

## 3. `if...else if...else` Statement

ใช้เมื่อมีหลายเงื่อนไขให้ตรวจสอบ

```js
const score = 75;

if (score >= 80) {
  console.log("เกรด A");
} else if (score >= 70) {
  console.log("เกรด B");
} else if (score >= 60) {
  console.log("เกรด C");
} else if (score >= 50) {
  console.log("เกรด D");
} else {
  console.log("เกรด F");
}
// "เกรด B"
```

---

## 4. `switch` Statement

ใช้เปรียบเทียบค่าตัวแปรกับหลาย case เหมาะกับกรณีที่มีค่าที่เป็นไปได้หลายอย่าง

```js
const day = "จันทร์";

switch (day) {
  case "จันทร์":
    console.log("ต้นสัปดาห์");
    break;
  case "พุธ":
    console.log("กลางสัปดาห์");
    break;
  case "ศุกร์":
    console.log("ใกล้หมดสัปดาห์แล้ว");
    break;
  case "เสาร์":
  case "อาทิตย์":
    console.log("วันหยุด!");
    break;
  default:
    console.log("วันธรรมดา");
}
// "ต้นสัปดาห์"
```

> **หมายเหตุ:** ต้องใส่ `break` ทุก case มิฉะนั้น JavaScript จะรันต่อไปยัง case ถัดไปเรื่อยๆ (Fall-through)

### Fall-through (ตั้งใจไม่ใส่ break)

```js
const month = 2;
let days;

switch (month) {
  case 1: case 3: case 5:
  case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6:
  case 9: case 11:
    days = 30;
    break;
  case 2:
    days = 28;
    break;
}

console.log(`เดือนนี้มี ${days} วัน`); // "เดือนนี้มี 28 วัน"
```

---

## 5. Ternary Operator (เงื่อนไขแบบสั้น)

เขียน `if...else` ในบรรทัดเดียว เหมาะกับเงื่อนไขที่ไม่ซับซ้อน

รูปแบบ: `เงื่อนไข ? ค่าถ้าจริง : ค่าถ้าเท็จ`

```js
const age = 20;
const result = age >= 18 ? "ผู้ใหญ่" : "เด็ก";
console.log(result); // "ผู้ใหญ่"

// ใช้ใน JSX หรือการกำหนดค่า
const price = 150;
const label = price > 100 ? "แพง" : "ถูก";
console.log(label); // "แพง"
```

### Nested Ternary (ซ้อนกัน — ใช้ด้วยความระมัดระวัง)

```js
const score = 75;
const grade = score >= 80 ? "A"
            : score >= 70 ? "B"
            : score >= 60 ? "C"
            : "F";

console.log(grade); // "B"
```

---

## 6. Nullish Coalescing `??` และ Logical OR `||` เป็นเงื่อนไข

ใช้กำหนดค่า default อย่างกระชับ

```js
// || ใช้ค่า fallback เมื่อเป็น falsy (0, "", false, null, undefined)
const username = "" || "ผู้เยี่ยมชม";
console.log(username); // "ผู้เยี่ยมชม" ⚠️ แม้ string ว่างก็ถูกแทนที่

// ?? ใช้ค่า fallback เฉพาะเมื่อเป็น null หรือ undefined
const username2 = "" ?? "ผู้เยี่ยมชม";
console.log(username2); // "" ✅ string ว่างยังคงอยู่

const points = null ?? 0;
console.log(points); // 0
```

### ความแตกต่างที่สำคัญ

- **`||` (Logical OR):** มองว่า Falsy ทั้งหมดคือไม่มีค่า (รวมถึง `0`, `""`, `false`)
- **`??` (Nullish Coalescing):** มองว่าเฉพาะ `null` และ `undefined` เท่านั้นคือไม่มีค่า

### `||` — ระวังเมื่อค่า `0` หรือ `""` ใช้งานได้จริง

```js
let userNickname = "";
let displayName = userNickname || "Guest";

console.log(displayName); // "Guest"
// เพราะ "" เป็น Falsy มันเลยข้ามไปเอาค่า "Guest" มาแทน
```

### `??` — ปลอดภัยกว่าเมื่อ `0` หรือ `""` เป็นค่าที่ถูกต้อง

```js
let userScore = 0;
let finalScore = userScore ?? 10;

console.log(finalScore); // 0
// เพราะ ?? มองว่า 0 คือค่าที่มีอยู่จริง ไม่ใช่ null/undefined
```

ถ้าใช้ `||` ในเคสนี้ `finalScore` จะกลายเป็น `10` ทันที ซึ่งอาจผิดความหมายของโปรแกรมได้

### ตารางเปรียบเทียบผลลัพธ์

| ค่าฝั่งซ้าย | `left \|\| "Default"` | `left ?? "Default"` |
| :---------- | :-------------------- | :------------------ |
| `null`      | `"Default"`           | `"Default"`         |
| `undefined` | `"Default"`           | `"Default"`         |
| `0`         | `"Default"`           | `0`                 |
| `""`        | `"Default"`           | `""`                |
| `false`     | `"Default"`           | `false`             |
| `"Hello"`   | `"Hello"`             | `"Hello"`           |

### `&&` — "ด่านตรวจ" หรือ "ตัวคัดกรอง"

ถ้า `||` และ `??` คือการหา "ค่าสำรอง" เจ้าตัว `&&` (Logical AND) ก็คือ "ด่านตรวจ" ครับ มันไม่ได้แค่เช็คว่า "จริงและจริง" แต่มีพฤติกรรม **Short-circuit Evaluation** ที่นักพัฒนานิยมใช้กันมาก

**หลักการ: "หาตัวปลอม (Falsy) ตัวแรก"**

`&&` จะไล่ดูจากซ้ายไปขวา:
- ถ้าเจอตัวที่เป็น Falsy → **หยุดทันที** และคืนค่าตัวนั้น
- ถ้าทุกตัวเป็น Truthy หมด → คืนค่า **ตัวสุดท้าย**

```js
console.log(true && "Hello");          // "Hello" (ตัวแรกจริง เลยไปต่อ คืนตัวสุดท้าย)
console.log(0 && "Apple");             // 0 (เจอ 0 ซึ่งเป็น Falsy หยุดทันที)
console.log("Cat" && "Dog" && "Bird"); // "Bird" (จริงทุกตัว คืนตัวสุดท้าย)
```

**Use Case A: Guard Operator — ป้องกัน Error**

ใช้เช็คว่า object มีค่าอยู่จริงก่อนจะเข้าถึง property (ป้องกัน `Cannot read property of undefined`)

```js
// แบบเดิม
if (user && user.profile) {
  console.log(user.profile.name);
}

// แบบสั้นด้วย &&
user && user.profile && console.log(user.profile.name);
// ถ้า user เป็น null → && หยุดทันที ไม่ไปอ่าน user.profile ต่อ
```

**Use Case B: Conditional Rendering ใน React**

```js
{ isLoggedIn && <LogoutButton /> }
// ถ้า isLoggedIn เป็น false → ไม่แสดงปุ่ม Logout เลย
```

### สรุปการเลือกใช้ทั้ง 3 ตัว

| เครื่องหมาย | ชื่อ               | หน้าที่หลัก                  | สโลแกน                                               |
| :---------- | :----------------- | :--------------------------- | :--------------------------------------------------- |
| `&&`        | Logical AND        | เช็คเงื่อนไข / ป้องกัน Error | "ถ้าข้างหน้าพัง ฉันเลิกทำต่อ"                       |
| `\|\|`      | Logical OR         | หาค่าสำรอง (ครอบคลุม Falsy)  | "ถ้าข้างหน้าไม่มีค่า ฉันเอาตัวสำรองมาแทน"          |
| `??`        | Nullish Coalescing | หาค่าสำรอง (แบบเจาะจง)       | "ถ้าข้างหน้าเป็น null/undefined เท่านั้น ฉันถึงจะเปลี่ยน" |

- **ใช้ `??` เป็นหลัก** สำหรับ Option หรือ Configuration เพราะแม่นยำกว่า ไม่เผลอทับค่า `0` หรือ `false` ที่ผู้ใช้ตั้งใจกรอกมา
- **ใช้ `||`** เมื่อต้องการครอบคลุม String ว่าง (`""`) หรือ `false` ด้วย เช่น ถ้าชื่อเล่นว่างให้ใช้ชื่อจริงแทน
- **ใช้ `&&`** เมื่อต้องการรันโค้ดเฉพาะเมื่อเงื่อนไขเป็นจริง หรือป้องกัน Error จากการเข้าถึง property ที่อาจไม่มีอยู่
- **ข้อห้าม:** อย่าใช้ `&&` ร่วมกับ `??` โดยไม่มีวงเล็บ เพราะ JavaScript จะพ่น SyntaxError

```js
// ❌ SyntaxError
a && b ?? c

// ✅ ต้องใส่วงเล็บ
(a && b) ?? c
```

---

## 7. Guard Clause (Early Return Pattern)

เทคนิคที่นิยมใช้แทน `if` ซ้อนกันหลายชั้น ทำให้โค้ดอ่านง่ายขึ้น

```js
// ❌ แบบที่ไม่แนะนำ — if ซ้อนกันลึก
function processOrder(user, order) {
  if (user) {
    if (user.isActive) {
      if (order) {
        if (order.items.length > 0) {
          console.log("ประมวลผลคำสั่งซื้อ");
        }
      }
    }
  }
}

// ✅ แบบที่แนะนำ — Guard Clause
function processOrder(user, order) {
  if (!user) return console.log("ไม่พบผู้ใช้");
  if (!user.isActive) return console.log("บัญชีถูกระงับ");
  if (!order) return console.log("ไม่พบคำสั่งซื้อ");
  if (order.items.length === 0) return console.log("ไม่มีสินค้าในตะกร้า");

  console.log("ประมวลผลคำสั่งซื้อ");
}
```

---

## สรุปการเลือกใช้งาน

| สถานการณ์ | ใช้ |
|-----------|-----|
| เงื่อนไขเดียวง่ายๆ | `if` |
| มี 2 ทางเลือก | `if...else` หรือ Ternary `?:` |
| มีหลายเงื่อนไขต่อเนื่อง | `if...else if...else` |
| เปรียบเทียบค่าตัวแปรกับหลาย case | `switch` |
| กำหนดค่า default | `??` หรือ `\|\|` |
| หลีกเลี่ยง if ซ้อนกัน | Guard Clause |

---

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

วนซ้ำตราบเท่าที่เงื่อนไขยังเป็น `true` เหมาะเมื่อไม่รู้จำนวนรอบล่วงหน้า

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

console.log(ages.some((age) => age >= 18));  // true — มีอย่างน้อยหนึ่งคนที่อายุ >= 18
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

| สถานการณ์ | ใช้ |
|-----------|-----|
| รู้จำนวนรอบแน่นอน | `for` |
| ไม่รู้จำนวนรอบ วนจนกว่าเงื่อนไขจะเป็นเท็จ | `while` |
| ต้องทำงานอย่างน้อย 1 รอบ | `do...while` |
| วนผ่านค่าใน Array หรือ Iterable | `for...of` |
| วนผ่าน key ของ Object | `for...in` |
| แปลง / กรอง / รวม Array | `map`, `filter`, `reduce` |
| วนทำงานกับ Array โดยไม่ต้องการค่าคืน | `forEach` |
