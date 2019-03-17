define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/preserve_configuration"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/maintenance/preserve"
        }
    });

    return new model();

});
