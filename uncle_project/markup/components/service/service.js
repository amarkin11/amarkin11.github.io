$('.js-service-items').click(function (e) {
    e.preventDefault();

    $('body').addClass('no-scroll');
    $('.l-service__popup').addClass('l-service__popup--active');
});

$('.js-close-popup').click(function (e) {
    e.preventDefault();

    $('body').removeClass('no-scroll');
    $(this).closest('.l-service__popup').removeClass('l-service__popup--active');
});