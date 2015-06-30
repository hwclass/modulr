'use strict';

var s,
/**
* Module1() is a module object literal
*
* @noparam
*/
Module1 = {

	settings: {
		numOfDivisions: 1,
		div1: $('#test1Div')
	},

	init: function() {
		s = this.settings;
		this.bindUIActions();
		this.bindDefaultSettings();
	},

	bindUIActions : function() {
		s.div1.on('click', function() {
			alert('clicked div number 1');
		});
	},

	bindDefaultSettings: function() {
		s.div1.css('cursor','pointer');
	},

	createMoreDivs: function() {
		//create more divisions...
	},

	getTheNumberOfDivs: function() {
		return this.numOfDivisions();
	}

}
