define(['underscore', 'backbone'
    ],
    function(_, Backbone, units) {

        var model = Backbone.Model.extend({
            
            policy_id:function(){
            	return this.get('policy_id');
            },
            
            entire_limit:function(){
            	var temp = this.get('entire');
            	if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
            cpu_limit:function(){
            	var temp = this.get('CPU');
            	if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
            mem_limit:function(){
            	var temp = this.get('MEM');
            	if(temp == 0xffff)
            		return "N/A";
            	else
            		return temp;
            },
            
        });

        return model;

    });
