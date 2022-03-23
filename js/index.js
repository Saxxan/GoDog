// *************************
// Función abrir modal login
// *************************

const btnLogIn = document.querySelector('.login');

btnLogIn.addEventListener('click', function(){
    var modal = document.querySelector('.modal');
    const body = document.querySelector('body');

    modal.style.display = 'block';
    // body.style.filter = 'blur(6px)';
})