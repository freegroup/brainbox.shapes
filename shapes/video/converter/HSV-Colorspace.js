// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_converter_HSV_Colorspace = CircuitFigure.extend({

   NAME: "video_converter_HSV_Colorspace",
   VERSION: "2.0.130_637",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:82.76692700000422,height:80.50410056640976},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.8123181014077319, y: 50.293090308611994 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // input_port2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.8123181014077319, y: 84.05724711641572 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port2");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 98.4596178132795, y: 50.307996381613606 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 82.76692700000422;
      this.originalHeight= 80.50410056640976;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L82.76692700000422,0 L82.76692700000422,80.50410056640976 L0,80.50410056640976");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.5,8.37996800000019Q4.5,4.37996800000019 8.5, 4.37996800000019L71.5,4.37996800000019Q75.5,4.37996800000019 75.5, 8.37996800000019L75.5,54.37996800000019Q75.5,58.37996800000019 71.5, 58.37996800000019L8.5,58.37996800000019Q4.5,58.37996800000019 4.5, 54.37996800000019L4.5,8.37996800000019');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(235,235,235,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'HSV Colorspace');
       shape.attr({"x":4.407552000004216,"y":69.81660056640976,"text-anchor":"start","text":"HSV Colorspace","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8,"ry":8,"cx":38.136293579453195,"cy":17.499523579457673,"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M28.136293579453195 49.87996800000019L49.136293579453195 49.87996800000019L47.66478056057986 35.49000926909048L47.26481464287099 34.55069784111947L46.61172166499273 33.6693617814999L45.725345526597266 32.87278004043128L44.63261831811997 32.18515635102358L43.366742002848696 31.627383811123764L41.96617959205287 31.216410057116263L40.47348646586943 30.96472231855114L38.934017349595706 30.87996800000019L37.394548233321075 30.96472231855114L35.901855107135816 31.216410057116263L34.50129269633908 31.627383811123764L33.23541638106508 32.18515635102358L32.14268917259233 32.87278004043128L31.256313034195045 33.6693617814999L30.603220056319515 34.55069784111947L30.203254138608827 35.49000926909048Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M39.42918400000053,53.87996800000019Q39.42918400000053,57.87996800000019 43.42918400000053, 57.87996800000019L71,57.87996800000019Q75,57.87996800000019 75, 53.87996800000019L75,8.87996800000019Q75,4.87996800000019 71, 4.87996800000019L43.42918400000053,4.87996800000019Q39.42918400000053,4.87996800000019 39.42918400000053, 8.87996800000019L39.42918400000053,53.87996800000019');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M40.84867199999917 49.87996800000019L49.651728947198535 49.87996800000019L48.46050412239674 35.49000926909048L48.13672218901229 34.55069784111947L47.60802787358898 33.6693617814999L46.89048528536114 32.87278004043128L46.00589659279012 32.18515635102358L44.98113957566147 31.627383811123764L43.84735095739779 31.216410057116263L42.63898033143869 30.96472231855114L41.392743427790265 30.87996800000019L40.84867199999917 30.916969314092967L40.84867199999917 49.87996800000019Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.path('M39.92918400000053 25.470542254553948L40.260442059449815 25.499523579457673L41.64962748078506 25.377985603555317L42.996603206054715 25.017064545744688L44.260442059449815 24.42772680973303L45.40274293694256 23.627879124409446L46.38879760440159 22.641824456950417L47.18864528972517 21.499523579457673L47.77798302573683 20.235684726062573L48.13890408354746 18.888709000792915L48.260442059449815 17.499523579457673L48.13890408354746 16.11033815812243L47.77798302573683 14.763362432852773L47.18864528972517 13.499523579457673L46.38879760440159 12.357222701964929L45.40274293694256 11.3711680345059L44.260442059449815 10.571320349182315L42.996603206054715 9.981982613170658L41.64962748078506 9.62106155536003L40.260442059449815 9.499523579457673L39.92918400000053 9.528504904361398L39.92918400000053 25.470542254553948Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(227,227,227,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Line
       shape = this.canvas.paper.path('M39.537952000005134 5.1831660000025295L40.00981120000051,58.45082679999632');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
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
video_converter_HSV_Colorspace = video_converter_HSV_Colorspace.extend({

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
            this.worker.postMessage( imageData, [imageData.data.buffer]);
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
            var data = imageData.data,
              nPixels = pixels.length,
              v = 2, // Math.pow(2, this.value()),
              s = 1, // Math.pow(2, this.saturation()),
              h = 2, //Math.abs(this.hue() + 360) % 360,
              i;

            // Precompute the values in the matrix:
            var vsu = v * s * Math.cos((h * Math.PI) / 180),
                vsw = v * s * Math.sin((h * Math.PI) / 180);
            // (result spot)(source spot)
            var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw,
                rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw,
                rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
            var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw,
                gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw,
                gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
            var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw,
                bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw,
                bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;

            var r, g, b, a;

            for (i = 0; i < nPixels; i += 4) {
              r = data[i + 0];
              g = data[i + 1];
              b = data[i + 2];
              a = data[i + 3];

              data[i + 0] = rr * r + rg * g + rb * b;
              data[i + 1] = gr * r + gg * g + gb * b;
              data[i + 2] = br * r + bg * g + bb * b;
              data[i + 3] = a; // alpha
            }
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            this.processing = false;
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
        this.processing = false;
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