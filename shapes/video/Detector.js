// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Detector = CircuitFigure.extend({

   NAME: "video_Detector",
   VERSION: "2.0.67_466",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:82},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.875, y: 48.78048780487805 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 104.02119999999968, y: 48.78048780487805 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 82;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,82 L0,82");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.5 1.5L77.5 1.5L77.5 59.5L4.5 59.5Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(240,243,243,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M42.37219776457641 37.12886189208075L42.19999999999982 37.12886189208075L42.19999999999982 56.5L61.19999999999982 56.5L61.19999999999982 37.12886189208075L61.02780223542322 37.12886189208075L60.89973483853282 35.912823593752364L60.47828481194847 34.60618919817807L59.79011104337951 33.380201761791795L58.856123344550724 32.27211229245677L57.70470045907223 31.315589527977863L56.370827788668976 30.53969692854298L54.89503437946041 29.968009598147546L53.322161467396654 29.617897967056706L51.69999999999982 29.5L50.07783853260298 29.617897967056706L48.504965620539224 29.968009598147546L47.02917221133066 30.53969692854298L45.69529954092741 31.315589527977863L44.54387665544891 32.27211229245677L43.609888956620125 33.380201761791795L42.92171518805117 34.60618919817807L42.500265161466814 35.912823593752364L42.37219776457641 37.12886189208075Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8.5,"cx":51.69999999999982,"cy":19.203520000000026,"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M37.19999999999982 9.825120000000425L66.19999999999982 9.825120000000425L66.19999999999982 33.825120000000425L37.19999999999982 33.825120000000425Z');
       shape.attr({"stroke":"rgba(255,23,77,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Detector');
       shape.attr({"x":10.529459999999744,"y":69.5,"text-anchor":"start","text":"Detector","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'person');
       shape.attr({"x":36.5,"y":37.3125,"text-anchor":"start","text":"person","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#FF0A2B","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
video_Detector = video_Detector.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth()-6, 
            height: this.getHeight()/4*3-6,
            selectable: false,
            deleteable: false,
            resizeable:false,
            draggable: false,
            path: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        });
        this.img.hitTest = ()=>false;
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:3, y:3}));


        this.rectangleLocator =  new draw2d.layout.locator.XYAbsPortLocator({x:0, y:0});
        this.rectangle = new draw2d.shape.basic.Rectangle({
                        x: 0, y: 0,
                        width: 20, height: 20,
                        color: "#ff0000",
                        bgColor: null,
                        alpha  : 0.7,
                        visible:false,
                        radius: 5
                });
        this.add(this.rectangle, this.rectangleLocator)  ;
        this.rectangle.setVisible(false);
        this.rectangle.hitTest = ()=>false;
        
        this.model = null;
        // Initialize the Image Classifier method with MobileNet
        cocoSsd.load().then(model =>{
            this.model = model;
            console.log("model loaded");
        });
        
        this.getInputPort("input_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
        
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
                       var height = this.getHeight()/4*3;
                       var width = this.getWidth();
                       this.rectangle.setVisible(true);
                       let bbox = pre.bbox;
                       let x_percent = 100/image.naturalWidth * bbox[0];
                       let y_percent = 100/image.naturalHeight * bbox[1];
                       let w_percent = 100/image.naturalWidth * bbox[2];
                       let h_percent = 100/image.naturalHeight * bbox[3];
                     
                       this.rectangle.attr({width:width/100*w_percent, height:height/100*h_percent});
                       this.rectangleLocator.setX(width/100*x_percent);
                       this.rectangleLocator.setY(height/100*y_percent);
                       this.rectangleLocator.relocate(0, this.rectangle);
                       this.getOutputPort("output_port1").setValue(true);
                    }
                    else{
                        this.rectangle.setVisible(false);
                        this.getOutputPort("output_port1").setValue(false);
                    }
                }
                else{
                    this.rectangle.setVisible(false);
                    this.getOutputPort("output_port1").setValue(false);
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
    
    setPersistentAttributes: function (memento) 
    {
        this._super(memento);
        this.rectangle = this.getChildren().find( child => child instanceof draw2d.shape.basic.Rectangle);
        this.rectangle.setVisible(false);
        this.rectangle.hitTest = ()=>false;
 
        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image);
        this.img.hitTest = ()=>false;
        
        this.getInputPort("input_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
    }

});