// Select element function





$(document).ready(function(){  

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top - 100        
        }, 2000);                                                       
    }); 

    $('.menu-btn').on('click', function(){
      $('.menu-btn').toggleClass('open'); 

      $('.nav-list').toggleClass('open');
    });  

    $('.nav-list ul li a').on('click', function(){
      $('.menu-btn').toggleClass('open'); 
      $('.nav-list').toggleClass('open'); 
    });

    

    $(".num").counterUp({delay:90,time:4000}); 
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    })

    $('.nav-list a[href*="#"]').on('click', function() {                 
      $('html, body').animate({                              
          scrollTop: $($(this).attr('href')).offset().top - 100        
      }, 2000);                                                       
    });

}); 

