define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/link"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {

        }
    });

    return model;

});
