define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/general_ldap",'libs/blowfish'],

function($, _, Backbone, app, locale, Blowfish) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            server_address: {
                required: function(value, attr, computedState) {
                    if (computedState.enable == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                pattern: /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,
                msg: locale.invalid_server_address_refer_help_for_more_information
            },
            port: {
                required: function(value, attr, computedState) {
                    if (computedState.enable == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                range: [1, 65535],
                msg: locale.invalid_port_refer_help_for_more_information
            },
            bind_dn: {
                fn: function(value, attr, computedState) {
                    if ((computedState.enable == 1 && (!(/^(((cn=)|(uid=))[a-z]{1}[\w\-\.]{2,63},?)+$/i.test(value.split(",")[0])) || !(/^(((cn=)|(uid=)|(ou=)|(dc=)|(o=))[a-z]{1}[\w\-\.]{1,63},?)+$/i.test(value)) || value.length > 64 || value.length < 4))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_bind_dn_refer_help_for_more_information
            },
            password: {
                required: function(value, attr, computedState) {
                    if (computedState.enable == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                fn:  function(value, attr, computedState) {
                    var blowfish = new Blowfish();
                    var decrypt_value =  blowfish.decrypt(value);
                    var reg = /^[^ ]+$/;
                    if (!reg.test(decrypt_value)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                minLength: 1,
                maxLength: 48,
                msg: locale.invalid_password_refer_help_for_more_information
            },
            search_base: {
                required: function(value, attr, computedState) {
                    if (computedState.enable == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                pattern: /^(((cn=)|(uid=)|(ou=)|(dc=)|(o=))[a-z]{1}[\w\-\.]{1,63},?)+$/i,
                minLength: 4,
                maxLength: 64,
                msg: locale.invalid_search_base_refer_help_for_more_information
            }
        },

        url: function() {
            return "/api/settings/ldap-settings"
        }
    });

    return new model();

});
