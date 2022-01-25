

$('.reviews__slider').slick({
  dots: true,
  speed: 300,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      // settings: 'unslick',
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      // settings: 'unslick',
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 400,
      // settings: 'unslick',
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(window).resize(function () {
  $('.js-slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
  $('.js-slider').not('.slick-initialized').slick('resize');
});