// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_filter_FlipHorizontal = CircuitFigure.extend({

   NAME: "video_filter_FlipHorizontal",
   VERSION: "2.0.189_777",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80.22465535911579},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 49.7473000305823 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.32506249999983, y: 49.7473000305823 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80.22465535911579;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80.22465535911579 L0,80.22465535911579");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Flip');
       shape.attr({"x":26.03773911823282,"y":67.72465535911579,"text-anchor":"start","text":"Flip","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.315424000003077,7.770740800002386Q4.315424000003077,3.770740800002386 8.315424000003077, 3.770740800002386L71.31542400000308,3.770740800002386Q75.31542400000308,3.770740800002386 75.31542400000308, 7.770740800002386L75.31542400000308,49.770740800002386Q75.31542400000308,53.770740800002386 71.31542400000308, 53.770740800002386L8.315424000003077,53.770740800002386Q4.315424000003077,53.770740800002386 4.315424000003077, 49.770740800002386L4.315424000003077,7.770740800002386');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(237,237,237,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Shadow_Body
       shape = this.canvas.paper.path('M38.81898911823282,51.06235109342106Q38.81898911823282,53.06235109342106 40.818854730377765, 53.08553585911158L50.81912350608788,53.20147059342526Q52.81898911823282,53.224655359115786 52.45201753600021, 51.25861063484482L49.76692298523095,36.87325702356028Q49.39995140299834,34.90721229928931 49.34167307749112, 34.2401812930475L49.34167307749112,34.2401812930475Q49.283394751983906,33.573150286805685 49.11033053289066, 32.9263866801557L49.11033053289066,32.9263866801557Q48.93726631379741,32.27962307350572 48.654674669841825, 31.67277845135368L48.654674669841825,31.67277845135368Q48.37208302588624,31.06593382920164 47.98855036117038, 30.51744685832L47.98855036117038,30.51744685832Q47.605017696454524,29.96895988743836 47.13219745692095, 29.49549606688106L47.13219745692095,29.49549606688106Q46.65937721738737,29.02203224632376 46.11163580675429, 28.63797753470044L46.11163580675429,28.63797753470044Q45.56389439612121,28.25392282307712 44.95787465998001, 27.97094652845726L44.95787465998001,27.97094652845726Q44.3518549238388,27.687970233837405 43.705970465211976, 27.51467044774381L43.705970465211976,27.51467044774381Q43.06008600658515,27.341370661650217 42.39396169791462, 27.283013010383L42.39396169791462,27.283013010383Q41.72783738924409,27.224655359115786 41.0617130805731, 27.283013010383L41.0617130805731,27.283013010383Q40.39558877190211,27.341370661650217 39.74970431327529, 27.51467044774381L39.74970431327529,27.51467044774381Q39.103819854648464,27.687970233837405 38.96140448644064, 27.75447000404165L38.96140448644064,27.75447000404165Q38.81898911823282,27.820969774245896 38.81898911823282, 29.820969774245896L38.81898911823282,51.06235109342106');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.2});
       shape.data("name","Shadow_Body");
       
       // Shadow_Body
       shape = this.canvas.paper.path('M38.81898911823282,52.04986614990685Q38.81898911823282,54.04986614990685 40.818883412884716, 54.07042849945177L53.819094823580926,54.20409300957086Q55.81898911823282,54.224655359115786 55.40708728064484, 52.26753071408378L52.0792023016077,36.45530286279578Q51.66730046401972,34.49817821776378 51.596533925903714, 33.77983713411868L51.596533925903714,33.77983713411868Q51.52576738778771,33.06149605047358 51.31561797888935, 32.36498139715877L51.31561797888935,32.36498139715877Q51.10546856999099,31.668466743843965 50.76232157375853, 31.014941766141874L50.76232157375853,31.014941766141874Q50.419174577526064,30.361416788439783 49.953456341799665, 29.77073851210571L49.953456341799665,29.77073851210571Q49.487738106073266,29.180060235771634 48.9135992437823, 28.670176121325312L48.9135992437823,28.670176121325312Q48.339460381491335,28.16029200687899 47.67434581143698, 27.746694625130658L47.67434581143698,27.746694625130658Q47.00923124138262,27.333097243382326 46.27335013321135, 27.028353541484194L46.27335013321135,27.028353541484194Q45.53746902504008,26.72360983958606 44.753180753850756, 26.536979300715757L44.753180753850756,26.536979300715757Q43.96889248266143,26.350348761845453 43.16002725070348, 26.28750206048062L43.16002725070348,26.28750206048062Q42.351162018745526,26.224655359115786 41.542296786788484, 26.28750206048062L41.542296786788484,26.28750206048062Q40.73343155483144,26.350348761845453 39.949143283642115, 26.536979300715757L39.949143283642115,26.536979300715757Q39.16485501245279,26.72360983958606 38.991922065342806, 26.795224976728605L38.991922065342806,26.795224976728605Q38.81898911823282,26.86684011387115 38.81898911823282, 28.86684011387115L38.81898911823282,52.04986614990685');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.15});
       shape.data("name","Shadow_Body");
       
       // Shadow_Circle
       shape = this.canvas.paper.path('M39.67362344960475 26.00720138039742L40.04294797930197 26.107061848355443L41.76377508821315 26.25898431823407L43.48460219712433 26.107061848355443L45.15314284511169 25.655910526093976L46.718699268909404 24.919238356078495L48.133702828788046 23.919428749423787L49.3551593576085 22.686860415098636L50.345955516830145 21.25898431823407L51.07598646652059 19.679185751490877L51.52307058568749 17.99546609490244L51.67362344960475 16.25898431823407L51.52307058568749 14.5225025415657L51.07598646652059 12.838782884977263L50.345955516830145 11.25898431823407L49.3551593576085 9.831108221369504L48.133702828788046 8.598539887044353L46.718699268909404 7.5987302803896455L45.15314284511169 6.862058110374164L43.48460219712433 6.4109067881126975L41.76377508821315 6.25898431823407L40.04294797930197 6.4109067881126975L39.67362344960475 6.5107672560707215L39.67362344960475 26.00720138039742Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.1});
       shape.data("name","Shadow_Circle");
       
       // Shadow_Circle
       shape = this.canvas.paper.path('M38.17362344960475 25.032379674180447L38.50903935568749 25.122254095344033L40.07187295468975 25.25898431823407L41.63470655369201 25.122254095344033L43.15005424462106 24.71621790530753L44.57187295468975 24.053212952294416L45.85696144186841 23.15338430630527L46.96627294276095 22.044072805412725L47.8661015887501 20.75898431823407L48.52910654176321 19.337165608165378L48.935142731799715 17.82181791723633L49.07187295468975 16.25898431823407L48.935142731799715 14.69615071923181L48.52910654176321 13.180803028302762L47.8661015887501 11.75898431823407L46.96627294276095 10.473895831055415L45.85696144186841 9.36458433016287L44.57187295468975 8.464755684173724L43.15005424462106 7.80175073116061L41.63470655369201 7.395714541124107L40.07187295468975 7.25898431823407L38.50903935568749 7.395714541124107L38.17362344960475 7.485588962287693L38.17362344960475 25.032379674180447Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.15});
       shape.data("name","Shadow_Circle");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":39.50000000000025,"cy":16.4234128000028,"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M29.462567472217447,46.776768974949896Q28.81898911823282,50.724655359115786 32.81880873597436, 50.762642534977275L46.90091030048609,50.89638338325396Q50.900729918227626,50.93437055911545 50.01211395841982, 47.03432419067637L48.22418747803842,39.18729409867167Q47.33557151823061,35.28724773023259 47.27480253027943, 34.71745662722515L47.27480253027943,34.71745662722515Q47.21403354232825,34.1476655242177 47.03357301342339, 33.5951872355472L47.03357301342339,33.5951872355472Q46.85311248451853,33.0427089468767 46.558443616512704, 32.52433024577522L46.558443616512704,32.52433024577522Q46.263774748506876,32.005951544673735 45.86385090584463, 31.537423105665766L45.86385090584463,31.537423105665766Q45.46392706318238,31.068894666657798 44.97089972945241, 30.66445248927039L44.97089972945241,30.66445248927039Q44.47787239572244,30.26001031188298 43.906721956976526, 29.931943167022382L43.906721956976526,29.931943167022382Q43.33557151823061,29.603876022161785 42.70365209153351, 29.36215206401357L42.70365209153351,29.36215206401357Q42.07173266483642,29.120428105865358 41.39824480220159, 28.972391994582267L41.39824480220159,28.972391994582267Q40.72475693956676,28.824355883299177 40.03016422889914, 28.77450562120748L40.03016422889914,28.77450562120748Q39.33557151823152,28.724655359115786 38.64097880756344, 28.77450562120748L38.64097880756344,28.77450562120748Q37.94638609689537,28.824355883299177 37.27289823426054, 28.972391994582267L37.27289823426054,28.972391994582267Q36.59941037162571,29.120428105865358 35.96749094492861, 29.36215206401357L35.96749094492861,29.36215206401357Q35.33557151823152,29.603876022161785 34.7644210794856, 29.931943167022382L34.7644210794856,29.931943167022382Q34.193270640739684,30.26001031188298 33.700243307009714, 30.66445248927039L33.700243307009714,30.66445248927039Q33.207215973279745,31.068894666657798 32.8072921306175, 31.537423105665766L32.8072921306175,31.537423105665766Q32.40736828795525,32.005951544673735 32.11269941994942, 32.52433024577522L32.11269941994942,32.52433024577522Q31.818030551943593,33.0427089468767 31.637570023038734, 33.5951872355472L31.637570023038734,33.5951872355472Q31.457109494133874,34.1476655242177 31.396340506182696, 34.71745662722515L31.396340506182696,34.71745662722515Q31.335571518231518,35.28724773023259 30.69199316424689, 39.235134114398484L29.462567472217447,46.776768974949896');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // Line
       shape = this.canvas.paper.path('M38.69640448001155 4.038881344014044L38.864176640010555,53.47137542400378');
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
video_filter_FlipHorizontal = video_filter_FlipHorizontal.extend({

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
            
            var dst = new Uint8ClampedArray(width*height*4);
            for (var y=0; y<height; y++) {
              for (var x=0; x<width; x++) {
                var off = (y*width+x)*4;
                var dstOff = (y*width+(width-x-1))*4;
                dst[dstOff  ] = pixels[off];
                dst[dstOff+1] = pixels[off+1];
                dst[dstOff+2] = pixels[off+2];
                dst[dstOff+3] = pixels[off+3];
              }
            }
            imageData.data.set(dstX);
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
        this.worker.terminate();
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