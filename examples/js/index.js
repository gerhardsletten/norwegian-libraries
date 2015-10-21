var $ = require('jquery');
require("../../dist/norwegian-libraries");

$(function() {
	var debug = function(eventName) {
		var el = $('.debug');
		return func = function(library) {
			el.html(eventName + "\n" + JSON.stringify(library));
		};
	};

	$('.js-event').norwegianLibraries({
		btnClass:"btn btn-primary",
		selectClass:"form-control",
		query:"erlend loe",
		formClass:"form-inline",
		cookieName : "kake-navn",
		onSubmit : debug("onSubmit"),
		onSelect : debug("onSelect")
	});
});