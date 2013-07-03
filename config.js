(function() {

	//Pyhsical modules path
	var modulesPath = 'modules';

	//List of modules to load
	var modules = [
					'module01.js',
					'module02.js'
	];

	//Method to load modules
	function loadModules(p,m) {
		for (var i=0; i<modules.length; i++) {
			$("head").append('<script type="text/javascript" src="' + p + '/' + m[i] + '"></script>');
		}
		console.log('modules loaded...');
	}

	//Let the show begin!
	loadModules(modulesPath,modules);

})();