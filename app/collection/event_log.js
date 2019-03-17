define(["jquery", "underscore", "backbone", "models//event_log"],

function($, _, Backbone, EventLogModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/raid_management/event_log"
        },

        model: EventLogModel

    });

    return new collection();

});
