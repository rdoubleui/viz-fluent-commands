var viz = require("viz-fluent-commands");

var cmd_builder = viz.create();

cmd_builder.addLayer(viz.constants().main_layer);

console.log('Layer set: ' + cmd_builder.layer);