// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_alu_FullAdder = CircuitFigure.extend({

   NAME: "circuit_alu_FullAdder",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:70,height:79.125},attr), setter, getter);
     var port;
     // output_s
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.17942857142874, y: 22.82780410742496 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_s");
     port.setMaxFanOut(20);
     // output_c
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.60800000000017, y: 76.30243285939905 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_c");
     port.setMaxFanOut(20);
     // input_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.3188571428573985, y: 16.5086887835703 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_a");
     port.setMaxFanOut(20);
     // input_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.3188571428573985, y: 50.641453396524824 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_b");
     port.setMaxFanOut(20);
     // input_c
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.3188571428573985, y: 80.09390205371184 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_c");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 70;
      this.originalHeight= 79.125;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L70,0 L70,79.125 L0,79.125");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,5.14010000000053Q0,4.14010000000053 1, 4.14010000000053L69,4.14010000000053Q70,4.14010000000053 70, 5.14010000000053L70,73.14010000000053Q70,74.14010000000053 69, 74.14010000000053L1,74.14010000000053Q0,74.14010000000053 0, 73.14010000000053L0,5.14010000000053');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Full');
       shape.attr({"x":24.65625,"y":32.625,"text-anchor":"start","text":"Full","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Adder');
       shape.attr({"x":21.717000000000553,"y":45.874299999999494,"text-anchor":"start","text":"Adder","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A');
       shape.attr({"x":5,"y":13.5,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B');
       shape.attr({"x":6,"y":41.625,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'S');
       shape.attr({"x":52.34375,"y":19.5,"text-anchor":"start","text":"S","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":52.34375,"y":60.625,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":6,"y":63.874299999999494,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'in');
       shape.attr({"x":16.717000000000553,"y":67.625,"text-anchor":"start","text":"in","font-family":"\"Arial\"","font-size":12,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_alu_FullAdder = circuit_alu_FullAdder.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var a = this.getInputPort("input_a").getValue();
        var b = this.getInputPort("input_b").getValue();
        var c = this.getInputPort("input_c").getValue();
        
        // s = a XOR b XOR  c
        this.getOutputPort("output_s").setValue(a ^ b ^ c);
        
        // c = (at least two bits are set)
        this.getOutputPort("output_c").setValue((a+b+c)>1);
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_alu_FullAdder4Bit = CircuitFigure.extend({

   NAME: "circuit_alu_FullAdder4Bit",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:82.578125,height:200.265625},attr), setter, getter);
     var port;
     // output_as
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.21148155156109, y: 9.421081376297105 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_as");
     port.setMaxFanOut(20);
     // output_c
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.08893093661305, y: 89.60906296325192 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_c");
     port.setMaxFanOut(20);
     // input_a1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8772298959319549, y: 9.768276507763128 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_a1");
     port.setMaxFanOut(20);
     // input_b1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.7842270577107904, y: 19.758782866505555 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_b1");
     port.setMaxFanOut(20);
     // input_c1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8772298959319549, y: 29.64777405008947 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_c1");
     port.setMaxFanOut(20);
     // input_d1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.7842270577107904, y: 39.62075368651041 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_d1");
     port.setMaxFanOut(20);
     // input_a2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8772298959319549, y: 49.54886790980709 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_a2");
     port.setMaxFanOut(20);
     // input_b2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8811050141913078, y: 59.58458921744547 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_b2");
     port.setMaxFanOut(20);
     // input_c2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8811050141913078, y: 69.5794647733479 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_c2");
     port.setMaxFanOut(20);
     // input_d2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8811050141913078, y: 79.56620113911211 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_d2");
     port.setMaxFanOut(20);
     // input_cin
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.8811050141913078, y: 89.60906296325192 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_cin");
     port.setMaxFanOut(20);
     // output_bs
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.21148155156109, y: 19.591167980026526 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_bs");
     port.setMaxFanOut(20);
     // output_cs
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.21148155156109, y: 29.64777405008947 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_cs");
     port.setMaxFanOut(20);
     // output_ds
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.21148155156109, y: 39.62075368651041 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_ds");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 82.578125;
      this.originalHeight= 200.265625;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L82.578125,0 L82.578125,200.265625 L0,200.265625");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1Q0,0 1, 0L79,0Q80,0 80, 1L80,199Q80,200 79, 200L1,200Q0,200 0, 199L0,1');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'FA');
       shape.attr({"x":31.538024999999834,"y":82.22956250000061,"text-anchor":"start","text":"FA","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A1');
       shape.attr({"x":6.27559999999994,"y":22,"text-anchor":"start","text":"A1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B1');
       shape.attr({"x":7.77559999999994,"y":41.125,"text-anchor":"start","text":"B1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'As');
       shape.attr({"x":58.11934999999994,"y":19.5,"text-anchor":"start","text":"As","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":55.93184999999994,"y":182.84375,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C1');
       shape.attr({"x":7.77559999999994,"y":60.734375,"text-anchor":"start","text":"C1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4 Bit');
       shape.attr({"x":27.5,"y":97.84675000000061,"text-anchor":"start","text":"4 Bit","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D1');
       shape.attr({"x":7.27559999999994,"y":81.22956250000061,"text-anchor":"start","text":"D1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A2');
       shape.attr({"x":7.27559999999994,"y":100.703125,"text-anchor":"start","text":"A2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B2');
       shape.attr({"x":7.27559999999994,"y":120.9375,"text-anchor":"start","text":"B2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C2');
       shape.attr({"x":7.27559999999994,"y":141.171875,"text-anchor":"start","text":"C2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D2');
       shape.attr({"x":8.352399999999761,"y":160.90625,"text-anchor":"start","text":"D2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":8.27559999999994,"y":183.140625,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'in');
       shape.attr({"x":17.772399999999834,"y":185.84375,"text-anchor":"start","text":"in","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'out');
       shape.attr({"x":62.109375,"y":189.765625,"text-anchor":"start","text":"out","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Bs');
       shape.attr({"x":57.46309999999994,"y":39.0625,"text-anchor":"start","text":"Bs","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Cs');
       shape.attr({"x":57.46309999999994,"y":59.874299999999494,"text-anchor":"start","text":"Cs","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Ds');
       shape.attr({"x":58.11934999999994,"y":79.72956250000061,"text-anchor":"start","text":"Ds","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_alu_FullAdder4Bit = circuit_alu_FullAdder4Bit.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var input = [];
        var output = [];
        
        input.push(this.getInputPort("input_a1").getValue());
        input.push(this.getInputPort("input_b1").getValue());
        input.push(this.getInputPort("input_c1").getValue());
        input.push(this.getInputPort("input_d1").getValue());
        
        input.push(this.getInputPort("input_a2").getValue());
        input.push(this.getInputPort("input_b2").getValue());
        input.push(this.getInputPort("input_c2").getValue());
        input.push(this.getInputPort("input_d2").getValue());
 
        input.push(this.getInputPort("input_cin").getValue());
 
        var carry = input[8];
       
        for (var i=0; i<4 ; i++){
            // calculate with the carry
            if(carry){
                if(input[i] && input[i+4]){
                    output[i]=true;
                }
                else if(input[i] || input[i+4]){
                    output[i]=false;
                }
                else{
                    output[i]=true;
                    carry=false;
                }
            }
            else{
                if(input[i] && input[i+4]){
                    output[i]=false;
                    carry = true;
                }
                else if(input[i] || input[i+4]){
                    output[i]=true;
                }
                else{
                    output[i]=false;
                }
            }
        }
        output[4]=carry;
        
        this.getOutputPort("output_as").setValue(output[0]);
        this.getOutputPort("output_bs").setValue(output[1]);
        this.getOutputPort("output_cs").setValue(output[2]);
        this.getOutputPort("output_ds").setValue(output[3]);
        this.getOutputPort("output_c").setValue(output[4]);
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_counter_BCDCounter = CircuitFigure.extend({

   NAME: "circuit_counter_BCDCounter",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:108},attr), setter, getter);
     var port;
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.2083358764652985, y: 18.055555555555557 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(1);
     // out_a
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 99.6000000000015, y: 13.88888888888889 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out_a");
     port.setMaxFanOut(20);
     // out_b
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100.8500000000015, y: 37.03703703703704 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out_b");
     port.setMaxFanOut(20);
     // out_c
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100.8500000000015, y: 60.18518518518518 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out_c");
     port.setMaxFanOut(20);
     // out_d
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.1000000000015, y: 83.33333333333333 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out_d");
     port.setMaxFanOut(25);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 108;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,108 L0,108");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,105Q80,108 77, 108L3,108Q0,108 0, 105L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'BCD -');
       shape.attr({"x":8.033331298827761,"y":41.5,"text-anchor":"start","text":"BCD -","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Counter');
       shape.attr({"x":7.033331298827761,"y":56.100000000000364,"text-anchor":"start","text":"Counter","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 11L18 19.74285714285361L0 28Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A');
       shape.attr({"x":63.01770629882776,"y":16,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B');
       shape.attr({"x":63.01770629882776,"y":41.5,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":63.01770629882776,"y":65.5,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D');
       shape.attr({"x":63.01770629882776,"y":90.5,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_counter_BCDCounter = circuit_counter_BCDCounter.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

         // your special code here
         this.last_t=false;
         this.counter=0;
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var t = this.getInputPort(0).getValue();

        var rising = this.last_t===false && t===true; 
        if(rising===true){
            var a = this.getOutputPort("out_a");
            var b = this.getOutputPort("out_b");
            var c = this.getOutputPort("out_c");
            var d = this.getOutputPort("out_d");
            a.setValue(!!(this.counter & 1));
            b.setValue(!!(this.counter & 2));
            c.setValue(!!(this.counter & 4));
            d.setValue(!!(this.counter & 8));
            this.counter= (this.counter+1)%10;
        }
        this.last_t = t;
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_decoder_BCDto7Seg = CircuitFigure.extend({

   NAME: "circuit_decoder_BCDto7Seg",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:87,height:185},attr), setter, getter);
     var port;
     // out_a
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 8.108108108108109 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_a");
     port.setMaxFanOut(20);
     // out_b
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 21.62162162162162 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_b");
     port.setMaxFanOut(20);
     // out_c
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 35.13513513513514 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_c");
     port.setMaxFanOut(20);
     // out_d
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 48.64864864864865 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_d");
     port.setMaxFanOut(20);
     // out_e
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 62.16216216216217 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_e");
     port.setMaxFanOut(20);
     // out_f
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 75.67567567567568 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_f");
     port.setMaxFanOut(20);
     // in_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.7563218390786532, y: 8.108108108108109 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in_a");
     port.setMaxFanOut(20);
     // in_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.7563218390786532, y: 21.62162162162162 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in_b");
     port.setMaxFanOut(20);
     // in_c
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.7563218390786532, y: 35.13513513513514 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in_c");
     port.setMaxFanOut(20);
     // in_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.2988505747126435, y: 48.64864864864865 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("in_d");
     port.setMaxFanOut(20);
     // out_g
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.14942528735631, y: 89.00583783783766 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("out_g");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 87;
      this.originalHeight= 185;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L87,0 L87,185 L0,185");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L84,0Q87,0 87, 3L87,182Q87,185 84, 185L3,185Q0,185 0, 182L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'BCD');
       shape.attr({"x":29.3359375,"y":14.25,"text-anchor":"start","text":"BCD","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7-Seg');
       shape.attr({"x":29.3359375,"y":44.75,"text-anchor":"start","text":"7-Seg","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A');
       shape.attr({"x":72,"y":15.5,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B');
       shape.attr({"x":73,"y":40.5,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":73,"y":66,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D');
       shape.attr({"x":73,"y":90,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'E');
       shape.attr({"x":73,"y":115,"text-anchor":"start","text":"E","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'F');
       shape.attr({"x":73,"y":140,"text-anchor":"start","text":"F","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A');
       shape.attr({"x":7.472000000001572,"y":14.5,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label B
       shape = this.canvas.paper.text(0,0,'B');
       shape.attr({"x":7.472000000001572,"y":39.5,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label B");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":7,"y":65,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D');
       shape.attr({"x":6.472000000001572,"y":90,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'to');
       shape.attr({"x":38.3359375,"y":28.5,"text-anchor":"start","text":"to","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'G');
       shape.attr({"x":72,"y":165.0703999999996,"text-anchor":"start","text":"G","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_decoder_BCDto7Seg = circuit_decoder_BCDto7Seg.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var e = (this.getInputPort("in_a").getValue()?1:0) +
                (this.getInputPort("in_b").getValue()?2:0) +
                (this.getInputPort("in_c").getValue()?4:0) +
                (this.getInputPort("in_d").getValue()?8:0);

       this.getOutputPort("out_a").setValue( ((e!=1) &&(e!=4)&&(e!=6)&& (e<10)));
       this.getOutputPort("out_b").setValue( ((e!=5) &&(e!=6)&& (e<10)));
       this.getOutputPort("out_c").setValue( ((e!=2) &&(e<10)));
       this.getOutputPort("out_d").setValue( (((e!==1)&&(e!==4)&&(e!==7))||(e>10)));
       this.getOutputPort("out_e").setValue( (((e===0)||(e===2)||(e===6)||(e===8))||(e>9)));
       this.getOutputPort("out_f").setValue( ((e!=1) &&(e!=2)&&(e!=3)&&(e!=7)&&(e<10)));
       this.getOutputPort("out_g").setValue( (((e!==0)&&(e!==1)&&(e!==7))||(e>9)));
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_display_7Segment = CircuitFigure.extend({

   NAME: "circuit_display_7Segment",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:90,height:175},attr), setter, getter);
     var port;
     // port_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 6.187428571428557 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     port.setMaxFanOut(20);
     // port_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 20.473142857142843 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_b");
     port.setMaxFanOut(20);
     // port_c
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 34.758857142857124 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_c");
     port.setMaxFanOut(20);
     // port_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 49.04457142857141 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_d");
     port.setMaxFanOut(20);
     // port_e
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 63.330285714285694 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_e");
     port.setMaxFanOut(20);
     // port_f
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 77.61599999999999 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_f");
     port.setMaxFanOut(20);
     // port_g
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 91.90171428571426 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_g");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 90;
      this.originalHeight= 175;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L90,0 L90,175 L0,175");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M0,2Q0,0 2, 0L88,0Q90,0 90, 2L90,173Q90,175 88, 175L2,175Q0,175 0, 173L0,2');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // seg_a
       shape = this.canvas.paper.path('M22.5,7.8279999999999745Q22.5,4.8279999999999745 25.5, 4.8279999999999745L79.5,4.8279999999999745Q82.5,4.8279999999999745 82.5, 7.8279999999999745L82.5,11.827999999999975Q82.5,14.827999999999975 79.5, 14.827999999999975L25.5,14.827999999999975Q22.5,14.827999999999975 22.5, 11.827999999999975L22.5,7.8279999999999745');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_a");
       
       // seg_b
       shape = this.canvas.paper.path('M73.764920771077,22.227039779341887Q73.9887319206191,19.235400000000027 76.98645340387436, 19.35230127813636L81.50227851674474,19.528403604681195Q84.5,19.645304882817527 84.274657968082, 22.636829739583895L80.2366101112989,76.24387514323365Q80.0112680793809,79.23540000000003 77.0112680793809, 79.23540000000003L72.5,79.23540000000003Q69.5,79.23540000000003 69.7238111495421, 76.24376022065817L73.764920771077,22.227039779341887');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_b");
       
       // seg_c
       shape = this.canvas.paper.path('M67.04142077107649,98.81963977934183Q67.26523192061859,95.82799999999997 70.26295340387382, 95.94490127813683L74.77877851674425,96.12100360468244Q77.77649999999949,96.2379048828193 77.55115796808148, 99.22942973958567L73.51311011129839,152.8364751432336Q73.28776807938038,155.82799999999997 70.28776807938038, 155.82799999999997L65.77649999999949,155.82799999999997Q62.77649999999949,155.82799999999997 63.00031114954158, 152.83636022065812L67.04142077107649,98.81963977934183');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_c");
       
       // seg_d
       shape = this.canvas.paper.path('M10,161.82799999999997Q10,158.82799999999997 13, 158.82799999999997L67,158.82799999999997Q70,158.82799999999997 70, 161.82799999999997L70,165.82799999999997Q70,168.82799999999997 67, 168.82799999999997L13,168.82799999999997Q10,168.82799999999997 10, 165.82799999999997L10,161.82799999999997');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_d");
       
       // seg_e
       shape = this.canvas.paper.path('M13.264920771077009,97.81963977934183Q13.488731920619102,94.82799999999997 16.486453403874357, 94.9449012781363L21.002278516744745,95.12100360468115Q24,95.23790488281747 23.774657968082003, 98.22942973958385L19.736610111298894,151.8364751432336Q19.511268079380898,154.82799999999997 16.511268079380898, 154.82799999999997L12,154.82799999999997Q9,154.82799999999997 9.223811149542094, 151.83636022065812L13.264920771077009,97.81963977934183');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_e");
       
       // seg_f
       shape = this.canvas.paper.path('M18.26492077107701,22.227039779341887Q18.488731920619102,19.235400000000027 21.486453403874393, 19.352301278135453L26.00227851674471,19.528403604678918Q29,19.645304882814344 28.774657968082014, 22.63682973958072L24.736610111298884,76.24387514323365Q24.511268079380898,79.23540000000003 21.511268079380898, 79.23540000000003L17,79.23540000000003Q14,79.23540000000003 14.223811149542094, 76.24376022065817L18.26492077107701,22.227039779341887');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_f");
       
       // seg_g
       shape = this.canvas.paper.path('M17,85.82799999999997Q17,82.82799999999997 20, 82.82799999999997L74,82.82799999999997Q77,82.82799999999997 77, 85.82799999999997L77,89.82799999999997Q77,92.82799999999997 74, 92.82799999999997L20,92.82799999999997Q17,92.82799999999997 17, 89.82799999999997L17,85.82799999999997');
       shape.attr({"stroke":"rgba(214,214,214,1)","stroke-width":1,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","seg_g");
       

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
circuit_display_7Segment = circuit_display_7Segment.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

      //  this.attr({resizeable:false});
    //    this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        // ensure that the ports has the same order as the segments
        //
        this.portLockup = [];
        this.portLockup.push({ p:this.getPort("port_a"), s:"seg_a"});
        this.portLockup.push({ p:this.getPort("port_b"), s:"seg_b"});
        this.portLockup.push({ p:this.getPort("port_c"), s:"seg_c"});
        this.portLockup.push({ p:this.getPort("port_d"), s:"seg_d"});
        this.portLockup.push({ p:this.getPort("port_e"), s:"seg_e"});
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_f"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});
    },
    
    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerAttr(element.s, { fill:element.p.getValue()?"#C21B7A":null});
        });
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_display_Led = CircuitFigure.extend({

   NAME: "circuit_display_Led",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:30,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.3333333333333335, y: 51.5625 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 30;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L30,0 L30,32 L0,32");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15,"ry":16,"cx":15,"cy":16,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M5.522100000000137 5.682400000001508L15.138100000001941,16.496800000000803L24.754100000001927,27.31119999999919');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M5.522100000000137 5.682400000001508L15.138100000001941,16.496800000000803L24.754100000001927,27.31119999999919');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M25.94430000000102 5.062700000001314L5.283199999999852,27.963700000000244');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M25.94430000000102 5.062700000001314L5.283199999999852,27.963700000000244');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_display_Led = circuit_display_Led.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    calculate: function()
    {
        if(this.getInputPort(0).getValue()){
            this.layerAttr("circle",{fill:"#C21B7A"});
        }
        else{
            this.layerAttr("circle",{fill:"#f0f0f0"});
        }
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_flipflop_DFlipFlop = CircuitFigure.extend({

   NAME: "circuit_flipflop_DFlipFlop",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:41.5,height:53.052974999999606},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.42921686747059, y: 20.526652840864077 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.42921686747059, y: 79.98738525030996 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 20.526652840864077 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_d");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 79.98738525030996 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 41.5;
      this.originalHeight= 53.052974999999606;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L41.5,0 L41.5,53.052974999999606 L0,53.052974999999606");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M1.5,2Q1.5,1 2.5, 1L40.5,1Q41.5,1 41.5, 2L41.5,50Q41.5,51 40.5, 51L2.5,51Q1.5,51 1.5, 50L1.5,2');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D');
       shape.attr({"x":4,"y":10.6796875,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":28.28125,"y":11.1796875,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":27.78125,"y":42.373287499999606,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M1.5 37.1269999999995L13.541999999999462 42.03299999999854L1.5 47.38499999999931Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M27.847999999999956 36.49839999999767L35.374799999999595,36.49839999999767');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M27.847999999999956 36.49839999999767L35.374799999999595,36.49839999999767');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_flipflop_DFlipFlop = circuit_flipflop_DFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },
    
    calculate:function()
    {
        var d = this.getInputPort("input_d").getValue();
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            q.setValue(d);
            q_.setValue(!d)
        }
        this.last_t = t;
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_flipflop_JKFlipFlop = CircuitFigure.extend({

   NAME: "circuit_flipflop_JKFlipFlop",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:63.12239999999838},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 16.919013694029815 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 81.57637779932148 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.052799999996296, y: 48.8296626870959 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(1);
     // input_j
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.717999999996664, y: 16.919013694029815 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_j");
     port.setMaxFanOut(1);
     // input_k
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.052799999996296, y: 81.57637779932148 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_k");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 63.12239999999838;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,63.12239999999838 L0,63.12239999999838");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1.122399999998379Q0,0.12239999999837892 1, 0.12239999999837892L39,0.12239999999837892Q40,0.12239999999837892 40, 1.122399999998379L40,62.12239999999838Q40,63.12239999999838 39, 63.12239999999838L1,63.12239999999838Q0,63.12239999999838 0, 62.12239999999838L0,1.122399999998379');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":51.43056749999869,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 25.69345499999781L12.041999999999462 30.59945499999685L0 35.95145499999762Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":10.736967499998173,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'J');
       shape.attr({"x":8.0078125,"y":10.6796875,"text-anchor":"start","text":"J","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'K');
       shape.attr({"x":7.978880000001482,"y":51.43056749999869,"text-anchor":"start","text":"K","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.347999999999956 45.555679999995846L33.874799999999595,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.347999999999956 45.555679999995846L33.874799999999595,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_flipflop_JKFlipFlop = circuit_flipflop_JKFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },
    
    calculate:function()
    {
        var j = this.getInputPort("input_j").getValue();
        var k = this.getInputPort("input_k").getValue();
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            // do nothing
            if(j===false && k ===false){
               
            }
            // reset
            else if(j===false && k===true){
                q.setValue(false);
                q_.setValue(true);
            }
            // set
            else if(j===true && k===false){
                q.setValue(true);
                q_.setValue(false);
            }
            // toggle
            else if(j===true && k===true){
                var v = q.getValue();
                q.setValue( !v);
                q_.setValue( v);
            }
        }
        this.last_t = t;
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_flipflop_JKRFlipFlop = CircuitFigure.extend({

   NAME: "circuit_flipflop_JKRFlipFlop",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:69.67057499999919},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 15.328835021097678 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 73.90920413675094 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.052799999996296, y: 44.24027647252658 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(1);
     // input_j
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.717999999996664, y: 15.328835021097678 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_j");
     port.setMaxFanOut(1);
     // input_k
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.052799999996296, y: 73.90920413675094 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_k");
     port.setMaxFanOut(1);
     // input_r
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 50, y: 97.69002193537226 }));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_r");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 69.67057499999919;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,69.67057499999919 L0,69.67057499999919");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1.122399999998379Q0,0.12239999999837892 1, 0.12239999999837892L39,0.12239999999837892Q40,0.12239999999837892 40, 1.122399999998379L40,62.12239999999838Q40,63.12239999999838 39, 63.12239999999838L1,63.12239999999838Q0,63.12239999999838 0, 62.12239999999838L0,1.122399999998379');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":27,"y":51.43056749999869,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M0 25.69345499999781L12.041999999999462 30.59945499999685L0 35.95145499999762Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":27,"y":10.736967499998173,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'J');
       shape.attr({"x":5,"y":10.6796875,"text-anchor":"start","text":"J","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'K');
       shape.attr({"x":5,"y":51.43056749999869,"text-anchor":"start","text":"K","font-family":"\"Arial\"","font-size":10,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'CLR');
       shape.attr({"x":10,"y":59.11588749999919,"text-anchor":"start","text":"CLR","font-family":"\"Arial\"","font-size":9,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M28.44800000000123 45.555679999995846L33.574799999999414,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M28.44800000000123 45.555679999995846L33.574799999999414,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_flipflop_JKRFlipFlop = circuit_flipflop_JKRFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },
    
    calculate:function()
    {
        var j = this.getInputPort("input_j").getValue();
        var k = this.getInputPort("input_k").getValue();
        var t = this.getInputPort("input_t").getValue();
        var r = this.getInputPort("input_r").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(r === false){
            rising = true;
            j = false;
            k = true;
        }
        
        if(rising===true){
            // do nothing
            if(j===false && k ===false){
               
            }
            // reset
            else if(j===false && k===true){
                q.setValue(false);
                q_.setValue(true);
            }
            // set
            else if(j===true && k===false){
                q.setValue(true);
                q_.setValue(false);
            }
            // toggle
            else if(j===true && k===true){
                var v = q.getValue();
                q.setValue( !v);
                q_.setValue( v);
            }
        }
        this.last_t = t;
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_flipflop_SRFlipFlop = CircuitFigure.extend({

   NAME: "circuit_flipflop_SRFlipFlop",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:63.12239999999838},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 16.919013694029815 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 81.57637779932148 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_s
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -3.717999999996664, y: 16.919013694029815 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_s");
     port.setMaxFanOut(1);
     // input_r
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.052799999996296, y: 81.57637779932148 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_r");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 63.12239999999838;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,63.12239999999838 L0,63.12239999999838");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1.122399999998379Q0,0.12239999999837892 1, 0.12239999999837892L39,0.12239999999837892Q40,0.12239999999837892 40, 1.122399999998379L40,62.12239999999838Q40,63.12239999999838 39, 63.12239999999838L1,63.12239999999838Q0,63.12239999999838 0, 62.12239999999838L0,1.122399999998379');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":51.43056749999869,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":10.736967499998173,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'S');
       shape.attr({"x":8.0078125,"y":10.6796875,"text-anchor":"start","text":"S","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'R');
       shape.attr({"x":7.978880000001482,"y":51.43056749999869,"text-anchor":"start","text":"R","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.347999999999956 45.555679999995846L33.874799999999595,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.347999999999956 45.555679999995846L33.874799999999595,45.555679999995846');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_flipflop_SRFlipFlop = circuit_flipflop_SRFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    calculate:function()
    {
        var s = !!this.getInputPort("input_s").getValue();
        var r = !!this.getInputPort("input_r").getValue();

        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        console.log(s,r);
        // do nothing
        if(s===false && r===false){
           
        }
        // reset
        else if(s===false && r===true){
            q.setValue(false);
            q_.setValue(true);
        }
        // set
        else if(s===true && r===false){
            q.setValue(true);
            q_.setValue(false);
        }
        // invalid
        else if(s===true && r===true){
            q.setValue( false);
            q_.setValue( false);
        }
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_flipflop_TFlipFlop = CircuitFigure.extend({

   NAME: "circuit_flipflop_TFlipFlop",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:40,height:52.552974999999606},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 19.770526787494724 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.52031250000073, y: 79.79698104626927 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     // input_t
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -6.207600000000184, y: 48.5224670915399 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 52.552974999999606;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L40,0 L40,52.552974999999606 L0,52.552974999999606");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,1.5Q0,0.5 1, 0.5L39,0.5Q40,0.5 40, 1.5L40,49.5Q40,50.5 39, 50.5L1,50.5Q0,50.5 0, 49.5L0,1.5');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.78125,"y":10.6796875,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Q');
       shape.attr({"x":26.28125,"y":41.873287499999606,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M0.5 20.371000000000095L12.541999999999462 25.276999999999134L0.5 30.628999999999905Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(0,0,0,0)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.347999999999956 35.99839999999767L33.874799999999595,35.99839999999767');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.347999999999956 35.99839999999767L33.874799999999595,35.99839999999767');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_flipflop_TFlipFlop = circuit_flipflop_TFlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },
    
    calculate:function()
    {
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            var v = q.getValue();
            q.setValue(!v);
            q_.setValue(v)
        }
        this.last_t = t;
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_gate_AND = CircuitFigure.extend({

   NAME: "circuit_gate_AND",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:31.296875,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.5976035946080878, y: 22.5 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.5976035946080878, y: 77.5 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // out
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100.099850224663, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 31.296875;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L31.296875,0 L31.296875,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'&');
       shape.attr({"x":9.5,"y":20,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_gate_AND = circuit_gate_AND.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() && i2.getValue());
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_gate_NAND = CircuitFigure.extend({

   NAME: "circuit_gate_NAND",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:35,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 20 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 80 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.42857142857143, y: 48.75 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 35;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L35,0 L35,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'&');
       shape.attr({"x":9,"y":21,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4,"cx":31,"cy":19.5,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

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
circuit_gate_NAND = circuit_gate_NAND.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!(i1.getValue() && i2.getValue()));
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_gate_NOR = CircuitFigure.extend({

   NAME: "circuit_gate_NOR",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:37.46875,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.3344453711426187, y: 20 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.6688907422852375, y: 80 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 90.74228523769807, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 37.46875;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L37.46875,0 L37.46875,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'>1');
       shape.attr({"x":4,"y":21,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4,"cx":30.5,"cy":20,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(252,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

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
circuit_gate_NOR = circuit_gate_NOR.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!(i1.getValue() || i2.getValue()));
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_gate_NOT = CircuitFigure.extend({

   NAME: "circuit_gate_NOT",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:36,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 0, y: 51.25 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100, y: 47.5 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 36;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L36,0 L36,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":9.9453125,"y":20.8107200000004,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4,"cx":32,"cy":19,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(252,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

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
circuit_gate_NOT = circuit_gate_NOT.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!i1.getValue());
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_gate_OR = CircuitFigure.extend({

   NAME: "circuit_gate_OR",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:37.46875,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.6688907422852375, y: 22.5 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.6688907422852375, y: 78.75 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 96.08006672226855, y: 50 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 37.46875;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L37.46875,0 L37.46875,40 L0,40");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'>1');
       shape.attr({"x":4,"y":20.5,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
circuit_gate_OR = circuit_gate_OR.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() || i2.getValue());
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_arduino_Arduino = CircuitFigure.extend({

   NAME: "circuit_hardware_arduino_Arduino",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:104.51462500000162,height:240.2584999999999},attr), setter, getter);
     var port;
     // port_d2
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 30.383940630612457 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d2");
     port.setMaxFanOut(20);
     // port_d3
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 35.744521005500324 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d3");
     port.setMaxFanOut(20);
     // port_d4
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 41.20561811548813 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d4");
     port.setMaxFanOut(20);
     // port_d5
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 46.61645685792596 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d5");
     port.setMaxFanOut(20);
     // port_d6
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 52.41179812576779 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d6");
     port.setMaxFanOut(20);
     // port_d7
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 57.43813434280163 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d7");
     port.setMaxFanOut(20);
     // port_d8
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 62.848973085239464 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d8");
     port.setMaxFanOut(20);
     // port_d9
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 68.2598118276773 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d9");
     port.setMaxFanOut(20);
     // port_d10
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 73.67065057011513 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d10");
     port.setMaxFanOut(20);
     // port_d11
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 79.031230945003 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d11");
     port.setMaxFanOut(20);
     // port_d12
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 4.784019461391095, y: 84.49232805499081 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d12");
     port.setMaxFanOut(20);
     // port_d13
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator({x: 95.2159805386089, y: 84.49232805499081 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("port_d13");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 104.51462500000162;
      this.originalHeight= 240.2584999999999;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L104.51462500000162,0 L104.51462500000162,240.2584999999999 L0,240.2584999999999");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M4.499200000000201,7.5Q4.499200000000201,1.5 10.4992000000002, 1.5L93.4992000000002,1.5Q99.4992000000002,1.5 99.4992000000002, 7.5L99.4992000000002,216.5Q99.4992000000002,222.5 93.4992000000002, 222.5L10.4992000000002,222.5Q4.499200000000201,222.5 4.499200000000201, 216.5L4.499200000000201,7.5');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M49.11580719501342,123.72605905170875Q51.97016249999979,120.92379999999775 54.85751646216846, 123.6920462132434L79.77500853783516,147.58165378675815Q82.66236250000384,150.3499000000038 79.8134682223531, 153.15771078329544L54.77105677765258,177.8389892167088Q51.92216250000183,180.64680000000044 49.05715809483484, 177.8554294122114L24.278766905167295,153.7138705877887Q21.413762500000303,150.92249999999967 24.268117804986673, 148.12024094828868L49.11580719501342,123.72605905170875');
       shape.attr({"stroke":"rgba(161,161,161,1)","stroke-width":1,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.4});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M26.37539999999808,29.002800000000207Q26.37539999999808,22.002800000000207 33.37539999999808, 22.002800000000207L72.37539999999808,22.002800000000207Q79.37539999999808,22.002800000000207 79.37539999999808, 29.002800000000207L79.37539999999808,46.00280000000021Q79.37539999999808,53.00280000000021 72.37539999999808, 53.00280000000021L33.37539999999808,53.00280000000021Q26.37539999999808,53.00280000000021 26.37539999999808, 46.00280000000021L26.37539999999808,29.002800000000207');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.99059999999827,29.123599999999897Q33.99059999999827,27.123599999999897 35.99059999999827, 27.123599999999897L38.99059999999827,27.123599999999897Q40.99059999999827,27.123599999999897 40.99059999999827, 29.123599999999897L40.99059999999827,33.1235999999999Q40.99059999999827,35.1235999999999 38.99059999999827, 35.1235999999999L35.99059999999827,35.1235999999999Q33.99059999999827,35.1235999999999 33.99059999999827, 33.1235999999999L33.99059999999827,29.123599999999897');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M50.4457999999986,29.123599999999897Q50.4457999999986,27.123599999999897 52.4457999999986, 27.123599999999897L55.4457999999986,27.123599999999897Q57.4457999999986,27.123599999999897 57.4457999999986, 29.123599999999897L57.4457999999986,33.1235999999999Q57.4457999999986,35.1235999999999 55.4457999999986, 35.1235999999999L52.4457999999986,35.1235999999999Q50.4457999999986,35.1235999999999 50.4457999999986, 33.1235999999999L50.4457999999986,29.123599999999897');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M66.40659999999843,29.123599999999897Q66.40659999999843,27.123599999999897 68.40659999999843, 27.123599999999897L71.40659999999843,27.123599999999897Q73.40659999999843,27.123599999999897 73.40659999999843, 29.123599999999897L73.40659999999843,33.1235999999999Q73.40659999999843,35.1235999999999 71.40659999999843, 35.1235999999999L68.40659999999843,35.1235999999999Q66.40659999999843,35.1235999999999 66.40659999999843, 33.1235999999999L66.40659999999843,29.123599999999897');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M66.40659999999843,41.969199999999546Q66.40659999999843,39.969199999999546 68.40659999999843, 39.969199999999546L71.40659999999843,39.969199999999546Q73.40659999999843,39.969199999999546 73.40659999999843, 41.969199999999546L73.40659999999843,45.969199999999546Q73.40659999999843,47.969199999999546 71.40659999999843, 47.969199999999546L68.40659999999843,47.969199999999546Q66.40659999999843,47.969199999999546 66.40659999999843, 45.969199999999546L66.40659999999843,41.969199999999546');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M50.4997000000003,41.969199999999546Q50.4997000000003,39.969199999999546 52.4997000000003, 39.969199999999546L55.4997000000003,39.969199999999546Q57.4997000000003,39.969199999999546 57.4997000000003, 41.969199999999546L57.4997000000003,45.969199999999546Q57.4997000000003,47.969199999999546 55.4997000000003, 47.969199999999546L52.4997000000003,47.969199999999546Q50.4997000000003,47.969199999999546 50.4997000000003, 45.969199999999546L50.4997000000003,41.969199999999546');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.99059999999827,41.969199999999546Q33.99059999999827,39.969199999999546 35.99059999999827, 39.969199999999546L38.99059999999827,39.969199999999546Q40.99059999999827,39.969199999999546 40.99059999999827, 41.969199999999546L40.99059999999827,45.969199999999546Q40.99059999999827,47.969199999999546 38.99059999999827, 47.969199999999546L35.99059999999827,47.969199999999546Q33.99059999999827,47.969199999999546 33.99059999999827, 45.969199999999546L33.99059999999827,41.969199999999546');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M37.4992000000002,205.2584999999999Q37.4992000000002,202.2584999999999 40.4992000000002, 202.2584999999999L63.4992000000002,202.2584999999999Q66.4992000000002,202.2584999999999 66.4992000000002, 205.2584999999999L66.4992000000002,237.2584999999999Q66.4992000000002,240.2584999999999 63.4992000000002, 240.2584999999999L40.4992000000002,240.2584999999999Q37.4992000000002,240.2584999999999 37.4992000000002, 237.2584999999999L37.4992000000002,205.2584999999999');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Arduino');
       shape.attr({"x":26.913762500000303,"y":13,"text-anchor":"start","text":"Arduino","font-family":"\"Arial\"","font-size":15,"stroke":"#000000","fill":"#00979D","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":21,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":34,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":47,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":60,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":73,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":86,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":99,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":112,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":125,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":138,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":151,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":164,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":177,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":190,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":99.51462500000162,"cy":203,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":203,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":190,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":177,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":164,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":151,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":138,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":125.92379999999775,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":112,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":99,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":86,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":73,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":60,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":47,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":34,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":5,"cy":21,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(242,242,242,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D12');
       shape.attr({"x":11.5,"y":203.6171875,"text-anchor":"start","text":"D12","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D10');
       shape.attr({"x":12,"y":177.29081250000036,"text-anchor":"start","text":"D10","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D9');
       shape.attr({"x":11.663762500000303,"y":164,"text-anchor":"start","text":"D9","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D8');
       shape.attr({"x":12,"y":151.33881250000104,"text-anchor":"start","text":"D8","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D7');
       shape.attr({"x":12,"y":138.36281250000138,"text-anchor":"start","text":"D7","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D6');
       shape.attr({"x":12,"y":126.1171875,"text-anchor":"start","text":"D6","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D5');
       shape.attr({"x":12,"y":112.6171875,"text-anchor":"start","text":"D5","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D4');
       shape.attr({"x":12,"y":99.6199875000002,"text-anchor":"start","text":"D4","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D3');
       shape.attr({"x":12,"y":86.52048749999994,"text-anchor":"start","text":"D3","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D2');
       shape.attr({"x":12,"y":73.54448750000029,"text-anchor":"start","text":"D2","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D11');
       shape.attr({"x":12,"y":190.234375,"text-anchor":"start","text":"D11","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'D13');
       shape.attr({"x":77.90659999999843,"y":202.6171875,"text-anchor":"start","text":"D13","font-family":"\"Arial\"","font-size":8,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // led_power
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":6.090499999999338,"ry":6.090499999999338,"cx":79.99709999999777,"cy":65.26980000000003,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,60,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","led_power");
       
       // led_d13
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":6.090499999999338,"ry":6.090499999999338,"cx":64.59019999999964,"cy":65.26980000000003,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(51,222,9,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","led_d13");
       

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
circuit_hardware_arduino_Arduino = circuit_hardware_arduino_Arduino.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         
         var _this= this;
         this.onChangeCallback = function(emitter, event){
            if(event.value){
                _this.layerAttr("led_d13",{fill:"#33DE09"});
            }
            else{
                _this.layerAttr("led_d13",{fill:"#f0f0f0"});
            }
         }

         this.onConnectedCallback = function(emitter, event){
            if(hardware.arduino.connected){
                _this.layerAttr("led_power",{fill:"#FF3C00"});
            }
            else{
                _this.layerAttr("led_power",{fill:"#f0f0f0"});
            }
         }
    },
    
    calculate:function(){
        this.propagate(2,  this.getPort("port_d2"));
        this.propagate(3,  this.getPort("port_d3"));
        this.propagate(4,  this.getPort("port_d4"));
        this.propagate(5,  this.getPort("port_d5"));
        this.propagate(6,  this.getPort("port_d6"));
        this.propagate(7,  this.getPort("port_d7"));
        this.propagate(8,  this.getPort("port_d8"));
        this.propagate(9,  this.getPort("port_d9"));
        this.propagate(10, this.getPort("port_d10"));
        this.propagate(11, this.getPort("port_d11"));
        this.propagate(12, this.getPort("port_d12"));
        this.propagate(13, this.getPort("port_d13"));
    },

    propagate: function(index, port){
        if(!port.getConnections().isEmpty()){
            var con = port.getConnections().first();
            var other = con.getSource()===port?con.getTarget():con.getSource()
            if(other instanceof draw2d.InputPort){
                
            }
            else {
                hardware.arduino.set(index,!!other.getValue())
            }
        }
    },
    
   /**
     *  Called if the simulation mode is starting
     **/
    onStart:function(){
        this.getPort("port_d13").on("change:value", this.onChangeCallback);
    },

    /**
     *  Called if the simulation mode is stopping
     **/
    onStop:function(){
        this.getPort("port_d13").off("change:value", this.onChangeCallback);
    },
    
    setCanvas: function(canvas)
    {
        // deregister old listerener ...if exists
        if(this.canvas !==null) {
            hardware.arduino.off("connect", this.onConnectedCallback);
            hardware.arduino.off("disconnect", this.onConnectedCallback);
        }
        
        this._super(canvas);
        
        // register new listener...if requried
        if(this.canvas !==null) {
            hardware.arduino.on("connect", this.onConnectedCallback);
            hardware.arduino.on("disconnect", this.onConnectedCallback);
            
            this.onConnectedCallback();
            if(this.getPort("port_d13").getValue() && !this.getPort("port_d13").getConnections().isEmpty()) {
                 this.onChangeCallback(this, {value:true})
            }
            else{
                 this.onChangeCallback(this, {value:false})
            }
        }
    },
    
    getRequiredHardware: function(){
      return {
        raspi: false,
        arduino: true
      }
    }
    
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_arduino_Led = CircuitFigure.extend({

   NAME: "circuit_hardware_arduino_Led",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:30,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 1.063333333334716, y: 50 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 30;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L30,0 L30,32 L0,32");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15,"ry":16,"cx":15,"cy":16,"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M25.94430000000102 5.062700000001314L5.283199999999852,27.963700000000244');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M25.94430000000102 5.062700000001314L5.283199999999852,27.963700000000244');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M5.3521000000100685 4.786000000009153L24.888199999999415,27.673900000004323');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M5.3521000000100685 4.786000000009153L24.888199999999415,27.673900000004323');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_hardware_arduino_Led = circuit_hardware_arduino_Led.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         
         var _this= this;
         this.onChangeCallback = function(emitter, event){
            if(event.value){
                _this.layerAttr("circle",{fill:"#C21B7A"});
            }
            else{
                _this.layerAttr("circle",{fill:"#f0f0f0"});
            }
            // set the LED on the Arduino on/off
            hardware.arduino.set(3, !!event.value);
         }
    },
    
    calculate:function(){
    },
    
    /**
     *  Called if the simulation mode is starting
     **/
    onStart:function(){
        this.getInputPort(0).on("change:value", this.onChangeCallback);

    },

    /**
     *  Called if the simulation mode is stopping
     **/
    onStop:function(){
        this.getInputPort(0).off("change:value", this.onChangeCallback);
    }
    
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiGPIO = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiGPIO",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:105,height:259.5},attr), setter, getter);
     var port;
     // gpi_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 27.811978626482198 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_1");
     port.setMaxFanOut(1);
     // gpi_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 37.57225433526012 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_2");
     port.setMaxFanOut(1);
     // gpi_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 46.73619460500961 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_3");
     port.setMaxFanOut(1);
     // gpi_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 55.97347784200363 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_4");
     port.setMaxFanOut(1);
     // gpi_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 64.76873795761088 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_5");
     port.setMaxFanOut(1);
     // gpi_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 73.98843930635839 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_6");
     port.setMaxFanOut(1);
     // gpi_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 83.77943159922923 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_7");
     port.setMaxFanOut(1);
     // gpi_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.001771661139562, y: 92.67526974951802 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_8");
     port.setMaxFanOut(1);
     // gpo_9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 27.799614643545407 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_9");
     port.setMaxFanOut(20);
     // gpo_10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 37.57225433526012 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_10");
     port.setMaxFanOut(20);
     // gpo_11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 46.73619460500961 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_11");
     port.setMaxFanOut(20);
     // gpo_12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 55.97347784200363 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_12");
     port.setMaxFanOut(20);
     // gpo_13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 64.76873795761088 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_13");
     port.setMaxFanOut(20);
     // gpo_14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 74.373795761079 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_14");
     port.setMaxFanOut(20);
     // gpo_15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 83.77943159922923 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_15");
     port.setMaxFanOut(20);
     // gpo_16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 88.32380952381018, y: 92.67526974951802 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_16");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 105;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L105,0 L105,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M91.54000000000087,48Q91.54000000000087,46 93.54000000000087, 46L103,46Q105,46 105, 44L105,2Q105,0 103, 0L2,0Q0,0 0, 2L0,44Q0,46 2, 46L12.740000000000691,46Q14.740000000000691,46 14.740000000000691, 48L14.740000000000691,257.5Q14.740000000000691,259.5 16.74000000000069, 259.5L89.54000000000087,259.5Q91.54000000000087,259.5 91.54000000000087, 257.5L91.54000000000087,48');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'GPIO');
       shape.attr({"x":33.936460244196496,"y":16.944312499999796,"text-anchor":"start","text":"GPIO","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":22.65186024419654,"y":73.1720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'2');
       shape.attr({"x":24.65186024419654,"y":98.5,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'3');
       shape.attr({"x":24.65186024419654,"y":122.3588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4');
       shape.attr({"x":24.65186024419654,"y":145.3588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'5');
       shape.attr({"x":24.65186024419654,"y":168.7332749999996,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'6');
       shape.attr({"x":24.65186024419654,"y":194.50137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":24.65186024419654,"y":219.5,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'8');
       shape.attr({"x":24.65186024419654,"y":241.05374999999913,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":52.47646024419646,"cy":59.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M58.060480244197606 50.10502500000075L46.91936024419738 50.10502500000075L46.91936024419738 40.274625000000015L58.060480244197606 40.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M45.23121510744113,73.68742174721956Q44.747561552356274,71.3212085643172 48.407336005325305, 70.53730360715826L48.407336005325305,70.53730360715826Q52.06711045829434,69.75339864999933 55.29738818166288, 70.42978257348068L55.29738818166288,70.42978257348068Q58.52766590503143,71.10616649696203 58.72351307461395, 73.57990071354197L58.72351307461395,73.57990071354197Q58.91936024419647,76.05363493012192 55.20461187939645, 77.32220267578214L55.20461187939645,77.32220267578214Q51.489863514596436,78.59077042144236 48.60236608856121, 77.32220267578214L48.60236608856121,77.32220267578214Q45.71486866252599,76.05363493012192 45.23121510744113, 73.68742174721956L45.23121510744113,73.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M69.76058518903737,42.684774099766635Q68.04013458284862,46.295874999999796 64.04186434134924, 46.17825240038364L59.99055489113864,46.05906947361764Q55.99228464963926,45.941446874001485 55.74603219243252, 41.949034103843616L55.69572543740398,41.133426684208615Q55.44947298019724,37.141013914050745 57.86565976809425, 35.0772128335384L57.86565976809425,35.0772128335384Q60.28184655599125,33.01341175302605 63.23490425588761, 32.426005680511935L63.23490425588761,32.426005680511935Q66.18796195578398,31.83859960799782 70.15699327786476, 32.3353796039132L70.46717573811841,32.374203293834874Q74.4362070601992,32.87098328975026 72.71575645401045, 36.48208418998342L69.76058518903737,42.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":52.41936024419738,"cy":65.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":57.33886024419735,"cy":55.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":48.83886024419735,"cy":55.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.14696866252598,39.09992905405352Q53.52196866252598,42.84992905405397 49.52196866252507, 44.572902027026885L49.52196866252507,44.572902027026885Q45.52196866252416,46.295874999999796 43.17821866252552, 45.383712837837265L43.17821866252552,45.383712837837265Q40.83446866252689,44.471550675674735 39.24071866252643, 42.54587499999889L39.24071866252643,42.54587499999889Q37.64696866252598,40.62019932432304 36.20946866252598, 36.87019932432304L36.20946866252598,36.87019932432304Q34.77196866252598,33.12019932432304 40.64696866252598, 32.20803716216142L40.64696866252598,32.20803716216142Q46.52196866252598,31.295874999999796 51.64696866252598, 33.32290202702643L51.64696866252598,33.32290202702643Q56.77196866252598,35.349929054053064 55.14696866252598, 39.09992905405352L55.14696866252598,39.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M37.33522662061023,64.00072237161612Q37.89848457869448,59.60027499999978 42.047861882565485, 61.61934036716548L42.047861882565485,61.61934036716548Q46.19723918643649,63.63840573433117 46.484603924481235, 67.51343261639249L46.484603924481235,67.51343261639249Q46.77196866252598,71.38845949845381 44.01812877444081, 71.9943672492268L44.01812877444081,71.9943672492268Q41.264288886355644,72.60027499999978 39.01812877444081, 70.50072237161612L39.01812877444081,70.50072237161612Q36.77196866252598,68.40116974323246 37.33522662061023, 64.00072237161612L37.33522662061023,64.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M59.216001196203706,66.51260111401734Q60.03695719204825,63.35769425824037 63.95848178126289, 62.284167803263244L63.95848178126289,62.284167803263244Q67.88000637047753,61.21064134828612 67.80721137441242, 62.1127998494685L67.80721137441242,62.1127998494685Q67.7344163783473,63.014958350650886 67.07688831127234, 67.0617839245524L67.07688831127234,67.0617839245524Q66.41936024419738,71.10860949845392 62.29113082139065, 71.8863159410671L62.29113082139065,71.8863159410671Q58.16290139858393,72.66402238368028 58.278973299471545, 71.1657651767373L58.278973299471545,71.1657651767373Q58.395045200359164,69.66750796979431 59.216001196203706, 66.51260111401734L59.216001196203706,66.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M61.48261820228163,53.22087237161668Q62.04587616036588,48.82042499999989 66.19525346423688, 50.83949036716558L66.19525346423688,50.83949036716558Q70.34463076810789,52.858555734331276 70.63199550615263, 56.733582616392596L70.63199550615263,56.733582616392596Q70.91936024419738,60.608609498453916 68.16552035611221, 61.2145172492269L68.16552035611221,61.2145172492269Q65.41168046802704,61.82042499999989 63.16552035611221, 59.72087237161668L63.16552035611221,59.72087237161668Q60.91936024419738,57.62131974323347 61.48261820228163, 53.22087237161668L61.48261820228163,53.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.4021182022816,45.945338564964004Q55.96537616036585,42.89887499999895 60.114753464236856, 44.29668948495964L60.114753464236856,44.29668948495964Q64.26413076810786,45.69450396992033 64.5514955061526, 48.37721488827083L64.5514955061526,48.37721488827083Q64.83886024419735,51.05992580662132 62.08502035611218, 51.47940040331014L62.08502035611218,51.47940040331014Q59.331180468027014,51.89887499999895 57.08502035611218, 50.445338564964004L57.08502035611218,50.445338564964004Q54.83886024419735,48.991802129929056 55.4021182022816, 45.945338564964004L55.4021182022816,45.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M38.38465340077073,50.15928806953707Q41.99733813901548,47.82042499999989 43.61268473824475, 49.66769167532493L43.61268473824475,49.66769167532493Q45.22803133747402,51.51495835064998 44.18395621375839, 55.862431635271605L44.18395621375839,55.862431635271605Q43.13988109004276,60.20990491989323 39.956544472356654, 60.98761136250687L39.956544472356654,60.98761136250687Q36.773207854670545,61.7653178051205 35.77258825859826, 57.13173447209738L35.77258825859826,57.13173447209738Q34.77196866252598,52.49815113907425 38.38465340077073, 50.15928806953707L38.38465340077073,50.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M47.613102699107,42.55345494670701Q51.12072814793828,41.89887499999895 53.113102699107, 42.95862738455435L53.113102699107,42.95862738455435Q55.105477250275726,44.01837976910974 53.59460569131443, 46.51246751600229L53.59460569131443,46.51246751600229Q52.08373413235313,49.006555262894835 47.553784872741744, 49.667463496247365L47.553784872741744,49.667463496247365Q43.02383561313036,50.328371729599894 43.56465643170304, 46.76820331150748L43.56465643170304,46.76820331150748Q44.105477250275726,43.20803489341506 47.613102699107, 42.55345494670701L47.613102699107,42.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'9');
       shape.attr({"x":71.97646024419646,"y":73.10027499999978,"text-anchor":"start","text":"9","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'10');
       shape.attr({"x":64.88000637047662,"y":98.5,"text-anchor":"start","text":"10","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'11');
       shape.attr({"x":65.88000637047662,"y":122.3588749999999,"text-anchor":"start","text":"11","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'12');
       shape.attr({"x":65.97646024419646,"y":145.3588749999999,"text-anchor":"start","text":"12","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'13');
       shape.attr({"x":65.97646024419646,"y":168.7332749999996,"text-anchor":"start","text":"13","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'14');
       shape.attr({"x":65.88000637047662,"y":192.50137499999983,"text-anchor":"start","text":"14","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'15');
       shape.attr({"x":66.88000637047662,"y":218.5,"text-anchor":"start","text":"15","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'16');
       shape.attr({"x":66.88000637047662,"y":241.05374999999913,"text-anchor":"start","text":"16","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M65.17025205219943 38.47225227999843L63.61377205220015,39.31412773599868Q62.057292052200864,40.156003191998934 60.85743049750244, 41.75610701661679L59.51266024419783,43.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M65.17025205219943 38.47225227999843L63.61377205220015,39.31412773599868Q62.057292052200864,40.156003191998934 60.85743049750244, 41.75610701661679L59.51266024419783,43.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M48.69922024419793 42.04527500000131L47.56413672419785,40.4769985199996Q46.42905320419777,38.90872203999788 44.35444558819654, 37.47466328799874L42.27983797219531,36.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M48.69922024419793 42.04527500000131L47.56413672419785,40.4769985199996Q46.42905320419777,38.90872203999788 44.35444558819654, 37.47466328799874L42.27983797219531,36.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_hardware_raspi_RaspiGPIO = circuit_hardware_raspi_RaspiGPIO.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                raspi.gpio.set(port.getName(), port.getValue());
            }
        });
        this.getOutputPorts().each(function(index,port){
            port.setValue(raspi.gpio.get(port.getName()));
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiINPUT = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiINPUT",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:115.49609999999939,height:259.5},attr), setter, getter);
     var port;
     // gpo_9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 27.028901734104174 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_9");
     port.setMaxFanOut(20);
     // gpo_10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 36.80154142581888 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_10");
     port.setMaxFanOut(20);
     // gpo_11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 45.96548169556837 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_11");
     port.setMaxFanOut(20);
     // gpo_12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 55.202764932562395 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_12");
     port.setMaxFanOut(20);
     // gpo_13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 63.99802504816965 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_13");
     port.setMaxFanOut(20);
     // gpo_14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 73.60308285163777 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_14");
     port.setMaxFanOut(20);
     // gpo_15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 83.00871868978798 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_15");
     port.setMaxFanOut(20);
     // gpo_16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 80.89762338295395, y: 91.9045568400768 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_16");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 115.49609999999939;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L115.49609999999939,0 L115.49609999999939,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M92.80000000000018,48Q92.80000000000018,46 94.80000000000018, 46L104.25999999999931,46Q106.25999999999931,46 106.25999999999931, 44L106.25999999999931,2Q106.25999999999931,0 104.25999999999931, 0L3.259999999999309,0Q1.2599999999993088,0 1.2599999999993088, 2L1.2599999999993088,44Q1.2599999999993088,46 1.2481969268556656, 47.99996517156282L0.01180307314364315,257.50003482843715Q0,259.5 2, 259.5L90.80000000000018,259.5Q92.80000000000018,259.5 92.80000000000018, 257.5L92.80000000000018,48');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Input GPIO');
       shape.attr({"x":8.433599999999387,"y":21.0078125,"text-anchor":"start","text":"Input GPIO","font-family":"\"Arial\"","font-size":18,"stroke":"none","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":38.170060244195156,"cy":69.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M43.7540802441963 60.10502500000075L32.612960244196074 60.10502500000075L32.612960244196074 50.274625000000015L43.7540802441963 50.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M30.924815107439827,83.68742174721956Q30.44116155235497,81.3212085643172 34.100936005324, 80.53730360715826L34.100936005324,80.53730360715826Q37.76071045829303,79.75339864999933 40.99098818166158, 80.42978257348068L40.99098818166158,80.42978257348068Q44.22126590503012,81.10616649696203 44.417113074612644, 83.57990071354197L44.417113074612644,83.57990071354197Q44.612960244195165,86.05363493012192 40.89821187939515, 87.32220267578214L40.89821187939515,87.32220267578214Q37.18346351459513,88.59077042144236 34.29596608855991, 87.32220267578214L34.29596608855991,87.32220267578214Q31.408468662524683,86.05363493012192 30.924815107439827, 83.68742174721956L30.924815107439827,83.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M55.454185189036075,52.684774099766635Q53.73373458284732,56.295874999999796 49.735464341347935, 56.17825240038364L45.68415489113734,56.05906947361764Q41.685884649637956,55.941446874001485 41.43963219243122, 51.949034103843616L41.389325437402675,51.133426684208615Q41.14307298019594,47.141013914050745 43.55925976809294, 45.0772128335384L43.55925976809294,45.0772128335384Q45.97544655598995,43.01341175302605 48.92850425588631, 42.426005680511935L48.92850425588631,42.426005680511935Q51.88156195578267,41.83859960799782 55.85059327786345, 42.3353796039132L56.16077573811711,42.374203293834874Q60.12980706019789,42.87098328975026 58.409356454009135, 46.48208418998342L55.454185189036075,52.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":38.112960244196074,"cy":75.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":43.032460244196045,"cy":65.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":34.532460244196045,"cy":65.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M40.840568662524674,49.09992905405352Q39.215568662524674,52.84992905405397 35.215568662523765, 54.572902027026885L35.215568662523765,54.572902027026885Q31.215568662522855,56.295874999999796 28.87181866252422, 55.383712837837265L28.87181866252422,55.383712837837265Q26.528068662525584,54.471550675674735 24.93431866252513, 52.54587499999889L24.93431866252513,52.54587499999889Q23.340568662524674,50.62019932432304 21.903068662524674, 46.87019932432304L21.903068662524674,46.87019932432304Q20.465568662524674,43.12019932432304 26.340568662524674, 42.20803716216142L26.340568662524674,42.20803716216142Q32.215568662524674,41.295874999999796 37.340568662524674, 43.32290202702643L37.340568662524674,43.32290202702643Q42.465568662524674,45.349929054053064 40.840568662524674, 49.09992905405352L40.840568662524674,49.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M23.028826620608925,74.00072237161612Q23.592084578693175,69.60027499999978 27.74146188256418, 71.61934036716548L27.74146188256418,71.61934036716548Q31.890839186435187,73.63840573433117 32.17820392447993, 77.51343261639249L32.17820392447993,77.51343261639249Q32.465568662524674,81.38845949845381 29.711728774439507, 81.9943672492268L29.711728774439507,81.9943672492268Q26.95788888635434,82.60027499999978 24.711728774439507, 80.50072237161612L24.711728774439507,80.50072237161612Q22.465568662524674,78.40116974323246 23.028826620608925, 74.00072237161612L23.028826620608925,74.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M44.9096011962024,76.51260111401734Q45.730557192046945,73.35769425824037 49.652081781261586, 72.28416780326324L49.652081781261586,72.28416780326324Q53.57360637047623,71.21064134828612 53.500811374411114, 72.1127998494685L53.500811374411114,72.1127998494685Q53.428016378346,73.01495835065089 52.77048831127104, 77.0617839245524L52.77048831127104,77.0617839245524Q52.112960244196074,81.10860949845392 47.98473082138935, 81.8863159410671L47.98473082138935,81.8863159410671Q43.85650139858262,82.66402238368028 43.97257329947024, 81.1657651767373L43.97257329947024,81.1657651767373Q44.08864520035786,79.66750796979431 44.9096011962024, 76.51260111401734L44.9096011962024,76.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M47.176218202280324,63.22087237161668Q47.739476160364575,58.82042499999989 51.88885346423558, 60.83949036716558L51.88885346423558,60.83949036716558Q56.03823076810659,62.858555734331276 56.32559550615133, 66.7335826163926L56.32559550615133,66.7335826163926Q56.612960244196074,70.60860949845392 53.85912035611091, 71.2145172492269L53.85912035611091,71.2145172492269Q51.10528046802574,71.82042499999989 48.85912035611091, 69.72087237161668L48.85912035611091,69.72087237161668Q46.612960244196074,67.62131974323347 47.176218202280324, 63.22087237161668L47.176218202280324,63.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M41.095718202280295,55.945338564964004Q41.658976160364546,52.89887499999895 45.80835346423555, 54.29668948495964L45.80835346423555,54.29668948495964Q49.95773076810656,55.69450396992033 50.2450955061513, 58.37721488827083L50.2450955061513,58.37721488827083Q50.532460244196045,61.05992580662132 47.77862035611088, 61.47940040331014L47.77862035611088,61.47940040331014Q45.02478046802571,61.89887499999895 42.77862035611088, 60.445338564964004L42.77862035611088,60.445338564964004Q40.532460244196045,58.991802129929056 41.095718202280295, 55.945338564964004L41.095718202280295,55.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M24.078253400769427,60.15928806953707Q27.69093813901418,57.82042499999989 29.30628473824345, 59.66769167532493L29.30628473824345,59.66769167532493Q30.921631337472718,61.51495835064998 29.87755621375709, 65.8624316352716L29.87755621375709,65.8624316352716Q28.83348109004146,70.20990491989323 25.65014447235535, 70.98761136250687L25.65014447235535,70.98761136250687Q22.46680785466924,71.7653178051205 21.466188258596958, 67.13173447209738L21.466188258596958,67.13173447209738Q20.465568662524674,62.49815113907425 24.078253400769427, 60.15928806953707L24.078253400769427,60.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.3067026991057,52.55345494670701Q36.814328147936976,51.89887499999895 38.8067026991057, 52.95862738455435L38.8067026991057,52.95862738455435Q40.79907725027442,54.01837976910974 39.288205691313124, 56.51246751600229L39.288205691313124,56.51246751600229Q37.777334132351825,59.006555262894835 33.24738487274044, 59.667463496247365L33.24738487274044,59.667463496247365Q28.717435613129055,60.328371729599894 29.25825643170174, 56.76820331150748L29.25825643170174,56.76820331150748Q29.799077250274422,53.20803489341506 33.3067026991057, 52.55345494670701L33.3067026991057,52.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'9');
       shape.attr({"x":70.67006024419516,"y":71.10027499999978,"text-anchor":"start","text":"9","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'10');
       shape.attr({"x":65.57360637047532,"y":96.5,"text-anchor":"start","text":"10","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'11');
       shape.attr({"x":66.57360637047532,"y":120.3588749999999,"text-anchor":"start","text":"11","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'12');
       shape.attr({"x":66.67006024419516,"y":143.3588749999999,"text-anchor":"start","text":"12","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'13');
       shape.attr({"x":66.67006024419516,"y":166.7332749999996,"text-anchor":"start","text":"13","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'14');
       shape.attr({"x":66.57360637047532,"y":190.50137499999983,"text-anchor":"start","text":"14","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'15');
       shape.attr({"x":67.57360637047532,"y":216.5,"text-anchor":"start","text":"15","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'16');
       shape.attr({"x":67.57360637047532,"y":239.05374999999913,"text-anchor":"start","text":"16","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M53.863852052198126 48.47225227999843L52.30737205219884,49.31412773599868Q50.75089205219956,50.156003191998934 49.55103049750114, 51.75610701661679L48.20626024419653,53.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M53.863852052198126 48.47225227999843L52.30737205219884,49.31412773599868Q50.75089205219956,50.156003191998934 49.55103049750114, 51.75610701661679L48.20626024419653,53.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M37.39282024419663 52.04527500000131L36.25773672419655,50.4769985199996Q35.12265320419647,48.90872203999788 33.04804558819524, 47.47466328799874L30.973437972194006,46.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M37.39282024419663 52.04527500000131L36.25773672419655,50.4769985199996Q35.12265320419647,48.90872203999788 33.04804558819524, 47.47466328799874L30.973437972194006,46.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_hardware_raspi_RaspiINPUT = circuit_hardware_raspi_RaspiINPUT.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.raspi.get(port.getName()));
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    }
    
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_RaspiOUTPUT = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_RaspiOUTPUT",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:119.359375,height:259.5},attr), setter, getter);
     var port;
     // gpi_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 28.968047990644045 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_1");
     port.setMaxFanOut(1);
     // gpi_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 38.72832369942196 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_2");
     port.setMaxFanOut(1);
     // gpi_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 47.89226396917145 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_3");
     port.setMaxFanOut(1);
     // gpi_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 57.12954720616548 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_4");
     port.setMaxFanOut(1);
     // gpi_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 65.92480732177273 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_5");
     port.setMaxFanOut(1);
     // gpi_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 75.14450867052024 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_6");
     port.setMaxFanOut(1);
     // gpi_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 84.93550096339108 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_7");
     port.setMaxFanOut(1);
     // gpi_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 13.62103751313625, y: 93.83133911367987 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_8");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 119.359375;
      this.originalHeight= 259.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L119.359375,0 L119.359375,259.5 L0,259.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M106.60618588992817,47.99999999907308Q106.60612499999843,46 106.60612499999843, 44L106.60612499999843,2Q106.60612499999843,0 104.60612499999843, 0L3.6061249999984284,0Q1.6061249999984284,0 1.6061249999984284, 2L1.6061249999984284,44Q1.6061249999984284,46 3.6061249999984284, 46L14.34612499999912,46Q16.34612499999912,46 16.34612499999912, 48L16.34612499999912,257.5Q16.34612499999912,259.5 18.34612499999912, 259.5L104.61262500000157,259.5Q106.61262500000157,259.5 106.61256411007183, 257.5000000009269L106.60618588992817,47.99999999907308');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Output GPIO');
       shape.attr({"x":4,"y":22.94793749999917,"text-anchor":"start","text":"Output GPIO","font-family":"\"Arial\"","font-size":17,"stroke":"none","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":25.25798524419497,"y":76.1720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'2');
       shape.attr({"x":27.25798524419497,"y":101.5,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'3');
       shape.attr({"x":27.25798524419497,"y":125.3588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'4');
       shape.attr({"x":27.25798524419497,"y":148.3588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'5');
       shape.attr({"x":27.25798524419497,"y":171.7332749999996,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'6');
       shape.attr({"x":27.25798524419497,"y":197.50137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":27.25798524419497,"y":222.5,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'8');
       shape.attr({"x":27.25798524419497,"y":244.05374999999913,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":69.08258524419489,"cy":72.39887499999895,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M74.66660524419603 63.10502500000075L63.525485244195806 63.10502500000075L63.525485244195806 53.274625000000015L74.66660524419603 53.274625000000015Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M61.83734010743956,86.68742174721956Q61.3536865523547,84.3212085643172 65.01346100532373, 83.53730360715826L65.01346100532373,83.53730360715826Q68.67323545829277,82.75339864999933 71.90351318166131, 83.42978257348068L71.90351318166131,83.42978257348068Q75.13379090502985,84.10616649696203 75.32963807461238, 86.57990071354197L75.32963807461238,86.57990071354197Q75.5254852441949,89.05363493012192 71.81073687939488, 90.32220267578214L71.81073687939488,90.32220267578214Q68.09598851459486,91.59077042144236 65.20849108855964, 90.32220267578214L65.20849108855964,90.32220267578214Q62.320993662524415,89.05363493012192 61.83734010743956, 86.68742174721956L61.83734010743956,86.68742174721956');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M86.3667101890358,55.684774099766635Q84.64625958284705,59.295874999999796 80.64798934134767, 59.17825240038364L76.59667989113707,59.05906947361764Q72.59840964963769,58.941446874001485 72.35215719243095, 54.949034103843616L72.30185043740241,54.133426684208615Q72.05559798019567,50.141013914050745 74.47178476809268, 48.0772128335384L74.47178476809268,48.0772128335384Q76.88797155598968,46.01341175302605 79.84102925588604, 45.426005680511935L79.84102925588604,45.426005680511935Q82.7940869557824,44.83859960799782 86.76311827786319, 45.3353796039132L87.07330073811684,45.374203293834874Q91.04233206019762,45.87098328975026 89.32188145400887, 49.48208418998342L86.3667101890358,55.684774099766635');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":69.0254852441958,"cy":78.10027499999978,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":73.94498524419578,"cy":68.82042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":65.44498524419578,"cy":68.32042499999989,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M71.7530936625244,52.09992905405352Q70.1280936625244,55.84992905405397 66.1280936625235, 57.572902027026885L66.1280936625235,57.572902027026885Q62.12809366252259,59.295874999999796 59.78434366252395, 58.383712837837265L59.78434366252395,58.383712837837265Q57.440593662525316,57.471550675674735 55.84684366252486, 55.54587499999889L55.84684366252486,55.54587499999889Q54.25309366252441,53.62019932432304 52.81559366252441, 49.87019932432304L52.81559366252441,49.87019932432304Q51.37809366252441,46.12019932432304 57.25309366252441, 45.20803716216142L57.25309366252441,45.20803716216142Q63.12809366252441,44.295874999999796 68.2530936625244, 46.32290202702643L68.2530936625244,46.32290202702643Q73.3780936625244,48.349929054053064 71.7530936625244, 52.09992905405352L71.7530936625244,52.09992905405352');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M53.94135162060866,77.00072237161612Q54.50460957869291,72.60027499999978 58.65398688256391, 74.61934036716548L58.65398688256391,74.61934036716548Q62.80336418643492,76.63840573433117 63.09072892447966, 80.51343261639249L63.09072892447966,80.51343261639249Q63.37809366252441,84.38845949845381 60.62425377443924, 84.9943672492268L60.62425377443924,84.9943672492268Q57.87041388635407,85.60027499999978 55.62425377443924, 83.50072237161612L55.62425377443924,83.50072237161612Q53.37809366252441,81.40116974323246 53.94135162060866, 77.00072237161612L53.94135162060866,77.00072237161612');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M75.82212619620213,79.51260111401734Q76.64308219204668,76.35769425824037 80.56460678126132, 75.28416780326324L80.56460678126132,75.28416780326324Q84.48613137047596,74.21064134828612 84.41333637441085, 75.1127998494685L84.41333637441085,75.1127998494685Q84.34054137834573,76.01495835065089 83.68301331127077, 80.0617839245524L83.68301331127077,80.0617839245524Q83.0254852441958,84.10860949845392 78.89725582138908, 84.8863159410671L78.89725582138908,84.8863159410671Q74.76902639858235,85.66402238368028 74.88509829946997, 84.1657651767373L74.88509829946997,84.1657651767373Q75.00117020035759,82.66750796979431 75.82212619620213, 79.51260111401734L75.82212619620213,79.51260111401734');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M78.08874320228006,66.22087237161668Q78.6520011603643,61.82042499999989 82.80137846423531, 63.83949036716558L82.80137846423531,63.83949036716558Q86.95075576810632,65.85855573433128 87.23812050615106, 69.7335826163926L87.23812050615106,69.7335826163926Q87.5254852441958,73.60860949845392 84.77164535611064, 74.2145172492269L84.77164535611064,74.2145172492269Q82.01780546802547,74.82042499999989 79.77164535611064, 72.72087237161668L79.77164535611064,72.72087237161668Q77.5254852441958,70.62131974323347 78.08874320228006, 66.22087237161668L78.08874320228006,66.22087237161668');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M72.00824320228003,58.945338564964004Q72.57150116036428,55.89887499999895 76.72087846423528, 57.29668948495964L76.72087846423528,57.29668948495964Q80.87025576810629,58.69450396992033 81.15762050615103, 61.37721488827083L81.15762050615103,61.37721488827083Q81.44498524419578,64.05992580662132 78.69114535611061, 64.47940040331014L78.69114535611061,64.47940040331014Q75.93730546802544,64.89887499999895 73.69114535611061, 63.445338564964004L73.69114535611061,63.445338564964004Q71.44498524419578,61.991802129929056 72.00824320228003, 58.945338564964004L72.00824320228003,58.945338564964004');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M54.99077840076916,63.15928806953707Q58.60346313901391,60.82042499999989 60.21880973824318, 62.66769167532493L60.21880973824318,62.66769167532493Q61.83415633747245,64.51495835064998 60.79008121375682, 68.8624316352716L60.79008121375682,68.8624316352716Q59.74600609004119,73.20990491989323 56.56266947235508, 73.98761136250687L56.56266947235508,73.98761136250687Q53.379332854668974,74.7653178051205 52.37871325859669, 70.13173447209738L52.37871325859669,70.13173447209738Q51.37809366252441,65.49815113907425 54.99077840076916, 63.15928806953707L54.99077840076916,63.15928806953707');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M64.21922769910543,55.55345494670701Q67.72685314793671,54.89887499999895 69.71922769910543, 55.95862738455435L69.71922769910543,55.95862738455435Q71.71160225027415,57.01837976910974 70.20073069131286, 59.51246751600229L70.20073069131286,59.51246751600229Q68.68985913235156,62.006555262894835 64.15990987274017, 62.667463496247365L64.15990987274017,62.667463496247365Q59.62996061312879,63.328371729599894 60.17078143170147, 59.76820331150748L60.17078143170147,59.76820331150748Q60.711602250274154,56.20803489341506 64.21922769910543, 55.55345494670701L64.21922769910543,55.55345494670701');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line_shadow
       shape = this.canvas.paper.path('M81.77637705219786 51.47225227999843L80.21989705219858,52.31412773599868Q78.66341705219929,53.156003191998934 77.46355549750086, 54.75610701661679L76.11878524419626,56.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M81.77637705219786 51.47225227999843L80.21989705219858,52.31412773599868Q78.66341705219929,53.156003191998934 77.46355549750086, 54.75610701661679L76.11878524419626,56.549457272001746');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M65.30534524419636 55.04527500000131L64.17026172419628,53.4769985199996Q63.0351782041962,51.90872203999788 60.96057058819497, 50.47466328799874L58.88596297219374,49.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M65.30534524419636 55.04527500000131L64.17026172419628,53.4769985199996Q63.0351782041962,51.90872203999788 60.96057058819497, 50.47466328799874L58.88596297219374,49.04060453599959');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_hardware_raspi_RaspiOUTPUT = circuit_hardware_raspi_RaspiOUTPUT.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                hardware.raspi.set(port.getName(), port.getValue());
            }
        });
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.gpio.get(port.getName()));
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    }
    
});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_pulse_10hz = CircuitFigure.extend({

   NAME: "circuit_pulse_10hz",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:37.328125,height:49.5},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 94.22352448723316, y: 69.67272727272601 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 37.328125;
      this.originalHeight= 49.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L37.328125,0 L37.328125,49.5 L0,49.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M33.671875 49.5L3.671875 49.5L3.671875 19.5L33.671875 19.5Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'10Hz');
       shape.attr({"x":4,"y":11,"text-anchor":"start","text":"10Hz","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M6.119575000000623 41.67239999999947L13.426774999999907,41.67239999999947L13.426774999999907,28.884799999999814L24.387574999999742,28.884799999999814L24.387574999999742,41.21569999999974L30.324674999999843,41.21569999999974');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M6.119575000000623 41.67239999999947L13.426774999999907,41.67239999999947L13.426774999999907,28.884799999999814L24.387574999999742,28.884799999999814L24.387574999999742,41.21569999999974L30.324674999999843,41.21569999999974');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_pulse_10hz = circuit_pulse_10hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.currentTimer=0;
    },
    
    /**
     * called every '10 [ms]' from the application. do a little bit calculation
     * to change the state every 100ms (10Hz)
     * 
     **/
    calculate:function()
    {
       // 10 ticks every 10ms => 10Hz    
       this.currentTimer = (this.currentTimer+1)%10; 
       if(this.currentTimer===0){
           this.value = !this.value;
           this.getOutputPort(0).setValue(this.value);
       }
    },
    
    onStart:function()
    {
        this.currentTimer=0;
    },
    
    onStop:function()
    {
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_pulse_50hz = CircuitFigure.extend({

   NAME: "circuit_pulse_50hz",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:34.703125,height:48.60950000000048},attr), setter, getter);
     var port;
     // circle
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 94.12426834759118, y: 69.8754358715884 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("circle");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 34.703125;
      this.originalHeight= 48.60950000000048;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L34.703125,0 L34.703125,48.60950000000048 L0,48.60950000000048");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M1.6640625 18.60950000000048L31.6640625 18.60950000000048L31.6640625 48.60950000000048L1.6640625 48.60950000000048Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'50Hz');
       shape.attr({"x":4,"y":10.578125,"text-anchor":"start","text":"50Hz","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M3.393662499999664 41.239300000000185L10.575662499999908,41.239300000000185L10.575662499999908,30.979299999999967L22.066862499999843,30.979299999999967L22.066862499999843,40.828899999999976L28.6332625,40.828899999999976');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M3.393662499999664 41.239300000000185L10.575662499999908,41.239300000000185L10.575662499999908,30.979299999999967L22.066862499999843,30.979299999999967L22.066862499999843,40.828899999999976L28.6332625,40.828899999999976');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_pulse_50hz = circuit_pulse_50hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        this.currentTimer=0;
    },
    
    calculate:function()
    {
      // 2 ticks => 50Hz    
       this.currentTimer = (this.currentTimer+1)%2; 
       if(this.currentTimer===0){
           this.value = !this.value;
           this.getOutputPort(0).setValue(this.value);
       }
    },
    
    onStart:function()
    {
         this.currentTimer=0;
    },
    
    onStop:function()
    {
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_pulse_Delay = CircuitFigure.extend({

   NAME: "circuit_pulse_Delay",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:84,height:69},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100.59523809523809, y: 52.11524637681209 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.1904761904761905, y: 52.11524637681209 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 84;
      this.originalHeight= 69;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L84,0 L84,69 L0,69");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M84 69L0 69L0 0L84 0Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'delay');
       shape.attr({"x":40.265625,"y":35.734375,"text-anchor":"start","text":"delay","font-family":"\"Arial\"","font-size":13,"stroke":"none","fill":"#D4D4D4","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M3.502237499998955 18.776879999997618L7.155837499998597,18.776879999997618L10.809437499999149,18.776879999997618L10.80943749999824,5.006239999996978L40.60790533999989,5.1582835199978945L40.7756774999998,17.992499999997563L74.82772149999892,17.533747999996194');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M3.502237499998955 18.776879999997618L7.155837499998597,18.776879999997618L10.809437499999149,18.776879999997618L10.80943749999824,5.006239999996978L40.60790533999989,5.1582835199978945L40.7756774999998,17.992499999997563L74.82772149999892,17.533747999996194');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M2.7763174999963667 60.522479999995994L35.81032965999748,60.698116479995406L35.642557499997565,47.40719999999601L50.62567749999744,47.243359999995846L65.60879749999731,47.07951999999568L65.60879749999731,60.249280799996086L78.49271349999617,60.00024399999529');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M2.7763174999963667 60.522479999995994L35.81032965999748,60.698116479995406L35.642557499997565,47.40719999999601L50.62567749999744,47.243359999995846L65.60879749999731,47.07951999999568L65.60879749999731,60.249280799996086L78.49271349999617,60.00024399999529');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.586228750001283 30.218550000001414L9.91390875000252,46.930230000002666');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.586228750001283 30.218550000001414L9.91390875000252,46.930230000002666');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M32.75262875000226 38.50094999999965L28.574708750000354,45.873749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M32.75262875000226 38.50094999999965L28.574708750000354,45.873749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.171028750002733 38.167670000003454L32.763988749999044,38.495350000001054');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.171028750002733 38.167670000003454L32.763988749999044,38.495350000001054');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M26.418204481202338 30.914574268800607L32.574708750000354,37.373749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M26.418204481202338 30.914574268800607L32.574708750000354,37.373749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M10.916348593882503 20.631087969915825L10.654204593882241,28.347951969915812');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M10.916348593882503 20.631087969915825L10.654204593882241,28.347951969915812');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(168,168,168,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M35.63980459388222 45.23755196991533L35.80781268348346,27.62475196991545');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M35.63980459388222 45.23755196991533L35.80781268348346,27.62475196991545');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(201,201,201,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_pulse_Delay = circuit_pulse_Delay.extend({

    init: function(attr, setter, getter){
        var _this = this;
        
        this._super(attr, setter, getter);

        this.on("change:userData.delay",function(emitter, event){
            var value = event.value;
            _this.delayedValues = []; 
            _this.delayedValues.length = parseInt(parseInt(value)/10);
            _this.pointer=0;
            
        });
        this.attr({
            resizeable:false,
            "userData.delay":1500
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    /**
     * called every '10 [ms]' from the application. do a little bit calculation
     * to change the state every 100ms (10Hz)
     * 
     **/
    calculate:function()
    {
       this.getOutputPort(0).setValue(this.delayedValues[this.pointer]);
       this.delayedValues[this.pointer] = this.getInputPort(0).getValue();
       this.pointer = (this.pointer+1)%this.delayedValues.length; 
    },
    
    onStart:function()
    {
        this.currentTimer=0;
    },
    
    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [
        {
            name:"delay",
            label:"Delay [ms]",
            property:{
                type: "integer",
                min: 10,
                max: 100,
                increment:10
        }
        
        }];
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_switch_HighLow = CircuitFigure.extend({

   NAME: "circuit_switch_HighLow",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:42,height:44.5},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 98.80952380952381, y: 50.56179775280899 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 42;
      this.originalHeight= 44.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L42,0 L42,44.5 L0,44.5");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Label
       shape = this.canvas.paper.text(0,0,'1');
       shape.attr({"x":4.5,"y":11,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":11,"stroke":"#000000","fill":"#C21B7A","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'0');
       shape.attr({"x":4,"y":33,"text-anchor":"start","text":"0","font-family":"\"Arial\"","font-size":12,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":3,"ry":3.5,"cx":39,"cy":22.5,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // high_shadow
       shape = this.canvas.paper.path('M39.29830000000038 22.446912500003236L13.857399999998961,11.091512500001045');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","high_shadow");
       
       // high
       shape = this.canvas.paper.path('M39.29830000000038 22.446912500003236L13.857399999998961,11.091512500001045');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","high");
       
       // low_shadow
       shape = this.canvas.paper.path('M38.75319999999738 22.70831250000083L13.644500000000335,32.35131249999904');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","low_shadow");
       
       // low
       shape = this.canvas.paper.path('M38.75319999999738 22.70831250000083L13.644500000000335,32.35131249999904');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","low");
       

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
circuit_switch_HighLow = circuit_switch_HighLow.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);
        var _this = this;

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        this.value = false;
        this.on("click",function(){            
            _this.value = !_this.value;
            _this.layerShow("low" , !_this.value, 100);
            _this.layerShow("high",  _this.value, 100);
            _this.getOutputPort(0).setValue(_this.value);
        });

        this.on("added",function(){
            console.log(_this.value)
            _this.layerShow("low" , !_this.value);
            _this.layerShow("high",  _this.value);
            _this.getOutputPort(0).setValue(_this.value);
        });
    },
    
    calculate: function()
    {
        // do nothing per default;
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_switch_HighLowArray = CircuitFigure.extend({

   NAME: "circuit_switch_HighLowArray",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:20,height:160},attr), setter, getter);
     var port;
     // port01
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 6.24381249999999 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port01");
     port.setMaxFanOut(20);
     // port02
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 19.375 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port02");
     port.setMaxFanOut(20);
     // port03
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 31.25 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port03");
     port.setMaxFanOut(20);
     // port04
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 43.75 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port04");
     port.setMaxFanOut(20);
     // port05
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 56.122437500000046 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port05");
     port.setMaxFanOut(20);
     // port06
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 68.72787499999959 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port06");
     port.setMaxFanOut(20);
     // port07
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 81.1621875000003 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port07");
     port.setMaxFanOut(20);
     // port08
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 120, y: 93.93256250000036 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port08");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 20;
      this.originalHeight= 160;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L20,0 L20,160 L0,160");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // rect01
       shape = this.canvas.paper.path('M20 20L0 20L0 0L20 0Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect01");
       
       // rect02
       shape = this.canvas.paper.path('M20 40L0 40L0 20L20 20Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect02");
       
       // rect03
       shape = this.canvas.paper.path('M20 60L0 60L0 40L20 40Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect03");
       
       // rect04
       shape = this.canvas.paper.path('M20 80L0 80L0 60L20 60Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect04");
       
       // rect05
       shape = this.canvas.paper.path('M20 100L0 100L0 80L20 80Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect05");
       
       // rect06
       shape = this.canvas.paper.path('M20 120L0 120L0 100L20 100Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect06");
       
       // rect07
       shape = this.canvas.paper.path('M20 140L0 140L0 120L20 120Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect07");
       
       // rect08
       shape = this.canvas.paper.path('M20 160L0 160L0 140L20 140Z');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","rect08");
       

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
circuit_switch_HighLowArray = circuit_switch_HighLowArray.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.on("click",function(emitter, event){
            var h = emitter.getHeight();
            var modh = h/8;
            var index = (event.relY/modh)|0;
            var port = emitter.getOutputPort(index);
            port.setValue(!port.getValue());
            emitter.layerAttr("rect0"+(index+1), {fill:port.getValue()?"#C21B7A":null});
        });
    },
    
    calculate: function()
    {
    
        
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_switch_PushButton = CircuitFigure.extend({

   NAME: "circuit_switch_PushButton",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:45.35582499999964,height:27.483999999999924},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.81252904119853, y: 87.26531800320183 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 45.35582499999964;
      this.originalHeight= 27.483999999999924;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L45.35582499999964,0 L45.35582499999964,27.483999999999924 L0,27.483999999999924");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Label
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4.5,"ry":4,"cx":4.5,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"rgba(194,27,122,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4.5,"ry":4,"cx":27.5,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // low
       shape = this.canvas.paper.path('M26.125825000000077,8.735999999999876Q24.125825000000077,8.735999999999876 24.125825000000077, 6.735999999999876L24.125825000000077,2Q24.125825000000077,0 22.125825000000077, 0L11.125825000000077,0Q9.125825000000077,0 9.125825000000077, 2L9.125825000000077,6.735999999999876Q9.125825000000077,8.735999999999876 7.125825000000077, 8.735999999999876L2.2994250000001557,8.735999999999876Q0.2994250000001557,8.735999999999876 0.2994250000001557, 10.735999999999876L0.2994250000001557,11.735999999999876Q0.2994250000001557,13.735999999999876 2.2994250000001557, 13.735999999999876L30.299425000000156,13.735999999999876Q32.299425000000156,13.735999999999876 32.299425000000156, 11.735999999999876L32.299425000000156,10.735999999999876Q32.299425000000156,8.735999999999876 30.299425000000156, 8.735999999999876L26.125825000000077,8.735999999999876');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","low");
       
       // high
       shape = this.canvas.paper.path('M22.31382500000018,16.235999999999876Q20.50182500000028,16.235999999999876 21.26817190867477, 14.388647187036133L23.359478091325588,9.347352812963743Q24.125825000000077,7.5 22.125825000000077, 7.5L11.125825000000077,7.5Q9.125825000000077,7.5 9.62777239007231, 9.435987814424376L10.888877609927716,14.3000121855755Q11.39082499999995,16.235999999999876 9.39082499999995, 16.235999999999876L2.2994250000001557,16.235999999999876Q0.2994250000001557,16.235999999999876 0.2994250000001557, 18.235999999999876L0.2994250000001557,19.235999999999876Q0.2994250000001557,21.235999999999876 2.2994250000001557, 21.235999999999876L30.299425000000156,21.235999999999876Q32.299425000000156,21.235999999999876 32.299425000000156, 19.235999999999876L32.299425000000156,18.235999999999876Q32.299425000000156,16.235999999999876 30.299425000000156, 16.235999999999876L26.125825000000077,16.235999999999876Q24.125825000000077,16.235999999999876 22.31382500000018, 16.235999999999876L22.31382500000018,16.235999999999876');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","high");
       
       // Line_shadow
       shape = this.canvas.paper.path('M30.043224999999893 23.936999999999443L37.69952499999954,23.936999999999443L45.35582499999964,23.936999999999443');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M30.043224999999893 23.936999999999443L37.69952499999954,23.936999999999443L45.35582499999964,23.936999999999443');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_switch_PushButton = circuit_switch_PushButton.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        var _this = this;
        
        this.value = false;
        this.on("mousedown",function(){            
            _this.layerShow("low" , false, 100);
            _this.layerShow("high", true, 100);
            _this.getOutputPort(0).setValue(true);
        });
        this.on("mouseup",function(){            
            _this.value = !_this.value;
            _this.layerShow("low" , true, 100);
            _this.layerShow("high", false, 100);
            _this.getOutputPort(0).setValue(false);
        });

        this.on("added",function(){
            _this.layerShow("low" , true);
            _this.layerShow("high", false);
            _this.getOutputPort(0).setValue(false);
        });
    },
    
    calculate: function()
    {
        // do nothing per default;
    }

});


// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_timer_Delay = CircuitFigure.extend({

   NAME: "circuit_timer_Delay",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:84,height:69},attr), setter, getter);
     var port;
     // output_0
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 100.59523809523809, y: 52.11524637681209 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_0");
     port.setMaxFanOut(20);
     // input_0
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -5.357142857142857, y: 52.11524637681209 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_0");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 84;
      this.originalHeight= 69;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L84,0 L84,69 L0,69");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M84,67Q84,69 82, 69L2,69Q0,69 0, 67L0,2Q0,0 2, 0L82,0Q84,0 84, 2L84,67');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Delay');
       shape.attr({"x":39,"y":37.5078125,"text-anchor":"start","text":"Delay","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#D9D9D9","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Line_shadow
       shape = this.canvas.paper.path('M9.916348593882503 20.631087969915825L9.981884593883478,48.33643196991761');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M9.916348593882503 20.631087969915825L9.981884593883478,48.33643196991761');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(168,168,168,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M35.98444459388338 57.68939196991232L35.41100459388326,27.297071969915123');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M35.98444459388338 57.68939196991232L35.41100459388326,27.297071969915123');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(201,201,201,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // pulseline_top_shadow
       shape = this.canvas.paper.path('M4.002237499998955 19.776879999997618L9.309437499999149,19.776879999997618Q11.309437499999149,19.776879999997618 11.309437499999017, 17.776879999997618L11.30943749999837,8.006239999996978Q11.30943749999824,6.006239999996978 13.30931793710452, 6.0281086368907495L39.27579706289352,6.312051363103535Q41.2756774999998,6.333919999997306 41.2756774999998, 8.333919999997306L41.2756774999998,16.992499999997563Q41.2756774999998,18.992499999997563 43.275583463722825, 19.011894232776932L75.06557749999865,19.32017999999698');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_top_shadow");
       
       // pulseline_top
       shape = this.canvas.paper.path('M4.002237499998955 19.776879999997618L9.309437499999149,19.776879999997618Q11.309437499999149,19.776879999997618 11.309437499999017, 17.776879999997618L11.30943749999837,8.006239999996978Q11.30943749999824,6.006239999996978 13.30931793710452, 6.0281086368907495L39.27579706289352,6.312051363103535Q41.2756774999998,6.333919999997306 41.2756774999998, 8.333919999997306L41.2756774999998,16.992499999997563Q41.2756774999998,18.992499999997563 43.275583463722825, 19.011894232776932L75.06557749999865,19.32017999999698');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_top");
       
       // pulseline_bottom_shadow
       shape = this.canvas.paper.path('M3.1039974999966944 59.194799999995666L33.642557499997565,59.194799999995666Q35.642557499997565,59.194799999995666 35.642557499997565, 57.194799999995666L35.642557499997565,48.40719999999601Q35.642557499997565,46.40719999999601 37.64243793710385, 46.38533136310224L63.608917062891024,46.10138863688945Q65.60879749999731,46.07951999999568 65.60879749999731, 48.07951999999568L65.60879749999731,56.73809999999594Q65.60879749999731,58.73809999999594 67.60879749999731, 58.738099999995804L78.75485749999643,58.73809999999503');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_bottom_shadow");
       
       // pulseline_bottom
       shape = this.canvas.paper.path('M3.1039974999966944 59.194799999995666L33.642557499997565,59.194799999995666Q35.642557499997565,59.194799999995666 35.642557499997565, 57.194799999995666L35.642557499997565,48.40719999999601Q35.642557499997565,46.40719999999601 37.64243793710385, 46.38533136310224L63.608917062891024,46.10138863688945Q65.60879749999731,46.07951999999568 65.60879749999731, 48.07951999999568L65.60879749999731,56.73809999999594Q65.60879749999731,58.73809999999594 67.60879749999731, 58.738099999995804L78.75485749999643,58.73809999999503');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","pulseline_bottom");
       
       // Line_shadow
       shape = this.canvas.paper.path('M11.086228750001283 33.84501399999499L11.41390875000252,42.430230000002666');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M11.086228750001283 33.84501399999499L11.41390875000252,42.430230000002666');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M33.25262875000226 38.00094999999965L30.385428749999846,42.22802200000024');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M33.25262875000226 38.00094999999965L30.385428749999846,42.22802200000024');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M29.60130075000143 34.49864599999819L33.074708750000354,37.873749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M29.60130075000143 34.49864599999819L33.074708750000354,37.873749999997926');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line_shadow
       shape = this.canvas.paper.path('M11.171028750002733 38.167670000003454L33.12558875000104,38.495350000001054');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line_shadow");
       
       // Line
       shape = this.canvas.paper.path('M11.171028750002733 38.167670000003454L33.12558875000104,38.495350000001054');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(255,5,105,1)","stroke-width":2,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
circuit_timer_Delay = circuit_timer_Delay.extend({

    init: function(attr, setter, getter){
        var _this = this;
        
        this._super(attr, setter, getter);

        this.on("change:userData.delay",function(emitter, event){
            var value = event.value;
            _this.delayedValues = []; 
            _this.delayedValues.length = parseInt(parseInt(value)/10);
            _this.pointer=0;
            
        });
        this.attr({
            resizeable:false,
            "userData.delay":500
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },
    
    /**
     * called every '10 [ms]' from the application.
     * 
     **/
    calculate:function()
    {
       this.getOutputPort(0).setValue(this.delayedValues[this.pointer]);
       this.delayedValues[this.pointer] = this.getInputPort(0).getValue();
       this.pointer = (this.pointer+1)%this.delayedValues.length; 
    },
    
    onStart:function()
    {
        this.currentTimer=0;
    },
    
    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [
        {
            name:"delay",
            label:"Delay [ms]",
            property:{
                type: "integer",
                min: 10,
                max: 15000,
                increment:10
        }
        
        }];
    }

});


var common_Text= draw2d.shape.basic.Text.extend({

    NAME:"common_Text",
    VERSION: "1.0.0",

    init:function()
    {
        this._super({ bold:false, fontFamily:"Verdana", fontSize:10, bgColor:"#fafafa"});


        this.on("change:userData.text", (figure, event)=>{
            this.setText(event.value)
        })

        this.attr("userData.text","The quick brown fox $ jumps over the lazy dog")
    },

    getParameterSettings: function()
    {
        return [
            {
                name:"text",
                label:"Text",
                property:{
                    type: "longtext"
                }

            }];
    }

});




// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var messaging_HiveMQ = CircuitFigure.extend({

   NAME: "messaging_HiveMQ",
   VERSION: "1.0.41_71",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:97,height:37},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 97.81984329896957, y: 51.35135135135135 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 97;
      this.originalHeight= 37;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L97,0 L97,37 L0,37");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M97,32Q97,37 92, 37L5,37Q0,37 0, 32L0,5Q0,0 5, 0L92,0Q97,0 97, 5L97,32');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(145,145,145,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'HiveMQ');
       shape.attr({"x":18.609375,"y":18,"text-anchor":"start","text":"HiveMQ","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#FFF824","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
messaging_HiveMQ = messaging_HiveMQ.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({
            resizeable:false,
            "userData.elementId":this.id
        });
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         
         this.value = 0;
         var _this = this;
         this.callback = function( msg){
             if(msg.elementId !== _this.attr("userData.elementId")){
                return;
             }
             _this.value = msg.value;
             _this.getOutputPort(0).setValue(_this.value);
            if(_this.value === 1){
                _this.layerAttr("circle",{fill:"#C21B7A"});
            }
            else{
                _this.layerAttr("circle",{fill:"#f0f0f0"});
            }
         }
    },
    
    calculate: function()
    {
    },
    
    onStart: function()
    {
        socket.on("mqtt:message", this.callback);
        this.callback({value:this.value})
    },

    onStop:function()
    {
        socket.off("mqtt:message", this.callback);
    },

    getParameterSettings: function()
    {
        return [
        {
            name:"elementId",
            label:"Element Id",
            property:{
                type: "string"
        }
        
        }];
    }
    
});


