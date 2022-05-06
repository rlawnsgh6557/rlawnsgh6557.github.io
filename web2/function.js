/* 이메일 유효성 체크 */
function validCheckEmail(target) {
	if (target.search(/(\S+)@(\S+)\.(\S+)/) == -1 ) {
	    return false;
	} 
	return true;
}

$(window).on('load', onLoad)

function onLoad()
{
	if (viewportWidth() > 768)
	{
		pageMode = "pc";
	}else{
		pageMode = "mobile";
	}
	if (check_allDevice() != "")
	{
		$("body").addClass("device");
	}
}

function check_allDevice(){
	var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'); //160625 device 목록에 ipad 추가
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}

	return device_name;
}
