/**
 * @author Behnam Behjoo
 */

com_movies.Main.overlays.oldMovieTrailers = (function(){

	return com_movies.AbstractPage.extend({
		namespace: "com_movies.Main.overlays.oldMovieTrailers"

	,	init: function() {
			this._super();
		}
	
	,	load: function(){
			var that = this;

			$( ".links-container, .close" ).hover(
				function() {
					$( this ).stop().animate( { "opacity": "1" } );
				},
				function() {
					$( this ).stop().animate( { "opacity": "0.3" } );
				}
			)

			$( ".close" ).click( that.hideOverlay );

			$( ".links-container li" ).hover(
				function() {
					var $this = $( this );
					$this.find( "a" ).stop().animate( { "color": "#00ccff" } );
					if( $this.hasClass( "last" ) ) {
						$this.stop().animate( { "color": "#00ccff" } );
						$( ".last .arrow" ).stop().animate( { "backgroundColor": "#00ccff" } );
						var _height = $( ".links-container .torrent-links a" ).length * 15;
						$( ".links-container .torrent-links" ).stop().animate( { "height": _height + "px" } );
					}
				},
				function() {
					var $this = $( this );
					$this.find( "a" ).stop().animate( { "color": "#ffffff" } );
					if( $this.hasClass( "last" ) ) {
						$this.stop().animate( { "color": "#ffffff" } );
						$( ".last .arrow" ).stop().animate( { "backgroundColor": "#ffffff" } );
						$( ".links-container .torrent-links" ).stop().animate( { "height": "0px" } );
					}
				}
			)

			$( ".links-container li a.torrent-link" ).on( "click", function( e ) {
				e.preventDefault();
				e.stopPropagation();

				$( ".links-container li.last" ).toggleClass( "show" );
			} )

			this._super();
		}
	,	hideOverlay: function() {
			// $( "#index .content" ).css( "opacity", "1" );
			this._super();
		}
	})
})( this );
