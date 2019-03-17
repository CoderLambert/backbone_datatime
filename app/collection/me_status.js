define(['underscore', 'backbone', 'models/server_configure/MEStates'],
    function(_, Backbone, MEPowModel) {

        var collection = Backbone.Collection.extend({
        	
        	url: "/api/s_me_statics",
        	model: MEPowModel,

            getMEStatic: function() {
                var results = this.filter(function(model) {
                    return (model.get('type') == 1);
                });

                return new Backbone.Collection(results);

            },   

        });

        return new collection();

    });
