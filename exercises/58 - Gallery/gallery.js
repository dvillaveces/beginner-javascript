function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery found!");
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  function openModal() {
    console.info("Opening Modal...");
    // First check if the modal is already open
    if (modal.matches(".open")) {
      console.info("Modal already open");
      return;
    }
    modal.classList.add("open");
    // Add event listeners
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
  }

  function closeModal() {
    modal.classList.remove("open");
    // TODO: Add event listeners for click and keyboard
    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("No image to show");
      return;
    }
    // Update modal with this info
    console.log(el);
    modal.querySelector("img").src = el.src;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("figure p").textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  // Event listeners
  images.forEach((image) =>
    image.addEventListener("click", (e) => showImage(e.currentTarget))
  );

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener("keyup", (e) => {
      // when that is keyup'd, check if it was enter
      if (e.key === "Enter") {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener("click", handleClickOutside);
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
