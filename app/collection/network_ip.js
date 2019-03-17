define(["jquery", "underscore", "backbone", "models//network_ip"],

function($, _, Backbone, NetworkIpModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/network"
        },

        model: NetworkIpModel

    });

    return new collection();

});
