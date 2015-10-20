var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd = viz.create();

// add a layer defined in 'constants'
var str = cmd.setLayer(viz.const.MAIN_LAYER).setLayer(viz.const.FRONT_LAYER).getCommandString();
console.log(str);

str = cmd.setLayer(viz.const.MAIN_LAYER).setControlContainer('control2').getCommandString();
console.log(str);

console.log(cmd._layer);
