//if textbox is empty/lose focus, remove
//if textbox value > 0, add input below

var x = 1;
console.log(x);

$('input').keyup(function() {
  var check4txt = $('input').val().length;
  var txtmin = 1;
  if (check4txt === 0){
    $('input').removeClass('<input type="text" name="input_box">');
  } else if (check4txt < txtmin){
    $('input').removeClass('<input type="text" name="input_box">');
  } else if (check4txt > txtmin){
    $('input').after('<input type="text" name="input_box">');
  }
});
