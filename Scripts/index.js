$(function () {
    $('.goto_intro').click(function (e) {
        e.preventDefault();
        $.scrollTo( '#intro-anchor',600);
    });

});

$('document').ready(function () {
    $('#footer-mail').attr("href", "mailto:backload.org@gmail.com").text("backload.org@gmail.com");
});
