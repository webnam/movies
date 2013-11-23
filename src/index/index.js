/**
 * @author Behnam Behjoo
 */

com_movies.Home = ( function() {

	Main.namespace = "com_movies.Home";

	Main.tpldata = {

	}

	return com_movies.AbstractPage.extend({
		namespace: "com_movies.Home"
	,	load: function(){
			var
				showOutput = true				
			,	that = this
			;

			$( "body" ).backstretch( "/images/main_background2.jpg" );
			$( ".background-blurry" ).backstretch( "/images/main_background2_blurry.jpg" );

			$.ajax({
			    url: "../src/func/movielist/movielisttest.json",
			    dataType: 'json',
			    // data: com_movies.Main.Movielist,
			    success: function (data) {
			    	Main.data = data;
			    	that.data = data;

					var items = [],
						nr = 0;

					$.each( Main.data.Movies, function( key, val ) {
						if( val.newMovie ){
							nr = ( nr >= 4 ) ? 1 : nr = nr + 1;
							var _class = ""

							if( nr == 1 ) {
								_class = "first";
							}
							else if( nr == 4 ) {
								_class = "last";
							}

							items.push( "<div id='" + key + "' class='image " + _class + "'><img src='/images/movies/" + 
								val.largeImage + "' /><img src='/images/movies/" + val.blurryImage + "' class='blurry' /><div><div class='title'>" + val.moviename + "</div></div></div>" );						
						}
					});

					
					$( ".img-container .movie_info" ).before( items.join( "" ) );

					$( ".title" ).each( function() {
						var _marginTop = ( parseInt( $( this ).css( "height" ) ) ) / 2;
						$( this ).css( "marginTop", "-" + _marginTop + "px" );
						
					})

					$( ".image" ).on( "click", _clickHanler )

					// var tmpItems = [];
					// $.each( Main.data.Movies, function( key, val ) {
					// 	if( val.newMovie ){
					// 		nr = ( nr >= 4 ) ? 1 : nr = nr + 1;
					// 		var _class = ""

					// 		if( nr == 1 ) {
					// 			_class = "first";
					// 		}
					// 		else if( nr == 4 ) {
					// 			_class = "last";
					// 		}

					// 		tmpItems.push( val.moviename + "<br />" );						
					// 	}
					// });
					// $( ".container" ).append( tmpItems.join( "" ) );

			    }

			});

			function _clickHanler( e ) {

				var $this = $( this ),
					_movieName = $this.attr( "id" ),
					_left = $this.position().left,
					_top = parseInt( $this.position().top );

				_left = _left + ( parseInt( $this.css( "margin-left" ) ) );

				$( ".movie-search-container" ).removeClass( "active" );

				$( ".movie_info" )
					.css( { 
						"left": _left + "px", 
						"top": _top + 50 + "px", 
						"height": "0px" 
					} );

					$.getJSON( "../src/func/movielist/movielisttest.json", function( data ) {
						Main.tpldata = data.Movies[ _movieName ];
						that.updateChild( "movie_info", "html_movieslider", Main.tpldata );
					} );

				$( ".movie_info" ).addClass( "show" )
					.animate( { "height": 100 + "px" }, 600, function(){
						// $( this ).find( "a" ).hover(
						// 	function() {
						// 		$( this ).stop().animate( { "color": "#00ccff" } );
						// 	},
						// 	function() {
						// 		$( this ).stop().animate( { "color": "#ffffff" } );
						// 	}
						// ).end()

						that._movieSlider = new com_movies.Main.overlays.Slider();
					});


				e.stopPropagation();
				$( ".image" ).removeClass( "active" )
				$( ".blurry" ).fadeOut();
				$this.addClass( "active" )
					.find( ".blurry" ).fadeIn( 800 );
			}


				$( "input" ).on( "keydown", function( e ){
					var _self = this,
						key, x = e || window.event;

					key = (x.keyCode || x.which);
				    if( ( key <= 90 && key  >= 48 ) || key == 8 ){
						$.ajax({
		   				    url: "../src/func/movielist/movielisttest.json",
						    dataType: 'json',
						    success: function( data ) {
							  	var _movies = Main.data.Movies,
							  		_moviesArray = [],
							  		l,
							  		_outputArray = [],
							  		_val = $( _self ).val().toString();

							  	for( var key in _movies ){
							  		_moviesArray.push( _movies[ key ] );
							  	}

							  	l = _moviesArray.length;

							  	if( _val != "" ) {

								  	for( var i = 0; i < l; i++ ){
								  		if( _moviesArray[ i ].moviename.toUpperCase().indexOf( _val.toUpperCase() ) >= 0 ){
								  			var _tmpName = "",
								  				_matchObj = _moviesArray[ i ],
								  				_outPut = [],
								  				_currentMovie = _matchObj.moviename,
								  				_indexOfVal = _currentMovie.toUpperCase().indexOf( _val.toUpperCase() ),
								  				_searchString = _currentMovie.substring(_indexOfVal, _indexOfVal + _val.length);
								  				_resultString = "<span>" + _searchString + "</span>";

								  			_tmpName = _currentMovie.replace(_searchString, _resultString);

								  			_matchObj.outputName = _tmpName;
								  			_outputArray.push( _matchObj );
								  		}
								  	}

								  	if (_outputArray.length == 0) {
										$(".other-search-list .content").html("<ul><li><div class='header-container'><span class='noresults'>NO MATCHING RESULTS TO DISPLAY</span></div></li></ul>");
								  	}
								  	else {
									  	Main.outputArray = _outputArray;
										Main.tpldata = Main.outputArray;
										Main.overlayInstance = "other-search-list";
										that.showOverlay( "html_otherSearchList", Main.tpldata );
										that._movie = new com_movies.Main.overlays.otherSearchList();

								  	}

								}
								else {
									$(".other-search-list .content").html("<ul><li><div class='header-container'><span class='noresults'>NO MATCHING RESULTS TO DISPLAY</span></div></li></ul>");
								}
		   				    }
						})
  				    }
					else if( key == 27 ) {
						$( ".search-output" ).html( "" );
					}
		
				})
					.on( "click", function() {
						$(this).val("")
							.addClass("active");
						$( ".search-output" ).html( "" );
						$( ".movie-search-container" ).focus();

					} )
					.on("blur", function () {
						$(this).removeClass("active")
							.val("FIND YOUR MOVIE");
					});

			$("input").on("keydown", function () {
				Main.overlayInstance = "other-search-list";
				$( ".background-blurry" ).fadeIn( 800 );
				$( "#index .content" ).animate({"opacity": "0"});
				$( ".searchbox-container .searchbox-background" ).animate({"opacity": "0.4"});
				$( "." + Main.overlayInstance ).fadeIn( 800 );
			})

			$( ".movie-search" ).on( "blur", function() {
				// $( ".movie-search-container" ).removeClass( "active" )
				// $( ".search-output" ).css( "display", "none" );
				$( this ).attr( "value", "SEARCH FOR A MOVIE" )
			} )	
				.on( "focus", function() {
					$( this ).attr( "value", "" )
					$( ".movie-search-container" ).addClass( "active" );
				} );	

			$( ".movie-search-container" ).click( function( e ) {
				e.stopPropagation();
			} )

			$( "#index" ).click( function() {
				$( ".movie-search-container" ).removeClass( "active" )
					.find( ".search-output" ).html( "" );
				$( ".image.active" ).removeClass( "active" )
				$( ".movie_info" ).removeClass( "show" );
				$( ".blurry" ).fadeOut();
			} )

			var movie = $.bbq.getState("newMovie");
			if (typeof movie != "undefined" && movie != "") {
				$.getJSON( "../src/func/movielist/movielisttest.json", function( data ) {
					Main.tpldata = data.Movies[movie];
					Main.overlayInstance = "old-movie-trailer";
					that.showOverlay( "html_oldMovieTrailers", Main.tpldata );
					
					that._movieTrailer = new com_movies.Main.overlays.oldMovieTrailers();
				})
			}
			
		}
	})
})( this );
