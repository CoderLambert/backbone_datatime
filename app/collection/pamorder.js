define(["jquery", "underscore", "backbone", "models//pam"],

function($, _, Backbone, PamModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/pam-order"
        },

        model: PamModel

    });

    return new collection();

});
