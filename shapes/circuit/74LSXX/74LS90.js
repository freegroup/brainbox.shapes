// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_74LSXX_74LS90 = CircuitFigure.extend({

   NAME: "circuit_74LSXX_74LS90",
   VERSION: "1.0.150_272",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:62,height:160},attr), setter, getter);
     var port;
     // pin_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 11.522499999999987 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_1");
     port.setMaxFanOut(20);
     // pin_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 24.022499999999987 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_2");
     port.setMaxFanOut(20);
     // pin_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 37.01124999999999 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_3");
     port.setMaxFanOut(20);
     // pin_4
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 50 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_4");
     port.setMaxFanOut(20);
     // pin_5
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 61.85062500000001 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_5");
     port.setMaxFanOut(20);
     // pin_6
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 74.83937499999999 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_6");
     port.setMaxFanOut(20);
     // pin_7
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 1.575645161290415, y: 87.06937499999998 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_7");
     port.setMaxFanOut(20);
     // pin_8
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 87.06937499999998 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_8");
     port.setMaxFanOut(20);
     // pin_9
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 74.64749999999998 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_9");
     port.setMaxFanOut(20);
     // pin_10
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 61.85062500000001 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_10");
     port.setMaxFanOut(20);
     // pin_11
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_11");
     port.setMaxFanOut(20);
     // pin_12
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 37.01124999999999 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_12");
     port.setMaxFanOut(20);
     // pin_13
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 24.022499999999987 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_13");
     port.setMaxFanOut(20);
     // pin_14
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.04983870967756, y: 11.522499999999987 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("pin_14");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 62;
      this.originalHeight= 160;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L62,0 L62,160 L0,160");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L62 0L62 160L0 160Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       

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
circuit_74LSXX_74LS90 = circuit_74LSXX_74LS90.extend({

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
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
    },

    /**
     * Get the simulator a hint which kind of hardware the shapes requires or supports
     * This helps the simulator to bring up some dialogs and messages if any new hardware is connected/get lost
     * and your are running a circuit which needs this kind of hardware...
     **/
    getRequiredHardware: function(){
      return {
        raspi: false,
        arduino: false
      }
    }

});