var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd = viz.create();

// add a layer defined in 'constants'
cmd.setLayer(viz.const.MAIN_LAYER);
console.log('Layer set: ' + cmd.layer);
