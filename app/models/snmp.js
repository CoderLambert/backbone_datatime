define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/snmp"],

function($, _, Backbone, app, locale) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            
        },
        url: "/api/settings/snmp"
        
    });

    return new model;

});