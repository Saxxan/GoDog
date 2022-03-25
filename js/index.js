// -------- ARCHIVO JS RECOPILATORIO FUNCIONES

const usersURL = './users.json';

// ****************************
// Function get users
// ****************************

function getUsers(){
    
    axios.get(usersURL)
        .then(function(response) {
            let users = response.data;
            console.log(users);
        });

    // fetch('./users.json')
    //     .then(function(response) { return response.json(); })
    //     .then(function(users){
    //         console.log(users);
    //     })
}


// **********************************
// Get input values from form
// **********************************

var cp = '';
var from = '';
var to = '';
var services = '';
var servicio = '';
var btnSubmit = document.querySelector('.form__input__submit');

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



// ******************************
// Function print users card
// ******************************

const cards = document.querySelector('.cards__container');

function printCard (){
    axios.get('./users.json')
        .then(function(response) {
            let users = response.data;
            console.log(users);
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