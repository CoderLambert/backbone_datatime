define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/general_log"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/settings/log-policy"
        }
    });

    return new model();

});
