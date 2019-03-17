define(["jquery", "underscore", "backbone", "i18n!strings/nls/users",
        "libs/blowfish"
        ],

function($, _, Backbone, locale, Blowfish) {

    var model = Backbone.Model.extend({

        defaults: {},

        validation: {
            name: {
                required: true,
                //ks_lz_20180717   用户名 ++>>
                //pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\@]*$/,
                //ks_lz_20180717   用户名 ++>>
                
                //ks_lz20190218_blowfish_decypt ++>>
                fn: function(value, attr, computedState) {
                	var  blowfish = new Blowfish();
                	var  decrypt_value =  blowfish.decrypt(value);
                	var pattern_reg = /^[a-zA-Z][a-zA-Z0-9\-\_\@]*$/;
//                	console.log("encypt username ==> "+ value);
//                	console.log("decrypt username ==> "+ decrypt_value);
                    //sugon_Song_tapd1002126_2019-01-21
                    //create user
                    if( pattern_reg.test(decrypt_value)) {
                        return false;
                    }else  {
                        return true;
                    }
                },
                //ks_lz20190218_blowfish_decypt ++<<
                
                maxLength: 16,
                msg: locale.invalid_username_refer_help_content
            },
            password: {
                fn: function(value, attr, computedState) {
                	value = $('#idpassword').val();

                    //sugon_Song_tapd1002126_2019-01-21
                    //create user
                    if($('#idchangepassword').is(':hidden') && computedState.changepassword == 0 && computedState.password_size == 'bytes_16' && ((value.length>16) || (value.length<8))) {
                        return true;
                    }else if($('#idchangepassword').is(':hidden') && computedState.changepassword == 0 && computedState.password_size == 'bytes_20' && ((value.length>20) || (value.length<8))) {
                        return true;
                    }

                    //passwordcplexif( (computedState.changepassword == 1 && !(value.length>=8) ) || (computedState.snmp == 1 && !(value.length>=8) ) ){
                	//if( (computedState.changepassword == 1 && !(/^[\S]{1,}$/.test(value) ) ) || (computedState.snmp == 1 && !(/^[\S]{8,}$/.test(value) ) ) ){

                	//fanysh_jd_user_require_0509: JD only need pasword size must large than 8 byte and shorter than choose size
                    //edit user change password
                	if($('#idchangepassword').is(':visible') && computedState.changepassword == 1 && computedState.password_size == 'bytes_16' && ((value.length>16) || (value.length<8)))
                	{
		                return true;
		            }
		            else if($('#idchangepassword').is(':visible') && computedState.changepassword == 1 && computedState.password_size == 'bytes_20' && ((value.length>20) || (value.length<8)))
		            {
		                return true;
		            }

                	/*
                	//开启snmp权限时 不验证密码长度   By Chengbq  2018-07-27
                	if( computedState.passwordcplex != 1 ){
                		if(computedState.snmp == 1){
                			if(value.length<8)
                				return true;
                			else
                				return false;
                		}
                		else return false;
                	}*/
                	if( computedState.passwordcplex == 1 && checkPassword(value)<4  ){
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.password_field_must_be_8_characters_atleast
            },
            confirm_password: {
                //equalTo: 'password',
                fn: function(value, attr, computedState) {
                	value = $('#idconfirm_password').val();

                    if(computedState.changepassword == 1 && !($('#idpassword').val() == value)){
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.passwords_do_not_match
            },
            belong_group: {
                fn: function(value, attr, computedState) {
                    if(computedState.belong_group == ""){
                        return true;
                    } else {
                    	return false;
                    }
                },
                msg: locale.select_group
            },
	    expiry_date: {
                fn: function(value, attr, computedState) {
                    if(computedState.turnon_password_expiry == 1 && computedState.expiry_date == ""){
                        return true;
                    } else {
                    	return false;
                    }
                },
                msg: locale.setting_password_expiry_date
            },
            email_id: {
                fn: function(value, attr, computedState) {
                    if(value != "" && (!(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value)))){
                        return true;
                    } else {
                        return false;
                    }
                },
                msg: locale.invalid_email_format_refer_help_content
            }
        }
    });

    return model;

});
function checkPassword(password){
             var checktime=0;
             if(password.length<8)
               return 0;
             if(password.match(/[a-z]+/)){
               checktime++;
             }

             if(password.match(/[0-9]+/)){
               checktime++;
             }

             if(password.match(/[A-Z]+/)){
               checktime++;
             }

             if(password.match(/[^a-zA-Z0-9]+/)){
               checktime++;
             }

               return checktime;
}
