$(document).ready(function(){

// Inicializando WOW
// *****************
new WOW().init();

// IR ARRIBA
// ======================
$('.ir-arriba').click(function(){
	$('body, html').animate({
		scrollTop: '0px'
	}, 1000);
})

$(window).scroll(function(){
	if( $(this).scrollTop() > 0 ){
		$('.ir-arriba').slideDown(300);
	} else {
		$('.ir-arriba').slideUp(300);
	}
})

//MOVER LENTO TODOS LOS HREF
//====================
$("a").click(function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

   // Store hash
    var hash = this.hash;

   // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 1200, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
});
