/*global require*/
'use strict';

require.config({

    config: {
        i18n: {
            locale: 'zh-cn'
        }
    },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone_validation: "../vendor/bower/backbone-validation/dist/backbone-validation-amd",
        moment: '../bower_components/moment/min/moment-with-locales',
        moment_timezone: '../bower_components/moment-timezone/builds/moment-timezone-with-data',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        tzMetaData: '../libs/timezone-meta',
        select2: "../vendor/bower/select2/dist/js/select2",
        collapse: "../vendor/bower/bootstrap/js/dist/collapse",
        i18n: "../vendor/bower/requirejs-i18n/i18n",
        text: "../vendor/bower/text/text",
        iCheck: "../vendor/bower/iCheck/icheck.min",
        // datepicker: "../vendor/bower/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker"

        datetimepicker: "../vendor/bower/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker"
    },
    shim: {
        "backbone": {
            // These are the two hard dependencies that will be loaded first.
            deps: ["jquery", "underscore"],

            // This maps the global `Backbone` object to `require("backbone")`.
            exports: "Backbone"
        },
        //"datepicker": ["jquery"],

        "select2": ["jquery"],
        "bootstrap": ["jquery"],
        "iCheck": ["jquery"],
        "collapse": ["jquery"],

        "moment-timezone": ["moment"],
        "timezone-meta-data": ["moment-timezone"],
        "datepicker": ["collapse", "moment"]
    }
});

require([
    'jquery', 'underscore', 'backbone',
    '../views/DataTimeView',
    'moment', 'bootstrap', 'moment_timezone', 'tzMetaData',
    'select2',
], function($, _, Backbone, DataView, moment, bootstrap, moment_timezone, tzMetaData, select2) {
    //=====================时区========================
    window.moment = moment_timezone;

    // $.fn.select2.defaults.set("theme", "classic");
    var data_v = new DataView();
    data_v.render();
    Backbone.history.start();
});