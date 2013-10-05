/**
 * @author Behnam Behjoo
 */

var com_movies = com_movies || {};

com_movies.Base = (function(){
	return Class.extend({
	
		name: "Base"
			
	,	init: function(){
			
			var
				that = this
			;
			
			$( document ).ready(function(){
				that.load();
			})
			
		}
		
	,	load: function(){
			alert(this.name);
		}
	})
})();

//com_anou.base = new com_anou.Base();
