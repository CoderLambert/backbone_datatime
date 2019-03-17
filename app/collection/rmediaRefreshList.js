define(["jquery", "underscore", "backbone", "models//rmediaRefreshList"],
    function($, _, Backbone, rmediaRefreshList) {
        var collection = Backbone.Collection.extend({
            url: function() {
                return "/api/settings/media/remote/rmediarefreshlist"
                // return "/api/settings/media/remote/images"
            },
            model: rmediaRefreshList
        });
        return new collection();
    });
