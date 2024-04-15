let message = "this is a message";
console.log(message); // string
console.log(typeof message); // string

let num = 1000n;
console.log(num); // number
console.log(typeof num); // number

let truth = true;
let notTruth = !truth;
console.log(truth, notTruth); // true
console.log(typeof truth, typeof notTruth); // boolean

let obj = { name: "Alex" };
console.log(obj); // object
console.log(typeof obj); // object

let data = undefined;
console.log(data); // undefined
console.log(typeof data); // undefined

let point = null;
console.log(point); // null
console.log(typeof point); // object

/*
this is a message
index.js:3 string
index.js:6 1000n
index.js:7 bigint
index.js:11 true false
index.js:12 boolean boolean
index.js:15 Objectname: "Alex"[[Prototype]]: Object
index.js:16 object
index.js:19 undefined
index.js:20 undefined
index.js:23 null
index.js:24 object
*/
