define(["jquery", "underscore", "backbone", "models//user_ldap"],

function($, _, Backbone, UserLdapModel) {

    var collection = Backbone.Collection.extend({

        url: function() {
            return "/api/settings/ldap-users"
        },

        model: UserLdapModel

    });

    return new collection();

});
