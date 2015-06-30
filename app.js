'use strict';

(function() {

  //Method to load modules
	function loadModules(modulesPath, modules) {
		for (var counter = 0, len = modules.length; counter < len; counter++) {
			$("head").append('<script type="text/javascript" src="' + modulesPath + '/' + modules[counter] + '"></script>');
	    console.log(modules[counter] + ' loaded...');
    }
	}

	//Let the show begin!
	loadModules(modulesPath, modules);

})();
