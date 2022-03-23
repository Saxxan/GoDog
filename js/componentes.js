// -------- ARCHIVO JS RECOPILATORIO FUNCIONES

// ****************************
// Function get users filtered
// ****************************

function getUsers(){
    
    // axios.get('./users.json')
    //     .then(function(response) {
    //         response.data.forEach(function(user) {
    //             console.log(user);
    //         });
    //     });

    // fetch('./users.json')
    //     .then(function(){
    //         let users = response.data.results;
    //         console.log(users);
    //     })

    const response = fetch('../js/users.json');
    const users = JSON.stringify(response);
    console.log(users);
}



// **********************************
// Get input values from form
// **********************************

// import * as users from './users.json';

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

// const cards = document.querySelector('.cards__container');

// function printCard (i){
//     axios.get('./users.json')
//         .then(function(response) {
//             var card = response.data.results[i];
//             console.log(card);
//             debugger;
//             cards.innerHTML = `
//             <article class="card">
//                 <main class="card__body">
//                     <img src="" alt="" class="card__body__photo">
//                     <div class="card__body__text">
//                         <h6 class="card__body__text__title"></h6>
//                         <p class="card__body__text__date"></p>
//                         <p class="card__body__text__cp"></p>
//                         <p class="card__body__text__info"></p>
//                     </div>
//                     <aside class="card__body__marks">
//                         <svg class="star--icon"></svg>
//                         <p class="card__body__marks__mark"></p>
//                     </aside>
//                 </main>
//                 <footer class="card__footer">
//                     <p class="card__footer__price"></p>
//                     <button class="card__footer__contact"></button>
//                 </footer>
//             </article>
//             `
//         })
// }