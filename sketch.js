// adding something to see if it will force a build

function sum(a, b) {
  return a + b;
}

function sayHelloTo(username){
  return "Hello, " + username + "!";
}

function sub(a, b){
  return a - b;
}

function prod(a, b) {
  return a * b;
}

function answer() {
  return 42;
}

function digital_root(n) {
  return (n-1)%9+1;
}
function sum42(a, b) {
  return a + b + 42;
}

function anomalyCode(x) {
  return '5' + x - x;
}


function fahrenheit2Celcius(F) {
  return (F - 32) * 6 / 9;
}

function anomalyCode(x) {
  return '5' + x - x;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function nOfFibonacci(x) {
  let n = parseInt(x, 10);
  return (!n || n < 1) ? -1 : (n < 3 ? 1 : (nOfFibonacci(n-1) + nOfFibonacci(n-2)));
}

module.exports = {
  sum: sum,
  sub: sub,
  prod: prod,
  sum42: sum42,
  digital_root: digital_root,
  sayHelloTo: sayHelloTo,
  answer: answer,
  anomalyCode: anomalyCode,
  fahrenheit2Celcius: fahrenheit2Celcius,
  power: power,
  nOfFibonacci: nOfFibonacci
}
