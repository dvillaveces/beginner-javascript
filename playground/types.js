const name = "Daniel";

const hello = `Hello, my name is ${name}. Nice to meet you. I am ${
  100 + 1
} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

const smarties = 20;
const kids = 3;

const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets} smarties.`);
console.log(`Dad gets ${dadGets} smarties.`);

// Objects
const person = {
  first: 'Daniel',
  last: 'Villaveces',
  age: 35
};

person.first = 'Teller';
