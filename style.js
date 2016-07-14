
$(function(){
  
  $("#submit").click(function(event){
    event.preventDefault();
  var selector = $("#selector").val();
  var property = $("input[name='property']").val();
  var value = $("input[name='value']").val();
  $(selector).css(property, value);    
  });

});
