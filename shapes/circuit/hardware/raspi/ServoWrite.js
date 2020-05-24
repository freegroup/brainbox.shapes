// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_ServoWrite = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_ServoWrite",
   VERSION: "2.0.218_845",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:90,height:85},attr), setter, getter);
     var port;
     // gpio_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 1.168733604659388, y: 69.56880579732196 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_7");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 90;
      this.originalHeight= 85;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L90,0 L90,85 L0,85");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M89.9937281586122,17.067437371045315Q89.99354350956855,15.067437379569128 89.99354350956855, 13.067437379569128L89.99354350956855,2Q89.99354350956855,0 87.9935519880414, 0.005823557293633486L1.99999152152715,0.25621883190854555Q0,0.26204238920217904 0.007970959933697841, 2.262026505088528L0.32975315477993955,83.00001588411365Q0.3377241147136374,85 2.3377241147136374, 85L88,85Q90,85 89.99981535095635, 83.00000000852381L89.9937281586122,17.067437371045315');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'7');
       shape.attr({"x":10.051860244193449,"y":59.13348492772366,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Servo Write');
       shape.attr({"x":16.437499999996362,"y":16.788525392002157,"text-anchor":"start","text":"Servo Write","font-family":"\"Arial\"","font-size":12,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":15.5,"ry":16.5,"cx":53.87646024419337,"cy":56.36027539200131,"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M59.460480244194514 47.06642539200311L48.319360244194286 47.06642539200311L48.319360244194286 37.236025392002375L59.460480244194514 37.236025392002375Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(0,0,0,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M46.63121510743804,70.64882213922192Q46.14756155235318,68.28260895631956 49.80733600532221, 67.49870399916063L49.80733600532221,67.49870399916063Q53.467110458291245,66.71479904200169 56.69738818165979, 67.39118296548304L56.69738818165979,67.39118296548304Q59.927665905028334,68.0675668889644 60.123513074610855, 70.54130110554433L60.123513074610855,70.54130110554433Q60.319360244193376,73.01503532212428 56.60461187939336, 74.2836030677845L56.60461187939336,74.2836030677845Q52.889863514593344,75.55217081344472 50.00236608855812, 74.2836030677845L50.00236608855812,74.2836030677845Q47.114868662522895,73.01503532212428 46.63121510743804, 70.64882213922192L46.63121510743804,70.64882213922192');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M71.16058518903428,39.646174491768996Q69.44013458284553,43.25727539200216 65.44186434134615, 43.139652792386L61.39055489113555,43.02046986562Q57.39228464963617,42.902847266003846 57.14603219242943, 38.910434495845976L57.09572543740089,38.094827076210976Q56.84947298019415,34.102414306053106 59.265659768091155, 32.03861322554076L59.265659768091155,32.03861322554076Q61.68184655598816,29.97481214502841 64.63490425588452, 29.387406072514295L64.63490425588452,29.387406072514295Q67.58796195578088,28.800000000000182 71.55699327786166, 29.296779995915568L71.86717573811532,29.33560368583723Q75.8362070601961,29.832383681752617 74.11575645400735, 33.44348458198578L71.16058518903428,39.646174491768996');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5.5,"ry":5.5,"cx":53.819360244194286,"cy":62.061675392002144,"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":58.73886024419426,"cy":52.78182539200225,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":4,"ry":4.5,"cx":50.23886024419426,"cy":52.28182539200225,"stroke":"none","stroke-width":0,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Rectangle
       shape = this.canvas.paper.path('M56.546968662522886,36.06132944605588Q54.921968662522886,39.811329446056334 50.92196866252198, 41.534302419029245L50.92196866252198,41.534302419029245Q46.92196866252107,43.25727539200216 44.57821866252243, 42.345113229839626L44.57821866252243,42.345113229839626Q42.234468662523796,41.432951067677095 40.64071866252334, 39.50727539200125L40.64071866252334,39.50727539200125Q39.046968662522886,37.5815997163254 37.609468662522886, 33.8315997163254L37.609468662522886,33.8315997163254Q36.171968662522886,30.0815997163254 42.046968662522886, 29.16943755416378L42.046968662522886,29.16943755416378Q47.921968662522886,28.257275392002157 53.046968662522886, 30.28430241902879L53.046968662522886,30.28430241902879Q58.171968662522886,32.311329446055424 56.546968662522886, 36.06132944605588L56.546968662522886,36.06132944605588');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":2,"fill":"rgba(107,142,35,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M38.735226620607136,60.96212276361848Q39.29848457869139,56.561675392002144 43.44786188256239, 58.58074075916784L43.44786188256239,58.58074075916784Q47.5972391864334,60.59980612633353 47.88460392447814, 64.47483300839485L47.88460392447814,64.47483300839485Q48.171968662522886,68.34985989045617 45.41812877443772, 68.95576764122916L45.41812877443772,68.95576764122916Q42.66428888635255,69.56167539200214 40.41812877443772, 67.46212276361848L40.41812877443772,67.46212276361848Q38.171968662522886,65.36257013523482 38.735226620607136, 60.96212276361848L38.735226620607136,60.96212276361848');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M60.616001196200614,63.474001506019704Q61.436957192045156,60.31909465024273 65.3584817812598, 59.245568195265605L65.3584817812598,59.245568195265605Q69.28000637047444,58.17204174028848 69.20721137440933, 59.07420024147086L69.20721137440933,59.07420024147086Q69.13441637834421,59.97635874265325 68.47688831126925, 64.02318431655476L68.47688831126925,64.02318431655476Q67.81936024419429,68.07000989045628 63.69113082138756, 68.84771633306946L63.69113082138756,68.84771633306946Q59.562901398580834,69.62542277568264 59.67897329946845, 68.12716556873966L59.67897329946845,68.12716556873966Q59.79504520035607,66.62890836179668 60.616001196200614, 63.474001506019704L60.616001196200614,63.474001506019704');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M62.882618202278536,50.18227276361904Q63.445876160362786,45.78182539200225 67.59525346423379, 47.80089075916794L67.59525346423379,47.80089075916794Q71.7446307681048,49.819956126333636 72.03199550614954, 53.694983008394956L72.03199550614954,53.694983008394956Q72.31936024419429,57.57000989045628 69.56552035610912, 58.17591764122926L69.56552035610912,58.17591764122926Q66.81168046802395,58.78182539200225 64.56552035610912, 56.68227276361904L64.56552035610912,56.68227276361904Q62.319360244194286,54.58272013523583 62.882618202278536, 50.18227276361904L62.882618202278536,50.18227276361904');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M56.80211820227851,42.906738956966365Q57.36537616036276,39.86027539200131 61.51475346423376, 41.258089876962L61.51475346423376,41.258089876962Q65.66413076810477,42.655904361922694 65.95149550614951, 45.33861528027319L65.95149550614951,45.33861528027319Q66.23886024419426,48.02132619862368 63.48502035610909, 48.4408007953125L63.48502035610909,48.4408007953125Q60.73118046802392,48.86027539200131 58.48502035610909, 47.406738956966365L58.48502035610909,47.406738956966365Q56.23886024419426,45.953202521931416 56.80211820227851, 42.906738956966365L56.80211820227851,42.906738956966365');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M39.78465340076764,47.12068846153943Q43.39733813901239,44.78182539200225 45.01268473824166, 46.62909206732729L45.01268473824166,46.62909206732729Q46.62803133747093,48.47635874265234 45.5839562137553, 52.823832027273966L45.5839562137553,52.823832027273966Q44.53988109003967,57.171305311895594 41.35654447235356, 57.94901175450923L41.35654447235356,57.94901175450923Q38.17320785466745,58.726718197122864 37.17258825859517, 54.09313486409974L37.17258825859517,54.09313486409974Q36.171968662522886,49.45955153107661 39.78465340076764, 47.12068846153943L39.78465340076764,47.12068846153943');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Rectangle
       shape = this.canvas.paper.path('M49.01310269910391,39.51485533870937Q52.52072814793519,38.86027539200131 54.51310269910391, 39.92002777655671L54.51310269910391,39.92002777655671Q56.505477250272634,40.9797801611121 54.994605691311335, 43.47386790800465L54.994605691311335,43.47386790800465Q53.48373413235004,45.967955654897196 48.95378487273865, 46.628863888249725L48.95378487273865,46.628863888249725Q44.42383561312727,47.289772121602255 44.96465643169995, 43.72960370350984L44.96465643169995,43.72960370350984Q45.505477250272634,40.16943528541742 49.01310269910391, 39.51485533870937L49.01310269910391,39.51485533870937');
       shape.attr({"stroke":"rgba(0,0,0,1)","stroke-width":1,"fill":"rgba(179,0,59,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Line
       shape = this.canvas.paper.path('M66.57025205219634 35.43365267200079L65.01377205219706,36.27552812800104Q63.45729205219777,37.117403584001295 62.25743049749935, 38.71750740861915L60.91266024419474,40.51085766400411');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(0,0,0,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       
       // Line
       shape = this.canvas.paper.path('M50.09922024419484 39.00667539200367L48.96413672419476,37.43839891200196Q47.82905320419468,35.870122432000244 45.75444558819345, 34.4360636800011L43.67983797219222,33.00200492800195');
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
circuit_hardware_raspi_ServoWrite = circuit_hardware_raspi_ServoWrite.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
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
                hardware.raspi.pwm(port.getName(), port.getValue());
            }
        });
    },
    
    getRequiredHardware: function(){
      return {
        raspi: true,
        arduino: false
      }
    }
    
});