/**
 * @author Behnam Behjoo
 */

com_movies.AbstractPage = ( function() {
	return com_movies.Main.extend({
	
		namespace: "com_movies.AbstractPage"

	,	init: function() {
			this._super();
		}
					
	,	load: function(){
			this._super();
		}
	,	updateChild: function( srcId, targetId, obj ) {

			var results = document.getElementsByClassName( srcId )[ 0 ];
		    results.innerHTML = tmpl( targetId, obj );	
		}
	,	addChild: function( srcId, targetId, obj ) {
			var results = document.getElementsByClassName( srcId )[ 0 ];
		    results.innerHTML = tmpl( targetId, obj );	
		}
	})
})( this );
