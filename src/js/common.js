$(document).ready(function() {
    function scrollToElement(element, offset) {
        $(element).click(function (e) {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            if (destination < 0) {
                destination = 0;
            }
            $('html, body').animate({scrollTop: destination - offset}, "slow");
            e.preventDefault();
        });
    };
    scrollToElement('a[href=#bio]',30);
    scrollToElement('a[href=#experience]',30);
    scrollToElement('a[href=#js]',30);
    scrollToElement('a[href=#about]',30);
    $('#birth').selectmenu();
    $( "#slider" ).slider({
        value: 70,
        change: function( event, ui ) {
            var val = $( "#slider" ).slider("value");
            $('.successLine .hiddenPart').animate({'width': val+'%'});
        }
    });
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('header .menu').slideToggle();
    });
    if ($(window).innerWidth()<=768){
        $('header .menu li a').click(function(){
            $('.burger').removeClass('active');
            $('header .menu').slideUp();
        });
    };
});
