var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd = viz.create();
var cmd2 = viz.create();

console.log(cmd.setLayer(cmd.getConstants().MAIN_LAYER).getCommandString());
console.log(cmd2.setLayer(cmd.getConstants().MAIN_LAYER).setControlContainer('control2').getCommandString());
console.log(cmd.setLayer(cmd.getConstants().FRONT_LAYER).setControlContainer('scripting').getCommandString());

// the layer is not accessible from here
console.log(cmd._layer);
