/**
 * @author Behnam Behjoo
 */

com_movies.Home = (function(){
	return com_movies.Base.extend({
		name: "Home"
	,	load: function(){
			var
				sliderContainer = new com_movies.Slider()
			,	$slides = $( ".tabs-container .slides" )
			,	slidesLen = $slides.length
			,	slideNr = 1
			,	previousSlide = 1
			;
			
			alert( this.name );
			
			//com_movies.topNav.set( "home" );
			//com_movies.topNav.load();
			
			switchSlide();
			
			function switchSlide(){
				$( ".slides" ).fadeOut( 2000 );
				$( "#slide" + slideNr ).fadeIn( 2000 );
				slideNr++;
				slideNr = slideNr >= slidesLen + 1 ? 1 : slideNr;
				setTimeout( switchSlide, 2000 );
			}
		}
	})
})();

com_movies.home = new com_movies.Home();
