$(document).ready(function(){
     function doFetchQuote() {
 $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        $('#quote').html('"'+quote.quoteText+'"')
        $('#author').html("-"+quote.quoteAuthor)
        $('#tweet').attr('href','https://twitter.com/intent/tweet?text='+quote.quoteText+quote.quoteAuthor+"@yfsaaron").encodeURI()
      }
    });
 }
 doFetchQuote();
  
  $('#random').click(function() {
  
    doFetchQuote();
   
  })
                  });
