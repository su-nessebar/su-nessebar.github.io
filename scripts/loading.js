window.addEventListener('DOMContentLoaded', function() {
  let loaderBlock = document.getElementById('loader-block');
  setTimeout(() => {loaderBlock.style = 'opacity: 0; z-index: -1;'; document.body.style.overflow = 'visible'}, 300);
	setTimeout(() => loaderBlock.remove(), 500)
});