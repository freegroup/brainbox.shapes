// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Grayscale = CircuitFigure.extend({

   NAME: "video_Grayscale",
   VERSION: "2.0.111_566",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:141.77254713717684,height:108.67183999999997},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 42.9504677504726, y: 60.68089028399641 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.10627939120968, y: 60.68089028399641 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 141.77254713717684;
      this.originalHeight= 108.67183999999997;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L141.77254713717684,0 L141.77254713717684,108.67183999999997 L0,108.67183999999997");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M61.66317213717684,29.033440000000155Q61.66317213717684,26.033440000000155 64.66317213717684, 26.033440000000155L138.66317213717684,26.033440000000155Q141.66317213717684,26.033440000000155 141.66317213717684, 29.033440000000155L141.66317213717684,103.03344000000016Q141.66317213717684,106.03344000000016 138.66317213717684, 106.03344000000016L64.66317213717684,106.03344000000016Q61.66317213717684,106.03344000000016 61.66317213717684, 103.03344000000016L61.66317213717684,29.033440000000155');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Grayscale');
       shape.attr({"x":65.64754713717684,"y":96.17183999999997,"text-anchor":"start","text":"Grayscale","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.path('M1.1387840678316934 15.585518162953122L0.5126127233188527 16.998330108272967L0.12913409939574194 18.504078558402398L0 20.057012108636627L0.12913409939574194 21.609945658869037L0.5126127233188527 23.115694109001197L1.1387840678316934 24.52850605432377L1.988622233488968 25.805453918786952L3.0363053176643007 26.907738287693974L4.25 27.801866808295017L5.592828781731441 28.460671837930022L7.023990489830794 28.864135919146975L8.5 29L9.976009510169206 28.864135919146975L11.407171218268559 28.460671837930022L12.75 27.801866808295017L13.9636946823357 26.907738287693974L15.011377766511032 25.805453918786952L15.861215932168307 24.52850605432377L16.487387276681147 23.115694109001197L16.870865900604258 21.609945658869037L17 20.057012108636627L16.870865900604258 18.504078558402398L16.487387276681147 16.998330108272967L15.861215932168307 15.585518162953122L8.81459911433467 0Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(172,170,173,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
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
video_Grayscale = video_Grayscale.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
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
        if(img instanceof HTMLImageElement && this.worker!==null){
            var imageData = this.imageToData(img);
            // Push it to the WebWorker with "Transferable Objects"
            // Passing data by reference instead of structure clone
            //
            this.worker.postMessage(imageData, [imageData.data.buffer]);
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
        var workerFunction = function(event){
            var imageData = event.data;
            var pixels = imageData.data;
            for( let x = 0; x < pixels.length; x += 4 ) {
                // CIE luminance for the RGB
                // The human eye is bad at seeing red and blue, so we de-emphasize them.
                let average = 0.2126*pixels[x] + 0.7152*pixels[x+1] + 0.0722*pixels[x+2];
                //let average = (pixels[x] + pixels[x+1] +pixels[x+2]) / 3;
    
                pixels[x]     = average;
                pixels[x + 1] = average;
                pixels[x + 2] = average;
            }
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            var imageData = event.data;
            this.tmpContext.putImageData(imageData,0,0);
            var image = new Image();
            image.onload = () => {
                this.getOutputPort("output_port1").setValue(image);
            }
            image.src = this.tmpCanvas.toDataURL();
        };
        
        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(workerFunction);
        this.worker.onmessage = receiverFunction
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        this.worker.terminate();
        delete this.worker;
        delete this.tmpContext;
        delete this.tmpCanvas;
        this.worker = null;
        this.tmpCanvas = null;
        this.tmpContext = null;
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
    },
    
    imageToData: function(image){
        var width = image.naturalWidth;
        var height= image.naturalHeight;
        // convert the HTMLImageElement to an ImageData object. Required for the WebWorker
        //
        if(this.tmpContext === null ) {
            this.tmpCanvas = document.createElement('canvas');
            this.tmpCanvas.width = width;
            this.tmpCanvas.height = height;
            this.tmpContext = this.tmpCanvas.getContext('2d');
        }
        this.tmpContext.drawImage(image, 0, 0, width, height);
        return this.tmpContext.getImageData(0, 0, width, height);
    }
});