// -------- ARCHIVO JS RECOPILATORIO FUNCIONES

const usersURL = '/js/users.json';
const cards = document.querySelector('.cards__container');
var cp = '';
var from = '';
var to = '';
var services = '';
var servicio = '';
var btnSubmit = document.querySelector('.form__input__submit');
let users = [];

// ******************************
// Function print users card
// ******************************

function printCard(user){
    cards.innerHTML = `
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
            
            for(var i=0; i<users.length; i++) {
                const cpTrue = cp == '' || users[i].cp == cp;
                const fromTrue = from == '' || users[i].from == from;
                const toTrue = to == '' || users[i].to == to;
                const servicioTrue = true;
        
                console.log(cpTrue);
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
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
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