// $(document).ready(function(){
//
// /*! Fades in page on load */
// $('#pic-header').css('display', 'none');
// // $('#pic-header').fadeIn(5000);
//
// });

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)

 })

 $( '#myNav .navbar-nav a' ).on( 'click', function () {
	$( '#myNav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

