// const numbers = [1, 2, 3, 4, 5];

// const emptyArr = new Array(5);
// const zeroArr = new Array(5).fill(0);
// console.log(emptyArr);
// console.log(zeroArr);

// const nums = Array.of(1, 2, 3, 4, 5);
// const single = Array.of(42);
// console.log(nums);
// console.log(single);

// const map = new Map([
//   ["Alice", 25],
//   ["Bob", 30],
//   ["Charlie", 35]
// ]);
// const newMapArr = Array.from(map);
// console.log(newMapArr);

// const fruits = ["Apple", "Banana", "Cherry"];
// // fruits.push("Mango");
// // console.log(fruits);
// // fruits.pop();
// // console.log(fruits);
// // fruits.unshift("Strawberry");
// // console.log(fruits);
// // fruits.shift();
// // console.log(fruits);
// fruits.splice(1, 2, "Grapes");
// console.log(fruits);
// fruits.splice(2, 1);
// console.log(fruits);

// const fruits = ["Apple", "Banana", "Cherry", "Mango", "Elderberry"];

// console.log(fruits.includes("Banana"))
// console.log(fruits.indexOf("Apple"))

// const nums = [3, 1, 4, 1, 5];

// const ascending = nums.toSorted((a, b) => a - b);
// const descending = nums.toSorted((a, b) => b - a);
// const reverse = nums.toReversed();
// console.log(ascending);
// console.log(descending);
// console.log(reverse);
// const person = { name: "สมชาย", age: 30, city: "กรุงเทพ" };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const clone = Object.assign({}, person);
// console.log(clone);

// const spreadClone = { ...person };
// console.log(spreadClone);

// const upper = Object.fromEntries(
//   Object.entries(person).map(([key, value]) => [key.toUpperCase(), value])
// )
// console.log(upper);

// const nums1 = [1, 2, 3, 0, 0, 0];
// const nums2 = [2, 5, 6];
// const m = 3;
// const n = 3;

// function merge(nums1: number[], nums2: number[], m: number, n: number): void {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;

//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--
//         }
//         k--;
//         console.log(nums1);
//     }
// }

// merge(nums1, nums2, m, n);

// console.log(nums1);

const packages = [
    {
        packageId: "01996fab-5896-7224-963c-bc26dbdf6376",
        packageName: "bag 400 ml",
        packageType: "homecooked packaging",
        packageSize: "small",
        packageUnit: "pcs",
        quantity: 14,
        packageTotalPrice: 14,
    },
    {
        packageId: "01996fa2-0eda-7224-963c-af2246edcd4e",
        packageName: "sticker s",
        packageType: "additional",
        packageSize: "small",
        packageUnit: "pcs",
        quantity: 14,
        packageTotalPrice: 84,
    },
    {
        packageId: "01996fad-8f47-7224-963c-ce706466d616",
        packageName: "container",
        packageType: "container packaging",
        packageSize: null,
        packageUnit: "pcs",
        quantity: 1,
        packageTotalPrice: 20,
    },
    {
        packageId: "019a950f-8d7f-7996-8b65-9694465faf99",
        packageName: "premix bag 10 ml",
        packageType: "premix packaging",
        packageSize: "small",
        packageUnit: "pcs",
        quantity: 14,
        packageTotalPrice: 280,
    },
];

// const result = packages
//     .filter((pkg) => pkg.packageType === "homecooked packaging" || pkg.packageType === "premix packaging")
//     .reduce((acc, pkg) => acc + pkg.packageTotalPrice, 0);
// console.log(result);

const result = packages.map((pkg) => ({
    ...pkg,
    packageTotalPrice: (pkg.packageTotalPrice + pkg.packageTotalPrice / 2) * 3.5,
}));
console.log(result);
