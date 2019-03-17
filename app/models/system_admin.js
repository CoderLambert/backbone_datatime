define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/system_admin"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            password: {
                fn: function(value, attr, computedState) {
                    if (computedState.enable_change_password == 1 && !(/^[\S]{8,64}$/.test(value))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.password_field_must_be_8_characters_atleast_and_white_space_is_not_allowed
            },
            cpassword: {
                fn: function(value, attr, computedState) {
                    if (computedState.enable_change_password == 1 && !(computedState.password == value)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.password_and_confirm_password_do_not_match
            }
        },

        url: function() {
            return "/api/maintenance/system_admin"
        }
    });

    return new model();

});
