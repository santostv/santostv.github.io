$(document).ready(function(){
    $('.player').hover(function(){
        $('.description').hide();
    });

    $('.player').mouseout(function(){
        $('.description').show();
    });
});