let $ = document

let megamenuBtn = $.getElementById("megamenu-btn")
let megaMenu = $.getElementById("megamenu")
let megaMenubtnIcon = $.getElementById("megamenu-btn-icon")
let body = $.getElementById("body")

// megamenuBtn.addEventListener("click", function () {
//     if (megaMenu.style.display === "none") {
//         body.style.overflow = "hidden"
//         megaMenu.style.display = "flex"
//         megaMenubtnIcon.style.rotate = "180deg"
//     } else {
//         body.style.overflow = "auto"
//         megaMenu.style.display = "none"
//         megaMenubtnIcon.style.rotate = "360deg"
//     }
// })
megamenuBtn.addEventListener("click", function () {
    megaMenu.classList.toggle('hidden');

    megaMenubtnIcon.classList.toggle('rotate-180')
})
