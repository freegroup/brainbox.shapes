// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Sharpen = CircuitFigure.extend({

   NAME: "video_Sharpen",
   VERSION: "2.0.117_583",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80.87877759999992},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 49.34495943717131 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.32506249999983, y: 49.34495943717131 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80.87877759999992;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80.87877759999992 L0,80.87877759999992");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Sharpen');
       shape.attr({"x":10.228799999999865,"y":68.37877759999992,"text-anchor":"start","text":"Sharpen","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.path('M37.8575436800038 3.7610134285841923L37.83557151823152 3.75898431823407L36.27273791922926 3.9033106646184024L34.75739022830021 4.331904420767387L33.33557151823152 5.031742982281685L32.05048303105286 5.981562108603612L30.941171530160318 7.15250202621246L30.041342884171172 8.50898431823407L29.378337931158057 10.009792956640013L28.972301741121555 11.609326630398755L28.835571518231518 13.25898431823407L28.972301741121555 14.908642006069385L29.378337931158057 16.508175679828128L30.041342884171172 18.00898431823407L30.941171530160318 19.36546661025568L32.05048303105286 20.53640652786453L33.33557151823152 21.486225654186455L34.75739022830021 22.186064215700753L36.27273791922926 22.614657971849738L37.83557151823152 22.75898431823407L37.8575436800038 22.756955207883948L37.8575436800038 3.7610134285841923Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,71,96,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.25});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M28.835571518231518 55.224655359115786L38.8575436800038 55.224655359115786L38.8575436800038 24.378540864619026L38.811581028399814 24.36514246137176L37.33557151823061 24.224655359115786L35.8595620080614 24.36514246137176L34.42840029996387 24.782335138630515L33.08557151823152 25.46355720250085L31.87187683589582 26.388110065289766L30.824193751719577 27.527901656104405L29.97435558606412 28.84829998422174L29.34818424155128 30.30918541459596L28.96470561762726 31.86616968267026L28.835571518231518 33.47194460932951L28.835571518231518 55.224655359115786Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,71,96,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.35});
       shape.data("name","Rectangle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M31.335571518231518 53.59454464088412L47.66442848176939 53.59454464088412L47.66442848176848 34.38908384088427L47.540392467759375 32.971345713332994L47.17205319725235 31.596684841377282L46.57060247259324 30.306869600000027L45.75431506970108 29.14109037263188L44.74799346825239 28.13476877118319L43.58221424088424 27.31848136829103L42.292398999506986 26.717030643631915L40.917738127551274 26.348691373124893L39.5 26.224655359115786L38.082261872448726 26.348691373124893L36.707601000493014 26.717030643631915L35.41778575911576 27.31848136829103L34.25200653174761 28.13476877118319L33.24568493029892 29.14109037263188L32.42939752740676 30.306869600000027L31.827946802747647 31.596684841377282L31.459607532240625 32.971345713332994L31.335571518231518 34.38908384088427Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,71,96,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":39.50000000000025,"cy":13.4234128000028,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,71,96,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // Line
       shape = this.canvas.paper.path('M38.696404480004276 1.9198800000040137L38.86417664000419,59.2166940799998');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(26,12,112,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
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
video_Sharpen = video_Sharpen.extend({

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
            var opaque = false;
            var weights =[  0, -1,  0,  -1,  5, -1,   0, -1,  0 ];
            var side = Math.round(Math.sqrt(weights.length));
            var halfSide = Math.floor(side/2);

            var src = imageData.data;
            var sw = imageData.width;
            var sh = imageData.height;
            var w = sw;
            var h = sh;
            var dst = new Uint8ClampedArray(w*h*4);
            var alphaFac = opaque ? 1 : 0;

            for (var y=0; y < h; y++) {
              for (var x=0; x < w; x++) {
                var sy = y;
                var sx = x;
                var dstOff = (y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for (var cy=0; cy<side; cy++) {
                  for (var cx=0; cx<side; cx++) {
                    var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
                    var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
                    var srcOff = (scy*sw+scx)*4;
                    var wt = weights[cy*side+cx];
                    r += src[srcOff] * wt;
                    g += src[srcOff+1] * wt;
                    b += src[srcOff+2] * wt;
                    a += src[srcOff+3] * wt;
                  }
                }
                dst[dstOff] = r;
                dst[dstOff+1] = g;
                dst[dstOff+2] = b;
                dst[dstOff+3] = a + alphaFac*(255-a);
              }
            }
            imageData.data.set(dst);
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
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