const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// We need an array to hold our state
let items = [];

// Listen for a submit event
function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };

  // Push items into state
  items.push(item);
  // Clear the form
  e.target.reset();
  // Fire off a custom event (tells items have been updated)
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input
        value="${item.id}"
        type="checkbox"
        ${item.complete ? "checked" : ""}
      >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
  </li>`
    )
    .join("");
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info("Saving items to local storage");
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info("Restoring from local storage");
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);
list.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    deleteItem(parseInt(e.target.value));
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(parseInt(e.target.value));
  }
});
restoreFromLocalStorage();
