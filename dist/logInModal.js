// *************************
// Función abrir modal login
// *************************

const btnLogIn = document.querySelector('.login');
const modal = document.querySelector('.modal');
const btnLogInClose = document.querySelector('.modal__btn--close');

btnLogIn.addEventListener('click', function(){
        modal.style.display = 'flex';
});


// *************************
// Función cerrar modal login
// *************************

btnLogInClose.addEventListener('click', function(){
        modal.style.display = 'none';
});
