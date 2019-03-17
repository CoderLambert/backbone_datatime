define(["jquery", "underscore", "backbone", "models//link"],

function($, _, Backbone, LinkModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/network-link"
        },

        model: LinkModel

    });

    return new collection();

});
