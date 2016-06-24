// Business logic
function countNumber(number) {
  var newInput = [];
  for ( var i = 1; i <= number; i += 1 ) {
    newInput.push(i);
  }

  return newInput;
};









// user interface
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();

      var number = parseInt($("input#input").val());
      var Output = countNumber(number)

      $("#result").text(Output);
    });
  });
