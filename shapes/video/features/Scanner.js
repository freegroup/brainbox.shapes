// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_features_Scanner = CircuitFigure.extend({

   NAME: "video_features_Scanner",
   VERSION: "2.0.332_1109",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80.453125},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 49.606028355020335 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.32506249999983, y: 49.606028355020335 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
     // output_angle
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100, y: 80.79238687123713 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_angle");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80.453125;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80.453125 L0,80.453125");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Scanner');
       shape.attr({"x":13.41088000000127,"y":68.453125,"text-anchor":"start","text":"Scanner","font-family":"\"Arial\"","font-size":14,"stroke":"#000000","fill":"#000000","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // PictureFrame
       shape = this.canvas.paper.path('M4.228799999999865,8.044239424005355Q4.228799999999865,4.0442394240053545 8.228799999999865, 4.0442394240053545L71.22879999999986,4.0442394240053545Q75.22879999999986,4.0442394240053545 75.22879999999986, 8.044239424005355L75.22879999999986,52.044239424005355Q75.22879999999986,56.044239424005355 71.22879999999986, 56.044239424005355L8.228799999999865,56.044239424005355Q4.228799999999865,56.044239424005355 4.228799999999865, 52.044239424005355L4.228799999999865,8.044239424005355');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","PictureFrame");
       
       // Rectangle
       shape = this.canvas.paper.path('M31.532891359985115 4.463669824004683L56.27928495998003 4.0442394240053545L43.53908655998566 13.533852224002658L38.97778095998274 23.65261062400168L38.66320815998279 55.634178624000015L27.758017759986615 55.634178624000924Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'+');
       shape.attr({"x":27.816251679999368,"y":37.225817212005495,"text-anchor":"start","text":"+","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#FF0000","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line
       shape = this.canvas.paper.path('M73.05801775999316 39.18620217199896L40.84053967998898,38.858807612009514');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,15,31,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M43.722181920001276 44.79038681200382L40.17947984000875,38.65598297201268L44.41625168000701,33.409250172013344');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,15,31,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M23.322181919997092 44.59038681199763L27.26827984000647,38.05598297200504L22.816251679999368,33.30925017200752');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,15,31,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M26.758017759986615 38.3862021719915L5.540539679985159,38.35880761200315');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,15,31,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
video_features_Scanner = video_features_Scanner.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.processing = false;
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
            var imageData = event.data;
            var pixels    = imageData.data;
            var width     = imageData.width;
            var height    = imageData.height;
            var leftSide  = 0;
            var rightSide = 0;
            var position = 0;
            var matrix    = [ [1,1,1],
                              [1,1,1],
                              [1,1,1] ]; 
                              
            function checkMatrix(x,y){
        		var nx,ny;
        		var xC=parseInt(matrix[0].length/2);
        		var yC=parseInt(matrix.length/2);
        		var offset = (y*width+x)*4;
        		var hit = true;
    			for(var i=0; i<matrix.length; i++){
    				for(var j=0; j<matrix.length; j++){
    					if((i != yC || j != xC) && matrix[i][j]){
    						nx = x + (j-xC);
    						ny = y + (i-yC);
    						if(nx > 0 && nx < width && ny > 0 && ny < height){
                        		var outOffset = (ny*width+nx)*4;
    							hit = hit && imgOut[outOffset]===0;
    						}
    					}
    				}
    			}
    			return hit
            }
            
            


            var canvas = new OffscreenCanvas(width, height);
            var ctx = canvas.getContext('2d');
            ctx.putImageData(imageData,0,0);

            ctx.textBaseline = "top";
            ctx.fillStyle = "#d0d0d0";
            ctx.fillText("+" , 0, 0);

            imageData = ctx.getImageData(0, 0, width, height);
            self.postMessage({imageData, position}, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            var imageData = event.data.imageData;
            var position = event.data.position;
            // map the angle [0..180] to [0..5]
            position = 5/180*position;
            this.tmpContext.putImageData(imageData,0,0);
            var image = new Image();
            image.onload = () => { 
                this.getOutputPort("output_port1").setValue(image);
                this.getOutputPort("output_angle").setValue(position);
                this.processing = false;
            };
            image.src = this.tmpCanvas.toDataURL();
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
    }
});