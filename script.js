const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

function searchButtonHandler() {
  overlay.classList.add("open");
  console.log(movieName.value.split(" ").join("+"));
  console.log(movieYear.value);
}

searchButton.addEventListener("click", searchButtonHandler);
