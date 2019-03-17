define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/generate_ssl"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            common_name: {
                required: true,
                pattern: /(^[a-zA-Z0-9%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$)/,
                maxLength: 64,
                msg: locale.invalid_common_name
            },
            organization: {
                required: true,
                pattern: /(^[a-zA-Z0-9%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$)/,
                maxLength: 64,
                msg: locale.invalid_organization
            },
            organization_unit: {
                required: true,
                pattern: /(^[a-zA-Z0-9%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$)/,
                maxLength: 64,
                msg: locale.invalid_organization_unit
            },
            city: {
                required: true,
                pattern: /(^[a-zA-Z0-9%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$)/,
                maxLength: 128,
                msg: locale.invalid_city_or_locality
            },
            state: {
                required: true,
                pattern: /(^[a-zA-Z0-9%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$)/,
                maxLength: 128,
                msg: locale.invalid_state_or_province
            },
            country: {
                required: true,
                pattern: /^[a-zA-Z0-9]*$/,
                maxLength: 2,
                msg: locale.invalid_country
            },
            email_id: {
                required: true,
                pattern: 'email',
                msg: locale.invalid_email_address
            },
            valid_days: {
                required: true,
                range: [1, 3650],
                pattern: 'number',
                msg: locale.invalid_time_until_expiry
            }
        },

        url: function() {
            return "/api/operations/ssl/certificate/generate"
        }
    });

    return new model();

});
