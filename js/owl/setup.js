
/* setup.js é onde vai ficar o js pricipal da pagina */

$('.owl-carousel').owlCarousel({ /* código para chamar o carrosel */
    loop:true,
    margin:10,
    nav:true,
    responsive:{
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