// const p = document.querySelector("p");
// const imgs = document.querySelector(".items img");
// const heading = document.querySelector("h2");
// console.dir(heading);
//
// const pizzaList = document.querySelector(".pizza");
//
// console.log(pizzaList);
// pizzaList.insertAdjacentText("beforeend", '🍕');
// console.log(pizzaList);

// Classes
const pic = document.querySelector(".nice");
pic.classList.add("round");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);
