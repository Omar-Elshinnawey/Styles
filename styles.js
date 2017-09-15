$(document).ready(function() {

    $('.btn').on('click', function() {
        var btn = $(this);
        btn.addClass('btn-active');

        window.setTimeout(function() {
            btn.removeClass('btn-active');
        }, 200);
    });
});