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
    if(memory.length){
      var memory2=$("#test").text();
      $("#test").empty();
      if(current==="+"){
        $("#test").append(
 parseInt(memory) +
 parseInt(memory2)
        );
    }
    else if(current==="-"){
      $("#test").append(
        parseInt(memory)-parseInt(memory2));
    }
      else if(current==="x"){
        $("#test").append(
        parseInt(memory)* parseInt(memory2));
      }
      else if(current==="/"){
        $("#test").append(
          parseInt(memory)/parseInt(memory2));
      }
    }
    memory="";
   
  });
  
})
