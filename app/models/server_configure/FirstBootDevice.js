define(["jquery", "underscore", "backbone", "i18n!strings/nls/common"],

function($, _, Backbone, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: "/api/first-boot-status",

        boot: function(command, opts) {
        	var model = this;
        	var options = {
        		url: '/api/actions/first-boot',
        		type: 'POST',
                	contentType: 'application/json',
        		data: JSON.stringify({"first_boot_command": command})
        	};

        	_.extend(options, opts);

        	return (this.sync || Backbone.sync).call(this, null, this, options);
        },

    });

    return new model;

});
