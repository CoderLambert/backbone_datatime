define(['underscore', 'backbone',
      //localize
        'i18n!strings/nls/me_power_policy',
    ],
    function(_, Backbone, CommonStrings ) {

        var model = Backbone.Model.extend({

            domain: function() {
                var temp =  this.get('domain');
                if(temp == "Entire Platform")
                	return CommonStrings.entire_platform;
                else if(temp == "CPU")
                	return CommonStrings.cpu;
                else if(temp == "Memory")
                	return CommonStrings.memory;
            },
            
            current_power: function() {
                var temp = this.get('current_power');
                if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
            min_power:function(){
            	var temp = this.get('min_power');
            	if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
            max_power:function(){
            	var temp = this.get('max_power');
            	if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
        });

        return model;

    });
