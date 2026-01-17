let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Search bar toggle
const searchIcon = document.getElementById("search-icon");
const searchForm = document.getElementById("search-form");

searchIcon.addEventListener("click", () => {
  searchForm.style.display = searchForm.style.display === "block" ? "none" : "block";
});

// Modal open/close
const userIcon = document.getElementById("user-icon");
const modal = document.getElementById("auth-modal");
const closeModal = document.getElementById("close-modal");

userIcon.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});