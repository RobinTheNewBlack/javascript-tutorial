# Destructuring

Destructuring คือการดึงค่าจาก array หรือ object มาใส่ตัวแปรในครั้งเดียว

---

## Array Destructuring

```js
const nums = [1, 2, 3];

const [a, b, c] = nums;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### ข้ามตัวแปร (skip elements)

```js
const [first, , third] = [10, 20, 30];
console.log(first); // 10
console.log(third); // 30
```

### ค่า default

```js
const [x = 0, y = 0] = [5];
console.log(x); // 5
console.log(y); // 0 — ไม่มีค่า ใช้ default แทน
```

### Rest element

```js
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

### สลับค่าตัวแปร (swap variables)

```js
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p); // 2
console.log(q); // 1
```

---

## Object Destructuring

```js
const person = { name: "สมชาย", age: 30, city: "กรุงเทพ" };

const { name, age, city } = person;
console.log(name); // "สมชาย"
console.log(age);  // 30
console.log(city); // "กรุงเทพ"
```

### เปลี่ยนชื่อตัวแปร (rename)

```js
const { name: fullName, age: years } = person;
console.log(fullName); // "สมชาย"
console.log(years);    // 30
```

### ค่า default

```js
const { name, job = "unemployed" } = person;
console.log(job); // "unemployed" — ไม่มี key นี้ใน object ใช้ default แทน
```

### Rest properties

```js
const { name: n, ...rest } = person;
console.log(n);    // "สมชาย"
console.log(rest); // { age: 30, city: "กรุงเทพ" }
```

### Nested object

```js
const user = {
    id: 1,
    address: {
        street: "ถนนสุขุมวิท",
        zip: "10110"
    }
};

const { address: { street, zip } } = user;
console.log(street); // "ถนนสุขุมวิท"
console.log(zip);    // "10110"
```

---

## Destructuring ใน Function Parameters

```js
// รับ object เป็น parameter แล้ว destructure ตรงเลย
function greet({ name, age }) {
    console.log(`สวัสดี ${name} อายุ ${age} ปี`);
}

greet({ name: "สมหญิง", age: 25 }); // "สวัสดี สมหญิง อายุ 25 ปี"

// รับ array
function sum([a, b, c]) {
    return a + b + c;
}

sum([1, 2, 3]); // 6
```

---

## Mixed — Array + Object ผสมกัน

```js
const data = [
    { id: 1, name: "แอปเปิ้ล" },
    { id: 2, name: "กล้วย" }
];

const [{ name: first }, { name: second }] = data;
console.log(first);  // "แอปเปิ้ล"
console.log(second); // "กล้วย"
```
