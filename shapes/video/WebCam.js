// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_WebCam = CircuitFigure.extend({

   NAME: "video_WebCam",
   VERSION: "2.0.66_462",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:81.5},attr), setter, getter);
     var port;
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.090576171875, y: 52.147239263803684 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 81.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,81.5 L0,81.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,4Q0,0 4, 0L76,0Q80,0 80, 4L80,73Q80,77 76, 77L4,77Q0,77 0, 73L0,4');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'WebCam');
       shape.attr({"x":5.8046875,"y":69,"text-anchor":"start","text":"WebCam","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M11.72705078125,22.5Q11.72705078125,19.5 14.72705078125, 19.5L49.72705078125,19.5Q52.72705078125,19.5 52.72705078125, 22.5L52.72705078125,44.5Q52.72705078125,47.5 49.72705078125, 47.5L14.72705078125,47.5Q11.72705078125,47.5 11.72705078125, 44.5L11.72705078125,22.5');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M52.622734264543645,29.57737012110689Q52.67847478124895,26.57788800000708 55.26516920427005, 25.05834466008171L62.1403563582289,21.01954333992537Q64.72705078125,19.5 64.72705078125, 22.5L64.72705078125,44.5Q64.72705078125,47.5 62.10245076049134, 46.04690856067706L55.04093080200735,42.13734743931612Q52.41633078124869,40.684255999993184 52.472071297953995, 37.684773878893374L52.622734264543645,29.57737012110689');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":3.8705097763024305,"ry":3.8705097763024305,"cx":47.04582100494663,"cy":24.87050977630243,"stroke":"none","stroke-width":0,"fill":"rgba(192,15,57,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

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
video_WebCam = video_WebCam.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        
        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth()-6, 
            height: this.getHeight()/4*3 -6,
            path: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        });
        this.img.hitTest = ()=>false
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:3,y:3}));

        
        this.imageCapture = null;
        this.track = null;
        
        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
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
        this.img.hitTest = ()=>false
        
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
    }

});