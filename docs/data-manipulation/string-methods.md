# String Methods

## ความยาวและเข้าถึงตัวอักษร

```js
const str = "Hello, World!";

str.length;     // 13 — จำนวนตัวอักษร
str[0];         // "H" — เข้าถึงด้วย index
str.at(0);      // "H"
str.at(-1);     // "!" — ตัวสุดท้าย (index ลบได้)
str.charAt(1);  // "e"
```

---

## ค้นหา

```js
const str = "Hello, World!";

str.includes("World");     // true — มีอยู่หรือไม่
str.startsWith("Hello");   // true — ขึ้นต้นด้วย
str.endsWith("!");         // true — ลงท้ายด้วย
str.indexOf("o");          // 4 — ตำแหน่งแรกที่เจอ (หาจากซ้ายไปขวา)
str.lastIndexOf("o");      // 8 — ตำแหน่งสุดท้ายที่เจอ
str.indexOf("z");          // -1 — ไม่เจอ
```

---

## ตัด / แบ่ง

```js
const str = "Hello, World!";

str.slice(7, 12);   // "World" — ตัดจาก index 7 ถึง 11
str.slice(7);       // "World!" — ถึงท้าย
str.slice(-6);      // "orld!" — นับจากท้าย... จริงๆ คือ "orld!"
str.slice(-6, -1);  // "orld!" → "orld"

str.substring(7, 12); // "World" — คล้าย slice แต่ไม่รับ index ลบ
```

`slice` vs `substring`:

| | index ลบ | สลับ start/end อัตโนมัติ |
| --- | --- | --- |
| `slice` | ✅ นับจากท้าย | ❌ คืน `""` |
| `substring` | ❌ ถือเป็น 0 | ✅ |

```js
// split — แบ่งเป็น array
"a,b,c".split(",");      // ["a", "b", "c"]
"hello".split("");       // ["h", "e", "l", "l", "o"]
"one two three".split(" "); // ["one", "two", "three"]
"hello".split("", 3);    // ["h", "e", "l"] — จำกัดจำนวน
```

---

## แปลงตัวพิมพ์

```js
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
```

---

## ตัด whitespace

```js
"  hello  ".trim();       // "hello" — ตัดทั้งสองข้าง
"  hello  ".trimStart();  // "hello  " — ตัดซ้าย
"  hello  ".trimEnd();    // "  hello" — ตัดขวา
```

---

## แทนที่

```js
const str = "foo bar foo";

str.replace("foo", "baz");    // "baz bar foo" — แทนตัวแรกที่เจอ
str.replaceAll("foo", "baz"); // "baz bar baz" — แทนทุกตัว

// ใช้ regex
str.replace(/foo/g, "baz");   // "baz bar baz" — เหมือน replaceAll
"Hello World".replace(/[aeiou]/gi, "*"); // "H*ll* W*rld"
```

---

## เติมและซ้ำ

```js
// padStart / padEnd — เติมตัวอักษรให้ครบความยาวที่กำหนด
"5".padStart(3, "0");   // "005" — มักใช้กับตัวเลข
"hi".padEnd(5, ".");    // "hi..."

// repeat — ซ้ำ string
"ha".repeat(3); // "hahaha"
"-".repeat(10); // "----------"
```

---

## แปลงเป็น Array และกลับมา

```js
// join array กลับเป็น string
["แอปเปิ้ล", "กล้วย", "ส้ม"].join(", "); // "แอปเปิ้ล, กล้วย, ส้ม"
["a", "b", "c"].join("");                  // "abc"
["a", "b", "c"].join(" - ");              // "a - b - c"
```

---

## Template Literal

```js
const name = "Alice";
const age = 30;

// แทรกตัวแปร
`Hello, ${name}!`;           // "Hello, Alice!"
`Age: ${age + 1}`;           // "Age: 31"

// multiline string
const msg = `line 1
line 2
line 3`;

// tagged template (ขั้นสูง)
function tag(strings, ...values) {
  return strings.raw[0]; // เข้าถึง raw string
}
```

---

## แปลงระหว่าง String กับ Number

```js
// String → Number
Number("42");      // 42
Number("3.14");    // 3.14
Number("");        // 0
Number("abc");     // NaN

parseInt("42px");  // 42 — หยุดเมื่อเจอตัวอักษร
parseFloat("3.14rem"); // 3.14
parseInt("0xff", 16);  // 255 — แปลงเลขฐาน 16

// Number → String
(42).toString();   // "42"
(255).toString(16); // "ff" — แปลงเป็น hex
(3.14159).toFixed(2); // "3.14" — ทศนิยมกี่ตำแหน่ง
```
