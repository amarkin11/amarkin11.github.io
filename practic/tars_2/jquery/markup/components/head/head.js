













$('.js-faq-link').click(function (e) {
    e.preventDefault();
    if ( $(this).closest('.article__faq-item').hide('.article__faq-desc') ) {
        $('.article__faq-desc').show();
    } else {
        $('.article__faq-desc').show();
        $(this).closest('.article__faq-item').hide('.article__faq-desc');
        
    }
});

$('.menu-icon').click(function () {
    $('.menu').addClass('menu--active');
});

$('.menu__icon-close').click(function () {
    $('.menu').removeClass('menu--active');
});

$('.btn--popup').click(function () {
    $('.js-popup').show();
    $('.body').addClass('body--inactive');
});

$('.popup__icon-close').click(function () {
    $('.js-popup').hide();
    $('.body').removeClass('body--inactive');
});

$('.js-goto').click(function () {
    var scrollTop = $('#targetScroll').offset().top;
    $('html, body').animate({scrollTop: scrollTop}, 700);
    return false;
});