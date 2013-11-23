/**
 * @author Behnam Behjoo
 */

com_movies.Main.overlays.otherSearchList = (function(){

	return com_movies.AbstractPage.extend({
		namespace: "com_movies.Main.overlays.otherSearchList"

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

			this._super();

			$( ".button-container a" ).hover(
				function() {
					$( this ).stop().animate( { "color": "#00ccff" } );
				},
				function() {
					$( this ).stop().animate( { "color": "#ffffff" } );
				}
			)

			$( "li" ).on( "click", function (e) {
				if( !$( this ).hasClass( "active" ) ) {
					$( "li.active" ).removeClass( "active" )
						.find( ".arrow" ).animate( { "backgroundColor": "#ffffff" } ).end()
						.animate( { "height": "60px" } );
					$( this ).addClass( "active" )
						.find( ".arrow" ).animate( { "backgroundColor": "#00ccff" } ).end()
						.animate( { "height": "150px" } );
				}
				else {
					$( this ).removeClass( "active" )
						.find( ".arrow" ).animate( { "backgroundColor": "#ffffff" } ).end()
						.animate( { "height": "60px" } );
				}

			} );

			$(".close").on("click", function () {
				that.hideOverlay();
			})

			$( ".show-trailer" ).on( "click", function( e ) {
				e.preventDefault();
				e.stopPropagation();

				_outPutClickHandler(this);

			} )
			
			function _outPutClickHandler (self) {
				var _template,
					_movie,
					_obj;

				$( ".movie-search-container, .image" ).removeClass( "active" );
				$( ".movie_info" ).removeClass( "show" );

				_movie = $( self ).attr( "id" );
			
				Main.tpldata = Main.data.Movies[ _movie ];
				window.location.replace( "#movie=" + _movie );
				Main.overlayInstance = "old-movie-trailer";
				_template = "html_oldMovieTrailers";
				_obj = com_movies.Main.overlays.oldMovieTrailers;
					// }
				that.showOverlay( _template, Main.tpldata );
				that._movie = new _obj();

					// } );
				
				// alert( _template );
			    //Your code here
			};
		}
	,	hideOverlay: function() {
			$( ".other-search-list" ).html("")
				.fadeOut();
			$( "#index .content" ).css( "opacity", "1" );
			$( ".background-blurry" ).fadeOut();
			this._super();
		}
	})
})( this );
