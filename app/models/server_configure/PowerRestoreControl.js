define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: "/api/s_power-restore-status",
        //ks_lz20190121_off_peak  ++>>
        powres: function(command, powerOnTime,powerOnTimeMode, opts) {
        	var model = this;
        	var options = {
        		url: '/api/actions/s_pow_res_ctl',
        		type: 'POST',
                	contentType: 'application/json',
        		data: JSON.stringify({
        			"pow_res_command": command,
        			"power_on_time": powerOnTime,
        			"power_on_time_mode": powerOnTimeMode
        		})
        	};
            //ks_lz20190121_off_peak  ++<<

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },

    });

    return new model;

});
