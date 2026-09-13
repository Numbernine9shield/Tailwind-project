const favourite = document.getElementById("favourite");
const heart = document.getElementById("favourite-heart");

let isFavourite = false;

favourite.addEventListener("click", function() {
    isFavourite = !isFavourite;

    if (isFavourite) {
        heart.setAttribute("fill","#111111");
    } else {
        heart.setAttribute("fill","none");
    }
})

const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');
const mobileMenu = document.querySelector('#mobileMenu');
const menuOverlay = document.querySelector('#menuOverlay');

function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');

    menuOverlay.classList.remove('hidden');

    document.body.classList.add('overflow-hidden');
}

function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');

    menuOverlay.classList.add('hidden');

    document.body.classList.remove('overflow-hidden');
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);