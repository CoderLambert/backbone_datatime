define(["jquery", "underscore", "backbone", "models//snmp"],

function($, _, Backbone, SnmpModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/snmp"
        },

        model: SnmpModel

    });

    return new collection();

});