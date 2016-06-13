// CHECK TO SEE IF widdy.js is linked, AND if jQuery is also linked from google CDN
// jQuery(function(){
//     console.log('All ready to go!');
// });

$(function () {
  'use strict';

  var counter = 0;
  //ALERT TEST - to make sure the button click worked
  // $('.btn1').on('click', function(e) {alert("Yay!");});

  //CLICK CHANGES CLASS TO 'SHOW'
    $('.btn1').on('click', function () {
      counter++;
      $(this).text('ur brave');
      $('.modal_wrap').addClass('showing');   //use period when calling, but upon addClass, no period needed unless referring to the class ..showing in CSS


    $('.modal_close, .showing').on('click', function () {
      $('.modal_wrap').removeClass('showing');
      $('.btn1').text('wanna click again?');
    });
    $('.counter').html(counter);
  });
});
