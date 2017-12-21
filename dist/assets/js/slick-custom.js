$(document).ready(function(){
  //Carrusel Branding
  $('.places-items').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 0,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
      
    ]
  });
});
