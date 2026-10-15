// object
// object is a collection of properties

let car = {
  name: "BMW",
  color: "Red",
  speed: 200,
  wheels: 4,
  doors: 4,
  windows: 4,
  seats: 4,
  engine: "V8",
  fuel: "Petrol",
  transmission: "Automatic",
  brake: "Disc",
  steering: "Manual",
  suspension: "Independent",
  airbags: 4,
  airconditioning: true,
  navigation: true,
  bluetooth: true,
  usb: true,
  radio: true,
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("Car stopped");
  },
  showCarDetails: function () {
    console.log(
      "Car details: ",
      this.name,
      this.color,
      this.speed,
      this.wheels,
      this.doors,
      this.windows,
      this.seats,
      this.engine,
      this.fuel,
      this.transmission,
      this.brake,
      this.steering,
      this.suspension,
      this.airbags,
      this.airconditioning,
      this.navigation,
      this.bluetooth,
      this.usb,
      this.radio,
    );
  },
};

// car.showCarDetails();

// class

class Vehicle {
  constructor(brand, model, engine, speed) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.speed = speed;
  }
  showVehicleDetails() {
    console.log(
      `${this.brand} ${this.model} has ${this.engine} engine and can go upto ${this.speed} km/h`,
    );
  }
}
// **inheritance**
class Car extends Vehicle {
  start() {
    console.log(
      `ignition key is turned and engine is started of ${this.brand} ${this.model}`,
    );
  }
  drive() {
    console.log(`${this.brand} ${this.model} is driving at ${this.speed} km/h`);
  }
  stop() {
    console.log(
      `ignition key is turned off and engine is stopped of ${this.brand} ${this.model}`,
    );
  }
}

let car1 = new Car("BMW", "X5", "V8", 200);
// car1.showVehicleDetails();
// car1.start();
// car1.drive();
// car1.stop();

let car2 = new Car("Audi", "A8", "V10", 250);
// car2.showVehicleDetails();
// car2.start();
// car2.drive();
// car2.stop();

// **encapsulation**

class BankAccount {
  #balance = 35000;

  getBalance(amount) {
    return this.#balance;
  }

  increaseBalance(amount) {
    this.#balance += amount;
    return `${amount} is added to the balance and new balance is ${this.#balance}`;
  }

  decreaseBalance(amount) {
    if (amount > this.#balance) {
      return "Insufficient balance to withdraw";
    }

    this.#balance -= amount;
    return `${amount} is subtracted from the balance and new balance is ${this.#balance}`;
  }
}

let bankAccount1 = new BankAccount();
// console.log(bankAccount1.getBalance());
// console.log(bankAccount1.increaseBalance(1000));

// *abstraction*

class CoffeeMachine {
  makeCoffee() {
    return `Coffee is in making`;
  }
  brewCoffee() {
    return `coffee is brewing`;
  }

  getOrder() {
    return `${this.makeCoffee()} -> ${this.brewCoffee()} -> Your order is ready `;
  }
}

const bringCoffee = new CoffeeMachine();
// console.log(bringCoffee.getOrder());

// * polymorphism

class Bird {
  fly() {
    return `birds flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguine doesnt flying`;
  }
}

class Sparow extends Bird {
  // something that sparow does
}

let anyBird = new Bird();
let somePenguin = new Penguin();
let jackSparow = new Sparow();

// console.log(anyBird.fly());
// console.log(somePenguin.fly());
// console.log(jackSparow.fly());

// * static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// cant do like this
// let miniCal = new Calculator()
// log(miniCal.add(2,3)) -> throw error
// * only class can cal the static method itself
// console.log(Calculator.add(2, 3));

// * getter & setters

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    console.log(`you not authorize to see the salary`);
    return;
  }

  set salary(value) {
    console.log(`salary is been updated by the given value`);
    return;
  }
}

let emp1 = new Employee("Bob", 50000);
emp1.salary;
emp1.salary = 100000;
