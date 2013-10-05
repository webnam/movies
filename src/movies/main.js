/**
 * @author Behnam Behjoo
 */

var com_movies = com_movies || {};

com_movies.Main = (function(){
	return Class.extend({
		name: "main"
	,
		init: function(){
			// alert( this.name );
			var
				that = this
			;
			
			$(document).ready(function(){
				that.load();
			})
		}
	
	,	load: function(){
		
			var
				el = $( ".outPut" )
			,	input = $( "" )
			;
			
			if( el.length > 0 ){
				alert( "exist" );
				
			}
		
			addChild({
					element: "html_topNav"
				,	data: com_movies.topNav.set()
				,	container: ".topNav-container"
			})
			
			function addChild( params ){
				alert( params.data.home );
				//$( "#" + params.container ).append( $( params.footer.getNode() ) );
				//alert( params.element );
				$( params.container ).html( tmpl( params.element, params.data ) );
				
			}
		}
	})
})();

com_movies.main = new com_movies.Main();
