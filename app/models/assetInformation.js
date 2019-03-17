define(["jquery", "underscore", "backbone", "app", "i18n!strings/nls/assetInformation"],

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

	            Present:function(){
	            	return this.get('Present');
	            },

	            BrandName:function(){
	            	return this.get('BrandName');
	            },

	            UPIFreq:function(){
	            	return this.get('UPIFreq');
	            },

	            UPIWidth:function(){
	            	return this.get('UPIWidth');
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

	            Present:function(){
	            	return this.get('Present');
	            },

	            Manufacture:function(){
	            	return this.get('Manufacture');
	            },

	            PartNumber:function(){
	            	return this.get('PartNumber');
	            },

	            SN:function(){
	            	return this.get('SerialNumber');
	            },



	            DimmType:function(){
	            	return this.get('DimmType');
	            },

	            ModuleType:function(){
	            	return this.get('ModuleType');
	            },

	            Type:function(){
	            	return this.get('Type');
	            },



	            Frequency:function(){
	            	return this.get('Frequency');
	            },

	            Size:function(){
	            	return this.get('Size');
	            },

	            RankNum:function(){
	            	return this.get('RankNum');
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

	            Present:function(){
	            	return this.get('Present');
	            },

	            ModelName:function(){
	            	return this.get('ModelName');
	            },

	            Mode:function(){
	            	return this.get('Mode');
	            },

	            SN:function(){
	            	return this.get('SN');
	            },

	            FwVersion:function(){
	            	return this.get('FwVersion');
	            },

	            Size:function(){
	            	return this.get('Size');
	            }
	        });
    		return model;
    	},
    	psuModel : function(){
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

    			Present:function(){
    				return this.get('Present');
    			},

    			Vendor:function(){
    				return this.get('Vendor');
    			},

    			Model:function(){
    				return this.get('Model');
    			},

    			Revision:function(){
    				return this.get('Revision');
    			},

    			Date:function(){
    				return this.get('Date');
    			},

    			SN:function(){
    				return this.get('SN');
    			},

    			RatedPower:function(){
    				return this.get('RatedPower');
    			}
    		});
    		return model;
    	},
    	nicModel : function(){
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

    			PCIeAddr:function(){
    				return this.get('PCIeAddr');
    			},

    			Vendor:function(){
    				return this.get('Vendor');
    			},

    			Category:function(){
    				return this.get('Category');
    			},

    			Class:function(){
    				return this.get('Class');
    			},

    			BrandName:function(){
    				return this.get('BrandName');
    			},

    			LinkSpeed:function(){
                    //TapdId1001502
                    var LinkSpeed = this.get('LinkSpeed');
                    if(LinkSpeed == '100Mbps') {
                        return '<span><font style="display:none;">10</font>'+LinkSpeed+'</span>'
                    }else if(LinkSpeed == '1Gbps') {
                        return '<span><font style="display:none;">11</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '2Gbps') {
                        return '<span><font style="display:none;">12</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '2.5Gbps') {
                        return '<span><font style="display:none;">13</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '4Gbps') {
                        return '<span><font style="display:none;">14</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '8Gbps') {
                        return '<span><font style="display:none;">15</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '10Gbps') {
                        return '<span><font style="display:none;">16</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '16Gbps') {
                        return '<span><font style="display:none;">17</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '20Gbps') {
                        return '<span><font style="display:none;">18</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '25Gbps') {
                        return '<span><font style="display:none;">19</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '40Gbps') {
                        return '<span><font style="display:none;">20</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '56Gbps') {
                        return '<span><font style="display:none;">21</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '100Gbps') {
                        return '<span><font style="display:none;">22</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '200Gbps') {
                        return '<span><font style="display:none;">23</font>'+LinkSpeed+'</span>';
                    }else if(LinkSpeed == '400Gbps') {
                        return '<span><font style="display:none;">24</font>'+LinkSpeed+'</span>';
                    }
                },


    			MacAddr:function(){
    					return this.get('MacGuid');
    			},
    			PresentNic:function(){
					return this.get('PresentNic');
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

    			Vendor:function(){
    				return this.get('Vendor');
    			},

    			Class:function(){
    				return this.get('Class');
    			},

    			BrandName:function(){
    				return this.get('BrandName');
    			},

    			CurSpeed:function(){
    				return this.get('CurSpeed');
    			},

    			NegoLinkWidth:function(){
					var NegoLinkWidth = this.get('NegoLinkWidth');
					if(NegoLinkWidth == 'x1') {
                        return '<span><font style="display:none;">1</font>'+NegoLinkWidth+'</span>';
					}else if(NegoLinkWidth == 'x2') {
                        return '<span><font style="display:none;">2</font>'+NegoLinkWidth+'</span>';
					}else if(NegoLinkWidth == 'x4') {
                        return '<span><font style="display:none;">3</font>'+NegoLinkWidth+'</span>';
                    }else if(NegoLinkWidth == 'x8') {
                        return '<span><font style="display:none;">4</font>'+NegoLinkWidth+'</span>';
                    }else if(NegoLinkWidth == 'x16') {
                        return '<span><font style="display:none;">5</font>'+NegoLinkWidth+'</span>';
                    }
    			}

    		});
    		return model;
    	}

    }

});
