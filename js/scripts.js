const toggleButton = document.querySelector("#nav_container > button")
const navToggleContent = document.querySelector("#nav_container > ul")

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("open");
    navToggleContent.classList.toggle("open");
});