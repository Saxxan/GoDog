let linksToggle = document.querySelectorAll('.register__section__header');
let sectionsToggle = document.querySelectorAll('.register__section__body');
let sectionsArrowIcon = document.querySelectorAll('.register__section__header__icon');
var arrayLength = linksToggle.length;

console.log('hola');

for(var i=0; i<arrayLength; i++){

    console.log(linksToggle[i]);
    console.log(sectionsToggle[i]);
    console.log(sectionsArrowIcon[i]);

    linksToggle[i].addEventListener('click', function(){

        sectionsArrowIcon[i].classList.add('set');

        // if (!sectionsToggle[i].classList.contains('active')) {
            
        //     sectionsToggle[i].classList.add('active');
        //     sectionsToggle[i].style.height = 'auto';

        //     var height = sectionsToggle[i].clientHeight + 'px';

        //     sectionsToggle[i].style.height = '0px';

        //     setTimeout(function () {
        //         sectionsToggle[i].style.height = height;
        //     }, 0);
            
        // } else {
            
        //     sectionsToggle[i].style.height = '0px';

        //     sectionsToggle[i].addEventListener('transitionend', function () {
        //         sectionsToggle[i].classList.remove('active');
        //     }, {
        //         once: true
        //     });
            
        // }

    });

}