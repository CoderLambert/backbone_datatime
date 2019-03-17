define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/ncsi"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/settings/ncsi/mode"
        }
    });

    return new model();

});
