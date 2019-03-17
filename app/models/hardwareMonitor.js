define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/hardwareMonitor"],

function($, _, Backbone, app, locale) {

	return  {

    	cpusModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

                Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Temp:function(){
    	        	return this.get('Temp');
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	},
    	memsModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

    	        Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Temp:function(){
    	        	return this.get('Temp');
    	        },
    	        WorkFreq:function(){
    	        	return this.get('WorkFreq');
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	},
    	hddsModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

                Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Temp:function(){
    	        	return this.get('Temp');
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	},
    	fansModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

    	        Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Duty:function(){
    	        	return this.get('Duty');
    	        },
    	        Speed:function(){
    	        	if(this.get('Present') == 'Present'){
    	        		return this.get('InletSpeed'); // +'/'+ this.get('OutletSpeed');
    	        	}else{
    	        		return '';
    	        	}
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	},
    	psusModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

    	        Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Vin:function(){
    	        	return this.get('Vin');
    	        },
    	        Iin:function(){
    	        	return this.get('Iin');
    	        },
    	        Pin:function(){
    	        	return this.get('Pin');
    	        },
    	        Vout:function(){
    	        	return this.get('Vout');
    	        },
    	        Iout:function(){
    	        	return this.get('Iout');
    	        },
    	        Pout:function(){
    	        	return this.get('Pout');
    	        },
    	        Temp1:function(){
    	        	return this.get('Temp1');
    	        },
    	        Temp2:function(){
    	        	return this.get('Temp2');
    	        },
    	        FanSpeed:function(){
    	        	return this.get('Fan1Speed');
    	        }
    	    });

    	    return model;
    	},
    	pcieModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

                Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    	        Temp:function(){
    	        	return this.get('Temp');
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	},
    	raidModel : function(){
    		var model = Backbone.Model.extend({

    			defaults: {},

    			validation: {
    			},

    			Number:function(){
    				return this.get('id');
    			},
    			Location:function(){
    				return this.get('Location');
    			},
    			CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    			Temp:function(){
    				return this.get('Temp');
    			},
    			State:function(){
    				return this.get('State');
    			}
    		});

    		return model;
    	},
    	nicsModel : function(){
    		var model = Backbone.Model.extend({

    			defaults: {},

    			validation: {
    			},

    			Number:function(){
    				return this.get('id');
    			},
    			Location:function(){
    				return this.get('Location');
    			},
    			Port:function(){
    				return this.get('Port');
    			},
    			Category:function(){
    				return this.get('Category');
    			},
    			CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    			Type:function(){
    				return this.get('Type');
    			},
    			LinkState:function(){
    				return this.get('isLinked');
    			},
    			State:function(){
    				return this.get('State');
    			}
    		});

    		return model;
    	},
    	mbModel : function(){
    		var model = Backbone.Model.extend({

    			defaults: {},

    			validation: {
    			},

    			Number:function(){
    				return this.get('id');
    			},
    			Location:function(){
    				return this.get('Location');
    			},
    			CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	}else{
    	        		return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	}
    	        },
    			Temp:function(){
    				return this.get('Temp');
    			},
    			State:function(){
    				return this.get('State');
    			}
    		});

    		return model;
    	},
    	allAlarmModel : function(){
    		var model = Backbone.Model.extend({

    	        defaults: {},

    	        validation: {
    	        },

                Number:function(){
    	        	return this.get('id');
    	        },
    	        Location:function(){
    	        	return this.get('Location');
    	        },
    	        CriticalLevel:function(){
    	        	var state = this.get('State');
    	        	//if(this.get('Present') == 'Present'){
    	        		if(this.get('CriticalLevel') == 'Urgency'){
    	        			return '<span class="urgency stateImg" title="'+ state +'" ><font style="display:none;">4</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Critical'){
    	        			return '<span class="critical stateImg" title="'+ state +'" ><font style="display:none;">3</font></span>';
    	        		}else if(this.get('CriticalLevel') == 'Non Critical'){
    	        			return '<span class="notCritical stateImg" title="'+ state +'" ><font style="display:none;">2</font></span>';
    	        		}else{
    	        			return '<span class="normal stateImg" title="'+ state +'" ><font style="display:none;">1</font></span>';
    	        		}
    	        	//}else{
    	        	//	return '<span class="notPresent stateImg" title="'+ state +'" ><font style="display:none;">0</font></span>';
    	        	//}
    	        },
    	        State:function(){
    	        	return this.get('State');
    	        }
    	    });

    	    return model;
    	}
	}


});
