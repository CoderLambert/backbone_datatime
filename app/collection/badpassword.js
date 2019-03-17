define(["jquery", "underscore", "backbone", "models//badpassword"],

function($, _, Backbone, BadPasswordModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/badpassword-settings"
        },

        model: BadPasswordModel

    });

    return new collection();

});
