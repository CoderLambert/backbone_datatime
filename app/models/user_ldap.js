define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/rolegroup_ldap"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            role_group_name: {
                pattern: /^([a-zA-Z0-9_\-])+$/,
                maxLength: 64,
                msg: locale.invalid_role_group_name_refer_help_for_more_information
            },
            role_group_domain: {
                pattern: /^(((cn=)|(uid=)|(ou=)|(dc=)|(o=))[a-z]{1}[\w\-\.]{1,63},?)+$/i,
                minLength: 4,
                maxLength: 64,
                msg: locale.invalid_role_group_domain_refer_help_for_more_information
            }
        },

        isNew: function () {
            return true;
        }
    });

    return model;

});
