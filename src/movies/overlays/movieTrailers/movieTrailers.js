/**
 * @author Behnam Behjoo
 */

com_movies.Main.overlays.movieTrailers = (function(){

	return com_movies.AbstractPage.extend({
		namespace: "com_movies.Main.overlays.movieTrailers"

	,	init: function() {
			this._super();
		}
	
	,	load: function(){
			var that = this;

			$( ".close" ).hover(
				function() {
					$( this ).stop().animate( { "opacity": "1" } );
				},
				function() {
					$( this ).stop().animate( { "opacity": "0.3" } );
				}
			)	
				.click( this.hideOverlay );

			// Main.overlayInstance = "movie-trailer";

			this._super();
		}
	,	hideOverlay: function() {
			var _overlay = ".movie-trailer";
			this._super( _overlay );
		}
	})
})( this );
