$(document).ready(function() {

    $('.hamburger__container').click(() => {
        $('.hamburger__container').toggleClass('change');
        $('.nav__list').toggleClass('dropdown');
    });

});