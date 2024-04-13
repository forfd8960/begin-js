// document.getElementById("counter-el").innerText = 100;

let count = 0;

setCounterValue(count);

function increment() {
  console.log("the button is clicked");
  count += 1;
  console.log("count: ", count);
  setCounterValue(count);
}

function setCounterValue(n) {
  document.getElementById("counter-el").innerText = n;
}
