define(["jquery", "underscore", "backbone", "models/assetInformation"],

function($, _, Backbone, DataModel) {

	return  {

    	cpusCollection : function(){
    		var collection = Backbone.Collection.extend({

    	        url: function() {
    	            return "/api/serverrepo/cpus"
    	        },

    	        model: DataModel.cpusModel()
    	    });

    	    return new collection();
    	},
    	memsCollection : function(){
    		var collection = Backbone.Collection.extend({

    	        url: function() {
    	            return "/api/serverrepo/mems"
    	        },

    	        model: DataModel.memsModel()
    	    });

    	    return new collection();
    	},
    	hddsCollection : function(){
    		var collection = Backbone.Collection.extend({

    			url: function() {
    				return "/api/serverrepo/hdds"
    			},

    			model: DataModel.hddsModel()
    		});

    		return new collection();
    	},
    	psuCollection : function(){
    		var collection = Backbone.Collection.extend({

    			url: function() {
    				return "/api/serverrepo/psus"
    			},

    			model: DataModel.psuModel()
    		});

    		return new collection();
    	},
    	nicCollection : function(){
    		var collection = Backbone.Collection.extend({

    			url: function() {
    				return "/api/serverrepo/nic"
    			},

    			model: DataModel.nicModel()
    		});

    		return new collection();
    	},
    	pcieCollection : function(){
    		var collection = Backbone.Collection.extend({

    			url: function() {
    				return "/api/serverrepo/pcie"
    			},

    			model: DataModel.pcieModel()
    		});

    		return new collection();
    	},
    	raidCollection : function(){
    		var collection = Backbone.Collection.extend({

    			url: function() {
    				return "/api/serverrepo/raid"
    			},

    			model: DataModel.raidModel()
    		});

    		return new collection();
    	}

    }

});
