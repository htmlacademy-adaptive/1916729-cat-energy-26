let navMain = document.querySelector('.main-header__navigation');
let navToggle = document.querySelector('.main-header__button');

navMain.classList.remove('main-header__navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__navigation--closed')) {
    navMain.classList.remove('main-header__navigation--closed');
    navMain.classList.add('main-header__navigation--open');
  } else {
    navMain.classList.add('main-header__navigation--closed');
    navMain.classList.remove('main-header__navigation--open');
  }
});
