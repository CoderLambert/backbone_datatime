define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },
        
        image_name:function(){
        	return this.get('image_name');
        },

        url: "/api/sugon_inlet_temp",

        consumption: function(start, end, type, opts) {
        	var model = this;
        	var options = {
        		url: '/api/actions/s_inlet_temp',
        		type: 'POST',
                	contentType: 'application/json',
        		data: JSON.stringify({"start_time":start, "end_time": end,"image_type":type})
        	};

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },
        
    });

    return new model;

});
