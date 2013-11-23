/**
 * @author Behnam Behjoo
 */

com_movies.Main.overlays.Slider = ( function( global ){

	Main.namespace = "com_movies.Main.overlays.Slider";

	return com_movies.AbstractPage.extend({
		namespace: "com_movies.Main.functions.Slider"
	,	load: function(){

			var that = this;

			$( ".show-trailer" ).click( function( e ) {
				// e.preventDefault();
				e.stopPropagation();

				$.bbq.pushState("newMovie");

				// alert($.bbq.getState("newMovie"));

				Main.overlayInstance = "old-movie-trailer";
				that.showOverlay( "html_oldMovieTrailers", Main.tpldata );
				
				that._movieTrailer = new com_movies.Main.overlays.oldMovieTrailers();
			} );

			$( ".last input" ).click( function( e ) {
				e.stopPropagation();

				$( this ).val( "" );
			} );
				
			$( ".last a" ).on( "click", function( e ) {
				e.stopPropagation();
				e.preventDefault();

				var _val = $( ".last input" ).val(),
					_href = $(this).attr("href"),
					_left = ( window.outerWidth / 2 ) - 350;
					myWindow=window.open(_href + _val,'','width=700,height=600,scrollbars=yes,dialog=no,toolbar=no,location=no');

				myWindow.moveTo(_left, 0);
				myWindow.focus();
			} );

		}
	})
} ( this ) )
