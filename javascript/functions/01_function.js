// function 1
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let newtea = makeTea("Green Tea");
// console.log(newtea);

// function 2

function ordertea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = ordertea("chai masala");
// console.log(orderConfirmation);

// function 3 arrow () => {}

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let total = calculateTotal(100, 50);

// high order functions

function makeTea(typeOfTea) {
  return `makeTea : ${typeOfTea}`;
}

function processteaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processteaOrder(makeTea);
console.log(order);
