define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/general_firewall"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            start_time: {
                required: function(value, attr, computedState) {
                    if (computedState.timeout == 1 || app.features.indexOf('SYSTEM_FIREWALL_TIMEOUT') == -1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.start_time_required_when_timeout_is_set
            },
            end_time: {
                fn: function(value, attr, computedState) {
                    if ((computedState.timeout == 1 || app.features.indexOf('SYSTEM_FIREWALL_TIMEOUT') == -1) && (!(value > computedState.start_time))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.end_time_required_when_timeout_is_set
            }
        },

        url: function() {
            return "/api/settings/firewall"
        }
    });

    return new model();

});
