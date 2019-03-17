define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

       url: "/api/s_power-hot-status",

        powhot: function(command, opts) {
        	var model = this;
        	var options = {
        		url: '/api/actions/s_power-hot-standby',
        		type: 'POST',
                	contentType: 'application/json',
        		data: JSON.stringify({"pow_hotstandby_command": command})
        	};

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },

    });

    return new model;

});
