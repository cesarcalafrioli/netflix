/* setup.js
    Autor = César Calafrioli
    Data = 08/06/2021
    Última modificação = 08/06/2021
*/

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})