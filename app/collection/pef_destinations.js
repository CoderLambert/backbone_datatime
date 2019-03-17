define(["jquery", "underscore", "backbone", "models//pef_destination"],

function($, _, Backbone, PefDestinationModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/pef/destinations"
        },

        model: PefDestinationModel

    });

    return new collection();

});
