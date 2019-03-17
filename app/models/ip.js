define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/ip"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            ipv4_enable: {
                fn: function(value, attr, computedState) {
                    if (computedState.lan_enable == 1 && computedState.ipv6_enable == 0 && value == 0) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.please_choose_ipv4_enable_or_ipv6_enable
            },
            ipv6_enable: {
                fn: function(value, attr, computedState) {
                    if (computedState.lan_enable == 1 && computedState.ipv4_enable == 0 && value == 0) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.please_choose_ipv4_enable_or_ipv6_enable
            },
            ipv4_address: {
                fn: function(value, attr, computedState) {
                    if (computedState.ipv4_enable == 1 && computedState.ipv4_dhcp_enable == 0 && (!(/^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/.test(value)) || (/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(value)) || (value!= undefined && value!= null && (String(value).charAt(0) == "0" || ("#255.255.255.0#0.24.56.4#255.255.255.255#91.91.91.91#".indexOf("#"+value+"#") > -1))))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_ipv4_address_refer_help_for_more_information
            },
            ipv4_subnet: {
                fn: function(value, attr, computedState) {
                    if (computedState.ipv4_enable == 1 && computedState.ipv4_dhcp_enable == 0 && (!(/^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/.test(value)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_ipv4_subnet_refer_help_for_more_information
            },
            ipv4_gateway: {
                fn: function(value, attr, computedState) {
                    if (computedState.ipv4_enable == 1 && computedState.ipv4_dhcp_enable == 0 && (!(/^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/.test(value)))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_ipv4_gateway_refer_help_for_more_information
            },
            ipv6_address: {
                fn: function(value, attr, computedState) {
                    if (computedState.ipv6_enable == 1 && computedState.ipv6_dhcp_enable == 0 && (!(/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(value)) || (/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(value)) || (value!= undefined && value!= null && String(value).charAt(0) == "0"))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_ipv6_address_refer_help_for_more_information
            },
            ipv6_prefix: {
                fn: function(value, attr, computedState) {
                    if (computedState.ipv6_enable == 1 && computedState.ipv6_dhcp_enable == 0 && (!(/^\d+$/.test(value) && value >= 0 && value <= 128))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_ipv6_prefix_refer_help_for_more_information
            },
            vlan_id: {
                fn: function(value, attr, computedState) {
                    if (computedState.vlan_enable == 1 && (!(/^\d+$/.test(value) && ((value >= 1 && value <= 4094) || value==0) ))) {
                    //if (!(/^\d+$/.test(value) && (value >= 1 && value <= 4094) )) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vlan_id_refer_help_for_more_information
            },
            vlan_priority: {
                fn: function(value, attr, computedState) {
                    if (computedState.vlan_enable == 1 && (!(/^\d+$/.test(value) && value >= 0 && value <= 7))) {
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_vlan_priority_refer_help_for_more_information
            }
        }
    });

    return model;

});
