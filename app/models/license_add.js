define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/license_add"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/settings/license"
        }
    });

    return new model();

});
