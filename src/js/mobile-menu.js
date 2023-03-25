const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle('is-active');
}
