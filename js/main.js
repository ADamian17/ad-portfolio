console.log("hello Adonis");

$(document).ready(function(){
  console.log('here')
  $(window).scroll(function(){
  	let scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".nav-container").css("background" , "rgba(0,0,0,0.5)");
	  }
	  else{
		  $(".nav-container").css("background" , "transparent");  	
	  }
  })
})