// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var signal_SignalSwitch = CircuitFigure.extend({

   NAME: "signal_SignalSwitch",
   VERSION: "2.0.288_1014",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:80},attr), setter, getter);
     var port;
     // input_port3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.4395000000004075, y: 85.40862500000003 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port3");
     port.setMaxFanOut(20);
     // input_port2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.4395000000004075, y: 48.75 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port2");
     port.setMaxFanOut(20);
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.4395000000004075, y: 13.090745231628489 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 101.18416287231412, y: 31.980624999999918 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 80;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,80 L0,80");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,2Q0,0 2, 0L38,0Q40,0 40, 2L40,78Q40,80 38, 80L2,80Q0,80 0, 78L0,2');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Selector');
       shape.attr({"x":5,"y":68.3125,"text-anchor":"start","text":"Selector","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // up_line
       shape = this.canvas.paper.path('M35.0014546875027 23.937916406248405L5.0260546874969805,12.308116406252338');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","up_line");
       
       // down_line
       shape = this.canvas.paper.path('M34.92365468750086 26.972316406244317L5.275854687495666,38.43831640625194');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","down_line");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * Generated Code for the Draw2D touch HTML5 lib.
 * File will be generated if you save the *.shape file.
 *
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custom code and event handler here.
 *
 * Looks disconcerting - extending my own class. But this is a good method to
 * merge basic code and override them with custom methods.
 */
signal_SignalSwitch = signal_SignalSwitch.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        let inValue = this.getInputPort("input_port1").getValue();
        this.getOutputPort("output_port1").setValue(5-inValue);
    }

});