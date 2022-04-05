const cajacookies = document.querySelector('.cajacookies');

// Comprueba si ya se aceptaron las cookies
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies != 'true'){
        cajacookies.style.display = 'block';
    }
}

// Acepta las cookies y se guarda en el localStorage
function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
}

// Se ejecuta si la web está cargada
function webCargada() {
    compruebaAceptaCookies();
}