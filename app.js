$('.nav-link').click(() => {
    $('html, body').animate({
        scrollTop: $('.jump-class').offset().top
    }, 200);
});
