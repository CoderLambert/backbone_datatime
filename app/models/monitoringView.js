define(
    ["jquery", "underscore", "backbone", "app",
        //template
        'text!templates/monitoring.html',
        //localize
        'i18n!strings/nls/monitoring',
        "raphael", "morris"
    ],
    function($, _, backbone, app, overviewHtml, locale) {

    	var oV_globalCfg = {
    			/*查询服务器信息*/
    			serverinfo: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/serverinfo',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$.each(resultVal, function(key, val){
    							$('#serInfo_'+key).text(val);
    						});
    					}
    				});
    			},
    			/*查询固件版本信息*/
    			fwinfo: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/fwinfo',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$.each(resultVal, function(key, val){
    							$('#fwInfo_'+key).text(val);
    						});
    					}
    				});
    			},
    			currentLan: 'deicatedLan',
    			/*查询专用网络信息*/
    			dictnetinfo: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/dictnetinfo',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$.each(resultVal, function(key, val){
    							$('#lan_'+key).text(val);
    						});
    					}
    				});
    			},
    			/*查询共享网络信息*/
    			sharenetinfo: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/sharenetinfo',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$.each(resultVal, function(key, val){
    							$('#lan_'+key).text(val);
    						});
    					}
    				});
    			},
    			/*查询运行状态*/
    			serverstate: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/serverstate',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$.each(resultVal, function(key, val){

    							if(key.indexOf('state')>0){
    								var className = 'notPresent';
    								if(val == 'Normal'){
    									className = 'normal';
    		    	        		}else if(val == 'Non Critical'){
    									className = 'notCritical';
    		    	        		}else if(val == 'Critical'){
    		    	        			className = 'critical';
    		    	        		}
    								$('#state_'+key).attr('title', val);
    								$('#state_'+key).removeClass().addClass("text-right "+className+" stateImg");
    							}else{
    								$('#ov_'+key).text(val);
    							}
    						});
    					}
    				});
    			},
    			/*查询CPU使用率*/
    			cpuusage: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/cpuusage',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$('#cpu_chart').empty();
    						if(resultVal.serverstate == '1'){
    							$('#cpu_chart').show();
    							$('#cpu_notBoot').hide();
    							new Morris.Donut({
    			                    element: 'cpu_chart',
    			                    colors: ["#0b62a4","#e8eef1"],
    			                    data: [
    			                           {label: locale.cpuUsageRate, value: resultVal.cpuusage},
    			                           {label: locale.cpuUsageRate, value: 100-resultVal.cpuusage},
    			                         ],
    			                    formatter: function(y) {
    			                    	return resultVal.cpuusage+'%';
    			                    }
    			                });
    						}else{
    							$('#cpu_chart').hide();
    							$('#cpu_notBoot').show();
    						}
    					}
    				});
    			},
    			/*查询内存使用率*/
    			memusage: function(){
    				$.ajax({
    					type: 'get',
    					url: '/api/serverinfo/memusage',
    					data: {},
    					dataType: 'json',
    					success: function (resultVal) {

    						$('#mem_chart').empty();
    						if(resultVal.serverstate == '1'){
    							$('#mem_chart').show();
    							$('#mem_notBoot').hide();
    							new Morris.Donut({
    			                    element: 'mem_chart',
    			                    //colors: ["#dd514c","#f37b1d","#6e7882"],
    			                    colors: ["#0b62a4","#e8eef1"],
    			                    data: [
    			                           {label: locale.memUsageRate, value: resultVal.memusage},
    			                           {label: locale.memUsageRate, value: 100-resultVal.memusage},
    			                         ],
    			                    formatter: function(y) {
    			                        return resultVal.memusage+'%';
    			                    }
    			                });
    						}else{
    							$('#mem_chart').hide();
    							$('#mem_notBoot').show();
    						}
    					}
    				});
    			},
    	};

    	var overview = Backbone.View.extend({

            //keep: true,

            template: _.template(overviewHtml),

            initialize: function() {
            	/*查询服务器概览信息*/
            	oV_globalCfg.serverinfo();
        		oV_globalCfg.fwinfo();
        		oV_globalCfg.dictnetinfo();
            },

            beforeRender: function() {
                //this.$el.addClass("widgets");
                var logDetails = new LogDetailsView();
                this.views = [logDetails];
                this.insertView(".center", logDetails);

                /////////////////////////////////

                var bathroomData = [
                        { time: "2014-06-17T10:54:01", r2: 5 },
                        { time: "2014-06-17T11:09:01", r0: 4, r1: 79, r2: 7, r3: 79 },
                        { time: "2014-06-17T11:24:01", r0: 11, r1: 88, r2: 13, r3: 100 },
                        { time: "2014-06-17T11:39:01", r0: 11, r1: 69, r2: 12, r3: 73 }
                    ];
                    var bathroomIDs = [ "r0", "r1", "r2", "r3" ];
                    var bathroomNames = [ "name1", "name2", "name3", "name4" ];

                    Morris.Line({
                        element: "cpu_chart",
                        data: bathroomData,
                        xkey: "time",
                        ykeys: bathroomIDs,
                        labels: bathroomNames
                    });

                /////////////////////////////////

            },

            renderCalendar: function() {
            },

            afterRender: function() {
            	/*查询指定网络信息*/
				$('#lan_switch').bind('click',function(){
					if(oV_globalCfg.currentLan == 'deicatedLan'){
						oV_globalCfg.sharenetinfo();
						oV_globalCfg.currentLan = 'sharedLan';
						$('#lan_current').text(locale.lanShared);
						$('#lan_switch').text(locale.lanDeicated);
					}else{
						oV_globalCfg.dictnetinfo();
						oV_globalCfg.currentLan = 'deicatedLan';
						$('#lan_current').text(locale.lanDeicated);
						$('#lan_switch').text(locale.lanShared);
					}
				})

				/*循环10秒刷新利用率信息
				 *
        		var oV_intervalId = setInterval(function(){

        			if($('#cpu_chart').length > 0){
        				oV_globalCfg.cpuusage();
                		oV_globalCfg.memusage();
        			}else{
        				clearInterval(oV_intervalId);
        			}

				},10000);

				*/
            },

            serialize: function() {
                return {
                    locale: locale
                };
            }
        });

        return overview;


    });