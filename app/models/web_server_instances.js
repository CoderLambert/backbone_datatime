define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/web_server_instances"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            instances: {
                required: true,
                range: [1, 4],
                msg: locale.invalid_instances_refer_help_for_more_information
            }
        },

        url: function() {
            return "/api/settings/web_server_instances"
        }
    });

    return new model();

});
