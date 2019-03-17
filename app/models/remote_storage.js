define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/remote_storage"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            max_dumps: {
                fn: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && (!(/^[0-9]*$/.test(value) && value >= 1 && value <= 100))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_maximum_dumps_refer_help_for_more_information
            },
            max_duration: {
                fn: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && (!(/^[0-9]*$/.test(value) && value >= 1 && value <= 3600))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_maximum_duration_refer_help_for_more_information
            },
            max_size: {
                fn: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && (!(/^[0-9]*$/.test(value) && value >= 1 && value <= 500))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_maximum_size_refer_help_for_more_information
            },
            ip_address: {
                fn: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && ((!(/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/.test(value)) || (/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(value)) || (value != undefined && value != null && (String(value).charAt(0) == '0' || ('#255.255.255.0#0.24.56.4#255.255.255.255#91.91.91.91#'.indexOf('#' + value + '#') > -1)))) && !(/^(?=.{1,254}$)((?=[a-z0-9-]{1,63}\.)(xn--+)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i.test(value)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_server_address_refer_help_for_more_information
            },
            remote_path: {
                required: function(value, attr, computedState) {
                    if (computedState.remote_support == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                pattern: /(^[a-zA-Z0-9~@#$^()_+=[\]{}\/\, -]*$)/,
                msg: locale.invalid_path_refer_help_for_more_information
            },
            user_name: {
                required: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && computedState.share_type == 'CIFS') {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.username_is_required_for_cifs_location
            },
            password: {
                required: function(value, attr, computedState) {
                    if (computedState.remote_support == 1 && computedState.share_type == 'CIFS') {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.password_is_required_for_cifs_location
            }
        },

        url: function() {
            return "/api/settings/video/remote-storage"
        }
    });

    return new model();

});
