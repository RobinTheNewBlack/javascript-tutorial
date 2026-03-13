# Array Manipulation

## การสร้าง Array

```js
// Array literal (วิธีปกติ)
const a = [1, 2, 3];

// new Array() — สร้าง array ว่างด้วยขนาดที่กำหนด
const empty = new Array(5); // [ <5 empty items> ]
const filled = new Array(3).fill(0); // [0, 0, 0]

// Array.of() — สร้างจาก arguments (ต่างจาก new Array ตรงที่ไม่สับสนเรื่อง length)
const nums = Array.of(1, 2, 3); // [1, 2, 3]
const single = Array.of(5); // [5]  ← new Array(5) จะได้ empty 5 slots แทน

// Array.from() — สร้างจาก iterable หรือ array-like object
const fromString = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const fromSet = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
const fromMap = Array.from(new Map([["a", 1], ["b", 2]])); // [["a", 1], ["b", 2]]

// Array.from() กับ map function — สร้าง array พร้อมแปลงค่า
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
const squares = Array.from({ length: 5 }, (_, i) => i ** 2); // [0, 1, 4, 9, 16]
```

---

## เพิ่ม / ลบ สมาชิก

```js
fruits.push("มะม่วง"); // เพิ่มท้าย → ["แอปเปิ้ล", "กล้วย", "ส้ม", "มะม่วง"]
fruits.pop(); // ลบท้าย → ["แอปเปิ้ล", "กล้วย", "ส้ม"]
fruits.unshift("องุ่น"); // เพิ่มหน้า → ["องุ่น", "แอปเปิ้ล", "กล้วย", "ส้ม"]
fruits.shift(); // ลบหน้า → ["แอปเปิ้ล", "กล้วย", "ส้ม"]
fruits.splice(1, 1, "ลิ้นจี่"); // แทนที่ index 1 จำนวน 1 ตัว → ["แอปเปิ้ล", "ลิ้นจี่", "ส้ม"]
```

`splice(start, deleteCount, ...items)` — แก้ไข array ตรงตำแหน่งที่กำหนด คืนค่าเป็น array ของสมาชิกที่ถูกลบ

```js
const arr = ["a", "b", "c", "d", "e"];

// ลบอย่างเดียว
arr.splice(1, 2); // ลบ 2 ตัวจาก index 1 → arr เป็น ["a", "d", "e"]

// แทรกอย่างเดียว (deleteCount = 0)
arr.splice(1, 0, "x", "y"); // แทรก "x", "y" ที่ index 1 → ["a", "x", "y", "d", "e"]

// แทนที่
arr.splice(2, 1, "z"); // ลบ 1 ตัวที่ index 2 แล้วใส่ "z" แทน → ["a", "x", "z", "d", "e"]

// index ติดลบ — นับจากท้าย
arr.splice(-1, 1); // ลบตัวสุดท้าย → ["a", "x", "z", "d"]

// รับค่าที่ถูกลบกลับมา
const removed = arr.splice(1, 2); // removed = ["x", "z"], arr = ["a", "d"]
```

---

## ค้นหา

```js
console.log(fruits.includes("กล้วย")); // true
console.log(fruits.indexOf("ส้ม")); // 2 — หาจากซ้ายไปขวา
console.log(fruits.lastIndexOf("ส้ม")); // คืน index ที่เจอล่าสุด (หาจากขวาไปซ้าย)

const nums = [1, 2, 3, 2, 1];
console.log(nums.indexOf(2)); // 1 — เจอตัวแรกที่ index 1
console.log(nums.lastIndexOf(2)); // 3 — เจอตัวสุดท้ายที่ index 3
console.log(nums.lastIndexOf(99)); // -1 — ไม่เจอ
console.log(fruits.find((f) => f === "ส้ม")); // "ส้ม"
console.log(fruits.findIndex((f) => f === "ส้ม")); // 2
```

---

## วนซ้ำ / แปลงข้อมูล

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n)); // วนแสดงทุกตัว

const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

const hasEven = numbers.some((n) => n % 2 === 0); // true — มีอย่างน้อย 1 ตัว
const allPositive = numbers.every((n) => n > 0); // true — ทุกตัวเป็นจริง
```

---

## จัดเรียง / คัดลอก

```js
const nums = [3, 1, 4, 1, 5];

nums.sort((a, b) => a - b); // [1, 1, 3, 4, 5] — เรียงน้อยไปมาก
nums.reverse(); // [5, 4, 3, 1, 1] — กลับลำดับ

const copy = fruits.slice(0, 2); // คัดลอก index 0-1 → array ใหม่
const merged = [...fruits, ...nums]; // รวม 2 arrays ด้วย spread
const combined = fruits.concat(nums); // รวม 2 arrays → array ใหม่ (ไม่แก้ของเดิม)
const multiConcat = fruits.concat(nums, [6, 7]); // รวมหลาย arrays พร้อมกัน
const flat = [[1, 2], [3, 4]].flat(); // [1, 2, 3, 4] — ทำให้แบน
```

---

## Mutate vs Immutable — ต่างกันที่ array ตัวเดิมเปลี่ยนหรือไม่

method บางตัวแก้ไข array ตัวเดิมโดยตรง (mutate) ส่วนบางตัวสร้าง array ใหม่ขึ้นมาโดยไม่แตะของเดิม (immutable) ซึ่งมีผลต่อการทำงานมากโดยเฉพาะใน React

### `.sort()` / `.reverse()` — แก้ array ตัวเดิม (mutate)

```js
const nums = [3, 1, 2];

const sorted = nums.sort();
console.log(sorted); // [1, 2, 3]
console.log(nums);   // [1, 2, 3] ← ตัวเดิมเปลี่ยนด้วย!
console.log(sorted === nums); // true ← เป็น reference เดียวกัน
```

### `.toSorted()` / `.toReversed()` — สร้าง array ใหม่ ตัวเดิมไม่เปลี่ยน (immutable)

```js
const nums = [3, 1, 2];

const sorted = nums.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(nums);   // [3, 1, 2] ← ตัวเดิมยังอยู่ครบ!
console.log(sorted === nums); // false ← คนละ reference
```

### ทำไมถึงสำคัญ? — React และ State Management

ใน React ถ้า mutate array ตัวเดิม React จะไม่รู้ว่า state เปลี่ยน เพราะ reference ยังเป็นตัวเดิม ทำให้ UI ไม่ re-render

```js
// ❌ React ไม่ re-render — reference เดิม
const handleSort = () => {
    items.sort();
    setItems(items); // React มองว่าไม่มีอะไรเปลี่ยน
};

// ✅ ใช้ toSorted — ได้ array ใหม่ React เห็นว่าเปลี่ยน
const handleSort = () => {
    setItems(items.toSorted());
};
```

### ตารางเปรียบเทียบ Mutate vs Immutable

| Mutate (แก้ของเดิม) | Immutable (สร้างใหม่) | หน้าที่              |
| ------------------- | --------------------- | -------------------- |
| `.sort()`           | `.toSorted()`         | จัดเรียง             |
| `.reverse()`        | `.toReversed()`       | กลับลำดับ            |
| `.splice()`         | `.toSpliced()`        | ลบ / แทรก / แทนที่   |
| `arr[i] = x`        | `.with(i, x)`         | แก้ไขค่า index ที่ i |

> **คำแนะนำ:** ใช้ immutable method เป็นหลัก โดยเฉพาะใน React หรือ framework ที่ track state ด้วย reference

---

## แปลงเป็น String

```js
console.log(fruits.join(", ")); // "แอปเปิ้ล, กล้วย, ส้ม"
```
