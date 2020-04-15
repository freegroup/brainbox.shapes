// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_digital_gate_DIN40700_XOR = CircuitFigure.extend({

   NAME: "circuit_digital_gate_DIN40700_XOR",
   VERSION: "1.0.138_248",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:38.19999999999982,height:40},attr), setter, getter);
     var port;
     // output
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 98.8020942408384, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output");
     port.setMaxFanOut(20);
     // input0
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.617801047120431, y: 17.37925000000132 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input0");
     port.setMaxFanOut(20);
     // input1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.9267015706806467, y: 80 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 38.19999999999982;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L38.19999999999982,0 L38.19999999999982,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // shape
       shape = this.canvas.paper.path('M13.199999999999818 39.99286614625362L13.301511537634724 40L17.62508868578516 39.696155060244564L21.817296130125214 38.79385241571799L25.750755768816816 37.32050807568885L29.305951421166355 35.320888862379434L32.37486026629176 32.85575219373095L34.86423506187657 30L36.698437414442196 26.840402866513614L37.821736013656846 23.47296355333856L38.19999999999982 20L37.821736013656846 16.52703644666144L36.698437414442196 13.159597133486386L34.86423506187657 10L32.37486026629176 7.14424780626905L29.305951421166355 4.679111137620566L25.750755768816816 2.679491924311151L21.817296130125214 1.2061475842820073L17.62508868578516 0.3038449397554359L13.301511537634724 0L13.199999999999818 0.0071338537463816465L13.199999999999818 0.9913750037803766L13.99402079821175 2.0019469287772154L16.19360193285229 6L17.814280706884347 10.423435986881486L18.806813615862666 15.1378510253262L19.141043049594373 20L18.806813615862666 24.8621489746738L17.814280706884347 29.576564013118514L16.19360193285229 34L13.99402079821175 37.998053071222785L13.199999999999818 39.00862499621962L13.199999999999818 39.99286614625362Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(252,252,252,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","shape");
       
       // Line
       shape = this.canvas.paper.path('M5.778000000006614 0.45170000000052823L8.920350000008511,5.818049999997129L11.062700000006771,11.784399999996822L12.252300000006471,19.521999999994478L11.331200000003264,26.406700000002274L9.178300000007766,33.839099999998325L5.951700000006895,40.22900000000027');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M16.100000000000364 6.800000000000182L0,6.800000000000182');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M16.800000000000182 32.100000000000364L0.1999999999998181,32.100000000000364');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_digital_gate_DIN40700_XOR = circuit_digital_gate_DIN40700_XOR.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() || i2.getValue());
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function(context)
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function(context)
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