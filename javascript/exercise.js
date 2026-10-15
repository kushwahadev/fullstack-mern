function stringToNumber(input) {
  let num = Number(input);
  if (num) {
    return num;
  }
  return "Not a number";
}

let numToStr = stringToNumber("10s");
// console.log(numToStr);

function flip(input) {
  return !input;
}

let fliper = flip("false");
// console.log(fliper);

function sum(n) {
  return n + 1;
}
