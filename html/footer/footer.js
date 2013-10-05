/**
 * @author Behnam Behjoo
 */

com_movies.Footer = (function(){
	return com_anou.Base.extend({
		init: function(){
			//alert("Footer");
		}
	,	name: "Footer"
	,	load: function(){
			
		}
	,	getNode: function(){
			var 
				_node = "script#footer"
			;
			
			if ( $( _node ).length > 0 ) alert( ".footerrrrrr" )
			
			return _node;
		}
	})
})();
