// user interface
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();

      var number = parseInt($("input#input").val());
