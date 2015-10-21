var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd = viz.create();
var cmd2 = viz.create();

console.log(cmd.setLayer(viz.const.MAIN_LAYER).getCommandString());
console.log(cmd2.setLayer(viz.const.MAIN_LAYER).setControlContainer('control2').getCommandString());
console.log(cmd.setLayer(viz.const.FRONT_LAYER).setControlContainer('scripting').getCommandString());
