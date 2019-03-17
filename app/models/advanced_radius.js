define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/advanced_radius"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            administrator: {
                fn: function(value, attr, computedState) {
                    if (/[#]/.test(value) || value == "" || value.length > 127) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vendor_specific_stringrefer_help_for_more_information
            },
            operator: {
                fn: function(value, attr, computedState) {
                    if (/[#]/.test(value) || value == "" || value.length > 127) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vendor_specific_stringrefer_help_for_more_information
            },
            user: {
                fn: function(value, attr, computedState) {
                    if (/[#]/.test(value) || value == "" || value.length > 127) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vendor_specific_stringrefer_help_for_more_information
            },
            oem: {
                fn: function(value, attr, computedState) {
                    if (/[#]/.test(value) || value == "" || value.length > 127) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vendor_specific_stringrefer_help_for_more_information
            },
            none: {
                fn: function(value, attr, computedState) {
                    if (/[#]/.test(value) || value == "" || value.length > 127) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vendor_specific_stringrefer_help_for_more_information
            }
        },

        url: function() {
            return "/api/settings/radius/advanced"
        }
    });

    return new model();

});
