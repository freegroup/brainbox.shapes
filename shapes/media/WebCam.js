// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var media_WebCam = CircuitFigure.extend({

   NAME: "media_WebCam",
   VERSION: "2.0.40_410",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:100,height:100},attr), setter, getter);
     var port;
     // output_port1
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 101.2724609375, y: 50 }));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 100;
      this.originalHeight= 100;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L100,0 L100,100 L0,100");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L100 0L100 100L0 100Z');
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
media_WebCam = media_WebCam.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        
        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth(), 
            height: this.getHeight(),
            path: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        });
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:0,y:0}));
        this.on("change:dimension", (emitter, event)=>{
            this.img.attr(event);
        });
        
        this.imageCapture = null;
        try{
            // Initialize the Image Classifier method with MobileNet
            cocoSsd.load().then(model =>{
                this.model = model;
                console.log("model loaded");
                navigator.mediaDevices.getUserMedia({ audio: false, video: true })
                   .then((stream) =>{
                        const track = stream.getVideoTracks()[0];
                        this.imageCapture = new ImageCapture(track);
                    })
                    .catch((err) =>{
                        console.log("no permission to use VideoCam");
                    })
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
        if(this.imageCapture===null){
            return
        }
        this.imageCapture.takePhoto()
            .then((blob) =>{
                var a = new FileReader();
                a.onload = (e) => {
                    this.img.attr("path", e.target.result)
                    var image = new Image()
                    image.onload = () => {
                        this.getOuputPort("output_port1").setValue(image)
                        //this.model.detect(image).then(predictions => {
                        //    console.log('Predictions: ', predictions);
                        //});
                    }
                    image.src = e.target.result
                }
                a.readAsDataURL(blob);
        }).catch((error) =>{
            console.log('takePhoto() error: ', error);
        });
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