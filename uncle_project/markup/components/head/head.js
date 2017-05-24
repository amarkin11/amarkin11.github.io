var headerHeight = $('.c-header').height();

// $('.c-gallery-slider').bxSlider({
//     auto: false,
//     autoControls: true,
//     randomStart: true,
//     pager: false,
//     controls: false
// });

$('.js-magnific-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true
    }
});



$('#fullpage').fullpage({
    // paddingTop: headerHeight
});