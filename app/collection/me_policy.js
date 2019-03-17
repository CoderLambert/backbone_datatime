define(['underscore', 'backbone', 'models/server_configure/MEPolicy'],
    function(_, Backbone, MEPowModel) {

        var collection = Backbone.Collection.extend({
            
            url: "/api/s_me_policy",
        	model: MEPowModel,


            getMEPolicy: function() {
            	var results = this.filter(function(model) {
                    return (model.get('type') == 5);
                });

                return new Backbone.Collection(results);
            }    

        });

        return new collection();

    });
