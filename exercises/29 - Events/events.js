const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 It got clicked!!!");
}

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy");

// function buyItem() {
//   console.log("Buying Item!!");
// }
//
// buyButtons.forEach(function (buyButton) {
//   buyButton.addEventListener("click", buyItem);
// });

function handleBuyButtonClick(event) {
  console.log("You are buying it!");
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener("click", handleBuyButtonClick);
});
