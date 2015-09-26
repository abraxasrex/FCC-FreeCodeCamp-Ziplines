$(document).ready(function(){
  ////define vars and funcs////
  var memory;
  var num;
  var current;
  var clearnext;
  function takeInput(x){
    num=$("user_in").val();
    x.preventDefault();
  }
  ///////testing///

  ////button events////
  $(".numeral").click(function(){
    var digits=$("#test").text();
    if(clearnext===1){
      $("#test").empty();
      clearnext=0;
    }
    if(digits.length<15){
     var number=$(this).text(); $("#test").append(number);
    }
  })
  $("#clr").click(function(){
    $("#test").empty();
  })
  
  
  $("#addB").click(function(){
    memory=$("#test").text();
    clearnext=1;
    current="+";
  })
  
  $("#subB").click(function(){
     memory=$("#test").text();
    clearnext=1;
    current="-";
    
  })
  
  $('#multB').click(function(){
     memory=$("#test").text();
    clearnext=1;
    current="x";
  })
  
  $("#divB").click(function(){
     memory=$("#test").text();
    clearnext=1;
    current="/";
  })
  
  
  $("#entB").click(function(){
    var results;
    if(memory.length){
      var memory2=$("#test").text();
      $("#test").empty();
      if(current==="+"){
        results=parseInt(memory) +
 parseInt(memory2);
        
    }
    else if(current==="-"){
        results=(memory)-parseInt(memory2);
    }
      else if(current==="x"){
        results=parseInt(memory)* parseInt(memory2);
      }
      else if(current==="/"){
        
      results=    parseInt(memory)/parseInt(memory2);
      }
    }
    memory="";
   if(String(results).length>15){
    results=String(results); $("#test").append(results.substring(results[0],results[15]))
   }
    else{
      $("#test").append(results);
    }
  });
  
})
