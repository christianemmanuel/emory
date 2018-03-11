$(document).ready(function() {
	var bodyToggle = $('body');

    var img = new Image();
	    img.src = 'images/main_banner.jpg';
	    if (img.src){
	     var int = setInterval(function() {
	      if (img.complete) {
	          clearInterval(int);
	          $('.main_banner').addClass("banner_image")
	      }  
	  }, 100);
	}
   

});