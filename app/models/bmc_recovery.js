define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/bmc_recovery"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            bootRetryCount: {
                min: 1,
                max: 5,
                msg: locale.boot_retry_count_must_be_a_number_between_1_and_5
            },
            recoveryRetryCount: {
                min: 1,
                max: 5,
                msg: locale.recovery_retry_count_must_be_a_number_between_1_and_5
            },
            serverAddress: {
                pattern: /^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/,
                msg: locale.invalid_server_address_refer_help_for_more_information
            }
        },

        url: function() {
            return "/api/maintenance/bmc_recovery"
        }
    });

    return new model();

});
