define(["jquery", "underscore", "backbone", "models//raid_controller_info"],

function($, _, Backbone, RaidControllerInfoModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/raid_management/raid_controller_info"
        },

        model: RaidControllerInfoModel

    });

    return new collection();

});
