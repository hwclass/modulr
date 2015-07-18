'use strict';

var app = (function() {

	return {
		//Method to load modules
		loadModules : function (modulesPath, modules) {
			for (var counter = 0, len = modules.length; counter < len; counter++) {
				var scriptFile = document.createElement('script'); 
        scriptFile.async = true;
        scriptFile.src = modulesPath + '/' + modules[counter];
        document.body.appendChild(scriptFile);
			}
		}
	}

})();
