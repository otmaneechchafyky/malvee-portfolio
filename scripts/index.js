const MobileMenuBtn = document.getElementById('breadcrumb-icon');
const MobileMenu = document.getElementById('mobile-menu');
const CloseMenuBtn = document.getElementById('close-menu-btn');
const MenuLinks = document.getElementsByClassName('menu-items');

for (let i = 0; i < MenuLinks.length; i += 1) {
  MenuLinks[i].addEventListener('click', () => {
    MobileMenu.classList.remove('visible');
  });
}
MobileMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.add('visible');
});

CloseMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.remove('visible');
});
