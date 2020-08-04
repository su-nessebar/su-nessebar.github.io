// AOS
AOS.init({
  once: true
});

// Menu
window.addEventListener('scroll', function() {
  showBackToTopButton();
});

let menuIcon = document.getElementById('menu-icon'),
    navbar = document.getElementById('navigation');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('change-menu');
  navbar.classList.toggle('responsive');
});

// Back to top
let backBtn = document.getElementById('back-to-top');

function showBackToTopButton() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backBtn.style.right = '10px';
  } else {
    backBtn.style.right = '-3em';
  }
}

backBtn.addEventListener('click', function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});