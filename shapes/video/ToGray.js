// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_ToGray = CircuitFigure.extend({

   NAME: "video_ToGray",
   VERSION: "2.0.81_501",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:112,height:102},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.357142857142858, y: 51.96078431372549 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 101.78571428571429, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 112;
      this.originalHeight= 102;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L112,0 L112,102 L0,102");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 0L112 0L112 102L0 102Z');
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
video_ToGray = video_ToGray.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.getInputPort("input_port1").setSemanticGroup("Image");
        this.getOutputPort("output_port1").setSemanticGroup("Image");
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        var img = this.getInputPort("input_port1").getValue();
        if(img instanceof HTMLImageElement && this.worker){
            var width = img.naturalWidth;
            var height= img.naturalHeight;
            // convert the HTMLImageElement to an ImageData object. Required for the WebWorker
            //
            var canvas = new OffscreenCanvas(width, height);
            var context2d = canvas.getContext('2d');
            context2d.drawImage(img, 0, 0);
            var imageData = context2d.getImageData(0, 0, width, height);
            // push it to the WebWorker
            //
            this.worker.postMessage(imageData);
        }
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
        // the method which runs as WebWorker
        //
        var webWorkerFunction = function(event){
            var imageData = event.data;
            var pixels = imageData.data;
            for( let x = 0; x < pixels.length; x += 4 ) {
              let average = (
                pixels[x] +
                pixels[x + 1] +
                pixels[x + 2]
                ) / 3;
    
                pixels[x] = average;
                pixels[x + 1] = average;
                pixels[x + 2] = average;
            }
            self.postMessage( imageData );
        }
        
        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(webWorkerFunction)
        
        // The result event if the WebWorker has converted an pixelarray to another pixel array
        //
        this.worker.onmessage =  (event) => {
            var imageData = event.data;
            var canvas = document.createElement('canvas');
            var context2d = canvas.getContext("2d");
            context2d.putImageData(imageData,0,0);
            var image = new Image()
            image.onload = () => {
                this.getOutputPort("output_port1").setValue(image)
            }
            image.src = canvas.toDataURL();
        };
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        this.worker.terminate();
        delete this.worker;
        this.worker = null;
    },
    

    /**
     *  Helper function to dynamically create Web Workers.
     */
    createWorker: function(fn) {
        var blob = new Blob(["self.onmessage = ", fn.toString()], {
           type: "text/javascript"
        });
        var url = window.URL.createObjectURL(blob);
        return new Worker(url);
    }
});