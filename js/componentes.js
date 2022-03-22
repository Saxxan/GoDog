// -------- ARCHIVO JS RECOPILATORIO FUNCIONES

const { default: axios } = require("axios");

// CTA Hazte cuidador - Regístrate

// var btnRegistro = document.querySelectorAll('.register');

// btnRegistro.forEach(btn).addEventListener('mouseover', function(){
//     var texto = btnRegistro.querySelector('.register__text');

//     texto.textContent = 'Regístrate';
// });



// **********************************
// Get input values from form
// **********************************

// import * as users from './users.json';

function filterSearch (){
    var cp = document.getElementById('cp').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var services = document.querySelectorAll('.servicio');
    var servicio = '';

    debugger;

    console.log(cp);
    console.log(from);
    console.log(to);
    
    for (var i = 0; i<services.length; i++){
        if(services[i].checked) {
            servicio = services[i].id;
            console.log(servicio);
        }
    }

    debugger;


}


// ******************************
// Function print users filtered
// ******************************

const cards = document.querySelector('.cards__container');

function printCard (i){
    axios.get('./users.json')
        .then(function(response) {
            var card = response.data.results[i];
            console.log(card);
            debugger;
            cards.innerHTML = `
            <article class="card">
                <main class="card__body">
                    <img src="" alt="" class="card__body__photo">
                    <div class="card__body__text">
                        <h6 class="card__body__text__title"></h6>
                        <p class="card__body__text__date"></p>
                        <p class="card__body__text__cp"></p>
                        <p class="card__body__text__info"></p>
                    </div>
                    <aside class="card__body__marks">
                        <svg class="star--icon"></svg>
                        <p class="card__body__marks__mark"></p>
                    </aside>
                </main>
                <footer class="card__footer">
                    <p class="card__footer__price"></p>
                    <button class="card__footer__contact"></button>
                </footer>
            </article>
            `
        })
}
