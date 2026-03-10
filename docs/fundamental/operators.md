# JavaScript Fundamentals

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

console.log(a + b); // 13  — บวก
console.log(a - b); // 7   — ลบ
console.log(a * b); // 30  — คูณ
console.log(a / b); // 3.333... — หาร
console.log(a % b); // 1   — หารเอาเศษ (Modulus)
console.log(a ** b); // 1000 — ยกกำลัง (ES2016)
```

### Increment / Decrement

```js
let count = 5;

count++; // เพิ่มทีละ 1 (Post-increment)
console.log(count); // 6

count--; // ลดทีละ 1 (Post-decrement)
console.log(count); // 5

console.log(++count); // 6 — เพิ่มก่อนแล้วค่อยใช้ (Pre-increment)
console.log(--count); // 5 — ลดก่อนแล้วค่อยใช้ (Pre-decrement)
```

---

## 2. Assignment Operators (ตัวดำเนินการกำหนดค่า)

ใช้สำหรับกำหนดค่าให้กับตัวแปร

```js
let x = 10;

x += 5; // x = x + 5  → 15
x -= 3; // x = x - 3  → 12
x *= 2; // x = x * 2  → 24
x /= 4; // x = x / 4  → 6
x %= 4; // x = x % 4  → 2
x **= 3; // x = x ** 3 → 8

console.log(x); // 8
```

---

## 3. Comparison Operators (ตัวดำเนินการเปรียบเทียบ)

ใช้เปรียบเทียบค่า 2 ค่า และคืนค่าเป็น `true` หรือ `false`

```js
console.log(5 > 3); // true  — มากกว่า
console.log(5 < 3); // false — น้อยกว่า
console.log(5 >= 5); // true  — มากกว่าหรือเท่ากับ
console.log(5 <= 4); // false — น้อยกว่าหรือเท่ากับ
```

### `==` vs `===` (สำคัญมาก!)

```js
// == (Loose Equality) — เปรียบเทียบค่า แต่แปลงชนิดข้อมูลก่อน
console.log(5 == "5"); // true  ⚠️ — แปลง string เป็น number ก่อนเทียบ
console.log(0 == false); // true  ⚠️
console.log(null == undefined); // true ⚠️

// === (Strict Equality) — เปรียบเทียบทั้งค่าและชนิดข้อมูล
console.log(5 === "5"); // false ✅ — ชนิดต่างกัน
console.log(0 === false); // false ✅
console.log(5 === 5); // true  ✅
```

### `!=` vs `!==`

```js
console.log(5 != "5"); // false — loose (ถือว่าเท่ากัน)
console.log(5 !== "5"); // true  — strict (ชนิดต่างกัน)
```

> แนะนำให้ใช้ `===` และ `!==` เสมอ เพื่อหลีกเลี่ยง bug จากการแปลงชนิดข้อมูล

---

## 4. Logical Operators (ตัวดำเนินการเชิงตรรกะ)

ใช้รวมหรือกลับเงื่อนไข Boolean

| Operator | ความหมาย                             | ตัวอย่าง                   |
| -------- | ------------------------------------ | -------------------------- |
| `&&`     | AND — จริงทั้งคู่ถึงจะเป็นจริง       | `true && false` → `false`  |
| `\|\|`   | OR — จริงอย่างน้อยหนึ่งอันก็เป็นจริง | `true \|\| false` → `true` |
| `!`      | NOT — กลับค่า                        | `!true` → `false`          |

```js
const age = 20;
const hasID = true;

console.log(age >= 18 && hasID); // true  — อายุครบและมีบัตร
console.log(age < 18 || hasID); // true  — อย่างน้อยเงื่อนไขหนึ่งจริง
console.log(!hasID); // false — กลับค่า
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

console.log(score || 100); // 100 ⚠️ — 0 เป็น falsy จึงใช้ค่า fallback
console.log(score ?? 100); // 0   ✅ — 0 ไม่ใช่ null/undefined

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

console.log(user.address?.city); // "กรุงเทพ"
console.log(user.contact?.phone); // undefined — ไม่ error แม้ contact ไม่มีอยู่
console.log(user.greet?.()); // undefined — เรียก method ที่อาจไม่มีอยู่ได้
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
console.log(5 & 3); // 1  — AND
console.log(5 | 3); // 7  — OR
console.log(5 ^ 3); // 6  — XOR
console.log(~5); // -6 — NOT
console.log(5 << 1); // 10 — Left shift
console.log(5 >> 1); // 2  — Right shift
```

---

## ลำดับความสำคัญของ Operator (Operator Precedence)

JavaScript ประเมินค่า operator ตามลำดับความสำคัญ (สูงสุดถึงต่ำสุด):

| ลำดับ  | Operator                | ตัวอย่าง      |
| ------ | ----------------------- | ------------- |
| สูงสุด | `()` วงเล็บ             | `(2 + 3) * 4` |
|        | `**` ยกกำลัง            | `2 ** 3`      |
|        | `* / %` คูณ หาร เศษ     | `10 * 2 / 5`  |
|        | `+ -` บวก ลบ            | `5 + 3 - 1`   |
|        | `> >= < <=` เปรียบเทียบ | `5 > 3`       |
|        | `== != === !==` เท่ากับ | `5 === 5`     |
|        | `&&` AND                | `a && b`      |
|        | `\|\|` OR               | `a \|\| b`    |
|        | `??` Nullish            | `a ?? b`      |
| ต่ำสุด | `= += -=` กำหนดค่า      | `x = 5`       |

```js
console.log(2 + 3 * 4); // 14 — คูณก่อน แล้วค่อยบวก
console.log((2 + 3) * 4); // 20 — วงเล็บก่อน
console.log(2 ** (3 ** 2)); // 512 — ยกกำลังประเมินจากขวาไปซ้าย (3**2=9, 2**9=512)
```

---
