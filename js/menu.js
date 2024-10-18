const MenuOpen = document.getElementById('MenuOpen');
const MenuClose = document.getElementById('MenuClose');
const sidebar = document.querySelector('.sidebar');
const navbar = document.getElementById('MenuNavbar');
const LogoNav = document.querySelector('#LogoNav');
const HeaderContent = document.querySelector('.header-content')

MenuOpen.addEventListener('click', function() {
    sidebar.style.display = 'flex';
})

MenuClose.addEventListener('click', function() {
    sidebar.style.display = 'none';
})




const sticky = navbar.offsetTop;


function makeNavbarSticky() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("fixed");
      LogoNav.style.display = 'none';
      HeaderContent.style.backgroundColor = '#f2f2f2';
    } else {
      navbar.classList.remove("fixed");
      LogoNav.style.display = 'block';
      HeaderContent.style.backgroundColor = '#f2f2f2cc';
    }
  }


window.onscroll = function() {
  makeNavbarSticky();
};