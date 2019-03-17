define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/remote_control"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/settings/mouse"
        }
    });

    return new model();

});