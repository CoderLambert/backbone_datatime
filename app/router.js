var gload_app;
define([
	"views/maintenance/BPFirmwareUpgradeView",
	"views/settings/ext_users/active_directory/rolegroup_active_directory_edit_item",
	"views/settings/ext_users/ldap/rolegroup_ldap_edit_item",
	"views/settings/ext_users/radius/advanced_radius",
	"views/settings/ext_users/radius/general_radius",
    "views/settings/ext_users/active_directory/rolegroup_active_directory",
    "views/settings/ext_users/active_directory/general_active_directory",
    "views/settings/ext_users/ldap/rolegroup_ldap",
	"views/maintenance/fwimage_location",
	"views/settings/network/ncsi",
	"views/settings/ext_users/ldap/general_ldap",
	"views/settings/media",
	"views/maintenance/backup_restore_config",
	"views/logs/general_logView",
	"views/settings/alarmSettingsView",
	"views/storage/storageSystemView",
	"views/fault_diagnosis/screenShotView",
	"views/settings/loginControlView",
	// lz_ks20180730_ssl
    "views/settings/ssl/ViewSSLView",
    "views/settings/ssl/UploadSSLView",
	"views/settings/ssl/GenerateSSLView",


	"views/settings/biosSettingView",
	"views/monitoringView","views/systemMaintenance","views/longRangeControl","views/systemInfo","views/fault_diagnosis/selfInspectionView","views/overview/overview","views/assetInformationView","views/hardwareMonitorView",
	////修改同步////
	"views/ServerConfigView", "views/server_configuration/IDLEDControlView", "views/server_configuration/PowerRestoreControlView", "views/server_configuration/FirstBootDeviceView", "views/server_configuration/CoolPolicyView","views/server_configuration/PowerButtonLockView","views/server_configuration/PowerHotStandbyView","views/server_configuration/MEPowerPolicyView","views/server_configuration/historyrecordView",
	////////////  //add by lz psu
	"views/maintenance/BIOSFirmwareUpgradeView","views/maintenance/CPLDFirmwareUpgradeView","views/maintenance/PSUFirmwareUpgradeView","views/maintenance/DumpBMCBlackInfoView","views/maintenance/preserve_configuration","views/maintenance/restore_configuration",
	////////////
	"views/server_configuration/MEPolicyEditView",
	"views/troubleshootView",
	"views/settings/snmp","views/settings/badpassword",
	/* 以下为 2016-12-03 新版同步数据 */
	"views/DashboardView", "views/LoginView",
	//旧版日志与报表栏目   "views/EventLogView",
	//新版日志栏目
	"views/logs/EventLogView",
	"views/SystemLogView", "views/AuditLogView", "views/VideoLogView", "views/SensorView", "views/SensorDetailsView", 	"views/settings/sensor_thresholds",  "views/FRUView", "views/SettingsView", "views/RemoteControlView", "views/PowerControlView", "views/TaskEventsView", "views/TaskDetailsView", "views/ScriptsView", "views/StoreView", "views/UpdatesView", "views/HelpView",
	"views/MessagesView", "views/NotificationsView", "views/UserTasksView", "views/maintenance/FirmwareUpgradeView","views/maintenance/dualFirmwareUpgradeView","views/maintenance/dual_image_config", "views/maintenance/HpmFirmwareUpdateView","views/maintenance/NmFirmwareUpdateView", "views/settings/network/dns", "views/image_redirection", "views/image_redirection/lmedia", "views/image_redirection/rmedia", "views/settings/pef", "views/settings/pef/event_filters_edit_item", "views/settings/pef/event_filters","views/settings/pef/lan_destinations_edit_item", "views/settings/pef/lan_destinations",  "views/settings/date_time.js",
	"views/storage/create_logical_device",
	"views/system_inventory_info_edit_item", "views/system_inventory_info",
    "views/settings/users_edit_item",
    //ks_lz20180904_usergroup ++
    "views/settings/user_groups_edit_item",
    "views/settings/users",
	"views/settings/service_sessions", "views/settings/services_edit_item", "views/settings/services", "views/settings/network/bond", "views/settings/video/auto/pre_event", "views/settings/video/sol/sol_recorded_video", "views/settings/video/sol/sol_trigger_settings", "views/settings/video/auto/trigger_settings",
	"views/settings/network/ip", "views/settings/media/general","views/remotePopUpView", "views/settings/video/sol/javasol",
	"views/settings/firewall/general_firewall_settings/general_firewall_rules_edit_item", "views/settings/firewall/general_firewall_settings/general_firewall_rules","views/settings/bsod",
	"app", "resize", "treeview", "slimscroll"],

function(
	BPFirmwareUpgradeView,
    RoleGroupActiveDirectoryEditItemView,
    RolegroupLdapEditItemView,
    AdvancedRadiusView,
    GeneralRadiusView,
    RoleGroupActiveDirectoryView,
    GeneralActiveDirectoryView,
    RoleGroupLdapView,
    FwimageLocationView,
    NcsiView,
	GeneralLdapView,
	MediaView,
	BackupRestoreConfigView,
	GeneralLogView,
	AlarmSettingsView,
	StorageSystemView,
	ScreenShotView,
	LoginControlView,
	// lz_ks20180730_ssl
    ViewSSLView,
    UploadSSLView,
	GenerateSSLView,
	BiosSettingView,
	MonitoringView, SystemMaintenanceView, LongRangeControlView, SystemInfoView, SelfInspectionView, Overview, AssetInformationView, HardwareMonitorView,
	////修改同步////
	ServerConfigView, //ZQ
	IDLEDControlView, //ZQ
	PowerRestoreControlView,     //zh
	FirstBootDeviceView,        //zh
	CoolPolicyView,              //zh
	PowerButtonLockView,        //zh
	PowerHotStandbyView,        //zh
	MEPowerPolicyView,          //zh
	historyrecordView,     //zh
	////////////
	BIOSFirmwareUpgradeView,        //zh
	CPLDFirmwareUpgradeView,        //zh
	PSUFirmwareUpgradeView,        //add by lz
	DumpBMCBlackInfoView,
	preserve_configurationView,
	restore_configurationView,
	////////////
	MEPolicyEditView,
	TroubleShootView,    	//zhanghao 20160903
	SNMPSettingsView,
	BadPasswordSettingsView,
	/* 以下为 2016-12-03 新版同步数据 */
	DashboardView,
	LoginView,
	EventLogView,
	SystemLogView,
	AuditLogView,
	VideoLogView,
	SensorView,
	SensorDetailsView,
	SensorThresholdsView,    //zhanghao
	FRUView,
	SettingsView,
	RemoteControlView,
	PowerControlView,
	TaskEventsView,
	TaskDetailsView,
	ScriptsView,
	StoreView,
	UpdatesView,
	HelpView,
	MessagesView,
	NotificationsView,
	UserTasksView,
	FirmwareUpgradeView,
	dualFirmwareUpgradeView,
	DualImageconfigView,
	HpmFirmwareUpdateView,
	NmFirmwareUpdateView,
	DnsSettingsView,
	ImageRedirectionView,    //zhanghao
	LmediaView,
	RmediaView,
	PefView,
	EventFiltersEditItemView,
	EventFiltersView,
	LanDestinationEditItemView,
	LanDestinationView,
	DateTimeSettingsView,
	CreateLogicalDeviceView,
	SystemInventoryInfoEditItemView,
	SystemInventoryInfoView,
	UsersEditItemView,
    //ks_lz20180904_usergroup ++
    UserGroupsEditItemView,
	UsersView,
	ServiceSessionsView,
	ServicesEditItemView,
	ServicesView,
	BondView,
	PreEventView,
	SolRecordedVideoView,
	SolTriggerSettingsView,
	TriggerSettingsView,
	IpView,
	GeneralView,
	RemotePopUpView,
	JavasolView,
	GeneralFirewallRulesEditItemView,
	GeneralFirewallRulesView,
	BsodView,
app) {

	"use strict";

	/*将全局变量赋予app，避免出现app未定义的错误*/
	gload_app = app;

    // Defining the application router.
    var Router = Backbone.Router.extend({

        routes: {
        	"maintenance/BPFirmwareUpgrade": "BPFirmwareUpgrade",
        	"settings/ext_users/active_directory/rolegroup_active_directory/edit/:id": "RoleGroupActiveDirectoryEdit",
        	"settings/ext_users/ldap/rolegroup_ldap/edit/:id": "RoleGroupLdapEdit",
        	"settings/ext_users/radius/advanced_radius": "AdvancedRadius",
        	"settings/ext_users/radius/general_radius": "GeneralRadius",
        	"settings/ext_users/active_directory/rolegroup_active_directory": "RoleGroupActiveDirectory",
        	"settings/ext_users/active_directory/general_active_directory": "GeneralActiveDirectory",
        	"settings/ext_users/ldap/rolegroup_ldap": "RoleGroupLdap",
        	"maintenance/fwimage_location": "FwimageLocation",
            "settings/network/ncsi": "SettingNetworkNcsi",
        	"settings/ext_users/ldap/general_ldap": "SettingsExtUsersLdapGeneralLdap",
        	"settings/media": "SettingsMedia",
        	"maintenance/backup_restore_config": "MaintenanceBackupRestoreConfig",
        	"logs/general-log": "generalLog",
        	"settings/alarmSettings": "alarmSettings",
			"storage/storageSystem": "storageSystem",
			"maintenance/screenShot": "screenShot",
			"settings/loginControl": "loginControl",
			// ks_lz20170730_ssl  ++>>
			"settings/ssl/view_ssl":"viewSSLControl",
			"settings/ssl/upload_ssl":"uploadSSLControl",
			"settings/ssl/generate_ssl":"generateSSLControl",
			// ks_lz20170730_ssl  ++>>

        	"biosSetting": "biosSetting",
        	"monitoring": "monitoring",
        	//"systemMaintenance": "systemMaintenance",
        	//"longRangeControl": "longRangeControl",
        	//"systemInfo": "systemInfo",
        	"maintenance/selfInspection": "selfInspection",
        	"dashboard": "overview",
        	"assetInformation": "assetInformation",
        	"hardwareMonitor": "hardwareMonitor",
        	"hardwareMonitor/:id": "hardwareMonitor",
			////修改同步////
            //"server-configuration": "serverConfiguration", //ZQ

			////////////
			"server-configuration/id_led_ctrl": "IDLEDCtrl", //ZQ
            "server-configuration/power_restore_ctrl": "POWRESCtrl",    //zh
            "server-configuration/first_boot_device": "FIRSTBOOT",    //zh
            "server-configuration/cool_policy": "COOLPOLICY",    //zh
            "server-configuration/power_button_lock": "POWERBUTTONLOCK",    //zh
            "server-configuration/power_hot_standby": "POWERHOTSTANDBY",    //zh
            "server-configuration/me_power_policy": "MEPOWERPOLICY",    //zh
            "server-configuratiion/historyrecord":"HISTORYRECORD",    //zh
			////////////
			"maintenance/BIOSFirmwareUpgrade":"BIOSFirmwareUpgrade",        //zh
    	    "maintenance/CPLDFirmwareUpgrade":"CPLDFirmwareUpgrade",        //zh
    	    "maintenance/PSUFirmwareUpgrade":"PSUFirmwareUpgrade",        //add by lz
            "maintenance/DumpBMCBlackInfo":"DumpBMCBlackInfo",              //liuyje 2016-07-29
            "maintenance/preserve_configuration":"preserve_configuration",
            "maintenance/restore_configuration":"restore_configuration",
			////////////
			"settings/snmp": "SNMPSettings",
            "settings/badpassword": "BadPasswordSettings",
			////////////
			"server-configuration/me_power_policy/me_policy_edit/:id": "MEPOLICYEDIT",    //zh
			////////////
			"maintenance/troubleshoot":"TroubleShootView",    	//zhanghao 20160903
			/* 以下为 2016-12-03 新版同步数据 */
            "login": "login",
            "logout": "logout",
            "dashboard_old": "dashboard",
            "logs/event-log": "eventLog",
            "logs/event-log/:filter": "eventLog",
            "logs/system-log": "systemLog",
            "logs/audit-log": "auditLog",
            "logs/video-log": "videoLog",
            "sensors": "sensors",
            "sensors/:id": "sensorDetails",
            "settings/sensor_thresholds": "SettingsSensorThresholds",
            "settings/sensor_thresholds/:filter": "SettingsSensorThresholds",
            "fru": "fru",
            //"settings": "settings",
            "remote-control": "remoteControl",
            "power-control": "powerControl",
            "tasks": "tasks",
            "tasks/:id": "taskDetails",
            "scripts": "scripts",
            "store": "store",
            "updates": "updates",
            "help": "help",
            "maintenance/firmware_update": "MaintenanceFirmwareUpgrade",
            "maintenance/firmware_upgrade": "MaintenanceFirmwareUpgrade",
            "maintenance/dual_firmware_update": "MaintenancedualFirmwareUpgrade",
            "maintenance/dual_firmware_upgrade": "MaintenancedualFirmwareUpgrade",
            "maintenance/dual_image_config": "MaintenancedualImageConfig",
    	    "maintenance/hpm_firmware_update": "HpmFirmwareUpdate",
    	    "maintenance/nm_firmware_update": "NmFirmwareUpdate",
            "settings/network/dns": "DnsSettings",
            "image_redirection": "ImageRedirection",        //zhanghao
			"image_redirection/lmedia": "ImageRedirectionLmedia",
            "image_redirection/rmedia": "ImageRedirectionRmedia",
            "settings/pef": "SettingsPef",    //zhanghao
            "settings/pef/event_filters/edit/:filter": "EventFiltersEditItem",
            "settings/pef/event_filters": "SettingsPefEventFilters",
            "settings/pef/lan_destinations/edit/:filter": "LanDestinationEditItem",
            "settings/pef/lan_destinations": "SettingsLanDestinations",
            "settings/date_time": "DateTimeSettings",
            //创建虚拟设备
			"storage/create_logical_device": "SettingsRaidManagementCreateLogicalDevice",
			"/system_inventory_info/edit/:id": "SystemInventoryInfoEditItem",
            "system_inventory_info": "SystemInventoryInfo",
            "settings/users/edit/:id": "UsersEditItem",
            "settings/user_groups/edit/:id": "UserGroupsEditItem",
            "settings/users": "SettingsUsers",
            "settings/service_sessions": "SettingsServiceSessions",
            "settings/service_sessions/:filter": "SettingsServiceSessions",
            "settings/services/edit/:id": "ServicesEditItem",
            "settings/services": "SettingsServices",
            "settings/network/bond": "SettingsNetworkBond",
			"settings/video/auto/pre_event": "SettingsVideoAutoPreEvent",
			"settings/video/sol/sol_recorded_video": "SettingsVideoSolSolRecordedVideo",
			"settings/video/sol/sol_trigger_settings": "SettingsVideoSolSolTriggerSettings",
			"settings/video/auto/trigger_settings": "SettingsVideoAutoTriggerSettings",
			"settings/network/ip": "SettingsNetworkIp",
			"settings/media/general": "SettingsMediaGeneral",
			"remote":"RemoteControlPopUpView",
			"settings/video/sol/javasol": "SettingsMediaJavasol",
			"settings/firewall/general_firewall_settings/general_firewall_rules/edit/:id": "GeneralFirewallRulesEditItem",
            "settings/firewall/general_firewall_settings/general_firewall_rules": "SettingsFirewallGeneralFirewallSettingsGeneralFirewallRules",
			"settings/bsod": "SettingsBsod",
            "": "default"
        },

    default: function() {
        if(sessionStorage.length>0
  			&& typeof(sessionStorage.garc) != 'undefined'
  		    && typeof(sessionStorage.privilege_id) != 'undefined'
  			&& typeof(sessionStorage.extended_privilege) != 'undefined'
  			&& typeof(sessionStorage.session_id) != 'undefined'
	  	){
	  		this.navigate("dashboard", {
	              trigger: true
	          });
	  	}else{
	  		this.navigate("login", {
	              trigger: true
	        });
	  	}
	},
	  	//背板固件跟新
    	BPFirmwareUpgrade: function() {
            this.preSwitch();
            this.setView(BPFirmwareUpgradeView);
            this.postSwitch();
        },

        RoleGroupActiveDirectoryEdit: function () {
            this.preSwitch();
            this.setView(RoleGroupActiveDirectoryEditItemView);
            this.postSwitch();
        },
        RoleGroupLdapEdit: function () {
            this.preSwitch();
            this.setView(RolegroupLdapEditItemView);
            this.postSwitch();
        },
        AdvancedRadius: function () {
            this.preSwitch();
            this.setView(AdvancedRadiusView);
            this.postSwitch();
        },
        GeneralRadius: function () {
            this.preSwitch();
            this.setView(GeneralRadiusView);
            this.postSwitch();
        },
        RoleGroupActiveDirectory: function () {
            this.preSwitch();
            this.setView(RoleGroupActiveDirectoryView);
            this.postSwitch();
        },
        GeneralActiveDirectory: function () {
            this.preSwitch();
            this.setView(GeneralActiveDirectoryView);
            this.postSwitch();
        },
        RoleGroupLdap: function () {
            this.preSwitch();
            this.setView(RoleGroupLdapView);
            this.postSwitch();
        },
        FwimageLocation: function () {
            this.preSwitch();
            this.setView(FwimageLocationView);
            this.postSwitch();
        },
        SettingNetworkNcsi: function () {
            this.preSwitch();
            this.setView(NcsiView);
            this.postSwitch();
        },
		SettingsExtUsersLdapGeneralLdap: function() {
	        this.preSwitch();
	        this.setView(GeneralLdapView);
	        this.postSwitch();
	    },

		//媒体重定向
		SettingsMedia: function() {
	        this.preSwitch();
	        this.setView(MediaView);
	        this.postSwitch();
	    },

		//备份配置
		MaintenanceBackupRestoreConfig: function() {
	        this.preSwitch();
	        this.setView(BackupRestoreConfigView);
	        this.postSwitch();
	    },

		//SEL日志设置
		generalLog: function() {
		    this.preSwitch();
		    this.setView(GeneralLogView);
		    this.postSwitch();
		},

		//告警设置
		alarmSettings: function() {
			this.preSwitch();
			this.setView(AlarmSettingsView);
			this.postSwitch();
		},

		//存储系统
		storageSystem: function() {
            this.preSwitch();
            this.setView(StorageSystemView);
            this.postSwitch();
        },

        //屏幕截屏
        screenShot: function() {
        	this.preSwitch();
        	this.setView(ScreenShotView);
        	this.postSwitch();
        },

		//登录控制
        loginControl: function() {
            this.preSwitch();
            this.setView(LoginControlView);
            this.postSwitch();
        },
        // lz_ks20180730_ssl
        //查看ssl控制
        viewSSLControl: function() {
            this.preSwitch();
            this.setView(ViewSSLView);
            this.postSwitch();
        },
        //生成ssl控制
        generateSSLControl: function() {
            this.preSwitch();
            this.setView(GenerateSSLView);
            this.postSwitch();
        },
        //       //上传ssl控制
        uploadSSLControl: function() {
            this.preSwitch();
            this.setView(UploadSSLView);
            this.postSwitch();
        },
        //BIOS设置
        biosSetting: function() {
        	this.preSwitch();
        	this.setView(BiosSettingView);
        	this.postSwitch();
        },
        //实时监控
        monitoring: function() {
            this.preSwitch();
            this.setView(MonitoringView);
            this.postSwitch();
        },
        //系统维护
        systemMaintenance: function() {
            this.preSwitch();
            this.setView(SystemMaintenanceView);
            this.postSwitch();
        },
        //BMC设置
        longRangeControl: function() {
        	this.preSwitch();
        	this.setView(LongRangeControlView);
        	this.postSwitch();
        },
        //系统信息
        systemInfo: function() {
        	this.preSwitch();
        	this.setView(SystemInfoView);
        	this.postSwitch();
        },
        //开机自检
        selfInspection: function() {
        	this.preSwitch();
        	this.setView(SelfInspectionView);
        	this.postSwitch();
        },
        //概览信息
        overview: function() {
        	this.preSwitch();
        	this.setView(Overview);
        	this.postSwitch();
        },
        //资产信息
        assetInformation: function() {
        	aI_afterRender_flag = false;
            this.preSwitch();
            this.setView(AssetInformationView);
            this.postSwitch();
        },
        //硬件监控
        hardwareMonitor: function() {
        	hM_afterRender_flag = false;
        	this.preSwitch();
        	this.setView(HardwareMonitorView);
        	this.postSwitch();
        },

		 //ZQ
        IDLEDCtrl: function() {
                this.preSwitch();
                this.setView(IDLEDControlView);
                this.postSwitch();
            },

        //add by zh
        POWRESCtrl: function() {
                this.preSwitch();
                this.setView(PowerRestoreControlView);
                this.postSwitch();
            },

            //add by zh
        FIRSTBOOT: function() {
                this.preSwitch();
                this.setView(FirstBootDeviceView);
                this.postSwitch();
            },

          //add by zh
        COOLPOLICY: function() {
                this.preSwitch();
                this.setView(CoolPolicyView);
                this.postSwitch();
            },

          //add by zh
        POWERBUTTONLOCK: function() {
                this.preSwitch();
                this.setView(PowerButtonLockView);
                this.postSwitch();
            },

            //add by zh
        POWERHOTSTANDBY: function() {
                this.preSwitch();
                this.setView(PowerHotStandbyView);
                this.postSwitch();
            },

          //add by zh
        MEPOWERPOLICY: function() {
                this.preSwitch();
                this.setView(MEPowerPolicyView);
                this.postSwitch();
            },

        //add by zh
        HISTORYRECORD: function() {
                this.preSwitch();
                this.setView(historyrecordView);
                this.postSwitch();
            },

            //zhanghao 20160903
        TroubleShootView: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(TroubleShootView);
            this.postSwitch();
        },

		 //add by zh
        BIOSFirmwareUpgrade: function() {
                this.preSwitch();
                app.clearPolls();
                this.setView(BIOSFirmwareUpgradeView);
                this.postSwitch();
            },

          //add by zh
        CPLDFirmwareUpgrade: function() {
                this.preSwitch();
                app.clearPolls();
                this.setView(CPLDFirmwareUpgradeView);
                this.postSwitch();
            },

          //add by lz
        PSUFirmwareUpgrade: function() {
                this.preSwitch();
                app.clearPolls();
                this.setView(PSUFirmwareUpgradeView);
                this.postSwitch();
                },

        //liuyje 2016-07-29
        DumpBMCBlackInfo: function() {
        	this.preSwitch();
            app.clearPolls();
            this.setView(DumpBMCBlackInfoView);
            this.postSwitch();
        },

        //zhanghao    20170929
        preserve_configuration: function() {
        	this.preSwitch();
            app.clearPolls();
            this.setView(preserve_configurationView);
            this.postSwitch();
        },

        restore_configuration: function() {
        	this.preSwitch();
            app.clearPolls();
            this.setView(restore_configurationView);
            this.postSwitch();
        },
        //end add

		SNMPSettings: function(){
            this.preSwitch();
            this.setView(SNMPSettingsView);
            this.postSwitch();
        },
        BadPasswordSettings:function(){
		    this.preSwitch();
			this.setView(BadPasswordSettingsView);
			this.postSwitch();
		},

		//ZQ
        serverConfiguration: function() {
            this.preSwitch();
            this.setView(ServerConfigView);
            this.postSwitch();
        },

        //add by zh
        MEPOLICYEDIT: function() {
			this.preSwitch();
			this.setView(MEPolicyEditView);
			this.postSwitch();
		},

		/* 以下为 2016-12-03 新版同步数据 */

        login: function() {
            app.useLayout("layouts/login");
            app.layout.setView(".login-view", new LoginView()).render();
        },

        logout: function() {
            if (confirm(locale.logout_confirm_msg)) {
                app.logout(function() {
                    document.cookie = "refresh_disable=1;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "QSESSIONID=1;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    app.router.navigate("login");
                    location.reload();
                });
            }else{
                if(Backbone.history.fragment == "logout"){
                    window.history.back();
                }else{
                    Backbone.history.loadUrl(Backbone.history.fragment);
                }
            }
        },

        //设置传感器阈值    张昊
        SettingsSensorThresholds: function() {
        	this.preSwitch();
        	this.setView(SensorThresholdsView);
        	this.postSwitch();
        	},


        SettingsMediaGeneral: function() {
            this.preSwitch();
            this.setView(GeneralView);
            this.postSwitch();
        },
		 RemoteControlPopUpView: function() {
            this.preSwitch();
            this.setView(RemotePopUpView);
            this.postSwitch();
        },

		GeneralFirewallRulesEditItem: function(id) {
            this.preSwitch();
            this.setView(GeneralFirewallRulesEditItemView);
            this.postSwitch();
        },
        SettingsFirewallGeneralFirewallSettingsGeneralFirewallRules: function() {
            this.preSwitch();
            this.setView(GeneralFirewallRulesView);
            this.postSwitch();
        },
		SettingsBsod: function() {
            this.preSwitch();
            this.setView(BsodView);
            this.postSwitch();
        },
		SettingsMediaJavasol: function() {
            this.preSwitch();
            this.setView(JavasolView);
            this.postSwitch();
        },
        SettingsNetworkIp: function() {
            this.preSwitch();
            this.setView(IpView);
            this.postSwitch();
        },

        SettingsNetworkBond: function() {
            this.preSwitch();
            this.setView(BondView);
            this.postSwitch();
        },

		UsersEditItem: function(id) {
            this.preSwitch();
            this.setView(UsersEditItemView);
            this.postSwitch();
        },
            //ks_lz20180904_usergroup ++
            UserGroupsEditItem: function(id) {
                this.preSwitch();
                this.setView(UserGroupsEditItemView);
                this.postSwitch();
            },
        SettingsUsers: function() {
            this.preSwitch();
            this.setView(UsersView);
            this.postSwitch();
        },
        SettingsServiceSessions: function() {
            this.preSwitch();
            this.setView(ServiceSessionsView);
            this.postSwitch();
        },
        ServicesEditItem: function(id) {
            this.preSwitch();
            this.setView(ServicesEditItemView);
            this.postSwitch();
        },
        SettingsServices: function() {
            this.preSwitch();
            this.setView(ServicesView);
            this.postSwitch();
        },
        HpmFirmwareUpdate: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(HpmFirmwareUpdateView);
            this.postSwitch();
        },
        NmFirmwareUpdate: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(NmFirmwareUpdateView);
            this.postSwitch();
        },

        MaintenanceFirmwareUpgrade: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(FirmwareUpgradeView);
            this.postSwitch();
        },
        MaintenancedualFirmwareUpgrade: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(dualFirmwareUpgradeView);
            this.postSwitch();
        },
        MaintenancedualImageConfig: function() {
            this.preSwitch();
            app.clearPolls();
            this.setView(DualImageconfigView);
            this.postSwitch();
        },
        DnsSettings: function() {
            this.preSwitch();
            this.setView(DnsSettingsView);
            this.postSwitch();
        },

        //add by zhanghao    20170619
        ImageRedirection: function() {
            this.preSwitch();
            this.setView(ImageRedirectionView);
            this.postSwitch();
        },
        //end add

		ImageRedirectionLmedia: function() {
            this.preSwitch();
            this.setView(LmediaView);
            this.postSwitch();
        },

        ImageRedirectionRmedia: function() {
            this.preSwitch();
            this.setView(RmediaView);
            this.postSwitch();
        },

        //add by zhanghao 20170703
        SettingsPef: function() {
        	this.preSwitch();
        	this.setView(PefView);
        	this.postSwitch();
        	},
        	//end add

        EventFiltersEditItem: function(filter) {
            this.preSwitch();
            this.setView(EventFiltersEditItemView);
            this.postSwitch();
        },
        SettingsPefEventFilters: function() {
            this.preSwitch();
            this.setView(EventFiltersView);
            this.postSwitch();
        },
        LanDestinationEditItem: function(filter) {
            this.preSwitch();
            this.setView(LanDestinationEditItemView);
            this.postSwitch();
        },
        SettingsLanDestinations: function() {
            this.preSwitch();
            this.setView(LanDestinationView);
            this.postSwitch();
        },
        DateTimeSettings: function() {
            this.preSwitch();
            this.setView(DateTimeSettingsView);
            this.postSwitch();
        },
		SettingsRaidManagementCreateLogicalDevice: function() {
            this.preSwitch();
            this.setView(CreateLogicalDeviceView);
            this.postSwitch();
        },
        SystemInventoryInfoEditItem: function(id) {
            this.preSwitch();
            this.setView(SystemInventoryInfoEditItemView);
            this.postSwitch();
        },
        SystemInventoryInfo: function() {
            this.preSwitch();
            this.setView(SystemInventoryInfoView);
            this.postSwitch();
        },
        dashboard: function(event) {
            this.preSwitch();

            this.setView(DashboardView);

            /*switch (event) {
                    case "event-month":

                        break;
                    case "event-week":

                        break;
                }
            */
            this.postSwitch();
            //this.navigate("user-login", {trigger: true});
        },

        eventLog: function(filter) {
            this.preSwitch();
            this.setView(EventLogView);
            this.postSwitch();
        },

        systemLog: function() {
            this.preSwitch();
            this.setView(SystemLogView);
            this.postSwitch();
        },
        auditLog: function() {
            this.preSwitch();
            this.setView(AuditLogView);
            this.postSwitch();
        },
        videoLog: function() {
            this.preSwitch();
            this.setView(VideoLogView);
            this.postSwitch();
        },

        sensors: function() {
        	if(!app.afterInitPolling){
        		app.afterInitPolling = true;
        		/*初始化Sensor同步刷新*/
                app.initPollingEventHandlers();
        	}
            this.preSwitch();
            app.setPolls();

            this.setView(SensorView);
            this.postSwitch();
        },

        sensorDetails: function(id) {
        	if(!app.afterInitPolling){
        		app.afterInitPolling = true;
        		/*初始化Sensor同步刷新*/
                app.initPollingEventHandlers();
        	}
            this.preSwitch();
            app.setPolls();

            this.setView(SensorDetailsView);
            this.postSwitch();
        },

        fru: function() {
            this.preSwitch();
            this.setView(FRUView);
            this.postSwitch();
        },

        settings: function() {
            this.preSwitch();
            this.setView(SettingsView);
            this.postSwitch();
        },

        remoteControl: function() {
           // this.preSwitch();
            app.clearPolls();
            //this.setView(RemoteControlView);
            //this.postSwitch();
			 //opening the KVM in without header.menus etc..
            app.useLayout("layouts/withoutmenu");
            app.layout.setView(".center-side", new RemoteControlView()).render();
        },

        powerControl: function() {
            this.preSwitch();
            this.setView(PowerControlView);
            this.postSwitch();
        },

        tasks: function() {
            this.preSwitch();
            this.setView(TaskEventsView);
            this.postSwitch();
        },

        taskDetails: function(id) {
            this.preSwitch();
            this.setView(TaskDetailsView);
            this.postSwitch();
        },

        scripts: function() {
            this.preSwitch();
            this.setView(ScriptsView);
            this.postSwitch();
        },

        store: function() {
            this.preSwitch();
            this.setView(StoreView);
            this.postSwitch();
        },

        updates: function() {
            this.preSwitch();
            this.setView(UpdatesView);
            this.postSwitch();
        },

        help: function() {
            this.preSwitch();
            this.setView(HelpView);
            this.postSwitch();
        },
		SettingsVideoAutoPreEvent: function() {
            this.preSwitch();
            this.setView(PreEventView);
            this.postSwitch();
        },
		SettingsVideoSolSolRecordedVideo: function() {
            this.preSwitch();
            this.setView(SolRecordedVideoView);
            this.postSwitch();
        },
		SettingsVideoAutoTriggerSettings: function() {
            this.preSwitch();
            this.setView(TriggerSettingsView);
            this.postSwitch();
        },
		SettingsVideoSolSolTriggerSettings: function() {
            this.preSwitch();
            this.setView(SolTriggerSettingsView);
            this.postSwitch();
        },

        preSwitch: function() {

            /*sugon_Song_tapd1002086_2019-01-15 优化dashboard界面切换到其他界面后，仍有请求未完成，影响性能*/
            var dashboardFuncArr = [app.serverinfoFunc, app.fwinfoFunc, app.dictnetinfoFunc, app.sharenetinfoFunc, app.serverstateFunc, app.cpuusageFunc, app.memusageFunc, app.alarmDetailsFunc];

            for (var i=0; i<dashboardFuncArr.length; i++) {
                if(dashboardFuncArr[i] != undefined) {
                    dashboardFuncArr[i].abort();
                }
            }

            if (app.lastActiveView) {
                if (app.lastActiveView.timer) clearInterval(app.lastActiveView.timer);
                app.lastActiveView.trigger("close");
            }

            /*if(!app.polling && !app.manualStopPoll) {
            	执行Sensor同步刷新
                app.setPolls();
            }*/

        	//默认关闭Sensor同步刷新		系统优化 2017-07-27
            app.clearPolls();

            //监听窗口关闭事件			系统优化 2017-08-21
            app.beforeunload();

            if(window._video && window._video.running) {
                window._video.sock.close();
            }

            if (!document.cookie) {
                /*this.navigate("login", {
                    trigger: true
                });*/
                app.router.navigate("login");
                location.reload();
                throw new Error("Not Authorized");
            }/*else{
                if(!sessionStorage.getItem("garc") || sessionStorage.getItem("garc") == null){
                    app.logout();
                    document.cookie = "QSESSIONID=1;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    app.router.navigate("login");
                    location.reload();
                }
            }*/

            if (!app.afterLoginInit) {
                app.afterLoginInit = true;

                //app.layout.setView(".notifications-menu", new NotificationsView()).render();
                //app.layout.setView(".messages-menu", new MessagesView()).render();
                //new UserTasksView().render().$el.prependTo(".navbar-nav");
                new NotificationsView().render().$el.prependTo(".navbar-nav");
                new MessagesView().render().$el.prependTo(".navbar-nav");

            }
        },

        postSwitch: function() {

            var that = this;



            setTimeout(function () {
                that.sideBar();
            }, 1);

            that.breadcrumb();

            app.featureFilter();

            app.licensesFilter();

            app.runtime_configurations.fetch({
                success: function() {
                    app.runtimeFeatureFilter();
                }
            });

            //check and close log tree
            /*if (location.hash.indexOf('#logs') == -1) {
                if ($("a[href='#logs']").find(".fa-angle-down").length !== 0) {
                    $("a[href='#logs']").click();
                }
            }*/

            if(location.hash.indexOf('#logs') == -1) {
            	if ($("a[href='#logs']").find(".fa-angle-down").length !== 0) {
            		$("a[href='#logs']").click();
            	}
            }

            if (location.hash.indexOf('#maintenance') == -1) {
            	if ($("a[href='#maintenance']").find(".fa-angle-down").length !== 0) {
            		$("a[href='#maintenance']").click();
            	}
            }

            app._fix();
            if ($(window).width() <= 992) {
                if ($(".row-offcanvas-left").hasClass("active")) {
                    $("[data-toggle='offcanvas']").click();
                }
            }
        },

        setView: function(View) {
            var view = new View();

            app.layout.setView(".right-side", view).render();
            app.lastActiveView = view;
            /*if (this.loaded !== true) {
                    this.loaded = true;
                } else {
                    app.layout.setView(".right-side", new View()).render();
                }
             */
        },

        sideBar: function () {
            var hash = window.location.hash;
            var firstMenuDom; //一级菜单
            var menuDom;      //二级菜单
            var menuDomHref;
            var hrefArr = []; //sidebar中所有href
            var firstHrefMenuArr = []; //sidebar中所有first href

            /*record history link TapdId1001653	by Song 2018-12-11*/
            if(!localStorage.getItem('lastLink')) {
                localStorage.setItem('lastLink', '#dashboard');
                localStorage.setItem('currentLink', hash);
            }else {
                localStorage.setItem('lastLink', localStorage.getItem('currentLink'));
                localStorage.setItem('currentLink', hash);
            }

            $.each($('.sidebar a'), function () {
                hrefArr.push($(this).attr('href'));
            });

            $.each($('.sidebar .first-menu-text'), function () {
                firstHrefMenuArr.push($(this).attr('href'));
            });

            if(hrefArr.indexOf(hash) == -1) {
                //不存在sidebar中,为tab界面
                if(isNaN(hash.split('/').pop())) {
                    //tab类别界面
                    if($('.tabs-content .menu_tab').first().hasClass('menu_active')) {
                        //第一个Tabmenu高亮，取my-tabs第一个href
                        menuDomHref = $('.my-tabs').find('a').first().attr('onclick').replace('replace_url(\'', '').replace('\')', '');
                    }else {
                        //否则取tabs-content第一个href
                        menuDomHref = $('.tabs-content').find('a').first().attr('onclick').replace('replace_url(\'', '').replace('\')', '');
                    }
                }else {
                    //Number service item/user userGroup item/event log/sensor_thresholds
                    var hashArr = hash.split('/');
                    hashArr.pop();
                    /*sugon_Song_tapd1002223_2019-01-30*/
                    if(hashArr.join('/') == '#settings/sensor_thresholds') {
                        //传感器阈值
                        menuDomHref = '#sensors';
                    }else {
                        hashArr.pop();
                        if(hashArr.join('/') == '#settings/user_groups'){
                            //用户组编辑
                            menuDomHref = "#settings/users";
                        }else if(hashArr.join('/') == '#logs') {
                            //日志查询
                            menuDomHref = "#logs/event-log";
                        }else {
                            menuDomHref = hashArr.join('/');
                        }
                    }
                }
            }else {
                //在sidebar中
                menuDomHref = hash;
            }


            $.each($('.sidebar a'), function () {
                //遍历找出sidebar中位置
                if(firstHrefMenuArr.indexOf(menuDomHref) != -1) {
                    //一级菜单
                    if($(this).attr('href') == menuDomHref) {
                        firstMenuDom = $(this);

                        //sidebar高亮处理
                        if(firstMenuDom.next().css('display') == 'none' || menuDomHref=="#dashboard") {
                            firstMenuDom.click();
                        }
                        $('.sidebar-menu li').removeClass('active');
                        firstMenuDom.parent().addClass('active');
                    }
                }else {
                    //二级菜单
                    if($(this).attr('href') == menuDomHref) {
                        menuDom = $(this);
                        firstMenuDom = $(this).parents('.treeview-menu').prev();
                        //sidebar高亮处理
                        if(firstMenuDom.next().css('display') == 'none') {
                            firstMenuDom.click();
                        }
                        $('.sidebar-menu li').removeClass('active');
                        firstMenuDom.parent().addClass('active');
                        menuDom.parent().addClass('active');
                    }
                }
            });


        },

        breadcrumb: function () {
            var that = this;
            $('.breadcrumb a').bind('click', function () {
                that.sideBar();
            });
        },

    });

    return Router;
});
