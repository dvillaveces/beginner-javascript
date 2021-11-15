// Make a div
const myDiv = document.createElement("div");
// add a class of wrapper to it
myDiv.classList.add("wrapper");
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const unordList = document.createElement("ul");
// add three list items with the words "one, two, three" in them
const listItems = `
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
`;
let myFragment = document.createRange().createContextualFragment(listItems);

unordList.appendChild(myFragment);
// put that list into the above wrapper
document.querySelector(".wrapper").appendChild(unordList);
// create an image
const myImg = document.createElement("img");
// set the source to an image
myImg.src = "https://picsum.photos/300";
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add("cute");
// add an alt of Cute Puppy
myImg.alt = "Cute Puppy";
// Append that image to the wrapper
myDiv.appendChild(myImg);
// with HTML string, make a div, with two paragraphs inside of it
const myNewDiv = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`;
// put this div before the unordered list from above
document.querySelector("ul").insertAdjacentHTML("beforebegin", myNewDiv);

// add a class to the second paragraph called warning
document.querySelectorAll("p")[1].classList.add("warning");
// remove the first paragraph
document.querySelectorAll("p")[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>

    <button class="delete" type="button">Delete</button>
    </div>
  `;
  return document.createRange().createContextualFragment(html);
}

// make a new div with a class of cards
const cardDiv = document.createElement("div");
cardDiv.classList.add("cards");
// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard("Daniel", 35, 162);
const playerTwo = generatePlayerCard("Anne", 32, 162);
const playerThree = generatePlayerCard("Lola", 1, 120);
const playerFour = generatePlayerCard("Putnam", 12, 40);
// append those cards to the div
cardDiv.appendChild(playerOne);
cardDiv.appendChild(playerTwo);
cardDiv.appendChild(playerThree);
cardDiv.appendChild(playerFour);
// put the div into the DOM just before the wrapper element
document.body.insertBefore(cardDiv, document.querySelector(".wrapper"));
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.getElementsByClassName("delete");
// make out delete function
function Delete() {
  const parent = this.parentNode;
  parent.remove();
}
// loop over them and attach a listener
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", Delete);
}
