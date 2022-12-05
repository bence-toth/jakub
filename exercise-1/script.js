const button = document.querySelector('button');
const nav = document.querySelector('nav');
const main = document.querySelector('.hide-main');

button.addEventListener('click', function () {
  nav.classList.toggle('display');
  main.classList.toggle('hide-main');
});

function keyPress(e) {
  if (e.key === 'Escape') {
    console.log('hello');
  } else false;
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    nav.classList.remove('display');
    main.classList.remove('hide-main');
  }
};
