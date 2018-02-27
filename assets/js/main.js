

$(document).ready(function(){


  $('.video-slider').slick({
    prevArrow: '<span class="vidoe-arow lnr lnr-chevron-left" ></span>',
    nextArrow: '<span class="vidoe-arow lnr lnr-chevron-right"></span>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  });
  $('.product-slider').slick({
    prevArrow: '<span class=" lnr lnr-chevron-left" ></span>',
    nextArrow: '<span class=" lnr lnr-chevron-right"></span>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


});
