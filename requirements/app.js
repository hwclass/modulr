'use strict';

var app = (function() {

	return {
		//Method to load modules
		loadModules : function (modulesPath, modules, callback) {
			for (var counter = 0, len = modules.length; counter < len; counter++) {
				var scriptFile = document.createElement('script'); 
        scriptFile.async = false;
        scriptFile.src = modulesPath + '/' + modules[counter];
        document.body.appendChild(scriptFile);
			}
			callback();
			/*
			for (var counter = 0, len = modules.length; counter < len; counter++) {
				$.ajax({
	        url: modulesPath + '/' + modules[counter],
	        dataType: 'script',
	        async : false,
	        error: function (e) { 
	        	console.dir(e); 
	        }
	      });
			}
			*/
			$.ajax({
        async:false,
        type:'GET',
        url:script,
        data:null,
        success:callback,
        dataType:'script'
	    })
		}
	}

})();
