define(["jquery", "underscore", "backbone", "models//alert_policy"],

function($, _, Backbone, AlertPolicyModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/pef/alert_policies"
        },

        model: AlertPolicyModel

    });

    return new collection();

});
