'use strict';

/*!
* modulr.js. A very simple modular approach.
*
* Copyright (c) 2013 Barış Güler
* http://hwclass.in
*
* Licensed under MIT
* http://www.opensource.org/licenses/mit-license.php
*
*
* Launch  : July 2013
* Version : 0.0.1
* Released: N/A
*
*
* manages the view states and other functionalities in applications
*/
var modulr = (function () {

  /**
  * loadModules() invokes the loadModules method within app context to inject them into HEAD tags
  *
  * @noparam
  */
  var loadModules = function (callback) {
    app.loadModules(config.modulesPath, config.modules, function () {
      callback();
    });
  }

  /**
  * initModules() invokes the init method within init wrapper to make the modules initialized
  *
  * @noparam
  */
  var initModules = function () {
    init();
  }

  /**
  * start() invokes loadModules and init method to start all modules
  *
  * @noparam
  */
  var start = function () {
    loadModules(function () {
      init();
    });
  }

  return {
    start : start
  }

}());
