$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed:1000,
        navText : ['PREV','NEXT'],
        responsive:{
            0:{
              nav:false,
            },
            768:{
                nav:true
            }
         
        }
    })

    //Projcet-slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        smartSpeed:1000,
        autoplay: true,
        autoplayTimeout: 4000,
        margin:24,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            768:{
               items:2
            },
            1140:{
               items:2,
               center:true
            }

         
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed:2000,
        responsive:{
            0:{
                dots:false,
            },
            768:{
                dots:true,
            },
            1140:{
              
            }
        }
    })
})