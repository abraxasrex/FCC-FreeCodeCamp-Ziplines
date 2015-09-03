////uses JQuery and Bootstrap JS//////
///has an internal list of users of twitch.tv, tells you if they're online< and provides you links
$(document).ready(function() { 
   
  ////buttons////
$('#all_button').click(function(){
  $('#online_display').hide();
  $('#offline_display').hide();
  $('#all_display').show();
});
   $('#online_button').click(function(){
  $('#offline_display').hide();
  $('#all_display').hide();
  $('#online_display').show();
});
   $('#offline_button').click(function(){
  $('#online_display').hide();
  $('#all_display').hide();
  $('#offline_display').show();
});
   ///buttons///
  
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb", "twingalaxieslive","comster404","brunofin", "reckful", "thomasballinger","noobs2ninjas","beohoff"];
  users.forEach(function(name){
    var url = 'https://api.twitch.tv/kraken/streams/' + name +'?callback=?';
  $.getJSON( url ).success(function(data){
    getLi(name, data.stream);
  });
  });
  
});

function getLi(name, stream){
  var li = "<div class='user_tile'><a target='_blank' href='http://www.twitch.tv/" + name + "' ><li>" + name;
  if(stream){
    var title = stream.channel.status;
    
    if(title.length > 36){li += title.substr(0, 35) + "...</span>";}
    else{ li +=  title }
    li += "</li></a></div>";
    $('#all_display').append(li);
    $('#online_display').append(li);
  }else{
    li += "</li></a></div>";
    $('#all_display').append(li);
    $('#offline_display').append(li);
  }
  
}

//////////////////////
