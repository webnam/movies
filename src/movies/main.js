/**
 * @author Behnam Behjoo
 */

var com_movies = com_movies || {},
	Main = {
		namespace: ""
	,	overlayInstance: ""
	,	instance: null
	,	CONSTANTS: {
			FIND_OLDER_MOVIES: "SEARCH FOR MOVIES TO RENT/BUY"
		}		
	};

com_movies.Main = (function(){
	Main.namespace = "com_movies.Main";

	return Class.extend({
		namespace: "com_movies.Main"
	,	overlays: {}	
	,	functions: {}
	,	init: function(){
			var
				that = this
			;

			$(document).ready(function(){
				that.load();
			})
		}
	
	,	load: function(){
			var that = this;
			$( "#wrapper" ).on( "click", ".overlay-background", function( e ) {
				e.stopPropagation();
				
				that.hideOverlay();
			} )
		}

	,	addChild: function( params ) {
			alert( params.data.home );
			//$( "#" + params.container ).append( $( params.footer.getNode() ) );
			//alert( params.element );
			$( params.container ).html( tmpl( params.element, params.data ) );
				
		}
	,	showOverlay: function( targetId, obj ) {
			this.updateChild( Main.overlayInstance, targetId, obj )

			if( Main.overlayInstance == "other-search-list" ) {
				$( ".background-blurry" ).fadeIn( 800 );
				// $( "#index .content" ).css( "visibility", "hidden" );
				$( "." + Main.overlayInstance ).fadeIn( 800 );
			}
			else {

				$( ".overlay-background" ).fadeIn( function() {
					$( "." + Main.overlayInstance ).fadeIn();
				} );
			}
				
		}
	,	hideOverlay: function() {
			$.bbq.removeState("newMovie");
			$( ".overlay-background, ." + Main.overlayInstance ).fadeOut();
			$( "." + Main.overlayInstance ).html( "" );
			// $( ".background-blurry" ).fadeOut();
			// $( "#index .content" ).css( "opacity", "1" );
			$( ".searchbox-container .searchbox-background" ).animate({"opacity": "0.8"});
			$( ".searchbox-container input" ).val(Main.CONSTANTS.FIND_OLDER_MOVIES)
				.removeClass("active");
				
		}
	})
})( this );

com_movies.Main.overlays = com_movies.Main.overlays || {};

// com_movies.main = new com_movies.Main();
