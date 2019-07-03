// 2019-07-03
define(['jquery', 'domReady!'], function($) {return (
/**
 * 2019-06-02
 * @param {Object} c
 * @param {HTMLDivElement} e
 */
function(c, e) {
	var $e = $(e);
	$('button', $e).click(function() {
		var days = 14; //number of days until they must go through the age checker again.
		var date = new Date;
		date.setTime (date.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = "; expires=" + date.toGMTString ();
		document.cookie = 'isAnAdult=1;' + expires + "; path=/";
		location.reload();
	});
	(function() {
		var isAnAdult = function() {
			var nameEQ = 'isAnAdult=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt (0) == ' ') {
					c = c.substring (1, c.length);
				}
				if (c.indexOf (nameEQ) == 0) {
					return parseInt(c.substring(nameEQ.length, c.length));
				}
			}
			return null;
		};
		if (!isAnAdult()) {
			$e.removeClass('df-hidden');
		}
	})();
});});