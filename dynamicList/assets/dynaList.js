//if textbox is empty/lose focus, remove
//if textbox value > 0, add input below

var x = 1;
console.log(x);


//Trying different if else statements to remove input when no content
var check4txt = $('input').val().length;
// var txtmin = 1;
  $('input').keypress(function() {
     if ($('.input').focus()) {
        $('.input').append('<input type="text" name="input_box">');
      } else {
        $('input').removeClass('<input type="text" name="input_box">');
      }
  });

//
// $('input').focus(function() {
//   var check4txt = $('input').val().length;
//   var txtmin = 1;
//   if (check4txt === 0){
//     $('input').removeClass('<input type="text" name="input_box">');
//   } else if (check4txt < txtmin){
//     $('input').removeClass('<input type="text" name="input_box">');
//   } else if (check4txt > txtmin){
//     $('input').after('<input type="text" name="input_box">');
//   }
// });
//
// $('input').focus(function() {
//   var check4txt = $('input').val().length;
//   var txtmin = 1;
//   if (check4txt > txtmin){
//     $('input').after('<input type="text" name="input_box">');
//   } else if (check4txt < txtmin) {
//     $('input:eq(1)').removeClass();
//   }
// });
