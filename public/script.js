let $ = document

let megamenuBtn = $.getElementById("megamenu-btn")
let megaMenu = $.getElementById("megamenu")

megamenuBtn.addEventListener("click", function () {
    if (megaMenu.style.display === "none") {
        megaMenu.style.display = "flex"
    } else {
        megaMenu.style.display = "none"
    }
})