$(document).ready(function(){
    $('.brand-item').on('mouseover', function() {
        $('.brand-item').not(this).removeClass('active');
        $(this).addClass('active');
    });
});

