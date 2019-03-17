define({
	//Privilege Error Message
    "non_privilege_user_error_message": "您没有权限查看此内容。",

    "error_code_1055": "媒体重定向进行中。不能更改 VMedia 实例。",
    "error_code_1161": "无效的远程日志服务器。",
    "error_code_1194": "Radius 配置未启用。",
    "error_code_9400": "Active Directory 配置未启用。",
    "error_code_9460": "此角色组名称已存在于角色组域中。",
    "error_code_1131": "当前 PAM 顺序未改变。",
    "error_code_1199": "端口已经被使用",
    "error_code_1018": "主要与次要  NTP 服务器是无效的。",
    "error_code_1246": "该用户已存在，请使用其他用户名并重试一次" ,
    //Lan destination error messages
    "error_code_1365": "主机处于断电状态" ,//yjj  revise
    "error_code_10015": "此用户不存在。",
    "error_code_10016": "此用户未配置电子邮件 ID",
    "error_code_10022": "无法传送测试警报，因为用户访问被禁用",
    "error_code_10211": "无法传送警报到配置的电子邮件 ID",
    "error_code_10128": "SMTP 服务器不支持此身份认证类型",
    "error_code_10129": "SMTP 服务器认证失败",
    "error_code_10130": "无法连线到 SMTP 服务器",

    // Restore config Error message
    "error_code_11255": "无效的备份文件 ",
    "error_code_1151": "角色群组名称已存在于角色群组网域内。",

    //Audit Log Issues
    "error_code_1294":"审计日志被停用。请参考“帮助”。",

    //Media Redirection Error messages
    "error_code_1402": "侦测不到 SD 卡",
    "error_code_1407": "临时性挂载失败，可能远端分享端有问题或未使能的媒体类型.",
    "error_code_9461": "AD 设置未使能.",
    "error_code_1143": "LDAP 设置未使能.",

    //video remote storage Error Messages
    "error_code_12000": "远程挂载失败!",
    "error_code_12001": "远程影像设定储存成功! 挂载设定将于下一次录像时执行.",

    //system inventory
    "error_code_11272":"现行的系统厂商资讯不可使用.",

    //network bond
    "error_code_1093": "不能储存网路绑定设定. 所选择的网路接口尚未启动." ,

    //Remote Session
    "error_code_12002":"KVM加密和单端口应用设定应同时设置." ,
    "error_code_12013":"单端口不能使用 : KVM / MEDIA 加密缺省时是可使用的." ,
    "error_code_12014":"单端口不能使用 : Active KVM / MEDIA 加密将不可使用." ,
    "error_code_1031": "在新增一个IP规则时出现问题.",
    "error_code_1032": "在新增一个port规则时出现问题.",
    "error_code_12005": "已上传的档案容量大于系统可用空间。请选择其他档案.",
    "error_code_12006": "无效的 IP 范围.",
    "error_code_1223": "无效的服务器位址.",
    "error_code_1193": "无效的服务器位址.",

    //Auto Video Logs
    "error_code_12007": "档案正在使用中，所以您无法删除。稍待一下可以再试",
    "error_code_12008": "这个路径上的档案不可使用.",
    "error_code_12009": "远程挂载失败.",
    "error_code_12012": "大档案容量. 请使用 Java player 应用程式.",

    //firmware Update
    "error_code_1310": "The SignImage Public Key 的档案大小超过了.",
    "error_code_1311": "The SignImage Public Key 的档案不存在.",
    "error_code_1312": "无法开启此档.SignImage 验证失败.",
    "error_code_1313": "The SignImage Public Key 验证失败. 请重新上传 the SignImage Public Key.",
    "error_code_1314": "The SignImage Public Key 验证失败. 请重新上传 the SignImage Public Key.",
    "error_code_1305": "镜像文件验证失败. 检察一下是否上传正确的镜像文件.设备需重开启才可以重新更新. 欲重开请按 OK  .",
    "error_code_1306": "镜像文件验证失败. 检察一下是否上传正确的镜像文件.设备需重开启才可以重新更新. 欲重开请按 OK .",
    "error_code_14540": "镜像文件验证失败. 检察一下是否上传正确的SignImage Public Key.设备需重开启才可以重新更新. 欲重开请按 OK .",
    "error_code_14543": "镜像文件验证失败.已上传的镜像文件不适用于此平台. 检察一下是否上传正确的镜像文件.设备需重开启才可以重新更新. 欲重开请按 OK.",
    "error_code_14549": "镜像文件验证失败.已上传的 SignImage Public Key 不对. 请重新上传正确的 SignImage Key. 设备需重开启才可以重新更新. 欲重开请按 OK.",
    "error_code_14551": "镜像文件验证失败.已上传的 SignImage Public Key 无效. 请重新上传正确的 SignImage Key. 设备需重开启才可以重新更新. 欲重开请按 OK.",
    "error_code_14552": "镜像文件验证失败.已存在的镜像文件需签名过. 请重新上传签名过的SignImage.设备需重开启才可以重新更新. 欲重开请按 OK.",
    "error_code_14553": "镜像文件验证失败.已存在的镜像文件需未签名过. 请重新上传未签名过的镜像文件. 设备需重开启才可以重新更新. 欲重开请按OK.",
    "error_code_14555": "无法烧进不同版本原始码库的档案. 请使用 YAFU. 设备需重开启才可以重新更新. 欲重开请OK.",

    //media_redirection error
    "error_code_13415": "取得媒体服务设置时出现错误.",
    "error_code_13416": "在服务器设置里,媒体服务为非启用.",
    "error_code_13417": "媒体服务器并没有在运作.",
    "error_code_13418": "无效的镜像文件类型.",
    "error_code_13387": "当媒体正进行重新导向时，不允许 Enabling/Disabling RMedia/LMedia 选项.",

    "session_expired": "登录超时，请重新登录。",
	"request_timeout": "请求超时，请重新登录。",
});
