// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_morphological_Erode = CircuitFigure.extend({

   NAME: "video_morphological_Erode",
   VERSION: "2.0.315_1074",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:8498.532836480012,height:8463.088881344014},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0.8825052681806673, y: 0.8862012564387641 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0.8825052681806673, y: 0.8862012564387641 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 8498.532836480012;
      this.originalHeight= 8463.088881344014;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L8498.532836480012,0 L8498.532836480012,8463.088881344014 L0,8463.088881344014");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Erode');
       shape.attr({"x":38.640625,"y":68.34375,"text-anchor":"start","text":"Erode","font-family":"\"Arial\"","font-size":14,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M9,34Q9,30 13, 30L76,30Q80,30 80, 34L80,76Q80,80 76, 80L13,80Q9,80 9, 76L9,34');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(237,237,237,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":71.83557151823177,"cy":71.83557151823177,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M58.56183755398956,75.8423984158353Q57.918259200005195,79.79028480000125 61.91807881774673, 79.82827197586258L76.00018038225846,79.96201282413867Q80,80 79.11138404019219, 76.09995363156092L77.32345755981079,68.25292353955622Q76.43484160000298,64.35287717111714 76.37407261205226, 63.7830860681097L76.37407261205226,63.7830860681097Q76.31330362410154,63.21329496510225 76.13284309519622, 62.66081667643266L76.13284309519622,62.66081667643266Q75.95238256629091,62.10833838776307 75.65771369828508, 61.58995968666113L75.65771369828508,61.58995968666113Q75.36304483027925,61.071580985559194 74.963120987617, 60.603052546551226L74.963120987617,60.603052546551226Q74.56319714495476,60.13452410754326 74.07016981122433, 59.7300819301563L74.07016981122433,59.7300819301563Q73.57714247749391,59.32563975276935 73.00599203874845, 58.997572607908296L73.00599203874845,58.997572607908296Q72.43484160000298,58.669505463047244 71.80292217330589, 58.42778150489903L71.80292217330589,58.42778150489903Q71.17100274660879,58.18605754675082 70.49751488397396, 58.03802143546818L70.49751488397396,58.03802143546818Q69.82402702133913,57.889985324185545 69.12943431067106, 57.840135062093395L69.12943431067106,57.840135062093395Q68.43484160000298,57.790284800001245 67.74024888933491, 57.840135062093395L67.74024888933491,57.840135062093395Q67.04565617866683,57.889985324185545 66.37216831603291, 58.03802143546818L66.37216831603291,58.03802143546818Q65.69868045339899,58.18605754675082 65.06676102670099, 58.42778150489903L65.06676102670099,58.42778150489903Q64.43484160000298,58.669505463047244 63.86369116125752, 58.997572607908296L63.86369116125752,58.997572607908296Q63.29254072251206,59.32563975276935 62.799513388781634, 59.7300819301563L62.799513388781634,59.7300819301563Q62.30648605505121,60.13452410754326 61.90656221238896, 60.603052546551226L61.90656221238896,60.603052546551226Q61.506638369726716,61.071580985559194 61.21196950172089, 61.58995968666113L61.21196950172089,61.58995968666113Q60.91730063371506,62.10833838776307 60.73684010481065, 62.66081667643266L60.73684010481065,62.66081667643266Q60.55637957590625,63.21329496510225 60.495610587954616, 63.7830860681097L60.495610587954616,63.7830860681097Q60.43484160000298,64.35287717111714 59.791263246018616, 68.30076355528308L58.56183755398956,75.8423984158353');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // Line
       shape = this.canvas.paper.path('M8493.532836480012 8458.088881344014L8493.70060864001,8507.521375424003');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
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
video_morphological_Erode = video_morphological_Erode.extend({

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
        if(img instanceof HTMLImageElement && this.worker!==null && this.processing === false){
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
        this.progressing = false;
        
        // the method which runs as WebWorker
        //
        var workerFunction = function(event){
            var imageData = event.data;
            var pixels = imageData.data;
            var width  = imageData.width;
            var height = imageData.height;
            var matrix =[[0,  0,  1,  0,  0],  
                         [0,  1,  1,  1,  0], 
                         [1,  1,  1,  1,  1], 
                         [0,  1,  1,  1,  0], 
                         [0,  0,  1,  0,  0]];

            function applyMatrix(x,y,matrix,imgIn,imgOut){
        		var nx,ny;
        		var xC=parseInt(matrix[0].length/2);
        		var yC=parseInt(matrix.length/2);
        		var offset = (y*width+x)*4;
        		
        		if(imgIn[offset]===0){
        			for(var i=0; i<matrix.length; i++){
        				for(var j=0; j<matrix.length; j++){
        					if((i != yC || j != xC) && matrix[i][j]){
        						nx = x + (j-xC);
        						ny = y + (i-yC);
        						if(nx > 0 && nx < width && ny > 0 && ny < height){
                            		var outOffset = (ny*width+nx)*4;
        							imgOut[outOffset]=0;
        						}
        					}
        				}
        			}
        		}
        	}

            var pixelsCopy = new Uint8ClampedArray(pixels);
            pixelsCopy.set(pixels);
            
            for(var y=0; y<height; y++){
				for(var x=0; x<width; x++){
					applyMatrix(x, y, matrix, pixels, pixelsCopy);
				}
			}

            pixels.set(pixelsCopy);
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            this.processing = false;
            var imageData = event.data;
            this.tmpContext.putImageData(imageData,0,0);
            var image = new Image();
            image.onload = () => { this.getOutputPort("output_port1").setValue(image);};
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
        this.progressing = false;
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