(function() {
	'use strict';

	angular
		.module('app.sekolah', [
			'ui.bootstrap', 
			'ui.bootstrap.tpls',

			'validation', 
			'validation.rule',
			'app.directive.datepicker',

			'app.sekolah.repository'
		])

})();