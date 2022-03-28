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
        <main class="card__body">
            <img src="" alt="" class="card__body__photo">
            <div class="card__body__text">
                <h6 class="card__body__text__title">${user.name}</h6>
                <p class="card__body__text__date">From ${user.from} to ${user.to}</p>
                <p class="card__body__text__cp">${user.cp}</p>
                <p class="card__body__text__info"></p>
            </div>
            <aside class="card__body__marks">
                <svg class="star--icon"></svg>
                <p class="card__body__marks__mark"></p>
            </aside>
        </main>
        <footer class="card__footer">
            <p class="card__footer__price">${user.price}</p>
            <button class="card__footer__contact"></button>
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
    services = document.querySelector('.servicio');

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
