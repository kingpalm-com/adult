// 2019-07-03
define(['jquery', 'domReady!'], function($) {return (
/**
 * @param {Object} c
 * @param {HTMLDivElement} e
 */
function(c, e) {
	var $e = $(e);
	//var $18 = $('#kingpalm_adult_18');
	//$18.closest('.df-field').addClass('kp-invalid');
	$('button', $e).click(function() {
		var $18 = $('#kingpalm_adult_18');
		if (!$18.is(':checked')) {
			$18.closest('.df-field').addClass('kp-invalid');
		}
		else {
			var parts = ['isAnAdult=1', 'path=/'];
			// 2019-07-03
			// «when no expiration date is set, a cookie is cleared when the user closes the browser»
			// https://stackoverflow.com/a/1783307
			if ($('#kingpalm_adult_remember').is(':checked')) {
				var days = 365;
				var date = new Date;
				date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
				var expires = 'expires=' + date.toGMTString();
				parts.splice(1, 0, expires);
			}
			document.cookie = parts.join('; ');
			location.reload();
		}
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