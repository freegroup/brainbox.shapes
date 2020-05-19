// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Detector = CircuitFigure.extend({

   NAME: "video_Detector",
   VERSION: "2.0.76_481",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:82},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.875, y: 49.23780487804878 }));
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
       shape = this.canvas.paper.path('M3.5,4.883584000000155Q3.5,2.8835840000001554 5.5, 2.8835840000001554L74.5,2.8835840000001554Q76.5,2.8835840000001554 76.5, 4.883584000000155L76.5,52.883584000000155Q76.5,54.883584000000155 74.5, 54.883584000000155L5.5,54.883584000000155Q3.5,54.883584000000155 3.5, 52.883584000000155L3.5,4.883584000000155');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(240,243,243,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M23.872197764576413 36.07197836850173L23.699999999999818 36.07197836850173L23.699999999999818 49.703520000000026L42.69999999999982 49.703520000000026L42.69999999999982 36.07197836850173L42.52780223542322 36.07197836850173L42.39973483853282 35.21624771412098L41.97828481194847 34.29676425057005L41.29011104337951 33.43403235089045L40.356123344550724 32.65426568728435L39.20470045907223 31.981157075243573L37.870827788668976 31.435158579344716L36.39503437946041 31.032860087585505L34.822161467396654 30.78648523607808L33.19999999999982 30.703520000000026L31.577838532602982 30.78648523607808L30.004965620539224 31.032860087585505L28.52917221133066 31.435158579344716L27.195299540927408 31.981157075243573L26.043876655448912 32.65426568728435L25.109888956620125 33.43403235089045L24.421715188051166 34.29676425057005L24.000265161466814 35.21624771412098L23.872197764576413 36.07197836850173Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8.5,"cx":32.69999999999982,"cy":19.203520000000026,"stroke":"none","stroke-width":0,"fill":"rgba(149,192,106,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M18.199999999999818 9.825120000000425L47.19999999999982 9.825120000000425L47.19999999999982 33.825120000000425L18.199999999999818 33.825120000000425Z');
       shape.attr({"stroke":"rgba(255,23,77,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Detector');
       shape.attr({"x":10.529459999999744,"y":69.5,"text-anchor":"start","text":"Detector","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // objectClass
       shape = this.canvas.paper.text(0,0,'person');
       shape.attr({"x":16.5,"y":38.3125,"text-anchor":"start","text":"person","font-family":"\"Arial\"","font-size":9,"stroke":"#000000","fill":"#FF0A2B","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","objectClass");
       

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
        
        this.objectClass = "person"
        this.on("change:userData.objectClass",(emitter, event)=>{
            this.layerAttr("objectClass", {text: event.value})
            this.objectClass = event.value;
            console.log(this.objectClass)
        });
        this.on("added",(emitter, event)=>{
             this.layerAttr("objectClass", {text: this.attr("userData.objectClass")})
        });
        this.attr("userData.objectClass",this.objectClass)


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
        });
        
        this.getInputPort("input_port1").attr({
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
        if(this.model===null){
            return;
        }
        
        var image = this.getInputPort("input_port1").getValue();
        if (image instanceof HTMLImageElement) {
            this.img.attr("path", image.src);
            this.model.detect(image, 1).then(predictions => {
                if(predictions.length>0){
                    let pre = predictions[0];
                    if(pre.class === this.objectClass){
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
                       this.getOutputPort("output_port1").setValue(5.0);
                    }
                    else{
                        this.rectangle.setVisible(false);
                        this.getOutputPort("output_port1").setValue(0.0);
                    }
                }
                else{
                    this.rectangle.setVisible(false);
                    this.getOutputPort("output_port1").setValue(0.0);
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
        
        this.objectClass = this.attr("userData.objectClass")
    },
    
    
    getParameterSettings: function () {
        return [
            {
                name: "objectClass",
                label: "Type of Object to detect",
                property: {
                    type: "enum",
                    values: [
"person",
"bicycle",
"car",
"motorcycle",
"airplane",
"bus",
"train",
"truck",
"boat",
"traffic light",
"fire hydrant",
"stop sign",
"parking meter",
"bench",
"bird",
"cat",
"dog",
"horse",
"sheep",
"cow",
"elephant",
"bear",
"zebra",
"giraffe",
"backpack",
"umbrella",
"handbag",
"tie",
"suitcase",
"frisbee",
"skis",
"snowboard",
"sports ball",
"kite",
"baseball bat",
"baseball glove",
"skateboard",
"surfboard",
"tennis racket",
"bottle",
"wine glass",
"cup",
"fork",
"knife",
"spoon",
"bowl",
"banana",
"apple",
"sandwich",
"orange",
"broccoli",
"carrot",
"hot dog",
"pizza",
"donut",
"cake",
"chair",
"couch",
"potted plant",
"bed",
"dining table",
"toilet",
"tv",
"laptop",
"mouse",
"remote",
"keyboard",
"cell phone",
"microwave",
"oven",
"toaster",
"sink",
"refrigerator",
"book",
"clock",
"vase",
"scissors",
"teddy bear",
"hair drier",
"toothbrush"
]
                }

            }];
    }

});