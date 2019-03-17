define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/general_radius","libs/blowfish"],

function($, _, Backbone, app, locale, Blowfish) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            server_address: {
                fn: function(value, attr, computedState) {
                    if (computedState.enable == 1 && ((!(/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/.test(value)) || (/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(value)) || (value != undefined && value != null && (String(value).charAt(0) == '0' || ('#255.255.255.0#0.24.56.4#255.255.255.255#91.91.91.91#'.indexOf('#' + value + '#') > -1)))) && !(/^(?=.{1,254}$)((?=[a-z0-9-]{1,63}\.)(xn--+)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i.test(value)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale._invalid_server_address
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
                msg: locale.invalid_port_number
            },
            secret: {
                fn: function(value, attr, computedState) {
                    var blowfish = new Blowfish();
                    if (computedState.enable == 1 && !(/^[\S]{4,31}$/.test(blowfish.decrypt(value)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_secret_phrase
            }
        },

        url: function() {
            return "/api/settings/radius/general"
        }
    });

    return new model();

});
