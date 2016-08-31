/* Add jQuery object so Metroshare can be re-loaded */
jQuery(window).ready(function($) {
	$('.metroshare').fadeIn();

	$( 'html' ).on( 'click', '.metroshare .metro-tabs a', function( e ) {
		e.preventDefault();
		window.open( $( this ).attr( 'href' ), 'formpopup', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
		this.target = 'formpopup';
	});
});
