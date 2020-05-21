// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Preview = CircuitFigure.extend({

   NAME: "video_Preview",
   VERSION: "2.0.107_560",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.875, y: 50 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 102.5, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80 L0,80");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M3.5,3.5085840000001554Q3.5,1.5085840000001554 5.5, 1.5085840000001554L74.5,1.5085840000001554Q76.5,1.5085840000001554 76.5, 3.5085840000001554L76.5,51.508584000000155Q76.5,53.508584000000155 74.5, 53.508584000000155L5.5,53.508584000000155Q3.5,53.508584000000155 3.5, 51.508584000000155L3.5,3.5085840000001554');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(240,243,243,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M23.872197764576413 34.69697836850173L23.699999999999818 34.69697836850173L23.699999999999818 48.328520000000026L42.69999999999982 48.328520000000026L42.69999999999982 34.69697836850173L42.52780223542322 34.69697836850173L42.39973483853282 33.84124771412098L41.97828481194847 32.92176425057005L41.29011104337951 32.05903235089045L40.356123344550724 31.27926568728435L39.20470045907223 30.606157075243573L37.870827788668976 30.060158579344716L36.39503437946041 29.657860087585505L34.822161467396654 29.41148523607808L33.19999999999982 29.328520000000026L31.577838532602982 29.41148523607808L30.004965620539224 29.657860087585505L28.52917221133066 30.060158579344716L27.195299540927408 30.606157075243573L26.043876655448912 31.27926568728435L25.109888956620125 32.05903235089045L24.421715188051166 32.92176425057005L24.000265161466814 33.84124771412098L23.872197764576413 34.69697836850173Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8.5,"cx":32.69999999999982,"cy":17.828520000000026,"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Preview');
       shape.attr({"x":15.5,"y":67.50858400000016,"text-anchor":"start","text":"Preview","font-family":"\"Arial\"","font-size":14,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

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
video_Preview = video_Preview.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        
        this.TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth()-6, 
            height: this.getHeight()/4*3-6,
            selectable: false,
            deleteable: false,
            resizeable:false,
            draggable: false,
            path: this.TRANSPARENT_PIXEL
        });
        this.img.hitTest = ()=>false;
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:3, y:3}));

        this.getInputPort("input_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
        
        this.attr({
            resizeable:false
        });
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
        var image = this.getInputPort("input_port1").getValue();
        if (image instanceof HTMLImageElement) {
            this.img.attr("path", image.src);
            this.getOutputPort("output_port1").setValue(image);
        }
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
    
  
    getPersistentAttributes: function () 
    {
       let currentImage = this.img.attr("path");
       this.img.attr("path", this.TRANSPARENT_PIXEL);
    
       let memento = this._super()
    
       this.img.attr("path", currentImage);

       return memento
    },

    setPersistentAttributes: function (memento) 
    {
        this._super(memento);

        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image);
        this.img.hitTest = ()=>false;
        
        this.getInputPort("input_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
    }
});