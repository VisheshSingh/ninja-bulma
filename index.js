const hamburger = document.getElementById('burger');
const menu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('is-active'));
    tab.classList.add('is-active');
    const target = tab.dataset.target;
    tabContentBoxes.forEach((box) => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    });
  });
});
