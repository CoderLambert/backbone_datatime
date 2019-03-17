define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: "/api/s_cool-policy",

        cool: function(command, perform_duty, opts) {
        	var model = this;
        	var data = {"cool_policy_command": command};
        	data = $.extend(data, perform_duty);
        	var options = {
        		url: '/api/actions/cool-policy',
        		type: 'POST',
                contentType: 'application/json',
        		data: JSON.stringify(data)
        	};

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },
        
    });

    return new model;

});
