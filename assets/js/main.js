

$(document).ready(function(){


  $('.video-slider').slick({
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
