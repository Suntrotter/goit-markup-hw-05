let btnClose = document.querySelector('.button-close');
let modalWindow = document.querySelector('.backdrop');
let btnOpenModal = document.querySelector('.open-modal-window');

btnClose.addEventListener('click', () => {
    modalWindow.classList.remove('is-open');
})
btnOpenModal.addEventListener('click', () => {
    modalWindow.classList.add('is-open');
})