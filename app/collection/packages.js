define(["jquery", "underscore", "backbone", "models//package"],

function($, _, Backbone, PackageModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/packages"
        },

        model: PackageModel

    });

    return new collection();

});
