$(document).ready(function(){
  var lat="";
  var lon="";
 var cityLoc="";
  $.get("http://ipinfo.io", function(response){
     lat = ((response.loc).split(",")[0]);
    lon = ((response.loc).split(",")[1]);
    cityLoc = response.city;
    $("#location").html("The latitude of your ip is "+lat+", and the longitude of your ip is "+ lon +" putting you in the city of "+cityLoc+".")
 
}, "jsonp");

 url="http://api.openweathermap.org/data/2.5/weather?units=metric&lat="+lat+"&lon="+lon;
  
  $.get(url,function(data){
     $("#weather").html("the temperature is now: "+ data.main.temp + " Celcius"+" and your forecast is: "+ data.weather[0].description);
                        
     },"jsonp");
  
  $("#weather").html("test strings"+lon+lat);
  ////longitude and latitude won't transfer out of their original function!?
 
  
  
  
  
  
});
