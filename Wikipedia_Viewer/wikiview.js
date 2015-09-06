$(document).ready(function(){
 var userInput;  

  var search;
   var base_url = 'http://en.wikipedia.org/w/api.php?action=query';
  var results = "&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|info&inprop=url&exchars=150&exintro&exlimit=max&explaintext&gsrsearch=";
 var options = "&format=json&callback=?"
  
  
   
  function populater(){
    var url = base_url + results + encodeURIComponent(userInput) + options;
    
  $.getJSON(url,{},function(data){
      var obj = data.query.pages; 
    
      for (var prop in obj){
        $("#test").append(
          "<div id='hits'><a href='"+obj[prop].fullurl+"'>"+obj[prop].title+"</a><br><div id='info'>"+obj[prop].extract+"</div></div>"
        );
         }
     
  }).fail(function(){
    
       $("#test").append("<div id='hits'>Oh no! No hits!</div>");
  })
    
  };
  
  
  
  $("button").on('click',function(x){
    $("#test").empty();
     userInput = $('#user_entry').val();
      x.preventDefault();
      populater();
    userInput=""; 
  });

  

});
