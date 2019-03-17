define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/firmware_update"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        },

        url: "/api/maintenance/ValidSignImage"
    });

    return new model();

});