define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/view_ssl"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/settings/ssl/certificate"
        }
    });

    return new model();

});
