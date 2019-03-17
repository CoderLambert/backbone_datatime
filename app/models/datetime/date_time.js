define(["jquery", "underscore", "backbone", "backbone_validation"],

    function($, _, Backbone, Validation) {
        "use strict"

        Backbone.Model.prototype = _.extend(Backbone.Model.prototype, Validation.mixin);


        var model = Backbone.Model.extend({

            defaults: {
                "id": 1,
                "primary_ntp": "pool.ntp.org",
                "secondary_ntp": "time.nist.gov",
                "auto_date": 0,
                "localized_timestamp": 1551836156,
                "utc_minutes": 480,
                "timestamp": 1487882379,


                "timezone": "Asia\/Shanghai"

            },


        });

        return new model();

    });