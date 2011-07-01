// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(function() {
  // Date
  var now = new Date();
  setTimeout(time, (60-now.getSeconds())*1000);
  
  // CSS Cycle
  $(".entry").hover(
    function() {
      $(this).addClass('hover');
    },
    
    function() {
      $(this).removeClass('hover');
    }
  );
});

function time() {
  var now = new Date();
  $('#side span#date').text(dateFormat(now, "mmmm d, h:MM TT"));
  setTimeout(time, 60000);
}