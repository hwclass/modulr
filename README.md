## modulr
A very basic modular approach to modular javascript techniques.

### usage
1 - Include config.js into the main html file (here is default.html). config.js has the modules to be loaded in the main file by including them with script tags.

```html
<script type="text/javascript" src="config.js"></script>
```

2 - Include init.js into the main html file. init.js is the initialization file that make modules work by their init methods.

```html
<script type="text/javascript" src="init.js"></script>
```

<pre>
	<code lang="javascript">
		Module1.init();
	</code>
</pre>

3 - Create module files in modules directory. They are called by their file name.

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
