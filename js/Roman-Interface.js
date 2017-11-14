$(document).ready(function(){
  $("form#to-roman").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-roman-input").val();
    var output = toRoman(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });

  $("form#to-decimal").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-decimal-input").val();
    var output = toDecimal(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });
});
