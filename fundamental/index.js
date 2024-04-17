let numStr = "1024";
console.log("numStr: ", numStr, typeof numStr);

let num = Number(numStr);
console.log("num: ", num, typeof num);

let truth = true;
console.log(truth, typeof truth);
let truthData = String(truth);
console.log(truthData, typeof truthData);

let port = 8088;
console.log(port, typeof port);
let portStr = String(port);
console.log(portStr, typeof portStr);

// while
let idx = 0;
while (idx < 5) {
  console.log(5 - idx);
  idx++;
}

// for
const fruits = ["Apple", "Banana", "Cherry"];
for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
}

for (let idx = 0; idx <= 10; idx++) {
  switch (idx) {
    case 10:
    case 8:
    case 6:
    case 4:
    case 2:
    case 0:
      console.log(idx);
      break;
    default:
      break;
  }
}

function showMessage() {
  alert("Hello, Everyone");
}

let sum = (a, b) => a + b;
alert(sum("Apr", " Morning"));
alert(sum(100, 900));

let square = (n) => n ** 2;
alert("10^2 = " + square(10));

let logAndReturn = (nickname, age) => {
  console.log(nickname + " is " + age + " years old");
  return nickname + ": " + age;
};

alert(logAndReturn("Alex", 28));
