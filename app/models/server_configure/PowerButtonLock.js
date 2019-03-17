define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

       url: "/api/s_power-button-status",

        powbtn: function(command, opts) {
        	var model = this;
        	var options = {
        		url: '/api/actions/s_power-button-lock',
        		type: 'POST',
                	contentType: 'application/json',
        		data: JSON.stringify({"pow_button_command": command})
        	};

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },

    });

    return new model;

});
