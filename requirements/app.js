'use strict';

module.exports = (function() {

  return {
    //Method to load modules
  	loadModules : function (modulesPath, modules) {
  		for (var counter = 0, len = modules.length; counter < len; counter++) {
  			$("head").append('<script type="text/javascript" src="' + modulesPath + '/' + modules[counter] + '"></script>');
  	    console.log(modules[counter] + ' loaded...');
      }
  	}
  }

})();
