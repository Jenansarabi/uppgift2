AOS.init();

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 60,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  })


  $('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});