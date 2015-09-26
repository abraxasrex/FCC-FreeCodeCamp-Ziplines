$(document).ready(function(){
  var lat="";
  var lon="";
 var cityLoc="";
  var toTest;
  
  var cloudtest=/cloud/g;
  var raintest=/rain/g;
  var stormtest=/storm/g;
  var snowtest=/snow/g;
  var suntest=/sun/g;
  
  $.get("http://ipinfo.io", function(response){
     lat = ((response.loc).split(",")[0]);
    lon = ((response.loc).split(",")[1]);
    cityLoc = response.city;
    countryLoc=response.country
    $("#location").html("According to your IP, you're in"+cityLoc+", "+response.region+", "+response.country+".")
 
}, "jsonp");

 url="http://api.openweathermap.org/data/2.5/weather?units=metric&lat="+lat+"&lon="+lon;
  
  $.get(url,function(data){
     $("#weather").html(
       "temp: "+ data.main.temp + "Celcius<br>"+" forecast: "+ data.weather[0].description +"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"     
                       );
    
      toTest=data.weather[0].description; 
        
    if(raintest.test(toTest)){
      $("#back").addClass("rainy");
      $("h1").css("color","white");
    } 
     else if(cloudtest.test(toTest)){
      $("#back").addClass("cloudy");
      }
     else if(stormtest.test(toTest)){      $("h1").css("color","white");
      $("#back").addClass("stormy");
      }
     else if(snowtest.test(toTest)){
      $("#back").addClass("snowy");
      }
     else if(suntest.test(toTest)){
      $("#back").addClass("sunny");
      }
   
    
     },"jsonp");
  
  $("#weather").html("test strings"+lon+lat);
 
  
});
