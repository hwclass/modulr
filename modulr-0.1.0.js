var config = require('requirements/config');
var app = require('requirements/app');
var init = require('requirements/init');

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
* Version : 0.1.0
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
  var loadModules = function () {
    app.loadModules(config.modulesPath, config.modules);
  }

  /**
  * initModules() invokes the init method within init wrapper to make the modules initialized
  *
  * @noparam
  */
  var initModules = function () {
    init();
  }

  return {
    load : loadModules,
    init : initModules
  }

}());
