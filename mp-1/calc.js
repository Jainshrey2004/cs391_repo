const one    = document.getElementById("one");
const two    = document.getElementById("two");
const output = document.getElementById("output");

function result(val) {
  output.innerHTML = String(val);
  if (val < 0) {
    output.style.color = "red";     // red text for negative val
  } else {
    output.style.color = "";        
  }
}
function doAdd() { result(Number(one.value) + Number(two.value)); }
function doSub() { result(Number(one.value) - Number(two.value)); }
function doMul() { result(Number(one.value) * Number(two.value)); }

function doDiv() {
  const a = Number(one.value), b = Number(two.value);
  if (b === 0) { output.innerHTML = "Division by zero is undefined."; output.style.color = ""; return; }
  result(a / b);
}

function doPow() {
  const base  = Number(one.value);
  const exp   = Number(two.value);
  let r = 1;
  for (let i = 0; i < exp; i++) r *= base;
  if (exp < 0) r = 1 / r;
  result(r);
}

function doClear() {
  one.value = "";
  two.value = "";
  output.innerHTML = "";
  output.style.color = "";
}
