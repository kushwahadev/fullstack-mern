let computer = {
  processor: "Intel i5",
  cpu: 16,
};
let lenovo = {
  ram: "8GB",
  __proto__: computer,
};
let tonyHardware = {
  __proto__: [lenovo, computer],
};

// console.log(tonyHardware.__proto__);
