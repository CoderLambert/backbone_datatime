define(["jquery", "underscore", "backbone", "models//ip_rule"],

function($, _, Backbone, IpRuleModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/firewall-ip-rules"
        },

        model: IpRuleModel

    });

    return new collection();

});
