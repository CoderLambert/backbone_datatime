define(["jquery", "underscore", "backbone", "models//alert_string_key"],

function($, _, Backbone, AlertStringKeyModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/pef/alert_string_keys"
        },

        model: AlertStringKeyModel

    });

    return new collection();

});
