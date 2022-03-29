console.log("Hello World!");
// -------- ARCHIVO JS RECOPILATORIO FUNCIONES

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



const usersURL = '/src/users.json';
const cards = document.querySelector('.cards__container');
var cp = '';
var from = new Date();
var to = new Date();
var services = '';
var servicio = '';
var btnSubmit = document.querySelector('.form__input__submit');
let users = [];


// ******************************
// Function print users card
// ******************************

function printCard(user){
    cards.innerHTML += `
    <article class="card">
        <header class="card__header">
            <img class="card__header__photo" style="background-image:url(${img})">
            <h3 class="card__header__title">${user.name}</h3>
            <aside class="card__header__marks">
                <svg width="48" height="48" viewBox="0 0 48 48" class="star" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 36.7547L37.596 45L33.988 29.46L46 19.0042L30.182 17.6337L24 3L17.818 17.6337L2 19.0042L13.99 29.46L10.404 45L24 36.7547Z"/>
                </svg>
                <p class="card__header__marks__mark">${mark}/10</p>
            </aside>
        </header>
        <main class="card__body">
            <div class="card__body__text">
                <p class="card__body__text__date">Disponible de ${from} a ${to}</p>
                <p class="card__body__text__cp">${cp}</p>
                <p class="card__body__text__info">${description}</p>
            </div>
        </main>
        <footer class="card__footer">
            <p class="card__footer__price">${price}€/hora</p>
            <button class="card__footer__contact">Contactar</button>
        </footer>
    </article>
    `
}

// ****************************
// Function get users
// ****************************

function getUsers(){
    
    axios.get(usersURL)
        .then(function(response) {
            users = response.data;
            cards.innerHTML='';
            
            for(var i=0; i<users.length; i++) {

                let userFrom = Date.parse(users[i].from);
                let userTo = Date.parse(users[i].to);
                let fromTrue;
                let toTrue;

                console.log(userFrom);
                console.log(userTo);

                let cpTrue = cp == '' || users[i].cp == cp;
                if(userFrom < userTo) {
                    fromTrue = (from !== from) || ((from >= userFrom) && (from < userTo));
                    toTrue = (to !== to) || ((to <= userTo) && (to > userFrom));
                }
                let servicioTrue = true;

                console.log(fromTrue);
                console.log(toTrue);
        
                if(cpTrue && fromTrue && toTrue && servicioTrue){
                    printCard(users[i]);
                }
            };
        });
}


// **********************************
// Get input values from form
// **********************************

btnSubmit.addEventListener('click', function(){

    cp = document.getElementById('cp').value;
    from = Date.parse(document.getElementById('from').value);
    to = Date.parse(document.getElementById('to').value);
    services = document.querySelectorAll('.servicio');

    for (var i = 0; i<services.length; i++){
        if(services[i].checked) {
            servicio = services[i].id;
        }
    }

    console.log(cp);
    console.log(from);
    console.log(to);
    console.log(servicio);

    debugger;

    getUsers();

    debugger;
})
