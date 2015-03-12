$(document).ready(function() {
  var controller = new Controller();
  $('body').on('keyup', function(e) {
    if (e.keyCode === 13) {
      controller.play();
    }
  });
  $('body').on('click', 'td', function() {
    controller.columnClicked($(this).attr("class").substring(0,1));
  });

});
