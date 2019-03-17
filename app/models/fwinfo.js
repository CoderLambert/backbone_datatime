define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/fwinfo"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/firmware-info"
        }
    });

    return new model();

});
