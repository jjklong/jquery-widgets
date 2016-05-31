// CHECK TO SEE IF widdy.js is linked, AND if jQuery is also linked from google CDN
// jQuery(function(){
//     console.log('All ready to go!');
// });

$(function (){
  'use strict';
});

//ALERT TEST - to make sure the button click worked
// $('.btn1').on('click', function(e) {alert("Yay!");});

//CLICK CHANGES CLASS TO 'SHOW'
$('.btn1').on('click', function(e) {
  $(this).text('ur brave');
  $('.modal_wrap').addClass('showing');   //use period when calling, but upon addClass, no period needed unless referring to the class ..showing in CSS
});
