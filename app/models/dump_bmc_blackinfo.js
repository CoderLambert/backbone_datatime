define(["jquery", "underscore", "backbone", "app"],

function($, _, Backbone, app) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/maintenance/dump_bmc_blackinfo"
        }
    });

    return new model();

});
