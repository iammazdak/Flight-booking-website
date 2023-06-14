let $ = document;

let megamenuBtn = $.querySelector('#megamenu-btn');
let megaMenu = $.querySelector('#megamenu');
let megaMenubtnIcon = $.querySelector('#megamenu-btn-icon');
let sidebarMenu = $.querySelector('#sidebar-menu');
let mobileMenu = $.querySelector('#mobile-menu');

megamenuBtn.addEventListener('mouseover', ()=> {

    megaMenuOpen();
    megaMenubtnIcon.classList.toggle('rotate-180')
});

megamenuBtn.addEventListener('mouseout', ()=> {

    megaMenuClose();
    megaMenubtnIcon.classList.toggle('rotate-180')
});

sidebarMenu.addEventListener('click', ()=> {

    mobileMenuToggle();
})

function megaMenuOpen(_true) {

    if ( megaMenu.classList.contains('hidden') ) {

        $.body.classList.remove('overflow-auto');
        $.body.classList.add('overflow-hidden');
        megaMenu.classList.remove('hidden');
        megaMenu.classList.add('flex');
    } 
    return _true;
}

function megaMenuClose(_true) {

    if ( megaMenu.classList.contains('flex') ) {

        $.body.classList.remove('overflow-hidden');
        $.body.classList.add('overflow-auto');
        megaMenu.classList.add('hidden');
        megaMenu.classList.remove('flex');
    }
    return _true;
}

function mobileMenuToggle() {

    mobileMenu.classList.toggle('hidden');
}