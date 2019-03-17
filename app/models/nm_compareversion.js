define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/nm_firmware_update"],

function($, _, Backbone, app, locale) {
    var model = Backbone.Model.extend({

		defaults: {
		},

        validation: {

        },

        url: function() {
            return "/api/maintenance/nm_compareversion"
        }
    });

    return new model();

});
