## modulr
A very simple modular approach.

### usage
1 - Include modulr-0.1.0.js file into the main html file (here is default.html).

```html
<script type="text/javascript" src="modulr-0.1.0.js"></script>

2 - Create module files in modules directory. They are called by their file name.

<pre>
	<code lang="javascript">
		var s,
		Module1 = {

			//The module-specific configurations
			settings: {
				numOfDivisions: 1,
				div1: $('#test1Div')
			},

			//The module initialization method to start itself
			init: function() {
				s = this.settings;
				this.bindUIActions();
				this.bindDefaultSettings();
			},

			//The method to set some eventful bindings
			bindUIActions : function() {
				s.div1.on('click', function() {
					alert('clicked div number 1');
				});
			},

			//The method to set some default settings like style declerations
			bindDefaultSettings: function() {
				s.div1.css('cursor','pointer');
			},

			//One of some custom methods : createMoreDivs
			createMoreDivs: function() {
				//create more divisions...
			},

			//One of some custom methods : getTheNumberOfDivs
			getTheNumberOfDivs: function() {
				return this.numOfDivisions();
			}

		}
	</code>
</pre>
