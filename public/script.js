let $ = document

let megamenuBtn = $.getElementById("megamenu-btn")
let megaMenu = $.getElementById("megamenu")
let megaMenubtnIcon = $.getElementById("megamenu-btn-icon")

megamenuBtn.addEventListener("click", function () {
    if (megaMenu.style.display === "none") {
        megaMenu.style.display = "flex"
        megaMenubtnIcon.style.rotate = "180deg"
    } else {
        megaMenu.style.display = "none"
        megaMenubtnIcon.style.rotate = "360deg"
    }
})