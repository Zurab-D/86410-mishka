/** оживляем кнопку меню (бургер) */
(function() {
  let btn = document.querySelector('.main-nav__toggler');
  let nav = document.querySelector('.main-nav');

  nav.classList.remove('main-nav--no-js');

  btn.addEventListener('click', function() {
    nav.classList.toggle('main-nav--open');
  });
})();
