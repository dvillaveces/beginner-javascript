// Select elements on the page
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

// Setup canvas for drawing
const { width, height } = canvas;

// Create random starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 15;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Wrtie a draw function
function draw({ key }) {
  // Increment the hue
  hue += 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move x and y depending on user input
  switch (key) {
    case "ArrowUp":
      y = Math.max(0, y - MOVE_AMOUNT);
      break;
    case "ArrowDown":
      y = Math.min(height, y + MOVE_AMOUNT);
      break;
    case "ArrowRight":
      x = Math.min(width, x + MOVE_AMOUNT);
      break;
    case "ArrowLeft":
      x = Math.max(0, x - MOVE_AMOUNT);
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Clear / shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    () => {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}

shakeButton.addEventListener("click", clearCanvas);

// Listen for arrow keys
window.addEventListener("keydown", handleKey);
