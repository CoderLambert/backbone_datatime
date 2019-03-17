define(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {

        var model = Backbone.Model.extend({

            url: "/api/settings/pwdrepeatckeck-settings"

        });

        return new model();

    });