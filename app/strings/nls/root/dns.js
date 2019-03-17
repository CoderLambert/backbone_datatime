define({
    "home": "Home",
    "settings": "BMC Settings",
    "network_setting":"Network Settings",
    "title": "DNS Configuration",
    "dns_settingsdomain_name_server_configuration": "Domain Name Server Configuration",
    "strongSuccessMsg": "DNS configuration has been reset successfully. It will take few seconds to bring up the interface again. Please close this browser session and open a new browser session to connect to the device with new IP",
    "successMsg": "---Logout",
    "strongFailureMsg": "Error in saving DNS Configuration",
    "failureMsg": "",
    "saveConfirmLabel": "Saving DNS settings will restart the BMC's network services. The web UI will be inaccessible until network services are back online. Do you want to continue?",
    "dns_settingsbmc_reg": "BMC Registration Settings",
    "dns_settingsreg_count": "reg count",
    "dns_settingsip_count": "ip count",
    "dns_settingsdns_enabled": "DNS Enabled",
    "dns_settingscheck_this_box_to_enable_all_dns_services": "Check this box to enable all DNS services",
    "dns_settings": "",
    "dns_settingshost_name_setting": "Host Name Setting",
    "dns_settingsautomatic": "Automatic",
    "dns_settingsmanual": "Manual",
    "dns_settingsselect_whether_the_host_name_will_be_configured_manually_or_automatically": "Select whether the host name will be configured manually or automatically.",
    "dns_settingshost_name": "Host Name",
    "dns_settingsif_automatic_host_name_configuration_was_selected_above_this_field_displays_the_automatic_hostname_else_use_to_specify_the_hostname_of_the_device": "If Automatic Host Name Settings was selected , this field displays the hostname automatically, else  specify the hostname of the device.",
    "dns_settingsbmc_interface": "BMC Interface: ",
    "dns_settingschoose_the_bmcs_network_port_to_register_with_dns_settigs_check_the_option_register_bmc_to_register_with_dns_settings": "Choose the BMC's network port to register with DNS settigs. Check the option 'Register BMC' to register with DNS settings.",
    "dns_settingsregister_bmc": "Register BMC",
    "dns_settingsregistration_method": "Registration method:",
    "dns_settingsnsupdate": "Nsupdate",
    "dns_settingsdhcp_client_fqdn": "DHCP Client FQDN",
    "dns_settingshostname": "Hostname",
    "dns_settingsul_libnsupdateb_register_with_the_dns_server_using_the_nsupdate_applicationli_libdhcp_client_fqdnb_register_with_the_dns_server_using_dhcp_option_81li_libhostnameb_register_with_the_dns_server_using_dhcp_option_12li_ul_bnoteb_hostname_option_should_be_selected_if_the_dhcp_server_does_not_support_option_81": "<ul> <li><b>Nsupdate<\/b> - Register with the DNS server using the nsupdate application<\/li> <li><b>DHCP Client FQDN<\/b> - Register with the DNS server using DHCP option 81.<\/li> <li><b>Hostname<\/b> - Register with the DNS server using DHCP option 12.<\/li> <\/ul> <b>NOTE:<\/b> Hostname option should be selected if the DHCP server does not support option 81.",
    "dns_settingsmdns_enabled": "mDNS Enabled",
    "dns_settingscheck_this_box_to_enable_multicast_dns": "Check this box to enable Multicast DNS",
    "dns_settingscheck_this_box_to_modify_tsig_authentication_for_both_eth0_and_eth1":"Check this box to modify TSIG authentication for both interfaces.",
    "tsig_configuration":"TSIG Configuration",
    "dns_settingstsig_authentication_enabled": "TSIG Authentication Enabled",
    "dns_settingscheck_this_box_to_enable_tsig_authentication_while_registering_dns_via_nsupdate": "Check this box to enable TSIG authentication while registering DNS via nsupdate.",
    "dns_settingscurrent_tsig_private_file": "Current TSIG Private File",
    "dns_settingsdisplays_the_current_tsig_private_file_and_its_upload_date_readonly": "Displays the current TSIG private file and its upload date (Read-Only)",
    "dns_settingstsig_private_file_date": "TSIG Private file date",
    "dns_settingsdisplays_current_tsig_private_key_file_date": "Displays current TSIG private key file date",
    "dns_settingsnew_tsig_private_file": "New TSIG Private File",
    "dns_settingsbrowse_for_a_new_tsig_private_file_to_upload": "Browse for a new TSIG private file to upload.",
    "dns_settingsdomain_setting": "Domain Setting",
    "dns_settingsselect_whether_the_domain_interface_will_be_configured_manually_or_automatically": "Select whether the domain interface will be configured manually or automatically.",
    "dns_settingsdomain_interface": "Domain Interface",
    "dns_settingsspecify_the_domain_interface": "Specify the domain interface.",
    "dns_settingsdomain_name": "Domain Name",
    "dns_settingsdisplays_the_domain_name_of_the_device_or_if_manual_was_selected_specify_the_domain_name_of_the_device": "Displays the domain name of the device, or, if 'Manual' was selected, specify the domain name of the device.",
    "dns_settingsdomain_name_server_setting": "Domain Name Server Setting",
    "dns_settingsselect_whether_the_dns_interface_will_be_configured_manually_or_automatically": "Select whether the DNS interface will be configured manually or automatically.",
    "dns_settingsdns_interface": "DNS Interface",
    "dns_settingsspecify_the_interface_to_be_used": "Specify the interface to be used.",
    "dns_settingsip_priority": "IP Priority",
    "dns_settingsipv4": "IPv4",
    "dns_settingsipv6": "IPv6",
    "dns_settingsif_ip_priority_is_ipv4_2_ipv4_and_1_ipv6_dns_servers_are_used_if_ip_priority_is_ipv6_1_ipv4_and_2_ipv6_dns_servers_are_used": "If IP priority is IPv4, 2 IPv4 and 1 IPv6 DNS servers are used. If IP priority is IPv6, 1 IPv4 and 2 IPv6 DNS servers are used.",
    "dns_settingsdns_server_1": "DNS Server 1",
    "dns_settingsspecify_the_dns_domain_name_system_server_address_to_be_configured_for_the_bmc_ul_liipv4_addresses_should_be_given_in_dotted_decimal_representationliliipv6_addresses_are_supported_and_must_be_global_unicast_addressesliul": "Specify the DNS (Domain Name System) server address to be configured for the BMC. <ul> <li>IPv4 Addresses should be given in dotted decimal representation.<\/li><li>IPv6 Addresses are supported and must be global unicast addresses.<\/li><\/ul>",
    "dns_settingsdns_server_2": "DNS Server 2",
    "dns_settingsdns_server_3": "DNS Server 3",
    "domain_name_must_consist_of_two_or_more_alphanumeric_labels_separated_by_periods_eg_subdomainexamplecom_the_total_length_of_the_domain_name_string_must_be_less_than_256_characters": "Domain name must consist of two or more alphanumeric labels separated by periods, e.g. 'sub.domain.example.com'. The total length of the domain name string must be less than 256 characters.",

    "invalid_domain_name_refer_help_for_more_information": "Invalid Domain Name. Refer help for more information.",
    "invalid_host_name_refer_help_for_more_information": "Invalid Host Name. Refer help for more information.",
    "invalid_dns_server_address_1refer_help_for_more_information": "Invalid DNS Server Address1. Refer help for more information.",
    "invalid_dns_server_address_2refer_help_for_more_information": "Invalid DNS Server Address2. Refer help for more information.",
    "invalid_dns_server_address_3refer_help_for_more_information": "Invalid DNS Server Address3. Refer help for more information.",
    "required_domain_interface": "Required Domain Interface.",
    "required_dns_interface": "Required DNS Interface.",
    "required_ip_priority": "Required IP Priority.",
    "saveLabel": "Save",
    "network_shared_lan":"Shared Lan",
    "network_dedicated_lan":"Dedicated Lan",
    "nt_ip": "Network IP Settings",
    "nt_bond": "Network Bond Configuration",
    "nt_dns": "DNS Configuration",
    "nt_ncsi": "Sideband Interface (NC-SI)",
    "Not_Available":"Not Available",    //ks_lz20181013_NOT_Available ++
});