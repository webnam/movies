/**
 * @author Behnam Behjoo
 */

var sys = ( function( global ){
	
	return com_movies.Base.extend({
		name: "sys"
	,	load: function(){
			alert( this.name );
		}
	})
	
} ( this ) );
