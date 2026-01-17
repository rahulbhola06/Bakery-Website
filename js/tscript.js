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