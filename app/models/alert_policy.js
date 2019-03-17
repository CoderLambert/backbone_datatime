define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/alert_policies"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            destination_id: {
                required: true,
                msg: locale.invalid_destination_selected
            },
            channel_number: {
                required: true,
                msg: locale.required_channel_number
            },
            policy_group: {
                required: true,
                msg: locale.invalid_policy_group_selected
            }
        }
    });

    return model;

});
