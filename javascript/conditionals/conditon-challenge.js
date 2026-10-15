let username = "ross";
let anotherUser = "monica";

if (username == anotherUser) {
  console.log("have same parents");
} else {
  console.log("both are paranoid people");
}

// challenge 2 - if variable is number or not

let score = 69 + "1";

if (typeof score === "number") {
  console.log("yup this is number");
} else {
  console.log("not a number");
}

// check array is empty or not

let items = ["item1"];

if (!items.length) {
  console.log(`array is empty`);
} else {
  console.log(`arrray have items in it`);
}
