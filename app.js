var viz = require("viz-fluent-commands");

// get an instance of the command builder
var cmd_builder = viz.create();

// add a layer defined in 'constants'
cmd_builder.addLayer(viz.constants().main_layer);
console.log('Layer set: ' + cmd_builder.layer);
