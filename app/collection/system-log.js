define([
        "jquery", "underscore", "backbone",
        "models/system-log"
    ],

    function($, _, Backbone, SystemLogModel) {

        var collection = Backbone.Collection.extend({

            url: "/api/logs/system",

            model: SystemLogModel,

            comparator: function(model) {
                return ((new Date().getTime() / 1000) - model.get('timestamp'));
            },

            byDateRange: function(start, end) {

                if (!end) {
                    end = start;
                }

                //make end date till midnight
                end = end + 86399; //one day seconds count

                var filtered = this.filter(function(model) {
                    var timestamp = parseInt(model.get("timestamp"), 10);
                    return (timestamp >= start && timestamp <= end);
                });

                return new collection(filtered);

            }

        });

        return new collection();

    });