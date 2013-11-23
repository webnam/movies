/**
 * @author Behnam Behjoo
 */

var com_movies = com_movies || {};

com_movies.topNav = (function(){
	return {
		set: function(){
			var
				menuItems = {}
			;
			
			alert("Nav container");
			menuItems.home = "Home";
			return menuItems;
			//var elementData = tmpl( "#html_topNav", menuItems );
			//document.getElementsByClassName( "topNav-container" )[0].innerHTML = tmpl( 'html_topNav', menuItems );
			//alert(elementData);
			//return elementData;
			//navEl.innerHTML = tmpl( "#topNav", obj )
			//alert( "topNav found" );
		
		}
	,	setting: function( left, section ){
			var
				_left = left
			,	width = parseInt( $( "#" + section ).outerWidth() )
			;
			
			_left += ( width / 2 ) - 25;
			
			$( "#topnav-select" ).animate( {"left": _left + "px"} );
		}
	,	load: function(){
			var
				that = this
			;

			$( "#topNav ul li" ).click(function(){
				that.set( parseInt( $( this ).position().left ), $( this ).attr( "id" ) )
			});
		}	
	}
	
	
})();
