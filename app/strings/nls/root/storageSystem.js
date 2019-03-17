define({
   "title" : "Storage System",
   "home" : "Home",
   "systeminfo":"System Information",
   "load" : "Loading",
   "undata" : "No data",
   "no_raid_controller" : "There is no information of the Controller.",
   "physical_undata" : "There is no information of the Physical Disk.",
   "logical_undata" : "There is no information of the Logical Disk.",
   "no_raid_bbu" : "There is no information of the BBU.",
   "eventLog_undata" : "There is no the Raid Event Log.",
   "operation_succeeded": "Operation Succeeded!",
   "operation_failed": "Operation failed, try again later.",

   "controller_info" : "Controller Info",
   "physical_disk" : "Physical Disk",
   "logical_disk" : "Logical Disk",
   "bbu" : "BBU",
   "event_logs" : "Event Logs",
   "serial_number" : "Serial Number",
   "package_version" : "Firmware Package Version",
   "bios_version" : "BIOS Version",
   "hii_version" : "HII Version",
   "expander_version" : "Expander Version",
   "seeprom_version" : "NVDATA Version",
   "cpld_version" : "CPLD Version",
   "pci_vendor_id" : "Vendor ID",
   "pci_device_id" : "Device ID",
   "pci_subvendor_id" : "SubVendor ID",
   "pci_subsystem_id" : "SubDevice ID",
   "roc_temp" : "ROC Temp (°C)",
   "expander_temp" : "Expander Temp (°C)",
   "tmm_status" : "TMM Size (MB)",
   "app_version":"Firmware Version",
   "firmware_time":"Firmware Build Time",
   "device_interface":"Device Interface",
   "host_interface":"Host Interface",
   "sas_Addr":"SAS Address",
   "PD_count":"Physical Drive Count",
   "VD_count":"Virtual Drive Count",
   "nvram_size":"NVRAM Size(KB)",
   "memory_size":"Memory Size(MB)",
   "flash_size":"Flash Size(MB)",
   "stripesize_min":"Min Strip Size(KB)",
   "stripesize_max":"Max Strip Size(KB)",
   "spindown_time":"Spin Down Time(Minutes)",
   "rebuild_rate":"Rebuild Rate",
   "bgi_rate":"Back Ground Init(BGI) Rate",
   "cc_rate":"Consistency Check(CC) Rate",
   "recon_rate":"Reconstruction Rate",
   "predfail_poll_interval":"S.M.A.R.T Polling",
   "cache_flush_interval":"Cache Flush Interval(s)",
   "spinup_drive_count":"Spinup Drive Count",
   "spinup_delay":"Spinup Delay",
   "port_count":"Port Count",
   "maintain_PdFailHistory":"Maintain PD Fail History",
   "disable_BatteryWarning":"Battery Warning",
   "disable_AutoRebuild":"AutoRebuild",
   "disable_copyBack":"Smart Copyback Enable",
   "enable_alarm":"Alarm Control",
   "coercion_Mode":"Coercion Mode",
   "disable_NCQ":"NCQ",
   "enable_cluster":"Cluster Mode",
   "enable_SpinDownUnconfigured":"Unconfigured Good Spin Down",
   "disable_SpinDownHS":"Hot Spare Spin Down",
   "support_ShieldState":"Shield State Supported",
   "disable_CtrlR":"Control-R",

   "pd_ID": "ID",
   "device_id": "Device ID",
   "controller": "Controller",
   "media_type": "Media Type",
   "state": "State",
   "hot_spare": "HOT_SPARE",
   "offline": "Offline",
   "failed": "Failed",
   "rebuild": "Rebuild",
   "online": "Online",
   "JBOD":"JBOD",
   "copyback": "Coby Back",
   "shield_ug": "Middle State",
   "shield_ub": "Middle State",
   "shield_configured": "Middle State", 
   "slot": "Slot",
   "speed": "Speed",
   "link_speed": "Link Speed",
   "size_gb": "Size (GB)",
   "temp_c": "Temp (℃)",
   "vendor_id": "Vendor ID",
   "product_id": "Product ID",
   "pd_serial_number": "Serial Number",
   "power_state": "Power State",
   "interface_type": "Interface Type",
   "unconfigured_good": "UNCONFIGURED_GOOD",
   "unconfigured_bad": "UNCONFIGURED_BAD",
   "hot_spare": "HOT_SPARE",
   "offline": "Offline",
   "failed": "Failed",
   "rebuild": "Rebuild",
   "online": "Online",
   "speed_0": "Not Defined",
   "speed_1": "1.5Gb/s",
   "speed_2": "3.0Gb/s",
   "speed_3": "6.0Gb/s",
   "speed_4": "12.0Gb/s",
   "ps_state_0": "Spun Up",
   "ps_state_1": "Spun Down",
   "interface_type_0": "Unknown",
   "interface_type_1": "SCSI",
   "interface_type_2": "SAS",
   "interface_type_3": "SATA",
   "interface_type_4": "FC",

   "add_hotSpare": "Add HotSpare",
   "remove_hotSpare": "Remove HotSpare",
   "undo_prepare_for_removal": "Undo Prepare For Removal",
   "prepare_for_removal": "Prepare For Removal",
   "view_available_logical_devices": "View available Logical Devices to make Dedicated HotSpare",
   "locate_physical_device": "Locate Physical Device",
   "locate_physical_device_stop": "Stop Locate Physical Device",
   "add_as_dedicated_hotSpare": "Add as Dedicated HotSpare",
   // ks_lz_20190123_tapdid_1014201++>>
   "are_you_sure": "Are you sure to perform this operation?",
   "delete_virtual_confirm": "Deleting the RAID is risky and the data will be lost. Please be cautious and confirm again, if you want to delete.",
   "no_exist_logical_device": "Atleast one Logical device should exist to add a Dedicated HotSpare.",

   "ld_ID": "ID",
   "ld_name": "LD Name",
   "type": "Type",
   "read_policy": "Read Policy",
   "no_read_ahead": "No Read Ahead",
   "read_ahead": "Read Ahead",
   "write_policy": "Write Policy",
   "write_through": "Write Through",
   "write_back": "Write Back",
   "cache_policy": "Cache Policy",
   "direct_io": "Direct IO",
   "cache_io": "Cache IO",
   "access_policy": "Access Policy",
   "access_policy_0":"Read-Write",
   "access_policy_1":"Read Only",
   "access_policy_2":"Blocked",
   "no_phy_devices":"No.of Phy Devices",
   "logical_device_infostripe_size_mb": "Stripe Size (MB) ",
   "logical_device_infobgi": "BGI",
   "logical_device_infossd_caching": "SSD Caching",
   "logical_device_infoprogress": "Progress(%)",
   "logical_device_infobad_blocks_table": "Bad Blocks Table",
   "logical_device_infosize_gb": "Size (GB)",
   "logical_device_information": "Logical Device Information",
   "create_logical": "Create Virtual Device",

   "view_physical_disk": "View the physical disk information",
   "physical_disk_info": "The Physical Information for that RAID Controller: {controller} and Device ID of Logical Device: {devid}",
   "view_advanced_properties": "View Advanced Properties",
   "delete_virtual_device": "Delete Virtual Drive",
   "locate_virtual_device": "Locate Virtual Device",
   "locate_virtual_device_stop": "Stop Locate Virtual Device",
   "consistency_start": "Start Consistency Check",
   "consistency_cancel": "Cancel Consistency Check",
   "consistency_start_success":"Successfully to Start the Consistency Check.",
   "consistency_cancel_success":"Successfully to Cancel the Consistency Check.",
   "view_initialize_type": "View Initialize Type",
   "create_logical_devicefast_initialization": "Fast Initialization",
   "create_logical_deviceslow_initialization": "Slow/Full Initialization",
   "initialize":"Initialize",
   "initialization_success":"Successfully done the initialize Device.",






   "type_0":"RAID0",
   "type_1":"RAID1",
   "type_2":"RAID5",
   "type_3":"RAID6",
   "type_4":"RAID1E",
   "type_5":"RAID1E_RLQ0",
   "type_6":"RAID1E0_RLQ0",
   "type_7":"RAID00",
   "type_8":"RAID10",
   "type_9":"RAID50",
   "type_10":"RAID60",

   "offline": "Offline",
   "degraded": "Degraded",
   "rebuild": "Rebuild",
   "optimal": "Optimal",

   "no_read_ahead": "No Read Ahead",
   "read_ahead": "Read Ahead",

   "write_through": "Write Through",
   "write_back": "Write Back",

   "blocks_empty":"Empty",
   "blocks_not_empty":"Not Empty",

   "not_available":"N/A",
   "progress_0":"Unknown",
   "progress_1":"Rebuild",
   "progress_2":"BGI in progress",

   "enabled":"Enabled",
   "disabled":"Disabled",

   "create_logical":"Create Virtual Device",

   "unknown": "Unknown",
   "supercap": "SuperCap",
   "bbu": "BBU",
   "tbbu": "TBBU",
   "ibbu": "iBBU",
   "itbbu": "iTBBU",
   "battery_backup_subsystem_is_missing": "Battery Backup subsystem is missing",
   "battery_backup_subsystem_is_currently_initializing": "Battery Backup subsystem is currently initializing",
   "battery_backup_subsystem_is_ready": "Battery Backup subsystem is ready",
   "battery_backup_subsystem_is_executing_a_learning_cycle": "Battery Backup subsystem is executing a learning cycle",
   "battery_backup_subsystem_has_failed": "Battery Backup subsystem has failed",
   "super_capacitor_pack_has_exceeded_the_maximum_temperature_threshold": "Super capacitor pack has exceeded the maximum temperature threshold",
   "super_capacitor_pack_has_exceeded_the_warning_temperature_threshold": "Super capacitor pack has exceeded the warning temperature threshold",
   "super_capacitor_pack_is_over_voltage": "Super capacitor pack is over voltage",
   "battery_backup_subsystem_has_exceeded_the_maximum_charging_current": "Battery Backup subsystem has exceeded the maximum charging current",
   "battery_backup_subsystem_learning_cycle_has_passed": "Battery Backup subsystem learning cycle has passed",
   "battery_backup_subsystem_learning_cycle_has_failed": "Battery Backup subsystem learning cycle has failed",
   "bbu_infovoltage_mv": "Voltage (mV)",
   "bbu_infocurrent_ma": "Current (mA)",

   "all_events": "All Events",
   "event_type_1": "LD Events",
   "event_type_2": "PD Events",
   "event_type_3": "Enclosure Events",
   "event_type_4": "BBU Events",
   "event_type_5": "SAS Events",
   "event_type_6": "Controller Events",
   "event_type_7": "Configuration Events",
   "event_type_8": "Cluster Events",
   "clear_event_log":"Clear Event Log",
   "downLoad_event_log":"DownLoad Event Log",

   "record_id": "Record Id",
   "time_stamp": "Time Stamp",
   "event_code": "Event Code",
   "event_type": "Event Type",
   "event_class": "Event Class",
   "info_events": "Info Events",
   "warning_events": "Warning Events",
   "critical_events": "Critical Events",
   "fatal_events": "Fatal Events",
   "dead_events": "Dead Events",
   "progress_events": "Progress Events",
   "debug_events": "Debug Events",
   "event_desc":"Event Description",

   "clearLogConfirm" : "This operation will clear all logs. Do you really want to clear the logs ?",
   "clearLogCompletion" : "The log has been clearly successful.",


    //"logical_device_infostripe_size_mb_": "Stripe Size (MB) ",
    "logical_device_infostripe_size_mb_": "Stripe Size",
    "logical_device_infobgi": "BGI",
    "logical_device_infossd_caching": "SSD Caching",
    "logical_device_infoprogress": "Progress(%)",
    "logical_device_infobad_blocks_table": "Bad Blocks Table",
    "logical_device_infosize_gb": "Size (GB)",

    "bgi_enabled":"Enabled",
    "bgi_disabled":"Disabled",
    "ssd_enabled":"Enabled",
    "ssd_disabled":"Disabled",

    /* SAS卡信息 */
    "board_name": "Board Name",
    "sas_address": "SAS Address",
    "firmware_version": "Firmware Version",
    "nvdata_version": "NVDATA Version",
    "ioc_temp": "IOC Temp (°C)",

    "sasit_physical_device_infodevice_id": "Device ID",
    "sasit_physical_device_infovendor_id": "Vendor ID",
    "sasit_physical_device_infoproduct_id": "Product ID",
    "sasit_physical_device_infoserial_number": "Serial Number",
    "sasit_physical_device_infofw_revision": "FW Revision",
    "sasit_physical_device_infopower_state": "Power State",
    "sasit_physical_device_infointerface_type_": "Interface Type",
    "scsi": "SCSI",
    "sas": "SAS",
    "sata": "SATA",
    "fc": "FC",
    "sasit_physical_device_infosmart": "SMART",
    "na": "N\/A",
    "errors_detected": "Errors Detected",
    "errors_not_detected": "Errors Not Detected",

    "topology_information": "Topology Information",

    "hide_initialize_type": "Hide Initialize Type",
    "show_more_info": "Show more information",
    "hide_more_info": "Hide more information",
});
