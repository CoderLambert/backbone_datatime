define(["jquery", "underscore", "backbone", "models//bbu_info"],

function($, _, Backbone, BbuInfoModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/raid_management/bbu_info"
        },

        model: BbuInfoModel

    });

    return new collection();

});
