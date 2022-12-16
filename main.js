(function($) {

"use strict"

//Navbar

$(window).scroll(function(){
if ($(this).scrollTop() > 200){
  $('.navbar').fadeIn('slow').css('display', 'flex');
}else {
  $('.navbar').fadeOut('slow').css('display', 'none')
}

});

//Typed Initiate
if ($('.typed-text-output').lenght == 1){
  var typed_strings = $('.typed-text').text();
  var typed = new Typed('.typed-text-output', {
    strings:typed_strings.split(', '),
    typeSpeed:100,
    backSpeed: 20,
    smartBackspace:false,
    loop: true
  });
}

})(jQuery);