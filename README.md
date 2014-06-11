## modulr
A modular approach to modular javascript techniques.

### usage
1 - Include config.js into the main html file (here is default.html). config.js has the modules to be loaded in the main file by including them with script tags.

<pre>
<code lang="javascript">
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript" src="init.js"></script>
</code>
</pre>

2 - Include init.js into the main html file. init.js is the initialization file that make modules work by their init methods.

3 - Create module files in modules directory. They are called by their file name.
