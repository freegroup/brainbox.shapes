// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_detector_PrewittInvers = CircuitFigure.extend({

   NAME: "video_detector_PrewittInvers",
   VERSION: "2.0.209_821",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:22230.64640448001,height:22194.998011632008},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0.3373721062149848, y: 0.3379139748545768 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0.3373721062149848, y: 0.3379139748545768 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 22230.64640448001;
      this.originalHeight= 22194.998011632008;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L22230.64640448001,0 L22230.64640448001,22194.998011632008 L0,22194.998011632008");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Prewitt');
       shape.attr({"x":27.09375,"y":66.5625,"text-anchor":"start","text":"Prewitt","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M9,32Q9,28 13, 28L76,28Q80,28 80, 32L80,76Q80,80 76, 80L13,80Q9,80 9, 76L9,32');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(237,237,237,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":71.83557151823177,"cy":71.83557151823177,"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M58.56183755398956,75.8423984158353Q57.918259200005195,79.79028480000125 61.91807881774673, 79.82827197586258L76.00018038225846,79.96201282413867Q80,80 79.11138404019219, 76.09995363156092L77.32345755981079,68.25292353955622Q76.43484160000298,64.35287717111714 76.37407261205226, 63.7830860681097L76.37407261205226,63.7830860681097Q76.31330362410154,63.21329496510225 76.13284309519622, 62.66081667643266L76.13284309519622,62.66081667643266Q75.95238256629091,62.10833838776307 75.65771369828508, 61.58995968666113L75.65771369828508,61.58995968666113Q75.36304483027925,61.071580985559194 74.963120987617, 60.603052546551226L74.963120987617,60.603052546551226Q74.56319714495476,60.13452410754326 74.07016981122433, 59.7300819301563L74.07016981122433,59.7300819301563Q73.57714247749391,59.32563975276935 73.00599203874845, 58.997572607908296L73.00599203874845,58.997572607908296Q72.43484160000298,58.669505463047244 71.80292217330589, 58.42778150489903L71.80292217330589,58.42778150489903Q71.17100274660879,58.18605754675082 70.49751488397396, 58.03802143546818L70.49751488397396,58.03802143546818Q69.82402702133913,57.889985324185545 69.12943431067106, 57.840135062093395L69.12943431067106,57.840135062093395Q68.43484160000298,57.790284800001245 67.74024888933491, 57.840135062093395L67.74024888933491,57.840135062093395Q67.04565617866683,57.889985324185545 66.37216831603291, 58.03802143546818L66.37216831603291,58.03802143546818Q65.69868045339899,58.18605754675082 65.06676102670099, 58.42778150489903L65.06676102670099,58.42778150489903Q64.43484160000298,58.669505463047244 63.86369116125752, 58.997572607908296L63.86369116125752,58.997572607908296Q63.29254072251206,59.32563975276935 62.799513388781634, 59.7300819301563L62.799513388781634,59.7300819301563Q62.30648605505121,60.13452410754326 61.90656221238896, 60.603052546551226L61.90656221238896,60.603052546551226Q61.506638369726716,61.071580985559194 61.21196950172089, 61.58995968666113L61.21196950172089,61.58995968666113Q60.91730063371506,62.10833838776307 60.73684010481065, 62.66081667643266L60.73684010481065,62.66081667643266Q60.55637957590625,63.21329496510225 60.495610587954616, 63.7830860681097L60.495610587954616,63.7830860681097Q60.43484160000298,64.35287717111714 59.791263246018616, 68.30076355528308L58.56183755398956,75.8423984158353');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // Shadow
       shape = this.canvas.paper.path('M68,77.8689080930908Q68,79.8689080930908 69.99988066979134, 79.89075544064028L78.00011933020866,79.97815265245052Q80,80 79.61138544681026, 78.03811857416174L77.45801079727525,67.1670235698247Q77.06939624408551,65.20514214398645 77.01944339365036, 64.6663863312533L77.01944339365036,64.6663863312533Q76.96949054321522,64.12763051852016 76.82114978399204, 63.60524452853224L76.82114978399204,63.60524452853224Q76.67280902476887,63.082858538544315 76.43058761566408, 62.59271480526786L76.43058761566408,62.59271480526786Q76.1883662065593,62.102571071991406 75.85962392251804, 61.65956236474085L75.85962392251804,61.65956236474085Q75.53088163847679,61.216553657490294 75.12560714744814, 60.83414057165555L75.12560714744814,60.83414057165555Q74.72033265641949,60.45172748582081 74.25084001873347, 60.14152944951002L74.25084001873347,60.14152944951002Q73.78134738104745,59.83133141319922 73.26190189292629, 59.602773636775055L73.26190189292629,59.602773636775055Q72.74245640480513,59.37421586035089 72.1888411545533, 59.234242956198614L72.1888411545533,59.234242956198614Q71.63522590430148,59.09427005204634 71.06426221115544, 59.04713502602317L71.06426221115544,59.04713502602317Q70.4932985180094,59 69.92233482486336, 59.04713502602317L69.92233482486336,59.04713502602317Q69.35137113171731,59.09427005204634 68.79775588146549, 59.234242956198614L68.79775588146549,59.234242956198614Q68.24414063121367,59.37421586035089 68.12207031560683, 59.42792721320893L68.12207031560683,59.42792721320893Q68,59.48163856606698 68, 61.48163856606698L68,77.8689080930908');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Shadow");
       
       // TOP_Circle
       shape = this.canvas.paper.path('M72 79.81116279662092L72.24621635313088 79.88605814759285L73.39343442573954 80L74.54065249834639 79.88605814759285L75.65301293033917 79.54769465589379L76.69671721286795 78.99519052838514L77.64005291945432 78.24533332339342L78.45435727200311 77.32090707264979L79.11488804481633 76.25L79.60157534460996 75.06515107494306L79.89963142405395 73.80236133250219L80 72.5L79.89963142405395 71.19763866749781L79.60157534460996 69.93484892505694L79.11488804481633 68.75L78.45435727200311 67.67909292735021L77.64005291945432 66.75466667660658L76.69671721286795 66.00480947161486L75.65301293033917 65.45230534410621L74.54065249834639 65.11394185240715L73.39343442573954 65L72.24621635313088 65.11394185240715L72 65.18883720337908L72 79.81116279662092Z');
       shape.attr({"stroke":"rgba(13,13,13,1)","stroke-width":2,"fill":"rgba(255,253,253,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // Line
       shape = this.canvas.paper.path('M22225.64640448001 22189.998011632008L22225.814176640008,22241.003369712');
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
video_detector_PrewittInvers = video_detector_PrewittInvers.extend({

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
            var w = imageData.width;
            var h = imageData.height;

            var kernelX   =[ -1, 0,  1,  
                             -1, 0,  1,  
                             -1, 0,  1 ];
                             
            var kernelY   =[ -1, -1, -1,  
                              0,  0,  0,  
                              1,  1,  1 ];
                           
            function convolut(weights, src, w, h){
                var side     = Math.round(Math.sqrt(weights.length));
                var halfSide = Math.floor(side/2);
                var sw = w;
                var sh = h;

                var dst = new Uint8ClampedArray(w*h*4);

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
                            }
                        }
                        dst[dstOff]   = r;
                        dst[dstOff+1] = g;
                        dst[dstOff+2] = b;
                        dst[dstOff+3] = 0;
                    }
                }
                return dst;
            }

            var dstX = convolut(kernelX, pixels, w, h);
            var dstY = convolut(kernelY, pixels, w, h);
            for (var i=0; i < dstX.length; i++) {
                var edgeX = dstX[i];
                var edgeY = dstY[i]; 
                dstX[i] = 255-Math.min(255,Math.round(Math.sqrt(edgeX * edgeX + edgeY * edgeY)));
            }
            
            imageData.data.set(dstX);
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