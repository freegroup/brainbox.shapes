// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_morphological_Open = CircuitFigure.extend({

   NAME: "video_morphological_Open",
   VERSION: "2.0.320_1084",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80},attr), setter, getter);
     var port;
     // input_port2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 83.53700000000231 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port2");
     port.setMaxFanOut(1);
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 49.886999999999944 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.32506249999983, y: 49.886999999999944 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80 L0,80");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Open');
       shape.attr({"x":21,"y":66,"text-anchor":"start","text":"Open","font-family":"\"Arial\"","font-size":14,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.315424000003077,7.770740800002386Q4.315424000003077,3.770740800002386 8.315424000003077, 3.770740800002386L71.31542400000308,3.770740800002386Q75.31542400000308,3.770740800002386 75.31542400000308, 7.770740800002386L75.31542400000308,49.770740800002386Q75.31542400000308,53.770740800002386 71.31542400000308, 53.770740800002386L8.315424000003077,53.770740800002386Q4.315424000003077,53.770740800002386 4.315424000003077, 49.770740800002386L4.315424000003077,7.770740800002386');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":23.50000000000025,"cy":16.4234128000028,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M12.962567472217449,46.776768974949896Q12.318989118232821,50.724655359115786 16.318808735974358, 50.762642534977275L30.40091030048609,50.89638338325396Q34.400729918227626,50.93437055911545 33.51211395841982, 47.03432419067637L31.72418747803842,39.18729409867167Q30.83557151823061,35.28724773023259 30.77480253027943, 34.71745662722515L30.77480253027943,34.71745662722515Q30.714033542328252,34.1476655242177 30.533573013423393, 33.5951872355472L30.533573013423393,33.5951872355472Q30.353112484518533,33.0427089468767 30.058443616512704, 32.52433024577522L30.058443616512704,32.52433024577522Q29.763774748506876,32.005951544673735 29.36385090584463, 31.537423105665766L29.36385090584463,31.537423105665766Q28.963927063182382,31.068894666657798 28.470899729452412, 30.66445248927039L28.470899729452412,30.66445248927039Q27.977872395722443,30.26001031188298 27.406721956976526, 29.931943167022382L27.406721956976526,29.931943167022382Q26.83557151823061,29.603876022161785 26.203652091533513, 29.36215206401357L26.203652091533513,29.36215206401357Q25.571732664836418,29.120428105865358 24.89824480220159, 28.972391994582267L24.89824480220159,28.972391994582267Q24.22475693956676,28.824355883299177 23.53016422889914, 28.77450562120748L23.53016422889914,28.77450562120748Q22.835571518231518,28.724655359115786 22.140978807563442, 28.77450562120748L22.140978807563442,28.77450562120748Q21.446386096895367,28.824355883299177 20.772898234260538, 28.972391994582267L20.772898234260538,28.972391994582267Q20.09941037162571,29.120428105865358 19.467490944928613, 29.36215206401357L19.467490944928613,29.36215206401357Q18.835571518231518,29.603876022161785 18.2644210794856, 29.931943167022382L18.2644210794856,29.931943167022382Q17.693270640739684,30.26001031188298 17.200243307009714, 30.66445248927039L17.200243307009714,30.66445248927039Q16.707215973279745,31.068894666657798 16.307292130617498, 31.537423105665766L16.307292130617498,31.537423105665766Q15.90736828795525,32.005951544673735 15.612699419949422, 32.52433024577522L15.612699419949422,32.52433024577522Q15.318030551943593,33.0427089468767 15.137570023038734, 33.5951872355472L15.137570023038734,33.5951872355472Q14.957109494133874,34.1476655242177 14.896340506182696, 34.71745662722515L14.896340506182696,34.71745662722515Q14.835571518231518,35.28724773023259 14.19199316424689, 39.235134114398484L12.962567472217449,46.776768974949896');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // TOP_Body
       shape = this.canvas.paper.path('M48.46256747221745,46.776768974949896Q47.81898911823282,50.724655359115786 51.81880873597436, 50.762642534977275L65.90091030048609,50.89638338325396Q69.90072991822763,50.93437055911545 69.01211395841982, 47.03432419067637L67.22418747803842,39.18729409867167Q66.33557151823061,35.28724773023259 66.27480253027943, 34.71745662722515L66.27480253027943,34.71745662722515Q66.21403354232825,34.1476655242177 66.03357301342339, 33.5951872355472L66.03357301342339,33.5951872355472Q65.85311248451853,33.0427089468767 65.5584436165127, 32.52433024577522L65.5584436165127,32.52433024577522Q65.26377474850688,32.005951544673735 64.86385090584463, 31.537423105665766L64.86385090584463,31.537423105665766Q64.46392706318238,31.068894666657798 63.97089972945241, 30.66445248927039L63.97089972945241,30.66445248927039Q63.47787239572244,30.26001031188298 62.906721956976526, 29.931943167022382L62.906721956976526,29.931943167022382Q62.33557151823061,29.603876022161785 61.70365209153351, 29.36215206401357L61.70365209153351,29.36215206401357Q61.07173266483642,29.120428105865358 60.39824480220159, 28.972391994582267L60.39824480220159,28.972391994582267Q59.72475693956676,28.824355883299177 59.03016422889914, 28.77450562120748L59.03016422889914,28.77450562120748Q58.33557151823152,28.724655359115786 57.64097880756344, 28.77450562120748L57.64097880756344,28.77450562120748Q56.94638609689537,28.824355883299177 56.27289823426054, 28.972391994582267L56.27289823426054,28.972391994582267Q55.59941037162571,29.120428105865358 54.96749094492861, 29.36215206401357L54.96749094492861,29.36215206401357Q54.33557151823152,29.603876022161785 53.7644210794856, 29.931943167022382L53.7644210794856,29.931943167022382Q53.193270640739684,30.26001031188298 52.700243307009714, 30.66445248927039L52.700243307009714,30.66445248927039Q52.207215973279745,31.068894666657798 51.8072921306175, 31.537423105665766L51.8072921306175,31.537423105665766Q51.40736828795525,32.005951544673735 51.11269941994942, 32.52433024577522L51.11269941994942,32.52433024577522Q50.81803055194359,33.0427089468767 50.637570023038734, 33.5951872355472L50.637570023038734,33.5951872355472Q50.457109494133874,34.1476655242177 50.396340506182696, 34.71745662722515L50.396340506182696,34.71745662722515Q50.33557151823152,35.28724773023259 49.69199316424689, 39.235134114398484L48.46256747221745,46.776768974949896');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":58.48341760000155,"cy":16.4234128000028,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // Line
       shape = this.canvas.paper.path('M39.64973648001251 5.040281344015057L39.81750864001151,52.63687542400294');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":3,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M23.07027200000266 19.615232000002834L23.07027200000266,32.198144000002685');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M8.67161600000145 33.790272000002005L28.07027200000266,37.198144000002685');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M35.42956799999865 33.023104000002604L27.827392000001055,36.95526399999926');
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
video_morphological_Open = video_morphological_Open.extend({

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
            var iterations = 1;
            if(this.getInputPort("input_port2").getConnections().lenght!==0){
                iterations = Math.min(1,parseInt(this.getInputPort("input_port2").getValue()));
            }
            var imageData = this.imageToData(img);
            // Push it to the WebWorker with "Transferable Objects"
            // Passing data by reference instead of structure clone
            //
            this.processing = true;
            this.worker.postMessage({imageData, iterations}, [imageData.data.buffer]);
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
            var colorToCare = 0;
            var iterations = event.data.iterations;
            var imageData = event.data.imageData;
            var pixels = imageData.data;
            var width  = imageData.width;
            var height = imageData.height;
            var matrix = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
            var pixelsCopy = new Uint8ClampedArray(pixels);
            pixelsCopy.set(pixels);

            function applyMatrix(x,y,matrix,imgIn,imgOut){
        		var nx,ny;
        		var xC=parseInt(matrix[0].length/2);
        		var yC=parseInt(matrix.length/2);
        		var offset = (y*width+x)*4;
        		
        		if(imgIn[offset]===colorToCare){
        			for(var i=0; i<matrix.length; i++){
        				for(var j=0; j<matrix.length; j++){
        					if((i != yC || j != xC) && matrix[i][j]){
        						nx = x + (j-xC);
        						ny = y + (i-yC);
        						if(nx > 0 && nx < width && ny > 0 && ny < height){
                            		var outOffset = (ny*width+nx)*4;
        							imgOut[outOffset]=imgOut[outOffset+1]=imgOut[outOffset+2]=colorToCare;
        						}
        					}
        				}
        			}
        		}
        	}
        	
        	for( var i = 0; i< iterations; i++){
                // dilate
                if(i!==0)pixels.set(pixelsCopy);
                colorToCare = 0;
                for(var y=0; y<height; y++){
    				for(var x=0; x<width; x++){
    					applyMatrix(x, y, matrix, pixels, pixelsCopy);
    				}
    			}
    			
                // erode
                pixels.set(pixelsCopy);
                colorToCare = 255;
                for(var y=0; y<height; y++){
    				for(var x=0; x<width; x++){
    					applyMatrix(x, y, matrix, pixels, pixelsCopy);
    				}
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