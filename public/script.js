const megamenu              = document.getElementById("megamenu");
const megamenuButton        = document.getElementsByClassName("megamenu-button")[0];
const megamenuIcon          = document.getElementsByClassName("megamenu-icon")[0];

const mobileMenu            = document.getElementById("mobile-menu");
const mobileMenuButton      = document.getElementsByClassName("mobile-menu-button")[0];
const mobileMenuButtonClose = document.getElementsByClassName("mobile-menu-button-close")[0];

const expandDrawer          = document.getElementById("expand-drawer");
const expandDrawerButton    = document.getElementsByClassName("expand-drawer-button")[0];
const expandDrawerIcon      = document.getElementsByClassName("expand-drawer-icon")[0];

const body                  = document.body;

// Toggle megamenu visibility
function toggleMegamenu(event) {
    if (event.type === "mouseenter" || !megamenu.contains(event.relatedTarget)) {
        megamenu.classList.toggle("hidden");
        megamenu.classList.toggle("flex");
        megamenuIcon.classList.toggle("rotate-180");
        body.classList.toggle("overflow-hidden");
    }
}

// Add mouse event listeners to megamenuButton and megamenu
megamenuButton.addEventListener("mouseenter", toggleMegamenu);
megamenuButton.addEventListener("mouseleave", toggleMegamenu);
megamenu.addEventListener("mouseleave", toggleMegamenu);

// Toggle mobile menu visibility
function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    // Toggle mobileMenuButton and mobileMenuButtonClose classes
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenuButton.classList.remove("hidden");
        mobileMenuButtonClose.classList.add("hidden");
    } else {
        mobileMenuButton.classList.add("hidden");
        mobileMenuButtonClose.classList.remove("hidden");
    }
}

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.onclick = toggleMobileMenu;
}

if (mobileMenuButtonClose && mobileMenu) {
    mobileMenuButtonClose.onclick = toggleMobileMenu;
}

// Toggle expand drawer visibility
expandDrawerButton.addEventListener("click", function() {
    expandDrawer.classList.toggle("hidden");
    expandDrawerIcon.classList.toggle("rotate-180");
});