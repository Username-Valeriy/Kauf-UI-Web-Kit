$(document).ready(function(){
  $('.video-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3
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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  });


});
