// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var hardware_raspi_GPIOWrite = CircuitFigure.extend({

   NAME: "hardware_raspi_GPIOWrite",
   VERSION: "2.0.252_929",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:102,height:43.067247719999614},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.0685528330637215, y: 59.2460079313381 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 102;
      this.originalHeight= 43.067247719999614;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L102,0 L102,43.067247719999614 L0,43.067247719999614");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M100,43.067247719999614Q102,43.067247719999614 102, 41.067247719999614L102,5.067247719999614Q102,3.0672477199996138 100, 3.0672477199996138L2,3.0672477199996138Q0,3.0672477199996138 0, 5.067247719999614L0,41.067247719999614Q0,43.067247719999614 2, 43.067247719999614L100,43.067247719999614');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // pin_label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":5.5,"y":25.140625,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","pin_label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Write GPIO');
       shape.attr({"x":4,"y":10.5078125,"text-anchor":"start","text":"Write GPIO","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
hardware_raspi_GPIOWrite = hardware_raspi_GPIOWrite.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function( context)
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                hardware.raspi.set(port.getName(), port.getValue());
            }
        });
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.gpio.get(port.getName()));
        });
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    }
    
});