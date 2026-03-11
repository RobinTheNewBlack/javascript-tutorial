# JavaScript Fundamentals

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
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
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
const grade = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "F";

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
console.log(true && "Hello"); // "Hello" (ตัวแรกจริง เลยไปต่อ คืนตัวสุดท้าย)
console.log(0 && "Apple"); // 0 (เจอ 0 ซึ่งเป็น Falsy หยุดทันที)
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
{
    isLoggedIn && <LogoutButton />;
}
// ถ้า isLoggedIn เป็น false → ไม่แสดงปุ่ม Logout เลย
```

### สรุปการเลือกใช้ทั้ง 3 ตัว

| เครื่องหมาย | ชื่อ               | หน้าที่หลัก                  | สโลแกน                                                    |
| :---------- | :----------------- | :--------------------------- | :-------------------------------------------------------- |
| `&&`        | Logical AND        | เช็คเงื่อนไข / ป้องกัน Error | "ถ้าข้างหน้าพัง ฉันเลิกทำต่อ"                             |
| `\|\|`      | Logical OR         | หาค่าสำรอง (ครอบคลุม Falsy)  | "ถ้าข้างหน้าไม่มีค่า ฉันเอาตัวสำรองมาแทน"                 |
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

| สถานการณ์                        | ใช้                           |
| -------------------------------- | ----------------------------- |
| เงื่อนไขเดียวง่ายๆ               | `if`                          |
| มี 2 ทางเลือก                    | `if...else` หรือ Ternary `?:` |
| มีหลายเงื่อนไขต่อเนื่อง          | `if...else if...else`         |
| เปรียบเทียบค่าตัวแปรกับหลาย case | `switch`                      |
| กำหนดค่า default                 | `??` หรือ `\|\|`              |
| หลีกเลี่ยง if ซ้อนกัน            | Guard Clause                  |

---
