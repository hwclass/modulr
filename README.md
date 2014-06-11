## modulr
A modular approach to modular javascript techniques.

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
	<code lang=""javascript>
		Module1.init();	
	</code>
</pre>

3 - Create module files in modules directory. They are called by their file name.

<pre>
	<code lang="javascript">
		var s, 
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
	</code>
</pre>