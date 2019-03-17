define(["jquery", "underscore", "backbone", "models//user_active_directory"],

function($, _, Backbone, UserActiveDirectoryModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/active-directory-users"
        },

        model: UserActiveDirectoryModel

    });

    return new collection();

});
