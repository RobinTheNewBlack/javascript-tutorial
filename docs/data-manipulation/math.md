# Math

## Math.min() / Math.max()

```js
Math.min(3, 1, 4, 1, 5); // 1 — ค่าน้อยสุด
Math.max(3, 1, 4, 1, 5); // 5 — ค่ามากสุด

Math.min(); // Infinity
Math.max(); // -Infinity
```

ใช้กับ array — ต้อง spread เพราะ `Math.min/max` รับ arguments ไม่ใช่ array:

```js
const scores = [88, 72, 95, 60, 100];

Math.min(...scores); // 60
Math.max(...scores); // 100
```

---

## Math.abs()

```js
Math.abs(-5);  // 5 — ค่าสัมบูรณ์ (ตัวเลขที่ไม่มีเครื่องหมาย)
Math.abs(5);   // 5
Math.abs(-0);  // 0
```

---

## Math.round() / Math.floor() / Math.ceil()

```js
Math.round(4.5); // 5 — ปัดปกติ (>= .5 ปัดขึ้น)
Math.round(4.4); // 4

Math.floor(4.9); // 4 — ปัดลงเสมอ
Math.floor(-4.1); // -5

Math.ceil(4.1);  // 5 — ปัดขึ้นเสมอ
Math.ceil(-4.9); // -4
```

---

## Math.trunc()

```js
Math.trunc(4.9);  // 4 — ตัดทศนิยมทิ้ง (ไม่ปัด)
Math.trunc(-4.9); // -4 — ต่างจาก floor ตรงที่ไม่ปัดลงสำหรับเลขลบ
```

| method | 4.9 | -4.9 |
| -------------- | --- | ---- |
| `Math.floor()` | 4   | -5   |
| `Math.ceil()`  | 5   | -4   |
| `Math.round()` | 5   | -5   |
| `Math.trunc()` | 4   | -4   |

---

## Math.pow() / Math.sqrt()

```js
Math.pow(2, 10); // 1024 — ยกกำลัง (เหมือน 2 ** 10)
Math.sqrt(16);   // 4 — รากที่สอง
Math.sqrt(2);    // 1.4142135623730951
```

---

## Math.random()

คืนค่าตัวเลข `[0, 1)` (รวม 0 ไม่รวม 1)

```js
Math.random(); // เช่น 0.7341...

// สุ่มจำนวนเต็มระหว่าง min ถึง max (รวมทั้งสองปลาย)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInt(1, 6); // ลูกเต๋า: 1-6
randomInt(0, 100); // 0-100
```

---

## Math constants

```js
Math.PI;    // 3.141592653589793
Math.E;     // 2.718281828459045 — Euler's number
Math.SQRT2; // 1.4142135623730951
```
