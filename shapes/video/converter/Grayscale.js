// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_converter_Grayscale = CircuitFigure.extend({

   NAME: "video_converter_Grayscale",
   VERSION: "2.0.194_789",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80.125,height:82.63839999999982},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9429953198129615, y: 48.29425545509114 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.18804992199671, y: 48.29425545509114 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80.125;
      this.originalHeight= 82.63839999999982;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80.125,0 L80.125,82.63839999999982 L0,82.63839999999982");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0.015625,3Q0.015625,0 3.015625, 0L77.015625,0Q80.015625,0 80.015625, 3L80.015625,77Q80.015625,80 77.015625, 80L3.015625,80Q0.015625,80 0.015625, 77L0.015625,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Grayscale');
       shape.attr({"x":4,"y":70.13839999999982,"text-anchor":"start","text":"Grayscale","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M5.244424999999865,10.63839999999982Q5.244424999999865,5.63839999999982 10.244424999999865, 5.63839999999982L69.24442499999986,5.63839999999982Q74.24442499999986,5.63839999999982 74.24442499999986, 10.63839999999982L74.24442499999986,51.63839999999982Q74.24442499999986,56.63839999999982 69.24442499999986, 56.63839999999982L10.244424999999865,56.63839999999982Q5.244424999999865,56.63839999999982 5.244424999999865, 51.63839999999982L5.244424999999865,10.63839999999982');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":9.290564581874843,"ry":9.290564581874843,"cx":39.744425000000106,"cy":19.835532031251443,"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M27.891407514710863,49.1959583285055Q26.95386041812526,53.084532031251 30.95386041812526, 53.084532031251L48.95386041812526,53.084532031251Q52.95386041812526,53.084532031251 51.92674378948052, 49.21865161003238L49.920961658735884,41.669252007080516Q48.89384503009114,37.803371585861896 48.684272505307035, 37.0212362754969L48.684272505307035,37.0212362754969Q48.47469998052293,36.23910096513191 48.1324949619634, 35.50523993459774L48.1324949619634,35.50523993459774Q47.79028994340388,34.77137890406357 47.32585015739369, 34.108090149421514L47.32585015739369,34.108090149421514Q46.8614103713835,33.44480139477946 46.288847585802614, 32.872238609198575L46.288847585802614,32.872238609198575Q45.71628480022173,32.29967582361769 45.052996045579675, 31.8352360376075L45.052996045579675,31.8352360376075Q44.38970729093762,31.370796251597312 43.65584626040345, 31.028591233037787L43.65584626040345,31.028591233037787Q42.92198522986928,30.68638621447826 42.139849919504286, 30.476813689694154L42.139849919504286,30.476813689694154Q41.35771460913929,30.267241164910047 40.55106980456958, 30.196668889018383L40.55106980456958,30.196668889018383Q39.744424999999865,30.12609661312672 38.93778019543015, 30.196668889018383L38.93778019543015,30.196668889018383Q38.131135390860436,30.267241164910047 37.34900008049544, 30.476813689694154L37.34900008049544,30.476813689694154Q36.56686477013045,30.68638621447826 35.83300373959628, 31.028591233037787L35.83300373959628,31.028591233037787Q35.09914270906211,31.370796251597312 34.435853954420054, 31.8352360376075L34.435853954420054,31.8352360376075Q33.772565199778,32.29967582361769 33.200002414197115, 32.872238609198575L33.200002414197115,32.872238609198575Q32.62743962861623,33.44480139477946 32.16299984260604, 34.108090149421514L32.16299984260604,34.108090149421514Q31.698560056595852,34.77137890406357 31.356355038036327, 35.50523993459774L31.356355038036327,35.50523993459774Q31.0141500194768,36.23910096513191 30.79227831889102, 37.161816498191456L30.79227831889102,37.161816498191456Q30.570406618305242,38.084532031251 29.632859521719638, 41.973105733996505L27.891407514710863,49.1959583285055');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
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
video_converter_Grayscale = video_converter_Grayscale.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
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
//                let average = 0.2126*pixels[x] + 0.7152*pixels[x+1] + 0.0722*pixels[x+2];
                let average = 0.299*pixels[x] + 0.587*pixels[x+1] + 0.114*pixels[x+2];
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