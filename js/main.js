console.log("hello Adonis");

$(document).ready(function(){
  $(window).scroll(function(){
  	let scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".navbar").css("background" , "rgba(0,0,0,0.5) !important");
	  }
	  else{
		  $(".navbar ").css("background" , "transparent !important");  	
	  }
  })
})