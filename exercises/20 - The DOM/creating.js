console.log("It works");

const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");

const myImage = document.createElement("img");
myImage.src = "https://source.unsplash.com/random/300x300";
myImage.alt = "Nice photo";

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);
