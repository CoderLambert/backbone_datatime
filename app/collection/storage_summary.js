define(["jquery", "underscore", "backbone", "models//storage_summary"],

function($, _, Backbone, StorageSummaryModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/raid_management/storage_summary"
        },

        model: StorageSummaryModel

    });

    return new collection();

});
