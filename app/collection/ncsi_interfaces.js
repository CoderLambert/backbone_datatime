define(["jquery", "underscore", "backbone", "models//ncsi_interface"],

function($, _, Backbone, NcsiInterfaceModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/ncsi-interfaces"
        },

        model: NcsiInterfaceModel

    });

    return new collection();

});
