define(["jquery", "underscore", "backbone", "models//port_rule"],

function($, _, Backbone, PortRuleModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/firewall-port-rules"
        },

        model: PortRuleModel

    });

    return new collection();

});
