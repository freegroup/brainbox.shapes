// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var media_detect_Person = CircuitFigure.extend({

   NAME: "media_detect_Person",
   VERSION: "2.0.52_433",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:97,height:91},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.0618556701030926, y: 50.00000000000001 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 103.09278350515463, y: 50.00000000000001 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 97;
      this.originalHeight= 91;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L97,0 L97,91 L0,91");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L97 0L97 91L0 91Z');
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
            path: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
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
            return
        }
        
        var image = this.getInputPort("input_port1").getValue()
        if (image instanceof HTMLImageElement) {
            this.img.attr("path", image.src)
            this.model.detect(image, 1).then(predictions => {
                if(predictions.length>0){
                    let pre = predictions[0];
                    let bbox = pre.bbox;
                    let x_percent = 100/image.naturalWidth * bbox[x]
                    console.log(bbox[0],x_percent)
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
        this._super(memento)
        this.rectangle = this.getChildren().find( child => child instanceof draw2d.shape.basic.Rectangle)
        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image)
        this.on("change:dimension", (emitter, event)=>{
            this.img.attr(event);
        });
    }

});