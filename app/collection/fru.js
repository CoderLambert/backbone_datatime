define(['jquery', 'underscore', 'backbone',
        'models/fru'
    ],
    function($, _, Backbone, FRUModel) {

        var collection = Backbone.Collection.extend({

            // model: FRUModel

        });

        return new collection();

    });