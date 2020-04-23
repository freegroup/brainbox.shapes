// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var functional_text_display = CircuitFigure.extend({

   NAME: "functional_text_display",
   VERSION: "1.0.165_301",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:66.6820000000007,height:26.334100000000035},attr), setter, getter);
     var port;
     // port_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.6940103776107176, y: 50 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 66.6820000000007;
      this.originalHeight= 26.334100000000035;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L66.6820000000007,0 L66.6820000000007,26.334100000000035 L0,26.334100000000035");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 13.029900000001362L16.80304999999862 0L66.6820000000007 0.3341000000000349L66.6820000000007 26.334100000000035L16.036800000001676 26.334100000000035Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // label
       shape = this.canvas.paper.text(0,0,'label');
       shape.attr({"x":18.7757500000007,"y":12.834100000000035,"text-anchor":"start","text":"label","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","label");
       

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
functional_text_display = functional_text_display.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

         // your special code here
        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        var _this = this;
        
        // handle the size of the shape if the label has changed
        //
        var adjustWidth = function(){
            var width = _this.layerGet("label").getBBox().width+15

            _this.setWidth(width+5);
            _this.layerAttr("BoundingBox", { path: `M0 0 L${width} 0 L${width} 20 L0 20 Z`})
            _this.layerAttr("outline",     { path: `M0 10 L13 0 L${width} 0 L${width} 20 L13 20 Z`})
          
        }

        // get the connected port and forward the port to the related party ( SignalSource shape)
        //
        this.getInputPort(0).on("change:value", function(emitter, event){
           _this.layerAttr("label", {text: event.value})
           adjustWidth()
        })
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function(context)
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
    },
    
  /**
   * @private
   */
  applyTransformation: function () {
    let s =
      // override the base implementation and do not scale the internal SVG elements....this let the arrow looks a like streche...we
      // calculate the path in the event handler. A lot more code....but the result is much cleaner
      //"S" + this.scaleX + "," + this.scaleY + ",0,0 " +
      "R" + this.rotationAngle + "," + ((this.getWidth() / 2) | 0) + "," + ((this.getHeight() / 2) | 0) +
      "T" + this.getAbsoluteX() + "," + this.getAbsoluteY() +
      ""
    this.svgNodes.transform(s)
    if (this.rotationAngle === 90 || this.rotationAngle === 270) {
      let before = this.svgNodes.getBBox(true)
      let ratio = before.height / before.width
      let reverseRatio = before.width / before.height
      let rs = "...S" + ratio + "," + reverseRatio + "," + (this.getAbsoluteX() + this.getWidth() / 2) + "," + (this.getAbsoluteY() + this.getHeight() / 2)
      this.svgNodes.transform(rs)
    }

    return this
  }

});