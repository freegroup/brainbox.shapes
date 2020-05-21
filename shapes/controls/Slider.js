var controls_Slider = draw2d.shape.widget.Slider.extend({

    NAME: "controls_Slider",
    VERSION: "1.0.0",

    init: function () {
        this._super({bold: false, fontFamily: "Verdana", fontSize: 10, bgColor: "#fafafa"});


        this.on("change:userData.value", (figure, event) => {
            this.setValue(parseInt(event.value))
        })

        this.attr("userData.value", 4)
    },

    calculate: function( context )
    {
    },

    onStart: function(context)
    {
    },

    onStop:function(context)
    {
    },

    getParameterSettings: function () {
        return [
            {
                name: "value",
                label: "Value",
                property: {
                    type: "string"
                }
            }];
    }

});

