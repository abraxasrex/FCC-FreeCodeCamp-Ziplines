$(document).ready(function() {
 
  $("#connect").click(function(){
    $(".second").fadeOut()
    $("#fader").fadeIn();
  });
  $("#about").click(function(){
    $("#fader").fadeOut()
    $(".second").fadeIn();
  });
  $("#portfolio").click(function(){
    $("body").scrollTop(400);
  });
  
  $("#wiggle").click(function(){
    
    if ($("div").hasClass("owl")){
      $("div").removeClass("owl")
      $("#owlspan").text("owls!")
    }
    
     else{
    $("div").addClass("owl")
    $("#owlspan").text("normal");
     }
    
  });
    
  });
  
  
