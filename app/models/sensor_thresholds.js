define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/sensor_thresholds"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            higher_non_recoverable_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_upper_nonrecoverable_value_refer_help_content
            },
            higher_critical_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value)) || (parseInt(value) > parseInt(computedState.higher_non_recoverable_threshold))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_upper_critical_value_or_upper_critical_value_cannot_be_bigger_than_upper_nonrecoverable_value
            },
            higher_non_critical_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value)) || (parseInt(value) > parseInt(computedState.higher_critical_threshold))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_upper_noncritical_value_or_upper_noncritical_value_cannot_be_bigger_than_upper_critical_value
            },
            lower_non_critical_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value)) || (parseInt(value) > parseInt(computedState.higher_non_critical_threshold))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_lower_noncritical_value_or_lower_noncritical_value_cannot_be_bigger_than_upper_noncritical_value
            },
            lower_critical_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value)) || (parseInt(value) > parseInt(computedState.lower_non_critical_threshold))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_lower_critical_value_or_lower_critical_value_cannot_be_bigger_than_lower_noncritical_value
            },
            lower_non_recoverable_threshold: {
                fn: function(value, attr, computedState) {
                    if (!(/^(\-|\+)?([1-9]\d*|0)(\.[0-9]+)?$/.test(value)) || (parseInt(value) > parseInt(computedState.lower_critical_threshold))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_lower_nonrecoverable_value_or_lower_nonrecoverable_value_cannot_be_bigger_than_lower_critical_value
            }
        },

        url: function() {
            return "/api/settings/sensor-threshold/" + location.hash.split('/').pop()
        }
    });

    return new model();

});
