var side_menu = document.querySelectorAll(".sidebar_menu")
var dropdown_menu = document.querySelectorAll(".dropdown_menu")

side_menu.forEach((items, index) => {
    items.addEventListener("click", () => {
        dropdown_menu.forEach((menu, dropIndex) => {
            if (index === dropIndex) {
                menu.classList.toggle("open")
            } else {
                menu.classList.remove("open")
            }
        })
    })
})