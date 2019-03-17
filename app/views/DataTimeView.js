define(['jquery', 'underscore', 'backbone', 'app',
        //localize
        // 'i18n!strings/nls/common',
        //template
        '../models/datetime/date_time',
        'moment', 'bootstrap', 'moment_timezone', 'tzMetaData',
        'select2',
        // 'datepicker',
        'datetimepicker',
        'iCheck'

        // 'text!templates/longRangeControl.html'
    ],

    function($, _, Backbone, app, DateTimeModel, moment, bootstrap, moment_timezone, tzMetaData, select2, datetimepicker) {
        'use strict'
        var view = Backbone.View.extend({

            // template: _.template(HtmlTemplate),
            el: "#render",
            initialize: function() {
                // window.moment = moment;
                // window.datepicker = datepicker;
                // window.iCheck = iCheck;
                window.model = this.model = DateTimeModel;

                this.year = null;
                this.month = null;
                this.day = null;

                this.first = 0;
                this.last = 0;
                this.now = 0;
                this.elapsed = 0;
                this.time_now = 0;
                this.utc_minutes = this.model.get("utc_minutes");
                this.model.bind('change:timezone', this.updateTimezone, this);
                // this.model.bind('change:utc_minutes', this.updateUtcMinutes, this);
                this.model.bind('change:timestamp', this.updateTimestamp, this);
                this.model.bind('change:primary_ntp', this.updatePrimaryNtp, this);
                this.model.bind('change:secondary_ntp', this.updateSecondaryNtp, this);
                this.model.bind('change:auto_date', this.updateAutoDate, this);

                this.months = [{
                        id: 1,
                        text: 'January'
                    },
                    {
                        id: 2,
                        text: 'February'
                    },
                    {
                        id: 3,
                        text: 'March'
                    },
                    {
                        id: 4,
                        text: 'April'
                    },
                    {
                        id: 5,
                        text: 'May'
                    },
                    {
                        id: 6,
                        text: 'January'
                    },
                    {
                        id: 7,
                        text: 'July'
                    },
                    {
                        id: 8,
                        text: 'August'
                    },
                    {
                        id: 9,
                        text: 'September'
                    },
                    {
                        id: 10,
                        text: 'October'
                    },
                    {
                        id: 11,
                        text: 'November'
                    },
                    {
                        id: 12,
                        text: 'December'
                    }
                ];
            },

            events: {

                "change #idtimezone": "changeTimeZone",
                "change #iddata_year": "changeYear",
                "change #iddata_month": "changeMonth",
                "change #iddata_day": "changeDay",
                "input #idhour": "check_hour",
                "input #idminute": "check_minute",
                "input #idsecond": "check_second",
                "ifChecked #idauto_sync_ntp": "checkedAutoSyncNtp",
                "ifUnchecked #idauto_sync_ntp": "uncheckedAutoSyncNtp",
                "click #refresh": "refreshData",
                "click #reset": "resetData",
            },

            render: function() {
                var template = _.template($("#DataTime_template").html());
                //加载模板到对应的el属性中
                $(this.el).html(template());

                // $(".datepicker").datepicker({});
                // $("#dd").datepicker();
                this.renderDataTime();
                this.first = Date.now() / 1000;
                this.updateSeconds.call(this);
                // $('#iddate-picker').datetimepicker({
                //     pickDate: true,
                //     useSeconds: true,
                //     format: 'll h:mm:ss A'
                // });
            },

            renderDataTime: function() {

                this.$el.find('#idauto_sync_ntp').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue',
                    increaseArea: '20%'
                });

                var zones = tzMetaData.zones
                var listOfTimeZones = new Array();
                $.each(zones, function(key, value) {
                    listOfTimeZones.push(key);
                });

                var afterSorting = listOfTimeZones.sort();
                // console.dir(afterSorting);

                $("#idtimezone").select2({
                    tags: true,
                    // allowClear: true,
                    placeholder: 'Select an option',
                    // data: afterSorting

                });

                $.each(afterSorting, function(i) {
                    // $('#idtimezone').append('<option value="' + afterSorting[i] + '">' + '(GMT' + moment.tz(afterSorting[i]).format('Z') + ')' + afterSorting[i] + '</option>');
                    $('#idtimezone').append('<option value="' + afterSorting[i] + '">' + afterSorting[i] + '</option>');

                });


                $("#iddata_year").select2({
                    tags: true,
                    // allowClear: true,
                    placeholder: 'Select an option',
                    // data: afterSorting
                });


                $('#iddata_year').empty();


                for (var i = 2010; i <= 2050; i++) {
                    $('#iddata_year').append('<option value="' + i + '">' + i + '</option>');
                };
                // $('#iddata_year').val(T_year).trigger("change");
                // this.$("#idhour").attr("disabled", "disabled");

                $("#iddata_month").select2({
                    tags: true,
                    // allowClear: true,
                    placeholder: 'Select an option',
                    data: this.months
                });
                // $('#iddata_month').val(T_month).trigger("change");
                $("#iddata_day").select2({
                    tags: true,
                    // allowClear: true,
                    placeholder: 'Select an option',
                    // openOnEnter: true,
                    // data: afterSorting

                });


                $('#idprimary_ntp').val(this.model.get("primary_ntp")).trigger("change");
                $('#idsecondary_ntp').val(this.model.get("secondary_ntp")).trigger("change");

                // $('#iddata_month').val(T_month).trigger("change");
                // $('#idtimezone').val(ttt).trigger('change');


                // localized_timestamp = timestamp  + utc_minutes * 60 
                this.model.set({
                    "id": 1,
                    "primary_ntp": "pool.ntp.org",
                    "secondary_ntp": "time.nist.gov",
                    "auto_date": 0,
                    "localized_timestamp": 1552647901,
                    "utc_minutes": 480,
                    "timestamp": 1552724700,
                    "timezone": "Asia\/Shanghai"

                });
                this.showDataTime(this.model.get("timestamp") * 1000);
            },
            // var d = new Date(2019,3，0)
            updateTimezone: function(model, value) {
                // $('#idtimezone').val(value);
                console.log("2 .  updateTimezone");
                var tstamp = model.get("timestamp");
                if (tstamp !== undefined) {
                    if (!this.model.get('auto_date')) {
                        //var m = $('#iddate-picker').data('DateTimePicker').getDate();
                        var m = moment.unix(tstamp);
                    } else {
                        //var m = moment.unix(tstamp);
                        var m = this.time_now;
                    }
                    // var group = value.split('/')[0];
                    // var name = value.split('/')[1];
                    // var zonestring = (name !== undefined) ? name.replace(/_/g, ' ') : value;
                    m.tz(value);
                    // console.log("zon")
                    console.log("change time  now time is:");
                    console.log(m.format('YYYY-MM-DD HH:mm:ss'));

                    var timestamp = new Date(m.format('YYYY-MM-DD HH:mm:ss')).getTime();
                    // console.log(m.unix());
                    console.log("当前时间");

                    var now_timestamp = moment(timestamp);

                    console.log("now_timestamp  ==> " + now_timestamp.format('YYYY-MM-DD HH:mm:ss'));
                    console.log("now_timestamp unix ==> " + now_timestamp.unix());

                    this.model.set("timestamp", now_timestamp.unix());
                    // this.showDataTime(timestamp / 1000);
                }
            },

            refreshData: function(e) {
                e.preventDefault();
                if (this.model) {
                    // var that = this;
                    this.model.set({
                        "id": 1,
                        "primary_ntp": "pool.ntp.org",
                        "secondary_ntp": "time.nist.gov",
                        "auto_date": 1,
                        "localized_timestamp": 1552655905,
                        "utc_minutes": 480,
                        "timestamp": 1552724700,
                        "timezone": "Asia\/Shanghai"

                    });
                }
            },
            resetData: function(e) {
                if (this.model) {
                    // var that = this;
                    this.model.set({
                        "id": 1,
                        "primary_ntp": "pool.ntp.org",
                        "secondary_ntp": "time.nist.gov",
                        "auto_date": 1,
                        "localized_timestamp": 1552647901,
                        "utc_minutes": 480,
                        "timestamp": 1552753500,
                        "timezone": "Asia\/Shanghai"

                    });
                }

                $('#idauto_sync_ntp').iCheck('uncheck');
                $('#iddata_year').val('#').trigger("change");
                $('#iddata_month').val('#').trigger("change");
                $('#iddata_day').val('#').trigger("change");
                $('#idtimezone').val('#').trigger("change");
                $("#idhour").val('');
                $("#idminute").val('');
                $("#idsecond").val('');
                $("#idprimary_ntp").val('');
                $("#idsecondary_ntp").val('');

                //记得保存设置时要进行合法性检查
            },
            //===================================日期时间设置======================================== 


            changeTimeZone: function(e) {
                // var that = this;
                console.log("1. changeTimeZone ");
                var dropDownTimeZone = $('#idtimezone').val()
                if (dropDownTimeZone == '#') {
                    this.model.set("timezone", this.model.get('timezone'));
                } else {
                    this.model.set("timezone", dropDownTimeZone);
                }

                var tzone = this.model.get("timezone");
                // console.log(tzone);
                var m = moment.unix(this.model.get("timestamp")); //相当于 * 1000
                // var m = moment.unix(1552619101 * 1000);

                console.log("moment.unix  == >  " + m);

                if (tzone !== undefined) {
                    m = m.tz(tzone);
                }

                this.model.set("timestamp", m.valueOf() / 1000);


            },

            changeYear: function(e) {
                this.year = $("#iddata_year").val()
            },

            changeMonth: function(e) {

                this.month = $("#iddata_month").val();
                this.max_day = new Date(this.year, this.month, 0).getDate();

                $('#iddata_day').empty();
                for (var i = 1; i <= this.max_day; i++) {
                    $('#iddata_day').append('<option value="' + i + '">' + i + '</option>');
                };
            },

            changeDay: function(e) {
                this.day = $('#iddata_day').val();
            },

            //检查输入的时间，防止输入数据不符合要求

            check_hour: function(e) {
                var that = this;
                value = e.target.value;
                var value = value.replace(/[^\d]/g, '');
                if (value < 0) value = 0;
                if (value > 23) value = 23;
                e.target.value = value;
                console.log(value);
            },


            check_minute: function(e) {
                var that = this;
                value = e.target.value;
                var value = value.replace(/[^\d]/g, '');
                if (value < 0) value = 0;
                if (value > 59) value = 59;
                e.target.value = value;
            },

            check_second: function(e) {
                var that = this;
                value = e.target.value;
                var value = value.replace(/[^\d]/g, '');
                if (value < 0) value = 0;
                if (value > 59) value = 59;
                e.target.value = value;
            },


            //===========================================================================

            //NTP 服务设置 

            updatePrimaryNtp: function(model, value) {
                $('#idprimary_ntp').val(value);
            },

            updateSecondaryNtp: function(model, value) {
                $('#idsecondary_ntp').val(value);
            },

            //===========================================================================

            //              自动更新时间设置 
            updateAutoDate: function(model, value) {
                if (value) {
                    $('#idauto_sync_ntp').iCheck('check');
                } else {
                    if (!$('#idauto_sync_ntp').parent().hasClass('checked')) {
                        this.uncheckedAutoSyncNtp();
                    }
                    $('#idauto_sync_ntp').iCheck('uncheck');
                }
            },

            checkedAutoSyncNtp: function(ev) {
                this.model.set('auto_date', 1);
                $("#iddata_year,#iddata_month,#iddata_day").prop("disabled", true);
                this.$("#idhour,#idminute,#idsecond").attr("disabled", "disabled");
                this.$("#idprimary_ntp,#idsecondary_ntp").removeAttr("disabled");
                this.$("#idprimary_ntp,#idsecondary_ntp").iCheck("enable");

            },
            uncheckedAutoSyncNtp: function(ev) {
                this.model.set('auto_date', 0);
                console.log("  auto_date 0");
                $("#iddata_year,#iddata_month,#iddata_day").prop("disabled", false);
                this.$("#idhour,#idminute,#idsecond").removeAttr("disabled");
                this.$("#idprimary_ntp,#idsecondary_ntp").attr("disabled", "disabled");
                this.$("#idprimary_ntp,#idsecondary_ntp").iCheck("disable");
            },
            //===========================================================================


            // 时间转时间戳

            updateTimestamp: function(model, value) {

                // this.showDataTime(value * 1000);
                // console.log("============ updateTimestamp  start =========");
                // var tzone = this.model.get("timezone");
                // console.log(tzone);
                // var m = moment.unix(value); //相当于 * 1000
                // // var m = moment.unix(1552619101 * 1000);

                // console.log("moment.unix  == >  " + m);

                // if (tzone !== undefined) {
                //     m = m.tz(tzone);
                // }

                if (this.model.get('auto_date')) {
                    this.showDataTime(value * 1000);
                }


                // console.log("============ updateTimestamp  end =========");

            },

            showDataTime: function(time) {
                // var current_time = time;
                var current_time = moment(time);
                this.time_now = current_time;
                var T_year = current_time.format("Y");
                var T_month = current_time.format("M");
                var T_day = current_time.format("D");


                var T_hour = current_time.format("H");
                var T_minute = current_time.format("M");
                var T_second = current_time.format("s");

                $('#iddata_year').val(T_year).trigger("change");
                $('#iddata_month').val(T_month).trigger("change");
                $('#iddata_day').val(T_day).trigger("change");
                $("#idhour").val(T_hour);
                $("#idminute").val(T_minute);
                $("#idsecond").val(T_second);
                console.log("================ 时间对比 ======================");

                var day = moment(time).format('YYYY-MM-DD HH:mm:ss');
                console.log("timestamp " + time);
                // var day = moment.utc(day);
                // var day = moment(day).utcOffset(this.model.get("utc_minutes")).format('YYYY-MM-DD HH:mm:ss');
                // console.log("moment day " + day);
                console.log(" day  " + day);
                // console.log("================ end ======================");

            },

            updateSeconds: function() {
                this.last = this.elapsed;
                this.now = Date.now() / 1000;
                this.elapsed = this.now - this.first;
                if (this.model) {
                    if (this.elapsed > 60) {
                        var bkpModel = this.model.clone();
                        var that = this;
                        that.model.set('timestamp', bkpModel.get('timestamp') + 1);
                        this.last = 0;
                        this.elapsed = 0;
                        this.now = 0;
                        this.first = Date.now() / 1000;

                    } else {

                        this.model.set("timestamp", this.model.get("timestamp") + -Math.round(this.last) + Math.round(this.elapsed));
                        console.log(this.model.get("timestamp"));
                    }
                }
                this.timer = setTimeout(_.bind(this.updateSeconds, this), 1000);
            }

        });

        return view;

    });