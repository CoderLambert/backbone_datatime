define(["jquery", "underscore", "backbone", "models/hardwareMonitor"],

function($, _, Backbone, DataModel) {

  return  {

      cpusCollection : function(){
        var collection = Backbone.Collection.extend({

              url: function() {
                  return "/api/servermon/cpus"
              },

              model: DataModel.cpusModel()

          });

          return new collection();
      },
      memsCollection : function(){
        var collection = Backbone.Collection.extend({

          url: function() {
            return "/api/servermon/mems"
          },

          model: DataModel.memsModel()

        });

        return new collection();
      },
      hddsCollection : function(){
        var collection = Backbone.Collection.extend({

          url: function() {
            return "/api/servermon/hdds"
          },

          model: DataModel.hddsModel()

        });

        return new collection();
      },
      fansCollection : function(){
        var collection = Backbone.Collection.extend({

          url: function() {
            return "/api/servermon/fans"
          },

          model: DataModel.fansModel()

        });

        return new collection();
      },
      psusCollection : function(){
    	  var collection = Backbone.Collection.extend({

    		  url: function() {
    			  return "/api/servermon/psus"
    		  },

    		  model: DataModel.psusModel()

    	  });

    	  return new collection();
      },
      pcieCollection : function(){
    	  var collection = Backbone.Collection.extend({

    		  url: function() {
    			  return "/api/servermon/pcie"
    		  },

    		  model: DataModel.pcieModel()

    	  });

    	  return new collection();
      },
      raidCollection : function(){
    	  var collection = Backbone.Collection.extend({

    		  url: function() {
    			  return "/api/servermon/raid"
    		  },

    		  model: DataModel.raidModel()

    	  });

    	  return new collection();
      },
      nicsCollection : function(){
    	  var collection = Backbone.Collection.extend({

    		  url: function() {
    			  return "/api/servermon/nics"
    		  },

    		  model: DataModel.nicsModel()

    	  });

    	  return new collection();
      },
      mbCollection : function(){
    	  var collection = Backbone.Collection.extend({

    		  url: function() {
    			  return "/api/servermon/mb"
    		  },

    		  model: DataModel.mbModel()

    	  });

    	  return new collection();
      },
      allAlarmCollection : function(){
          var collection = Backbone.Collection.extend({

            url: function() {
              return "/api/servermon/error"		//查询所有告警
            },

            model: DataModel.allAlarmModel()

          });

          return new collection();
      }
  }


});
