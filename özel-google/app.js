let url = "https://www.google.com/search?q="

const searchInput = document.querySelector(".hello")
const searchIcon = document.querySelector(".bi-search")

searchIcon.addEventListener("click", () => {
    if (searchInput.value != "") {
        url += searchInput.value
        window.open(url, "_blank")
        searchInput.value = ""
        url = "https://www.google.com/search?q="
    }
})