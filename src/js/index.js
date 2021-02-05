/* Here goes your JS code */
const btnShow = document.querySelector('#show-popup-form');
const btnClose = document.querySelector('#close-popup-form');
const popup = document.querySelector('.popup');

btnShow.addEventListener('click', function () {
    popup.classList.add('popup--active');
    btnShow.classList.add('btn-main--hide');
});

btnClose.addEventListener('click', function () {
    popup.classList.remove('popup--active');
    btnShow.classList.remove('btn-main--hide');
});