define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/add_port_rule"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            port_start: {
                fn: function(value, attr, computedState) {
                    if (!(value >= 1 && value <= 65535)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.enter_valid_port_number_refer_help_for_more_information
            },
            port_end: {
                fn: function(value, attr, computedState) {
                    if (value != "" && ((!(parseInt(value) >= 1 && parseInt(value) <= 65535)) || (parseInt(value) < parseInt(computedState.port_start)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.enter_valid_port_number_refer_help_for_more_information
            },
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
            return "/api/settings/firewall-port-rule"
        }
    });

    return new model();

});
