// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var hardware_raspi_GPIOWrite = CircuitFigure.extend({

   NAME: "hardware_raspi_GPIOWrite",
   VERSION: "2.0.253_932",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:102,height:42.067247719999614},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.0685528330637215, y: 53.52293344661961 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 102;
      this.originalHeight= 42.067247719999614;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L102,0 L102,42.067247719999614 L0,42.067247719999614");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M100.00004997224927,42.053109597782594Q102,42.067247719999614 102, 40.067247719999614L102,4.067247719999614Q102,2.0672477199996138 100, 2.0672477199996138L14.79262719999224,2.0672477199996138Q12.79262719999224,2.0672477199996138 11.71496046107449, 3.7520724586090566L1.077666738917749,20.38242298139017Q0,22.067247719999614 1.1146436703779372, 23.72784083334388L11.887698729615785,39.77750900665636Q13.002342399993722,41.43810212000062 15.00229242774445, 41.45224024221764L100.00004997224927,42.053109597782594');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // gpioPinLabel
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":7,"y":22.640625,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","gpioPinLabel");
       
       // Label
       shape = this.canvas.paper.text(0,0,'GPIO');
       shape.attr({"x":15.744051200000285,"y":10.5078125,"text-anchor":"start","text":"GPIO","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
hardware_raspi_GPIOWrite = hardware_raspi_GPIOWrite.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.raspiIcon = "data:image/png;base64,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"

        this.img = new draw2d.shape.basic.Image({
            width: this.getHeight()/5*3, 
            height: this.getHeight()/5*4,
            selectable: false,
            deleteable: false,
            resizeable:false,
            draggable: false,
            path: this.raspiIcon
        });
        this.img.hitTest = ()=>false;
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:68, y:7}));

        this.gpioPin = "gpio_5"
        this.on("change:userData.gpioPin",(emitter, event)=>{
            this.layerAttr("gpioPinLabel", {text: event.value})
            this.gpioPin = event.value;
        });
        this.on("added",(emitter, event)=>{
             this.layerAttr("gpioPinLabel", {text: this.attr("userData.gpioPin")})
        });
        this.attr("userData.gpioPin",this.gpioPin)
        
        this.attr({
            resizeable:false
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function( context)
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                hardware.raspi.set(port.getName(), port.getValue());
            }
        });
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    },
        
        
    setPersistentAttributes: function (memento) 
    {
        this._super(memento);

        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image);
        this.img.hitTest = ()=>false;

        this.gpioPin = this.attr("userData.gpioPin")
    },
    
    
    getParameterSettings: function () {
        return [
            {
                name: "gpioPin",
                label: "The RaspberryPI GPIO Pin",
                property: {
                    type: "enum",
                    values: [
                        "gpio_5",
                        "gpio_6",
                        "gpio_7",
                        "gpio_8",
                        "gpio_9",
                        "gpio_10",
                        "gpio_11",
                        "gpio_12",
                        "gpio_13",
                        "gpio_16",
                        "gpio_17",
                        "gpio_18",
                        "gpio_19",
                        "gpio_20",
                        "gpio_21",
                        "gpio_22",
                        "gpio_23",
                        "gpio_24",
                        "gpio_25",
                        "gpio_26",
                        "gpio_27",
                    ]
                }
            }];
    }

    
});