// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_quality_Histogram = CircuitFigure.extend({

   NAME: "video_quality_Histogram",
   VERSION: "2.0.277_990",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:81.13504999999986,height:80.87877759999992},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9505139887140474, y: 49.34495943717131 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 98.92155116685083, y: 49.34495943717131 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 81.13504999999986;
      this.originalHeight= 80.87877759999992;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L81.13504999999986,0 L81.13504999999986,80.87877759999992 L0,80.87877759999992");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Histogram');
       shape.attr({"x":4.228799999999865,"y":68.37877759999992,"text-anchor":"start","text":"Histogram","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.315424000003077,7.770740800002386Q4.315424000003077,3.770740800002386 8.315424000003077, 3.770740800002386L71.31542400000308,3.770740800002386Q75.31542400000308,3.770740800002386 75.31542400000308, 7.770740800002386L75.31542400000308,51.770740800002386Q75.31542400000308,55.770740800002386 71.31542400000308, 55.770740800002386L8.315424000003077,55.770740800002386Q4.315424000003077,55.770740800002386 4.315424000003077, 51.770740800002386L4.315424000003077,7.770740800002386');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(237,237,237,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.315424000003077 44.171641281785924L13.719023999994533 44.02284128177871L13.676023999993959 33.767941281774256L20.7717239999929 33.69354128177201L20.760973999997077 49.015291281779355L30.763898999993216 49.04026628178235L30.83561149999332 42.51590378178207L36.55331775000013 42.43627253178329L36.45297087500239 45.23235690677393L41.51974743750179 45.02749909427439L41.52548571875377 42.33577018802771L46.46035485937591 42.34620573490429L46.461789429688906 39.14562350832966L51.88770671484508 39.14823239504858L51.826415357422775 37.30003683841369L56.29621967871026 37.3623390600942L56.188421839356124 41.70899017092779L63.03932291968249 41.78621572634893L63.1356734598412 25.672528504053844L75.31542400000308 25.587841281771944L75.31542400000308 55.587841281771944L4.315424000003077 55.587841281771944Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,219,219,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.55});
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
video_quality_Histogram = video_quality_Histogram.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.processing = false;
        
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

        this.getInputPort("input_port1").setSemanticGroup("Image");
        this.getOutputPort("output_port1").setSemanticGroup("Image");
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
        var img = this.getInputPort("input_port1").getValue();
        if(img instanceof HTMLImageElement && this.worker!==null && this.processing===false){
            var imageData = this.imageToData(img);
            // Push it to the WebWorker with "Transferable Objects"
            // Passing data by reference instead of structure clone
            //
            this.processing = true;
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
            const  HISTOGRAM_SIZE = 256; // for 8-bit image
            const  MAX_VALUE = 255;      // max value in 8-bit image

            var imageData = event.data;
            var pixels = imageData.data;
            var width  = imageData.width;
            var height = imageData.height;
            var imageSize = width * height;
            var histR  = new Uint32Array(HISTOGRAM_SIZE);
            var histG  = new Uint32Array(HISTOGRAM_SIZE);
            var histB  = new Uint32Array(HISTOGRAM_SIZE);
            histR.fill(0);
            histG.fill(0);
            histB.fill(0);
            
            // collect the distribution of the RGB values 
            //
            for (var index=0; index < pixels.length; index+=4) {
                histR[pixels[index  ]]++; // red
                histG[pixels[index+1]]++; // green
                histB[pixels[index+2]]++; // blue
            }

            var sumR = 0;
            var sumG = 0;
            var sumB = 0;
            var i = 0;
            while(i < HISTOGRAM_SIZE)
            {
                // cumulative sum is used as LUT
                sumR += histR[i];
                sumG += histG[i];
                sumB += histB[i];
       
                // build look-up table
                histR[i] = sumR;
                histG[i] = sumG;
                histB[i] = sumB;
                ++i;
            }
            var canvas = new OffscreenCanvas(width, height);
            var ctx = canvas.getContext('2d');

            ctx.globalCompositeOperation = 'screen';
            
            let max = Math.max(sumR, sumG, sumB);

            function drawColorGraph (vals, color) {
                const graphX = 0;
                const graphY = height;

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(graphX, height);
                for (let i = 0; i < vals.length; i++) {
                  let val = vals[i];
                  let drawHeight = Math.round((val / max) * height);
                  let drawX = graphX + (width / (vals.length - 1)) * i;
                  ctx.lineTo(drawX, graphY - drawHeight);
                }
                ctx.lineTo(graphX + width, graphY);
                ctx.closePath();
                ctx.fill();
            }
    
            drawColorGraph(histR, "#FF0000");
            drawColorGraph(histG, "#00FF00");
            drawColorGraph(histB, "#0000FF");
            imageData = ctx.getImageData(0, 0, width, height);
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
                this.processing = false;
            };
            image.src = this.tmpCanvas.toDataURL();
            this.img.attr("path", image.src);
        };


        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(workerFunction);
        this.worker.onmessage = receiverFunction;
        this.processing = false;
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        if(this.worker) this.worker.terminate();
        delete this.worker;
        delete this.tmpContext;
        delete this.tmpCanvas;
        this.worker = null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.processing = false;
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

        if(this.tmpContext !==null && this.tmpContext.width!== width){
            delete this.tmpContext;
            delete this.tmpCanvas;
            this.tmpCanvas = null;
            this.tmpContext = null;
        }

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
    },
    
    setPersistentAttributes: function (memento) 
    {
        this._super(memento);

        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image);
        this.remove(this.img);
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:3, y:3}));
        this.img.hitTest = ()=>false;
        
        this.getInputPort("input_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
    }
});