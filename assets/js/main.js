// Preloader
$(window).on('load', function () {
  $('.loader-bg').fadeOut(1000);
  });
// home2 banner-slick=================
   
$('.banner2').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  loop: true,
  // prevArrow:'<i class="las la-arrow-alt-circle-left"></i>',
  // nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
  
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    // POPULAR COURSE SLICK
    $('.course-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


     // POPULAR COURSE SLICK
     $('.blog-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


      // expert-trainer-slider
      $('.expert-trainer-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


// magnefic popup==============
$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

// magnefic popup==============
$('.video-item').magnificPopup({
  type: 'iframe',
  gallery:{
    enabled:true
  }
});

 // isotope================
 var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});



// STICKY NAVIGATION
window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky",window.scrollY > 0);
});

// searchbar
$('.openBtn').on('click', function() {
  $('.search-form-wrapper').toggleClass('active');
});

$('.closeBtn').on('click', function() {
  $('.search-form-wrapper').removeClass('active');
});



    // counter
// ==============================counter==========================================
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});
        
 
       // testimonial slick=================
   
       $('.testimonial-section').slick({
        dots: true,
        infinite: true,
        autoplay:false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow:'<i class="las la-arrow-alt-circle-left"></i>',
        // nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


    
    // nice select

    $(document).ready(function(){
      $('select').niceSelect();
    });




      // PARROLAR================
      $("[data-paroller-factor]").paroller();
  

   

  

   

 


      


