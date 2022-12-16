(function($) {

"use strict"

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