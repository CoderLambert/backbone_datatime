define(["jquery", "underscore", "backbone", "models//channel"],

function($, _, Backbone, ChannelModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/channels"
        },

        model: ChannelModel

    });

    return new collection();

});
