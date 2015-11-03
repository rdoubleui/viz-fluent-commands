var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd = viz.create();
var cmd2 = viz.create();

console.log("CONSTANTS: " + viz.layers.MAIN_LAYER);

console.log(cmd.setLayer(viz.layers.MAIN_LAYER).getCommandString());
console.log(cmd2.setLayer(viz.layers.MAIN_LAYER).setControlContainer('control1').setControlContainer('control2').getCommandString());
console.log(cmd.setLayer(viz.layers.FRONT_LAYER).setControlContainer('scripting').getCommandString());

// the layer is not accessible from here
console.log(cmd._layer);
