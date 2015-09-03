$(document).ready(function(){
  ////define audio///
  
 
   var myAudio=document.getElementById("myAudio");

  ///timer generator function//
  
  function startTimer(duration, display) {
   var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
          
            myAudio.play();
         
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
   
    
    timer();
    setInterval(timer, 1000);
    
}

window.onload = function () {
    var smokeWeed = 60 * 4.34,
        display = document.querySelector('#time');
    startTimer(smokeWeed, display);
  

  };
 
  //////end timer generator function///
  
  
  ///change_face////
  $(".main_circle").click(function(){
    
 $("#subtitle").effect( "bounce", { times: 4 }, "slow" );

    
     var clicks = $(this).data('clicks');
  if (clicks % 2 !==0) {
       $(".main_circle").css("background-image","url(http://images.akamai.steamusercontent.com/ugc/540755714953286681/2447E2F5AF7A40440CC917E7AB361F1FE8ACC775/)")
       $("#subtitle").html("Blaze em if you got 'em! Click my face again, betch!")
  } else {
       $(".main_circle").css("background-image","url(https://lh3.googleusercontent.com/-yQvCPhSX3c0/VWBKEasS0JI/AAAAAAAAIcc/HUxuLaodKv8/s0-d/_wallpaper__kawaii_face_pink_by_kawaistore-d7d2nmg.png)")
       $("#subtitle").html("I'm high as Mt. Fuji. Click my face you miserable hikkomori!")
  }
  $(this).data("clicks", !clicks);
  });
    //////endchangeface///
  
  
 

  
  

////sound test//
  "http://www.oringz.com/oringz-uploads/sounds-874-gets-in-the-way.mp3"
/////
  
  
});

