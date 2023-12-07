const searchButton = document.querySelector("#menu-hamburger");
const searchInput = document.querySelector("#nav-links");

const dropdown = document.querySelector(".dropdown")
const btnDrop = document.querySelector(".bloc-top")

let toggleIndex = 0;

searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("show");
})

btnDrop.addEventListener('click', () => {
    if (toggleIndex === 0) {
        dropdown.style.height = dropdown.scrollHeight + "px";
        toggleIndex++;
    } else {
        dropdown.style.height = btnDrop.scrollHeight + "px";
        toggleIndex--;
    }
})