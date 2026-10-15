function Person(name, age) {
  if (!new.target) {
    return new Person(name, age);
  }
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  };
}

const person1 = new Person("rudram", 20);
// person1.introduce();
// console.log(person1);

const person2 = Person("alisha", 21);
// console.log(person2.name, person2.age);
// person2.introduce();

function Animals(name, sound) {
  if (!new.target) {
    throw new Error(
      "Animals cannot be instantiated directly,  new keyword is required",
    );
  }
  this.name = name;
  this.sound = sound;
  this.makeSound = function () {
    console.log(`${this.name} makes ${this.sound}`);
  };
}

const dog = new Animals("dog", "woof");
dog.makeSound();
console.log(dog);
