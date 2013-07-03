var s, 
Module2 = {
	
	settings: {
		numOfDivisions: 2,
		div1: $('#test2ADiv'),
		div2: $('#test2BDiv')
	},

	init: function() {
		s = this.settings;
		this.bindUIActions();
		this.bindDefaultSettings();
	},

	bindUIActions : function() {
		s.div1.on('click', function() {
			alert('clicked div number 2A');
		});
		s.div2.on('click', function() {
			alert('clicked div number 2B');
		});
	},

	bindDefaultSettings: function() {
		s.div1.css('cursor','pointer');
		s.div2.css('cursor','pointer');
	},

	createMoreDivs: function() {
		//create more divisions...
	},

	getTheNumberOfDivs: function() {
		return this.numOfDivisions();
	}

}