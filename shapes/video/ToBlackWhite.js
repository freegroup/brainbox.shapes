// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_ToBlackWhite = CircuitFigure.extend({

   NAME: "video_ToBlackWhite",
   VERSION: "2.0.83_509",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80.488},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 50.303150780240536 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 99.98999999999995, y: 49.69684921975947 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80.488;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80.488 L0,80.488");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'BlackWhite');
       shape.attr({"x":4,"y":68.488,"text-anchor":"start","text":"BlackWhite","font-family":"\"Arial\"","font-size":14,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
video_ToBlackWhite = video_ToBlackWhite.extend({

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
                let lum = .2126 * pixels[x] + .7152 * pixels[x+1] + .0722 * pixels[x+2];
                let value= lum>50?255:0
                pixels[x]     = value;
                pixels[x + 1] = value;
                pixels[x + 2] = value;
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
            canvas.width = imageData.width;
            canvas.height = imageData.height;
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