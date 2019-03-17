define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/backup_restore_config"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: function() {
            return "/api/maintenance/backup_config"
        }
    });

    return new model();

});
