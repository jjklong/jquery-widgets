$(function () {
  'use strict';
});


// 1) variables needed: maxLength, current length, counter
// 2) select $textarea, add keyup event
// 3) console.log(_ characters remaining)
// 4) add value (remaining characters) + .text to HTML ("characters remaining")
// 5) addClass() and grab .LxW for .after() textarea

/////////////////////////

var counter = $('.maxlength').keyup(function() {  //here's a variable that will give us the result of current number of characters in the text box 'LxW'.
//so, in order to do that, go grab the class .maxlength. We gotta track the input value with the .keyup event with the following function...
  var tweet = 140;                                //btw, we can only tweet in this box
  var curr_num = $('.LxW').val().length;          //here's another variable once you select the box, and keep track (.val) of the .length
  console.log(curr_num);
//subtract the limit 140 from the # of characters (the .length) in the box
  var print_val = (tweet - curr_num);
  console.log(print_val);
//grab .LxW to insert <p>characters remaining</p>
  $('.LxW').after("<p>" + "print_val" + "</p>" + " " + "<p>characters remaining</p>"); //select the box .LxW, and after put new <p> class with print_val
  });

console.log(counter);               //fail
