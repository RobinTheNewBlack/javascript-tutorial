# Object Manipulation

## ดึง keys / values / entries

```js
const person = { name: "สมชาย", age: 30, city: "กรุงเทพ" };

console.log(Object.keys(person)); // ["name", "age", "city"]
console.log(Object.values(person)); // ["สมชาย", 30, "กรุงเทพ"]
console.log(Object.entries(person)); // [["name", "สมชาย"], ["age", 30], ["city", "กรุงเทพ"]]
```

---

## คัดลอก / รวม object

```js
const clone = Object.assign({}, person); // คัดลอก shallow copy
const merged = Object.assign({}, person, { job: "developer" }); // รวมหลาย object

const spreadClone = { ...person }; // คัดลอกด้วย spread (นิยมกว่า)
const spreadMerged = { ...person, job: "developer" }; // รวมด้วย spread
```

---

## ตรวจสอบ property

```js
console.log("name" in person); // true — ตรวจว่ามี key นี้ไหม
console.log(person.hasOwnProperty("age")); // true — เป็น property ของ object เองไหม
```

---

## แปลง entries กลับเป็น object

```js
const entries = [["name", "สมหญิง"], ["age", 25]];
const newObj = Object.fromEntries(entries); // { name: "สมหญิง", age: 25 }

// ใช้คู่กับ entries + map เพื่อแปลงค่า
const upper = Object.fromEntries(
    Object.entries(person).map(([k, v]) => [k, String(v).toUpperCase()])
);
```

---

## ป้องกันการแก้ไข

```js
const config = Object.freeze({ host: "localhost", port: 3000 });
config.port = 8080; // ไม่มีผล — object ถูก freeze แล้ว

const sealed = Object.seal({ x: 1 });
sealed.x = 99; // แก้ไขค่าได้
sealed.y = 2; // เพิ่ม property ใหม่ไม่ได้
```
