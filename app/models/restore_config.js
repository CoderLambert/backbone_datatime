define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/backup_restore_config"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            config: {
                required: true,
                msg: locale.upload_config_file
            }
        },

        url: function() {
            return "/api/maintenance/restore_config"
        }
    });

    return new model();

});
