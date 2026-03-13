# JavaScript Fundamentals

# ส่วนที่ 7: คลาสและการเขียนโปรแกรมเชิงวัตถุ (Class & OOP)

## OOP คืออะไร?

OOP (Object-Oriented Programming) คือแนวคิดการเขียนโปรแกรมที่จัดระเบียบโค้ดในรูปแบบของ "วัตถุ" (Object) แต่ละวัตถุจะมี **ข้อมูล (Properties)** และ **ความสามารถ (Methods)** เป็นของตัวเอง

**4 หลักการของ OOP:**
- **Encapsulation** — ซ่อนข้อมูลภายในและเปิดเผยเฉพาะสิ่งที่จำเป็น
- **Inheritance** — รับสืบทอดคุณสมบัติจาก Class แม่
- **Polymorphism** — Object ต่างชนิดตอบสนองต่อคำสั่งเดียวกันแตกต่างกัน
- **Abstraction** — ซ่อนความซับซ้อน เปิดเผยแค่สิ่งที่จำเป็น

---

## 1. Class พื้นฐาน

`class` คือแม่แบบ (Blueprint) สำหรับสร้าง Object ใช้ `new` เพื่อสร้าง instance จาก class

```js
class Dog {
    constructor(name, breed) {
        this.name = name;   // Property
        this.breed = breed; // Property
    }

    bark() {
        console.log(`${this.name} เห่า: โฮ่ง โฮ่ง!`);
    }

    introduce() {
        console.log(`ฉันชื่อ ${this.name} พันธุ์ ${this.breed}`);
    }
}

const dog1 = new Dog("บัดดี้", "โกลเดน รีทรีฟเวอร์");
const dog2 = new Dog("แม็กซ์", "ไซบีเรียน ฮัสกี้");

dog1.bark();      // "บัดดี้ เห่า: โฮ่ง โฮ่ง!"
dog2.introduce(); // "ฉันชื่อ แม็กซ์ พันธุ์ ไซบีเรียน ฮัสกี้"
```

### `constructor` คืออะไร?

`constructor` คือ method พิเศษที่ทำงานอัตโนมัติเมื่อสร้าง object ด้วย `new` ใช้สำหรับตั้งค่าเริ่มต้น

```js
class Counter {
    constructor(start = 0) {
        this.count = start; // กำหนดค่าเริ่มต้น
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

const counter = new Counter(10);
counter.increment();
counter.increment();
console.log(counter.getCount()); // 12
```

---

## 2. Encapsulation — การห่อหุ้มข้อมูล

ซ่อน property ภายในไม่ให้แก้ไขจากภายนอกโดยตรง โดยใช้ `#` นำหน้า (Private Field)

```js
class BankAccount {
    #balance; // Private — เข้าถึงจากนอก class ไม่ได้

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("จำนวนเงินต้องมากกว่า 0");
            return;
        }
        this.#balance += amount;
        console.log(`ฝาก ${amount} บาท ยอดคงเหลือ: ${this.#balance} บาท`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("ยอดเงินไม่เพียงพอ");
            return;
        }
        this.#balance -= amount;
        console.log(`ถอน ${amount} บาท ยอดคงเหลือ: ${this.#balance} บาท`);
    }

    get balance() {
        return this.#balance; // อ่านได้แต่ แก้ตรงๆ ไม่ได้
    }
}

const account = new BankAccount(1000);
account.deposit(500);   // "ฝาก 500 บาท ยอดคงเหลือ: 1500 บาท"
account.withdraw(200);  // "ถอน 200 บาท ยอดคงเหลือ: 1300 บาท"
console.log(account.balance); // 1300

// account.#balance = 999999; // SyntaxError — เข้าถึงตรงๆ ไม่ได้
```

### Getter และ Setter

ใช้ควบคุมการอ่านและเขียนค่า property

```js
class Temperature {
    #celsius;

    constructor(celsius) {
        this.#celsius = celsius;
    }

    get fahrenheit() {
        return (this.#celsius * 9) / 5 + 32;
    }

    set celsius(value) {
        if (value < -273.15) {
            throw new Error("อุณหภูมิต่ำกว่า Absolute Zero ไม่ได้");
        }
        this.#celsius = value;
    }

    get celsius() {
        return this.#celsius;
    }
}

const temp = new Temperature(100);
console.log(temp.celsius);    // 100
console.log(temp.fahrenheit); // 212

temp.celsius = 0;
console.log(temp.fahrenheit); // 32
```

---

## 3. Inheritance — การสืบทอด

ใช้ `extends` เพื่อให้ Class ลูกรับคุณสมบัติทั้งหมดจาก Class แม่ และ `super` เพื่อเรียกใช้ constructor หรือ method ของ Class แม่

```js
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} ร้องว่า: ${this.sound}`);
    }

    eat(food) {
        console.log(`${this.name} กำลังกิน ${food}`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "เมี้ยว"); // เรียก constructor ของ Animal
        this.lives = 9;
    }

    purr() {
        console.log(`${this.name} กำลังครางเพลิน...`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "โฮ่ง");
        this.tricks = [];
    }

    learnTrick(trick) {
        this.tricks.push(trick);
        console.log(`${this.name} เรียนรู้ท่า: ${trick}`);
    }
}

const cat = new Cat("วิสกี้");
cat.speak();        // "วิสกี้ ร้องว่า: เมี้ยว"
cat.eat("ปลาทูน่า"); // "วิสกี้ กำลังกิน ปลาทูน่า"
cat.purr();         // "วิสกี้ กำลังครางเพลิน..."

const dog = new Dog("บัดดี้");
dog.speak();                // "บัดดี้ ร้องว่า: โฮ่ง"
dog.learnTrick("นั่ง");     // "บัดดี้ เรียนรู้ท่า: นั่ง"
dog.learnTrick("ยื่นมือ");  // "บัดดี้ เรียนรู้ท่า: ยื่นมือ"
```

### Override Method — เขียนทับ method ของ Class แม่

```js
class Animal {
    describe() {
        return `ฉันเป็นสัตว์ชื่อ ${this.name}`;
    }
}

class Robot extends Animal {
    describe() {
        // เรียก method ของ Class แม่แล้วเพิ่มเติม
        return `${super.describe()} (แต่จริงๆ ฉันคือหุ่นยนต์)`;
    }
}

const r = new Robot();
r.name = "R2-D2";
console.log(r.describe()); // "ฉันเป็นสัตว์ชื่อ R2-D2 (แต่จริงๆ ฉันคือหุ่นยนต์)"
```

---

## 4. Polymorphism — การทำงานหลายรูปแบบ

Object ต่างชนิดสามารถตอบสนองต่อ method เดียวกันในแบบของตัวเอง

```js
class Shape {
    area() {
        return 0;
    }

    describe() {
        console.log(`พื้นที่ของฉันคือ ${this.area()} ตารางหน่วย`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];

// เรียก describe() เหมือนกันทุกตัว แต่ได้ผลลัพธ์ต่างกัน
shapes.forEach((shape) => shape.describe());
// "พื้นที่ของฉันคือ 78.54 ตารางหน่วย"
// "พื้นที่ของฉันคือ 24 ตารางหน่วย"
// "พื้นที่ของฉันคือ 12 ตารางหน่วย"
```

---

## 5. Static Method และ Static Property

`static` คือ method หรือ property ที่เป็นของ Class โดยตรง ไม่ใช่ของ instance แต่ละตัว เรียกใช้ผ่านชื่อ Class ได้เลย

```js
class MathHelper {
    static PI = 3.14159;

    static circleArea(radius) {
        return MathHelper.PI * radius ** 2;
    }

    static max(a, b) {
        return a > b ? a : b;
    }
}

console.log(MathHelper.PI);              // 3.14159
console.log(MathHelper.circleArea(5));   // 78.53975
console.log(MathHelper.max(10, 20));     // 20

// ไม่ต้องสร้าง instance — เรียกผ่าน class ได้เลย
// const math = new MathHelper();
// math.circleArea(5); // TypeError: math.circleArea is not a function
```

### ตัวอย่างจริง — นับจำนวน Instance

```js
class User {
    static count = 0;

    constructor(name) {
        this.name = name;
        User.count++;
    }

    static getCount() {
        return `มีผู้ใช้ทั้งหมด ${User.count} คน`;
    }
}

const u1 = new User("สมชาย");
const u2 = new User("สมหญิง");
const u3 = new User("สมศรี");

console.log(User.getCount()); // "มีผู้ใช้ทั้งหมด 3 คน"
```

---

## 6. Abstract Class (แนวทาง)

JavaScript ไม่มี `abstract` โดยตรง แต่จำลองได้โดยการ throw error ใน method ที่ต้องการให้ Class ลูก implement เอง

```js
class Vehicle {
    constructor(brand) {
        if (new.target === Vehicle) {
            throw new Error("ไม่สามารถสร้าง Vehicle โดยตรงได้ ต้องใช้ผ่าน Class ลูก");
        }
        this.brand = brand;
    }

    // Abstract method — Class ลูกต้อง implement
    getFuelType() {
        throw new Error("Class ลูกต้อง implement getFuelType()");
    }

    describe() {
        console.log(`${this.brand} ใช้เชื้อเพลิง: ${this.getFuelType()}`);
    }
}

class ElectricCar extends Vehicle {
    getFuelType() {
        return "ไฟฟ้า";
    }
}

class GasCar extends Vehicle {
    getFuelType() {
        return "น้ำมัน";
    }
}

const tesla = new ElectricCar("Tesla");
const honda = new GasCar("Honda");

tesla.describe(); // "Tesla ใช้เชื้อเพลิง: ไฟฟ้า"
honda.describe(); // "Honda ใช้เชื้อเพลิง: น้ำมัน"

// new Vehicle("Toyota"); // Error: ไม่สามารถสร้าง Vehicle โดยตรงได้
```

---

## 7. Mixin — เพิ่มความสามารถโดยไม่ต้อง Inherit

JavaScript รองรับ Inheritance เดี่ยว (Single Inheritance) เท่านั้น ถ้าต้องการความสามารถจากหลายที่ใช้ Mixin แทน

```js
// Mixin คือ Object ที่มี method รอให้นำไปใส่
const Flyable = {
    fly() {
        console.log(`${this.name} กำลังบิน`);
    },
    land() {
        console.log(`${this.name} ลงจอด`);
    },
};

const Swimmable = {
    swim() {
        console.log(`${this.name} กำลังว่ายน้ำ`);
    },
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}

// ผสม method เข้า Duck
Object.assign(Duck.prototype, Flyable, Swimmable);

const duck = new Duck("โดนัลด์");
duck.fly();  // "โดนัลด์ กำลังบิน"
duck.swim(); // "โดนัลด์ กำลังว่ายน้ำ"
```

---

## 8. instanceof และ typeof

ตรวจสอบชนิดและต้นกำเนิดของ Object

```js
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true — เพราะ Dog extends Animal
console.log(typeof dog);            // "object"
console.log(typeof Dog);            // "function" — Class คือ function ใน JS
```

---

## 9. ตัวอย่างสมบูรณ์ — ระบบจัดการพนักงาน

```js
class Employee {
    #salary;

    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    raiseSalary(percent) {
        this.#salary *= 1 + percent / 100;
        console.log(`ปรับเงินเดือน ${this.name} เป็น ${this.#salary.toFixed(2)} บาท`);
    }

    getInfo() {
        return `${this.name} | แผนก: ${this.department} | เงินเดือน: ${this.#salary} บาท`;
    }
}

class Manager extends Employee {
    constructor(name, department, salary) {
        super(name, department, salary);
        this.team = [];
    }

    addMember(employee) {
        this.team.push(employee);
        console.log(`เพิ่ม ${employee.name} เข้าทีมของ ${this.name}`);
    }

    getInfo() {
        return `[ผู้จัดการ] ${super.getInfo()} | ทีม: ${this.team.length} คน`;
    }
}

const manager = new Manager("วิชัย", "IT", 80000);
const emp1 = new Employee("สมชาย", "IT", 45000);
const emp2 = new Employee("สมหญิง", "IT", 48000);

manager.addMember(emp1); // "เพิ่ม สมชาย เข้าทีมของ วิชัย"
manager.addMember(emp2); // "เพิ่ม สมหญิง เข้าทีมของ วิชัย"

emp1.raiseSalary(10); // "ปรับเงินเดือน สมชาย เป็น 49500.00 บาท"

console.log(manager.getInfo());
// "[ผู้จัดการ] วิชัย | แผนก: IT | เงินเดือน: 80000 บาท | ทีม: 2 คน"
```

---

## สรุปการเลือกใช้งาน

| แนวคิด            | คีย์เวิร์ด / วิธี              | ใช้เมื่อ                                          |
| ----------------- | ------------------------------ | ------------------------------------------------- |
| สร้าง Class       | `class`, `constructor`         | ต้องการแม่แบบสำหรับสร้าง Object หลายตัว          |
| ซ่อนข้อมูล        | `#privateField`, `get`, `set`  | ไม่ต้องการให้แก้ไขค่าโดยตรงจากภายนอก             |
| สืบทอดคุณสมบัติ   | `extends`, `super`             | Class ลูกมีทุกอย่างของ Class แม่และเพิ่มเติมได้   |
| เขียนทับ method   | Override + `super.method()`    | Class ลูกต้องการพฤติกรรมต่างจาก Class แม่        |
| method ของ Class  | `static`                       | Utility function ที่ไม่ต้องการ instance           |
| เพิ่มความสามารถ   | Mixin + `Object.assign`        | ต้องการ method จากหลาย source โดยไม่ inherit       |
| ตรวจสอบชนิด       | `instanceof`                   | ต้องการรู้ว่า object สร้างมาจาก Class ไหน         |
