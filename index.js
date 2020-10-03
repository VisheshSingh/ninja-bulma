const hamburger = document.getElementById('burger');
const menu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});
