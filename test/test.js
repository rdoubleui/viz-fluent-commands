'strict mode';

var assert = require('assert');
var viz = require("viz-fluent-commands"); // get an instance of the command builder

describe('CommandBuilder Tests', function() {
  
  var cmd = viz.createCommand();
  
  describe('#layer 1', function () {
        
    cmd.setLayer(viz.layers.BACK_LAYER);
    var result = cmd.getCommandString();
    
    var resultOmittingCounter = result.substring(result.indexOf(' ') + 1);
    
    it('should return a cmd string that includes back layer', function () {
      assert.equal('RENDERER*BACK_LAYER*TREE*$control\0', resultOmittingCounter);
    });
  }); 
      
  describe('#layer 2', function () { 
    cmd.setLayer(viz.layers.MAIN_LAYER).setLayer(viz.layers.FRONT_LAYER);
        
    var result = cmd.getCommandString();
    var resultOmittingCounter = result.substring(result.indexOf(' ') + 1);
    
    it('should return a cmd string that includes front layer', function () {
      assert.equal('RENDERER*FRONT_LAYER*TREE*$control\0', resultOmittingCounter);
    });
  }); 
  
});