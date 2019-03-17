define(["jquery", "underscore", "backbone", "models//general_firewall_rule"],

function($, _, Backbone, GeneralFirewallRuleModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/firewall"
        },

        model: GeneralFirewallRuleModel

    });

    return new collection();

});
