define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/ip_rules"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            start_time: {
                required: function(value, attr, computedState) {
                    if (computedState.timeout == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.start_time_required_when_timeout_is_set
            },
            end_time: {
                required: function(value, attr, computedState) {
                    if (computedState.timeout == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.end_time_required_when_timeout_is_set
            }
        }
    });

    return model;

});
