// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var media_detect_Person = CircuitFigure.extend({

   NAME: "media_detect_Person",
   VERSION: "2.0.57_445",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:60,height:63},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.3333333333333335, y: 50 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 103.33333333333334, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 60;
      this.originalHeight= 63;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L60,0 L60,63 L0,63");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L60 0L60 63L0 63Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M20.672197764576595 37.32886189208148L20.5 37.32886189208148L20.5 56.70000000000073L39.5 56.70000000000073L39.5 37.32886189208148L39.327802235423405 37.32886189208148L39.199734838533004 36.11282359375309L38.77828481194865 34.8061891981788L38.09011104337969 33.58020176179252L37.156123344550906 32.472112292457496L36.00470045907241 31.51558952797859L34.67082778866916 30.739696928543708L33.195034379460594 30.168009598148274L31.622161467396836 29.817897967057434L30 29.700000000000728L28.377838532603164 29.817897967057434L26.804965620539406 30.168009598148274L25.329172211330842 30.739696928543708L23.99529954092759 31.51558952797859L22.843876655449094 32.472112292457496L21.909888956620307 33.58020176179252L21.22171518805135 34.8061891981788L20.800265161466996 36.11282359375309L20.672197764576595 37.32886189208148Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8.5,"cx":29.5,"cy":19,"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M14.9399999999996 8.260000000000218L43.9399999999996 8.260000000000218L43.9399999999996 32.26000000000022L14.9399999999996 32.26000000000022Z');
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