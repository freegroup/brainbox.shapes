// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var media_WebCam = CircuitFigure.extend({

   NAME: "media_WebCam",
   VERSION: "2.0.58_448",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:79},attr), setter, getter);
     var port;
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.090576171875, y: 48.734177215189874 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 79;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,79 L0,79");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L80 0L80 77L0 77Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'WebCam');
       shape.attr({"x":5.8046875,"y":66.5,"text-anchor":"start","text":"WebCam","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
            event.height = event.height/4*3
            this.img.attr(event);
        });
        
        this.imageCapture = null;
        this.track = null;
        
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
                        this.getOutputPort("output_port1").setValue(image)
                    }
                    image.src = e.target.result
                }
                a.readAsDataURL(blob);
            }).catch((error) =>{
                //console.log('takePhoto() error: ', error);
            });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
        try{
            navigator.mediaDevices.getUserMedia({ audio: false, video: true })
               .then((stream) =>{
                    this.track = stream.getVideoTracks()[0];
                    this.imageCapture = new ImageCapture(this.track);
                })
                .catch((err) =>{
                    console.log("no permission to use VideoCam");
                })
        }
        catch(e){
            console.log("didn't support mediaDevices")
        }

    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        if(this.track !==null){
            this.track.stop();
            this.track = null;
            this.imageCapture = null;
        }
    },
    
    setPersistentAttributes: function (memento) {
        this._super(memento)
        
        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image)
        this.on("change:dimension", (emitter, event)=>{
            event.height = event.height/4*3
            this.img.attr(event);
        });
    }

});