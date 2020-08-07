// AOS
AOS.init({
  once: true
});

// Check for touchscreen
window.addEventListener('load', function() {
  function is_touch_device() {
    let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    let mq = function (query) {
        return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  }

  if (document.documentElement.clientWidth > 960 || !is_touch_device()) {return}
    let drops = document.getElementsByClassName('dropdown'),
      dropsbtns = document.getElementsByClassName('dropbtn');
    for (let i = 0; i < drops.length; i++) {
      drops[i].classList.remove('not-mobile');
      dropsbtns[i].addEventListener('click', function() {
        if (drops[i].dataset.isopen == 'false') {
          this.nextElementSibling.style.display = 'block';
          drops[i].dataset.isopen = 'true';
        } else {
          this.nextElementSibling.style.display = 'none';
          drops[i].dataset.isopen = 'false';
        }
      });
    }
});
// Menu
let menuIcon = document.getElementById('menu-icon'),
    navbar = document.getElementById('navigation');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('change-menu');
  navbar.classList.toggle('responsive');
  for (let i of document.getElementsByClassName('dropbtn')) {
    if (i.parentElement.dataset.isopen == 'true') {i.click()}
  }
});

// Back to top
let backBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  showBackToTopButton();
});

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
  }, 250, 'linear');
});