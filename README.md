# viz-fluent-commands
Small node module for building tcp commands for VizRT's scripting interface in Viz Engine fluently (experimental). 

##Considerations

Based on the [wiki article][] the approach for *fluent interfaces* in Javascript can be to use *prototype inheritance*, where basically an object method returns a reference to itself to allow for cascaded method calls.

## Testing

Started setting up a test environment based on mocha. Used in Visual Studio Code by creating a new task in my `launch.json` ([setup in VS Code][]):

```JSON
{
	"name": "Run mocha tests",
	"type": "node",
	"program": "C:/Users/Rajko/AppData/Roaming/npm/node_modules/mocha/bin/_mocha",
	"stopOnEntry": false,
	"args": ["test/**/*.js"],
	"cwd": ".",
	"runtimeExecutable": null,
	"env": {
		"NODE_ENV": "production"	
	},
	"sourceMaps": false,
	"outDir": "test/"
}
```


[wiki article]:https://en.wikipedia.org/wiki/Fluent_interface
[setup in VS Code]:http://raathigesh.com/Debugging-Mocha-Tests-In-VsCode/

