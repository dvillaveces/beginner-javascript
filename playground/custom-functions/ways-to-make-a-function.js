// Functions defined like this are hoisted (i.e. can be called before defining)
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Arrow Function
const inchToCM = (inches) => inches * 2.54;

// Regular function
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// Arrow version
const add = (a, b = 3) => a + b;

// Returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// iife
// Immediately-invoked function expression
(function (age) {
  console.log("Running the Anon function");
  return `You are cool and age ${age}`;
})(10);

// Methods
const daniel = {
  name: "Daniel Villaveces",
  // Method
  sayHi: function () {
    console.log("Hey Wes");
    return "Hey Wes";
  },
  // Short hand method
  yellHi() {
    console.log("HEY WESSSS");
    return "HEY WESSSS";
  },
  // Arrow function
  whisperHi: () => {
    console.log("hii wesss im a mouse");
  },
};

// Callback function
// Click callback
const button = document.querySelector(".clickMe");

button.addEventListener("click", daniel.yellHi);
