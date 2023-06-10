let $ = document

let megamenuBtn = $.getElementById("megamenu-btn")
let megaMenu = $.getElementById("megamenu")
let megaMenubtnIcon = $.getElementById("megamenu-btn-icon")
let hambergerMenu = $.getElementById("hamberger-menu")
let mobileMenu = $.getElementById("mobile-menu")

megamenuBtn.addEventListener("click", function () {
    megaMenu.classList.toggle('hidden');

    megaMenubtnIcon.classList.toggle('rotate-180')
})

hambergerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle('hidden');
})