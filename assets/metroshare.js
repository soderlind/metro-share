<<<<<<< HEAD
/* Add jQuery object so Metroshare can be re-loaded */
jQuery(window).ready(function($) {
	$('.metroshare').fadeIn();

	$( 'html' ).on( 'click', '.metroshare .metro-tabs a', function( e ) {
		e.preventDefault();
		window.open( $( this ).attr( 'href' ), 'formpopup', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
		this.target = 'formpopup';
	});
});
=======
jQuery(window).ready(function($) {
	$('.metroshare').fadeIn();

	$('.metroshare .tabs a').click(function() {
		$( $(this).attr('href') ).submit();
		return false;
	})

	$('.metroshare form').submit(function(){
		window.open('', 'formpopup', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
        this.target = 'formpopup';
	});
});
>>>>>>> 77157a9074e1f3234ad75b6643d305728fcdb0bf
