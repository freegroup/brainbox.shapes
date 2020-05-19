// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var media_detect_Person = CircuitFigure.extend({

   NAME: "media_detect_Person",
   VERSION: "2.0.59_451",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:79,height:63},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.341772151899149, y: 50 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 102.78481012658206, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 79;
      this.originalHeight= 63;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L79,0 L79,63 L0,63");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L79 0L79 63L0 63Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M39.87219776457641 37.32886189208148L39.69999999999982 37.32886189208148L39.69999999999982 56.70000000000073L58.69999999999982 56.70000000000073L58.69999999999982 37.32886189208148L58.52780223542322 37.32886189208148L58.39973483853282 36.11282359375309L57.97828481194847 34.8061891981788L57.29011104337951 33.58020176179252L56.356123344550724 32.472112292457496L55.20470045907223 31.51558952797859L53.870827788668976 30.739696928543708L52.39503437946041 30.168009598148274L50.822161467396654 29.817897967057434L49.19999999999982 29.700000000000728L47.57783853260298 29.817897967057434L46.004965620539224 30.168009598148274L44.52917221133066 30.739696928543708L43.19529954092741 31.51558952797859L42.04387665544891 32.472112292457496L41.109888956620125 33.58020176179252L40.42171518805117 34.8061891981788L40.000265161466814 36.11282359375309L39.87219776457641 37.32886189208148Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8.5,"cx":48.69999999999982,"cy":19,"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M34.13999999999942 8.260000000000218L63.13999999999942 8.260000000000218L63.13999999999942 32.26000000000022L34.13999999999942 32.26000000000022Z');
       shape.attr({"stroke":"rgba(255,23,77,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
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
media_detect_Person = media_detect_Person.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth(), 
            height: this.getHeight(),
            selectable: false,
            deleteable: false,
            resizeable:false,
            draggable: false,
            path: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        });
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:0,y:0}));
        this.on("change:dimension", (emitter, event)=>{
            this.img.attr(event);
        });

        this.rectangleLocator =  new draw2d.layout.locator.XYAbsPortLocator({x:0,y:0})
        this.rectangle = new draw2d.shape.basic.Rectangle({
                        x: 0, y: 0,
                        color: "#ff0000",
                        bgColor: null,
                        alpha  : 0.7,
                        width: 100,
                        visible:false,
                        height: 60,
                        radius: 5
                });
        this.add(this.rectangle, this.rectangleLocator)  
        
        this.model = null;
        try{
            // Initialize the Image Classifier method with MobileNet
            cocoSsd.load().then(model =>{
                this.model = model;
                console.log("model loaded");
            });
        }
        catch(e){
            console.log("didn't support mediaDevices")
        }
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        if(this.model===null){
            return;
        }
        
        var image = this.getInputPort("input_port1").getValue();
        if (image instanceof HTMLImageElement) {
            this.img.attr("path", image.src);
            this.model.detect(image, 1).then(predictions => {
                if(predictions.length>0){
                    let pre = predictions[0];
                    if(pre.class==="person"){
                       this.rectangle.setVisible(true)    
                       let bbox = pre.bbox;
                       let x_percent = 100/image.naturalWidth * bbox[0];
                       let y_percent = 100/image.naturalHeight * bbox[1];
                       let w_percent = 100/image.naturalWidth * bbox[2];
                       let h_percent = 100/image.naturalHeight * bbox[3];
                     
                       this.rectangle.attr({width: this.getWidth()/100*w_percent, height:this.getHeight()/100*h_percent})
                       this.rectangleLocator.setX(this.getWidth()/100*x_percent);
                       this.rectangleLocator.setY(this.getHeight()/100*y_percent);
                       this.rectangleLocator.relocate(0, this.rectangle)
                       this.getOutputPort("output_port1").setValue(true)
                    }
                    else{
                        this.rectangle.setVisible(false)
                        this.getOutputPort("output_port1").setValue(false)
                    }
                }
                else{
                    this.rectangle.setVisible(false)
                    this.getOutputPort("output_port1").setValue(false)
                }
            });
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
    
    setPersistentAttributes: function (memento) {
        this._super(memento);
        this.rectangle = this.getChildren().find( child => child instanceof draw2d.shape.basic.Rectangle);
        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image);
        this.on("change:dimension", (emitter, event)=>{
            this.img.attr(event);
        });
    }

});