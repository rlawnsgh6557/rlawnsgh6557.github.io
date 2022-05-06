if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];

      var k = 0;

      while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        k++;
      }
      return undefined;
    }
  });
}
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike/*, mapFn, thisArg */) {
      var C = this;

      var items = Object(arrayLike);

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      var len = toLength(items.length);

      var A = isCallable(C) ? Object(new C(len)) : new Array(len);


      var k = 0;

      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;

      return A;
    };
  }());
}

$(window).on('load', onLoad)
		.on('resize', onResize)
		.on('scroll', onScroll);

var viewMode = "pc";
var pagePath = document.URL.split("/");
var pageLang = '';
if(pagePath.indexOf("kor") != -1) {
	pageLang = 'kor';
	var viewPage = pagePath[pagePath.indexOf("kor") + 1].replace("#","");
} else if (pagePath.indexOf("eng") != -1)
{
	pageLang = 'eng';
	var viewPage = pagePath[pagePath.indexOf("eng") + 1].replace("#","");
} else if (pagePath.indexOf("chn") != -1) {
	pageLang = 'chn';
	var viewPage = pagePath[pagePath.indexOf("chn") + 1].replace("#","");
} else if (pagePath.indexOf("vn") != -1) {
	pageLang = 'vn';
	var viewPage = pagePath[pagePath.indexOf("vn") + 1].replace("#","");
}

else if(pagePath.indexOf("display_renewal_en") != -1){
	pageLang = 'eng';
	viewPage = pagePath[pagePath.indexOf("display_renewal_en") + 1].replace("#","");
	
}
else if(pagePath.indexOf("display_renewal_cn") != -1){
	pageLang = 'chn';
	var viewPage = pagePath[pagePath.indexOf("display_renewal_cn") + 1].replace("#","");
	
}
else if(pagePath.indexOf("display_renewal_vn") != -1){
	pageLang = 'vn';
	var viewPage = pagePath[pagePath.indexOf("display_renewal_vn") + 1].replace("#","");
	
}





if(viewPage == "http:"){
}

var anchorAble = false;

function onLoad()
{
	if (viewportWidth() > 768)
	{
		viewMode = "pc";
	}else{
		viewMode = "mobile";
	}

	viewPage = pagePath[pagePath.indexOf("kor") + 1].replace("#","");
	if(viewPage == "http:"){
		if(pagePath.indexOf("eng") != -1)
			var viewPage = pagePath[pagePath.indexOf("eng") + 1].replace("#","");
		else if(pagePath.indexOf("chn") != -1)
			var viewPage = pagePath[pagePath.indexOf("chn") + 1].replace("#","");
		else if(pagePath.indexOf("vn") != -1)
			var viewPage = pagePath[pagePath.indexOf("vn") + 1].replace("#","");
		else if(pagePath.indexOf("kor") != -1)
			var viewPage = pagePath[pagePath.indexOf("kor") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_en") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_en") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_cn") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_cn") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_vn") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_vn") + 1].replace("#","");
	} else if(viewPage == "https:"){
		if(pagePath.indexOf("eng") != -1)
			var viewPage = pagePath[pagePath.indexOf("eng") + 1].replace("#","");
		else if(pagePath.indexOf("chn") != -1)
			var viewPage = pagePath[pagePath.indexOf("chn") + 1].replace("#","");
		else if(pagePath.indexOf("vn") != -1)
			var viewPage = pagePath[pagePath.indexOf("vn") + 1].replace("#","");
		else if(pagePath.indexOf("kor") != -1)
			var viewPage = pagePath[pagePath.indexOf("kor") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_en") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_en") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_cn") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_cn") + 1].replace("#","");
		else if(pagePath.indexOf("display_renewal_vn") != -1)
			var viewPage = pagePath[pagePath.indexOf("display_renewal_vn") + 1].replace("#","");
	}

	console.log("viewPage : " + viewPage);
	
	if (viewPage == "index.jsp") {
			
	}
	else if (viewPage == "media")
	{
		xmlLoad(pagePath[pagePath.indexOf("media") + 1]);
	}else if (viewPage == "tech")
	{
		xmlLoad("tech");
	}else if (viewPage == "career-info")
	{
		xmlLoad("career-info");
	}
	else if (viewPage == "career_info")
	{
		xmlLoad("career_info");
	}

	$("section").each(function(){
		if ($(this).hasClass("tab-links"))
		{
			anchorAble = true;
		}
	});

	scrollTop = $(window).scrollTop();
	
	if (scrollTop == 0)
	{
		$("footer .btn-totop").css({"display":"none"});
	}else{
		$("footer .btn-totop").css({"display":"block"});
	}
	onScroll();

	var kv = document.querySelector('.kv');
	var kvn = document.querySelector('section.kv > .obj');
	if(kv) {
		if(kvn)kvn.id = 'kvn';
	}
}

function onResize()
{
	/*gif*/
	if (viewPage == "media" && pageLang === 'kor') {
	var gif_height = $("li .obj img").outerHeight();
	$("li .gif_obj img").css({"height":gif_height + "px"});
	}
	
	if (viewportWidth() > 768) 
	{
		var k = $(".nav-main .float-list.right > li:first-child > a").outerWidth(true) - parseFloat($(".nav-main .float-list.right > li:first-child > a").css('padding-left'));
		var t = (k - $("header nav .float-list > li.active > a").outerWidth()) / 2;
		$("header nav .float-list > li.active > a span").css({"width":k + "px", "left": (-1 * t) + "px"});
	}
	if (viewportWidth() > 768 && viewMode == "mobile")
	{
		$("header nav .float-list > li .nav-sub").css({"display":"none"});
		viewMode = "pc";
		pageResize(viewMode);

	}else if (viewportWidth() < 769 && viewMode == "pc")
	{
		$("header nav .float-list > li .nav-sub").css({"display":"none"});
		viewMode = "mobile";
		pageResize(viewMode);
	}
}

var scrollTop = 0;
function onScroll()
{
	scrollTop = $(window).scrollTop();
	
	if (scrollTop == 0)
	{
		$("footer .btn-totop").css({"display":"none"});
	}else{
		$("footer .btn-totop").css({"display":"block"});
	}

	if (anchorAble)
	{
		var anchorTop = $(".tab-links").offset().top;
		var contentsTop = $('.tab-links').next().offset().top;
		var anchorHeight = $(".tab-links").outerHeight();
		if ($(".tab-links").css("position") == "fixed")
		{
			if (scrollTop < contentsTop)
			{
				$(".contents").css({"padding-top":""});
				$(".tab-links").css({"position":"relative"});
			}
		}else{
			if (scrollTop > anchorTop)
			{
				$(".contents").css({"padding-top":anchorHeight + "px"});
				$(".tab-links").css({"position":"fixed", "top":"0px"});
			}else{
				$(".contents").css({"padding-top":""});
				$(".tab-links").css({"position":"relative"});
			}
		}
	}
}

var motionDelay = 500;
var motionIng = false;

var kvRolling = true;
var kvInterval;
var kvSlide = 0;


$(function(){

	$("header .gnb-inner .btn-nav").on('click', function(){
		if (viewportWidth() < 769)
		{
			if ($(this).hasClass("active"))
			{
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
			}
		}
		
		return false;
	});

	$("header nav .nav-inner > ul > li > a").on('click', function(){
		if (viewportWidth() < 769)
		{
			if ($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
			}else{
				$("header nav .nav-inner > ul > li").each(function(){
					if ($(this).hasClass("active"))
					{
						$(this).removeClass("active");
					}
				});
				$(this).parent().find(".nav-sub").css({"display":""});
				$(this).parent().addClass("active");
			}
		}
		else{$(this).parents("li").addClass("active");		var k = $(".nav-main .float-list.right > li:first-child > a").outerWidth(true) - parseFloat($(".nav-main .float-list.right > li:first-child > a").css('padding-left'));
		var t = (k - $("header nav .float-list > li.active > a").outerWidth()) / 2;
		$("header nav .float-list > li.active > a span").css({"width":k + "px", "left": (-1 * t) + "px"});}
		if($(this).hasClass('cs') || $(this).parent().parent().hasClass("m_only") ){
			return true;
		}
		return false;
	});

	$("header nav .float-list > li .nav-sub .banner .btn-close").on('click', function(){
		$(this).parents(".nav-sub").css({"display":"none"});
		return false;
	});
		
	$("header nav .float-list > li > a").on('mouseenter', function(){
		if (viewportWidth() > 768)
		{
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
			$(this).parents("li").addClass("active");
			var k = $(".nav-main .float-list.right > li:first-child > a").outerWidth(true) - parseFloat($(".nav-main .float-list.right > li:first-child > a").css('padding-left'));
			var t = (k - $(this).outerWidth()) / 2;
			$(this).find("span").css({"width":k + "px", "left": (-1 * t) + "px"});
			$(this).parent().find(".nav-sub").css({"display":"block"});
		}
	}).on('mouseleave',function(){if (viewportWidth() > 768)
		{
			$(this).parents("li").removeClass("active");
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
			$(this).find("span").css({"width":"", "left": ""});
		}
	});

	$("header nav .float-list > li .nav-sub").on('mouseenter', function(){
		if (viewportWidth() > 768)
		{
			$(this).parent().find(".nav-sub").css({"display":"block"});
			var k = $(".nav-main .float-list.right > li:first-child > a").outerWidth(true) - parseFloat($(".nav-main .float-list.right > li:first-child > a").css('padding-left'));
			var t = (k - $(this).parent().find("a").outerWidth()) / 2;
			$(this).parent().find("a span").css({"width":k + "px", "left": (-1 * t) + "px"}); 
			$(this).parents("li").addClass("active");
			
		}
	}).on('mouseleave',function(){
		if (viewportWidth() > 768)
		{
			$(this).parents("li").removeClass("active");
			$(this).css({"display":"none"});
			$(this).parent().find("a span").css({"width":"", "left": ""});
		}
	});
	
	$("header nav .float-list > li > a").on('focus', function(){	
		if (viewportWidth() > 768)
		{
			$("header nav .float-list > li").removeClass("active");
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
			$(this).parents("li").addClass("active");
			var k = $(".nav-main .float-list.right > li:first-child > a").outerWidth(true) - parseFloat($(".nav-main .float-list.right > li:first-child > a").css('padding-left'));
			var t = (k - $(this).outerWidth()) / 2;
			$(this).find("span").css({"width":k + "px", "left": (-1 * t) + "px"});
			$(this).parent().find(".nav-sub").css({"display":"block"});
		}
	});

	$("header .gnb-inner h1 a").on('focus', function() {
		if (viewportWidth() > 768)
		{
			$("header nav .float-list > li").removeClass("active");
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
		}
	});

	$("header nav .float-list > li:last-child .last-focus").focusout(function(){
		if (viewportWidth() > 768)
		{
			$("header nav .float-list > li").removeClass("active");
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
		}
	});

	$("header nav .float-list > li:last-child a:last-child").focusout(function(){
		if (viewportWidth() > 768)
		{
			$("header nav .float-list > li").removeClass("active");
			$("header nav .float-list > li .nav-sub").css({"display":"none"});
		}
	});
	

	$("footer .btn-totop").on('click', function(){
		var speed = $(window).scrollTop() / 10;
		$("html, body").stop().animate({scrollTop:0}, speed, 'swing');
		return false;
	});

	$(".tab-links .link-present").on('click', function(){
		if ($(this).hasClass("active"))
		{
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
		return false;
	});
	
	if (viewPage == "" || viewPage == "index.jsp")
	{
		$(".kv .btn-next").on('click', function(){
			if (!motionIng)
			{
				motionIng = true;

				if ($(".kv .btn-rolling").hasClass("active"))
				{
					console.log("ccc");
					clearInterval(kvInterval);
					kvInterval = setInterval(kvPlay,5000);
				}
				
				$(".kv-slide li").eq(kvSlide).stop().animate({"margin-left":"-100%"},motionDelay);
				kvSlide++;
				if ($(".kv-slide li").length-1 < kvSlide)
				{
					kvSlide = 0;
				}
				$(".kv-slide li").eq(kvSlide).css({"margin-left":"100%"}).stop().animate({"margin-left":"0%"},motionDelay);
				$(".kv .carousel li").removeClass("active");
				$(".kv .carousel li").eq(kvSlide).addClass("active");

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}			
			return false;
		});

		$(".kv .btn-prev").on('click', function(){
			if (!motionIng)
			{
				motionIng = true;
				
				if ($(".kv .btn-rolling").hasClass("active"))
				{
					clearInterval(kvInterval);
					kvInterval = setInterval(kvPlay,5000);
				}

				
				$(".kv-slide li").eq(kvSlide).stop().animate({"margin-left":"100%"},motionDelay);
				kvSlide--;
				if (kvSlide < 0)
				{
					kvSlide = $(".kv-slide li").length-1;
				}
				$(".kv-slide li").eq(kvSlide).css({"margin-left":"-100%"}).stop().animate({"margin-left":"0%"},motionDelay);
				$(".kv .carousel li").removeClass("active");
				$(".kv .carousel li").eq(kvSlide).addClass("active");

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}			
			return false;
		});

		$(".kv .carousel li a").on('click', function(){
			if (!motionIng)
			{
				motionIng = true;
				//$(".kv .carousel li").removeClass("active");
				if (!$(this).parent().hasClass("active"))
				{

					if ($(".kv .btn-rolling").hasClass("active"))
					{
						clearInterval(kvInterval);
						kvInterval = setInterval(kvPlay,5000);
					}
					

					$(".kv .carousel li").removeClass("active");
					$(this).parent().addClass("active");

					if ($(this).parent().index() > kvSlide)
					{
						$(".kv-slide li").eq(kvSlide).stop().animate({"margin-left":"-100%"},motionDelay);
						kvSlide = $(this).parent().index();
						$(".kv-slide li").eq(kvSlide).css({"margin-left":"100%"}).stop().animate({"margin-left":"0%"},motionDelay);
					}else{
						$(".kv-slide li").eq(kvSlide).stop().animate({"margin-left":"100%"},motionDelay);
						kvSlide = $(this).parent().index();
						$(".kv-slide li").eq(kvSlide).css({"margin-left":"-100%"}).stop().animate({"margin-left":"0%"},motionDelay);
					}
				}

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});

		$(".kv .btn-rolling").on('click', function(){
			if (!motionIng)
			{
				motionIng = true;
				
				if ($(this).hasClass("active"))
				{
					$(this).removeClass("active");
					clearInterval(kvInterval);
					kvRolling = false;
				}else{
					$(this).addClass("active");
					kvInterval = setInterval(kvPlay,5000);
					kvRolling = true;
				}

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});

		kvInterval = setInterval(kvPlay,5000);

		$(".main .promotion .promotion-inner a").on('click', function(){
			$(".promotion .video_popup .popup_innder li").css({"display":"block"});
			$(".main .promotion .video_popup").css({"display":"block","opacity":0}).animate({"opacity":1},500,function(){
				$(".main .promotion .video_popup iframe").attr("src","https://www.youtube.com/embed/6PDhn0J-1xk?wmode=opaque&rel=0&6PDhn0J-1xk=1&version=3&showinfo=0&iv_load_policy=3&showinfo=0&iv_load_policy=3&autoplay=1");
			});
			
			return false;
		});
		$(".main .promotion .video_popup a.close").on('click', function(){
			$(this).parent().parent().animate({"opacity":0},500,function(){
				$(this).css({"display":"none"});
				$(".main .promotion .video_popup iframe").attr("src","about:blank");
			});
			return false;
		});

	}else if (viewPage == "product" || viewPage == "footer" ||  viewPage == "intro" || viewPage == "sustainability")
	{
		$(".tab-links li a").on('click', function(){
			$(".tab-links li").removeClass("active");
			$(this).parent().addClass("active");
			var viewText = $(this).text();
			$(this).parents(".anchor").find(" > a").removeClass("active").text(viewText);
			//return false;
		});
	}else if (viewPage == "customer")
	{
		$(".block-tab ul li a").on('click', function(){
			if (!$(this).parent().hasClass("active"))
			{
				$(".block-tab ul li").removeClass("active");
				$(this).parent().addClass("active");
				var tabIdx = $(this).parent().index();
				$(".list-qna > li").removeClass("active");
				$(".list-qna > li").eq(tabIdx).addClass("active");
			}
			return false;
		});

		$(".list-qna .qna-inner > li dt a").on('click', function(){
			if ($(this).parent().parent().parent().hasClass("active"))
			{
				$(this).parent().parent().parent().removeClass("active");
				if(pageLang === 'kor')
				$(this).attr('title', '개인정보 수집·이용 동의서 펼치기');
			}else{
				$(this).parent().parent().parent().addClass("active");
				if(pageLang === 'kor')
				$(this).attr('title', '개인정보 수집·이용 동의서 접기');

			}
			return false;
		});
	}else if (viewPage == "media")
	{
	}else if (viewPage == "tech")
	{
		$(".tab-links li a").on('click', function(){
			$(".tab-links li").removeClass("active");
			$(this).parent().addClass("active");
			var viewText = $(this).text();
			$(this).parents(".anchor").find(" > a").removeClass("active").text(viewText);
			//return false;
		});
	}

	$(document).on("click",".pagenation ul li a",function(){
		if (!$(this).parent().hasClass("active"))
		{
			nowPage = $(this).text();
			if (viewPage == "media")
			{
				xmlLoad(pagePath[pagePath.indexOf("media") + 1]);
			}else if (viewPage == "tech")
			{
				xmlLoad("tech");
			}else if (viewPage == "career-info")
			{
				xmlLoad("career-info");
			}
			else if (viewPage == "career_info")
			{
				xmlLoad("career_info");
			}
		}
		return false;
	});

	$(document).on("click",".pagenation .arrow-btn a",function(){

		if ($(this).hasClass("btn-latest"))
		{
			nowPage = 1; 
		}else if ($(this).hasClass("btn-prev"))
		{
			--nowPage;
		}else if ($(this).hasClass("btn-next"))
		{
			++nowPage;
		}else if ($(this).hasClass("btn-oldest"))
		{
			nowPage = maxPage;
		}

		if (viewPage == "media")
		{
			xmlLoad(pagePath[pagePath.indexOf("media") + 1]);
		}else if (viewPage == "tech")
		{
			xmlLoad("tech");
		}else if (viewPage == "career-info")
		{
			xmlLoad("career-info");
		}else if (viewPage == "career_info")
		{
			xmlLoad("career_info");
		}
	});

	$(document).on("click", ".btn-more.m_only", function(){
		++nowPage;
		if (viewPage == "media")
		{
			xmlLoad(pagePath[pagePath.indexOf("media") + 1]);
		}else if (viewPage == "tech")
		{
			xmlLoad("tech");
		}else if (viewPage == "career-info")
		{
			xmlLoad("career-info");
		}else if (viewPage == "career_info")
		{
			xmlLoad("career_info");
		}
		return false;
	});

	$(".tab-links li a").on('click', function(){
		var goTo_Top = $($(this).attr("href")).offset().top;
		var ahchorHeight = $("main section.tab-links").outerHeight() || $("#content section.tab-links").outerHeight();
		var goTop = goTo_Top - ahchorHeight;

		var speed = Math.abs($(window).scrollTop() - goTop) / 10;
		$("html, body").stop().animate({scrollTop:goTop + "px"}, speed, 'swing');

		return false;
	});

	

	$( ".hs_download_btn_wrapper a" ).on('click', function() {
	  $( ".hs_download_btn_wrapper a" ).blur();
	});
});

function kvPlay(){
	$(".kv-slide li").eq(kvSlide).stop().animate({"margin-left":"-100%"},motionDelay);
	kvSlide++;
	if ($(".kv-slide li").length-1 < kvSlide)
	{
		kvSlide = 0;
	}
	$(".kv-slide li").eq(kvSlide).css({"margin-left":"100%"}).stop().animate({"margin-left":"0%"},motionDelay);
	$(".kv .carousel li").removeClass("active");
	$(".kv .carousel li").eq(kvSlide).addClass("active");
}

function pageResize(m)
{
	$("header nav .nav-inner > ul > li").each(function(){
		if ($(this).hasClass("active"))
		{
			$(this).removeClass("active");
		}
	});
	$("header .gnb-inner .btn-nav").removeClass("active");

	if (m == "pc")
	{

	}else{

	}

	nowPage = 1;
	if (viewPage == "media")
	{
		xmlLoad(pagePath[pagePath.indexOf("media") + 1]);
	}else if (viewPage == "tech")
	{
		xmlLoad("tech");
	}

	$("header nav .float-list > li").removeClass("active");
}

var showCnt = 0;
var xmlIdx = 0;
var addIdx = 0;
var pagenationAble = false;
var maxPage = 0;
var nowPage = 1;
function xmlLoad(t)
{
	console.log("xmlLoad");
	if (t == "news")
	{
		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}
		
		$.ajax({
			type: "get",
			url: "./../../xml/newsList.xml",
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){
					++xmlIdx;
					if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
					{
						++addIdx;
						var listIndex = $(this).find("listIndex").text();
						var listTitle = $(this).find("listTitle").text();
						var listDescription = replaceAll($(this).find("listDescription").text(), "\n", "<br />");
						var listMainImages = $(this).find("listMainImages").text();
						var listImages = $(this).find("listImages").text();
						var listDate = $(this).find("listDate").text();
						var listUrl = $(this).find("listUrl").text();
						var listAlt = $(this).find("listAlt").text();
						var listOmniture = $(this).find("listOmniture").text();
						
						if (viewportWidth() > 768)
						{
							if (listDescription.length > 45)
							{
								listDescription = listDescription.substring(0,45) + "...";
							}
						}else{
							if (listDescription.length > 40)
							{
								listDescription = listDescription.substring(0,40) + "...";
							}
						}

						var parseHTML = "";
						parseHTML += "<li>";
						parseHTML += "<a href='" + listUrl + "'>";
						parseHTML += "<div class='obj'>";
						parseHTML += "<img class='responsiveImg' src='./../../" + listImages + "'";
						parseHTML += "data-media-mobile='./../../" + listImages.replace(".jpg","-m.jpg") + "'";
						parseHTML += "data-media-web='./../../" + listImages + "'";
						parseHTML += "alt='" + listAlt + "'>";
						parseHTML += "</div>";
						parseHTML += "<div class='txt'>";
						parseHTML += "<p class='list-date'>" + listDate + "</p>";
						parseHTML += "<h3 class='list-title'>" + listTitle + "</h3>";
						parseHTML += "<p class='list-desc'>" + listDescription + "</p>";
						parseHTML += "</div>";
						parseHTML += "</a>";
						parseHTML += "</li>";
						
						$(".contents-list ul").append(parseHTML);
					}				
				});

				/*$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});*/
				
				maxPage = Math.ceil(xmlIdx / 9);
				var pageHtml = "";
				if(pageLang === 'kor'){
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					console.log('aa');
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					console.log('aa');
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'vn')
				{
					console.log('aa');
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}
						
					}
				}
				console.log(pageHtml);

				
				$(".pagenation ul").append(pageHtml);

				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
		
	}else if (t == "tech")
	{
		if (pagePath[pagePath.indexOf("kor") + 2] != "tech-terms")
		{
			return false;
		}

		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}	
		
		$.ajax({
			type: "get",
			url: "./../../xml/technicalTerms.xml",
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){
					var listIndex = $(this).find("listIndex").text();
					var listTitle = $(this).find("listTitle").text();
					var listType = $(this).find("listType").text();
					var listDescription = replaceAll($(this).find("listDescription").text(), "\n", "<br />");
					var listMainImages = $(this).find("listMainImages").text();
					var listImages = $(this).find("listImages").text();
					var listDate = $(this).find("listDate").text();
					var listUrl = $(this).find("listUrl").text();
					var listAlt = $(this).find("listAlt").text();
					var listOmniture = $(this).find("listOmniture").text();

					if (listType == pagePath[pagePath.length-1].split(".")[0])
					{
						++xmlIdx;
						if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
						{
							var parseHTML = "";
							parseHTML += "<li>";
							parseHTML += "<a href='" + listUrl + "' target='_blank'>";
							parseHTML += "<div class='obj'>";
							parseHTML += "<img class='responsiveImg' src='./../../" + listImages + "'";
							parseHTML += "data-media-mobile='./../../" + listImages.replace(".jpg","-m.jpg") + "'";
							parseHTML += "data-media-web='./../../" + listImages + "'";
							parseHTML += "alt='" + listAlt + "'>";
							parseHTML += "</div>";
							parseHTML += "<div class='txt'>";
							// parseHTML += "<p class='list-date'>" + listDate + "</p>";
							parseHTML += "<h3 class='list-title'>" + listTitle + "</h3>";
							parseHTML += "<p class='list-desc'>" + listDescription + "</p>";
							parseHTML += "</div>";
							parseHTML += "</a>";
							parseHTML += "</li>";

							$(".contents-list ul").append(parseHTML);
						}
					}			
				});

				$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});
				maxPage = Math.ceil(xmlIdx / 9);
				var pageHtml = "";
				
				if(pageLang === 'kor'){
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'vn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}
						
					}
				}
				$(".pagenation ul").append(pageHtml);

				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
	}else if (t == "socialMedia")
	{
		console.log(pagePath[pagePath.length-1].split(".")[0]);
		
		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}		

		$.ajax({
			type: "get",
			url: "./../../xml/socialMedia.xml",
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){					
					var listIndex = $(this).find("listIndex").text();
					var listTitle = $(this).find("listTitle").text();
					var listType = $(this).find("listType").text();
					var listDescription = replaceAll($(this).find("listDescription").text(), "\n", "<br />");
					var listMainImages = $(this).find("listMainImages").text();
					var listImages = $(this).find("listImages").text();
					var listDate = $(this).find("listDate").text();
					var listUrl = $(this).find("listUrl").text();
					var listAlt = $(this).find("listAlt").text();
					var listOmniture = $(this).find("listOmniture").text();
					
					if (listType == pagePath[pagePath.length-1].split(".")[0])
					{
						++xmlIdx;
						if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
						{
							var parseHTML = "";
							parseHTML += "<li>";
							parseHTML += "<a href='" + listUrl + "' target='_blank'>";
							
							var str1 = listImages
							var str2 = "gif";
							if(str1.indexOf(str2) != -1){
								parseHTML += "<div class='gif_obj'>";
												/*gif*/
								if (pageLang === 'kor') {
									var gif_height = $("li .obj img").outerHeight();
									$("li .gif_obj img").css({"height":gif_height + "px"});
								}
							}
							else{
								parseHTML += "<div class='obj'>";
							}
							parseHTML += "<img class='responsiveImg' src='./../../" + listImages + "'";
							parseHTML += "data-media-mobile='./../../" + listImages.replace(".jpg","-m.jpg") + "'";
							parseHTML += "data-media-web='./../../" + listImages + "'";
							parseHTML += "alt='"+listAlt+"'>";
							parseHTML += "</div>";
							parseHTML += "<div class='txt'>";
							parseHTML += "<p class='list-date'>" + listDate + "</p>";
							parseHTML += "<h3 class='list-title'>" + listTitle + "</h3>";
							parseHTML += "<p class='list-desc'>" + listDescription + "</p>";
							parseHTML += "</div>";
							parseHTML += "</a>";
							parseHTML += "</li>";
							
							$(".contents-list ul").append(parseHTML);
						}
					}
				}); 

				$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});

				maxPage = Math.ceil(xmlIdx / 9);
				var listPage = Math.ceil(xmlIdx / 9) > 10 ? 10 : Math.ceil(xmlIdx / 9);
				var startIdx = Math.floor((nowPage-1) / 10) * 10 + 1;
				var showPage = maxPage - (Math.floor(startIdx / 10) * 10) > 10 ? 10 : maxPage - (Math.floor(startIdx / 10) * 10);
				var pageHtml = "";
//console.log("startIdx : "+ startIdx + ", showPage : " + showPage);		
				if(pageLang === 'kor'){
					for (var i = 0;i < showPage ; i++)
					{
						var num = startIdx + i;
						if (num == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + num + "번째 페이지로 이동하는 버튼입니다.'>" + num + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + num + "번째 페이지로 이동하는 버튼입니다.'>" + num + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					for (var i = 0;i < showPage ; i++)
					{
						var num = startIdx + i;
						if (num == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + num + "'>" + num + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + num + "'>" + num + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					for (var i = 0;i < showPage ; i++)
					{
						var num = startIdx + i;
						if (num == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + num + " 页'>" + num + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + num + " 页'>" + num + "</a></li>";
						}
						
					}
				} else if (pageLang === 'vn')
				{
					for (var i = 0;i < showPage ; i++)
					{
						var num = startIdx + i;
						if (num == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + num + "'>" + num + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + num + "'>" + num + "</a></li>";
						}
						
					}
				}
				$(".pagenation ul").append(pageHtml);

				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
	}else if (t == "movie")
	{
		
		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}	

		$.ajax({
			type: "get",
			url: "./../../xml/videoList.xml",
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){
					++xmlIdx;
					if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
					{
						var listIndex = $(this).find("listIndex").text();
						var listTitle = $(this).find("listTitle").text();
						var listDescription = replaceAll($(this).find("listDescription").text(), "\n", "<br />");
						var listMainImages = $(this).find("listMainImages").text();
						var listImages = $(this).find("listImages").text();
						var listDate = $(this).find("listDate").text();
						var listUrl = $(this).find("listUrl").text();
						var listAlt = $(this).find("listAlt").text();
						var listOmniture = $(this).find("listOmniture").text();

						var parseHTML = "";
						parseHTML += "<li>";
						parseHTML += "<a href='" + listUrl + "'>";
						parseHTML += "<div class='obj'>";
						parseHTML += "<img class='responsiveImg' src='./../../" + listImages + "'";
						parseHTML += "data-media-mobile='./../../" + listImages.replace(".jpg","-m.jpg") + "'";
						parseHTML += "data-media-web='./../../" + listImages + "'";
						parseHTML += "alt='"+ listAlt +"'>";
						parseHTML += "</div>";
						parseHTML += "<div class='txt'>";
						parseHTML += "<p class='list-date'>" + listDate + "</p>";
						parseHTML += "<h3 class='list-title'>" + listTitle + "</h3>";
						parseHTML += "<p class='list-desc'>" + listDescription + "</p>";
						parseHTML += "</div>";
						parseHTML += "</a>";
						parseHTML += "</li>";
						
						$(".contents-list ul").append(parseHTML);
					}
				}); 

				$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});

				maxPage = Math.ceil(xmlIdx / 9);
				var pageHtml = "";
				
				if(pageLang === 'kor'){
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'vn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}
						
					}
				}
				$(".pagenation ul").append(pageHtml);

				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
	}else if (t == "photo")
	{
		
		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}	

		$.ajax({
			type: "get",
			url: "./../../xml/phptoList.xml",
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){
					var listIndex = $(this).find("listIndex").text();
					var listType = $(this).find("listType").text();
					var listImages = $(this).find("listImages").text();
					var listPopup = $(this).find("listPopup").text();
					var listAlt = $(this).find("listAlt").text();
					var listOmniture = $(this).find("listOmniture").text();
					if (listType == pagePath[pagePath.length-1].split(".")[0])
					{
						++xmlIdx;
						if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
						{

							var parseHTML = "";
							parseHTML += "<li>";
							parseHTML += "<a href='" + listPopup + "' target='_blank'>";
							parseHTML += "<div class='obj'>";
							parseHTML += "<img class='responsiveImg' src='./../../" + listImages + "'";
							parseHTML += "data-media-mobile='./../../" + listImages.replace(".jpg","-m.jpg") + "'";
							parseHTML += "data-media-web='./../../" + listImages + "'";
							parseHTML += "alt='"+listAlt+"'>";
							parseHTML += "</div>";
							parseHTML += "</a>";
							parseHTML += "</li>";
							
							$(".contents-list ul").append(parseHTML);
						}
					}					
				}); 

				$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});

				maxPage = Math.ceil(xmlIdx / 9);
				var pageHtml = "";
				
				if(pageLang === 'kor'){
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}
						
					}
				}	else if (pageLang === 'vn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}
						
					}
				}
				$(".pagenation ul").append(pageHtml);
				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
	}else if (t == "career-info" || t == "career_info")
	{
		var setFile = "";
		if (pagePath[pagePath.length-1].split(".")[0] == "job-interview")
		{
			setFile = "./../xml/jobInterview.xml";
		}else if (pagePath[pagePath.length-1].split(".")[0] == "job_interview")
		{
			setFile = "./../xml/jobInterview.xml";
		}else if (pagePath[pagePath.length-1].split(".")[0] == "recruit-tips")
		{
			setFile = "./../xml/recruitTips.xml";
		}else if (pagePath[pagePath.length-1].split(".")[0] == "recruit_tips")
		{
			setFile = "./../xml/recruitTips.xml";
		}else{
			return false;
		}

		if (viewportWidth() > 768)
		{
			$(".contents-list ul").html("");
			$(".pagenation ul").html("");
		}else{
			if (nowPage == 1)
			{
				$(".contents-list ul").html("");
				$(".pagenation ul").html("");
			}
		}
		console.log("setFile : " + setFile);
		$.ajax({
			type: "get",
			url: setFile,
			dataType: 'xml',
			success: function (xml) {
				xmlIdx = 0;
				$(xml).find("listItem").each(function(){
					++xmlIdx;
					if (xmlIdx > ((nowPage-1) * 9) && xmlIdx <= (nowPage * 9))
					{
						++addIdx;
						var listIndex = $(this).find("listIndex").text();
						var listTitle = $(this).find("listTitle").text();
						var listDescription = replaceAll($(this).find("listDescription").text(), "\n", "<br />");
						var listMainImages = $(this).find("listMainImages").text();
						var listImages = $(this).find("listImages").text();
						var listDate = $(this).find("listDate").text();
						var listUrl = $(this).find("listUrl").text();
						var listAlt = $(this).find("listAlt").text();
						var listOmniture = $(this).find("listOmniture").text();

						var parseHTML = "";
						parseHTML += "<li>";
						parseHTML += "<a href='" + listUrl + "'target='_blank'>";
						parseHTML += "<div class='obj'>";
						parseHTML += "<img class='responsiveImg' src='./../" + listImages + "'";
						parseHTML += "data-media-mobile='./../" + listImages.replace(".jpg","-m.jpg") + "'";
						parseHTML += "data-media-web='./../" + listImages + "'";
						parseHTML += "alt='" + listAlt + "'>";
						parseHTML += "</div>";
						parseHTML += "<div class='txt'>";
						parseHTML += "<p class='list-date'>" + listDate + "</p>";
						parseHTML += "<h3 class='list-title'>" + listTitle + "</h3>";
						parseHTML += "<p class='list-desc'>" + listDescription + "</p>";
						parseHTML += "</div>";
						parseHTML += "</a>";
						parseHTML += "</li>";
						
						$(".contents-list ul").append(parseHTML);
					}				
				});

				$(".contents-list ul li .list-title, .contents-list ul li .list-desc").dotdotdot({
					ellipsis: '...',
					watch	: window,
					});

				maxPage = Math.ceil(xmlIdx / 9);
				var pageHtml = "";
				
				if(pageLang === 'kor'){
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='" + i + "번째 페이지로 이동하는 버튼입니다.'>" + i + "</a></li>";
						}
						
					}
				
				} else if (pageLang === 'eng')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='go to page" + i + "'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'chn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='转到第 " + i + " 页'>" + i + "</a></li>";
						}
						
					}
				} else if (pageLang === 'vn')
				{
					for (var i = 1;i <= maxPage ; i++)
					{
						if (i == nowPage)
						{
							pageHtml+= "<li class='active'><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}else{
							pageHtml+= "<li><a href='#' title='Đi đến trang " + i + "'>" + i + "</a></li>";
						}
						
					}
				}
				$(".pagenation ul").append(pageHtml);

				$(".arrow-btn .btn-latest").css({"display":"block"});
				$(".arrow-btn .btn-prev").css({"display":"block"});
				$(".arrow-btn .btn-oldest").css({"display":"block"});
				$(".arrow-btn .btn-next").css({"display":"block"});

				if (nowPage == 1)
				{
					$(".arrow-btn .btn-latest").css({"display":"none"});
					$(".arrow-btn .btn-prev").css({"display":"none"});
				}

				if (nowPage == maxPage)
				{
					$(".arrow-btn .btn-oldest").css({"display":"none"});
					$(".arrow-btn .btn-next").css({"display":"none"});
					$(".btn-more").css({"display":"none"});
				}
			},
			error: function (xhr, status, errormsg) {
				functionLog('Failed!' + errormsg);
			}
		});
	}
}

var showLog = true;
function functionLog(t)
{
	if (showLog)
	{
		console.log(t);
	}
}

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}



$(window).on('load', function () {
	if (viewPage == "product" || viewPage == "tech" || viewPage == "footer" || viewPage == "intro" || viewPage == "sustainability"){
		var hashes = document.querySelectorAll('section.contents > div');
		var offsets = [];
		var tabLinks = document.querySelectorAll('section.tab-links.anchor .tab-inner li a');

		if(hashes){
			var offsetTops = {};
			hashes.forEach(function(hash) {
				offsetTops[hash.offsetTop] = hash.id;
				offsets.push(hash.offsetTop);
			});
		}
		/*200429추가*/
					offsets.forEach(function(item) {
				if(window.pageYOffset >= item) {
					current = offsetTops[item];
				} else {}
				
			});
			currentLink = Array.from(tabLinks).find(function(link){
				return link.getAttribute('href').slice(1) === current
			});
			
			if (currentLink)
			{
				tabLinks.forEach(function(link){
					link.parentNode.classList.remove('active');
				});
				currentLink.parentNode.classList.add('active');
				document.querySelector('section.tab-links.anchor .link-present').innerText = currentLink.innerText;
				
			}
		/*200429추가*/
		var current = '';

		window.addEventListener('resize', function() {offsets = [];if(hashes){
			offsetTops = {};
			hashes.forEach(function(hash) {
				offsetTops[hash.offsetTop] = hash.id;
				offsets.push(hash.offsetTop);
			});
		}
			offsets.forEach(function(item) {
				if(window.pageYOffset >= item) {
					current = offsetTops[item];
				} else {}
				
			});
			currentLink = Array.from(tabLinks).find(function(link){
				return link.getAttribute('href').slice(1) === current
			});
			
			if (currentLink)
			{
				tabLinks.forEach(function(link){
					link.parentNode.classList.remove('active');
				});
				currentLink.parentNode.classList.add('active');
				document.querySelector('section.tab-links.anchor .link-present').innerText = currentLink.innerText;
				
			}
		});

		document.addEventListener('scroll', function(evt) {
			offsets.forEach(function(item) {
				if(window.pageYOffset >= item) {
					current = offsetTops[item];
				} else {}
				
			});
			var currentLink = Array.from(tabLinks).find(function(link){
				return link.getAttribute('href').slice(1) === current
			});
			
			if (currentLink)
			{
				tabLinks.forEach(function(link){
					link.parentNode.classList.remove('active');
				});
				currentLink.parentNode.classList.add('active');
				document.querySelector('section.tab-links.anchor .link-present').innerText = currentLink.innerText;
				
			}
			
		});
		
	}
	
});


$(function(){
	/*
	$(document).on("keydown","", function(e) {
        if(e.keyCode === 13) { // enter
			e.preventDefault();			
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
        };
    });*/

	$(document).on("keydown",".main .kv", function(e) {
        if((e.keyCode === 9 && !e.shiftKey)){ // tab
			if ($(".kv").is(":focus"))
			{
				e.preventDefault();
				$(".kv .btn-prev").focus();
			}
        };
		if(e.keyCode === 37) {
			if ($(".kv").is(":focus")){
				e.preventDefault();
				$(".kv .btn-prev").click();
			}
		};
		if(e.keyCode === 39) {
			if ($(".kv").is(":focus")){
				e.preventDefault();
				$(".kv .btn-next").click();
			}
		}
    });

	$(document).on("keydown",".kv .btn-prev", function(e) {
         if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".kv").focus();
        };
    });

	$(document).on("keydown",".kv .btn-next", function(e) {
         if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".kv-slide li").eq(kvSlide).find("a").focus();
        };
    });

	$(document).on("keydown",".kv-slide .btn-cta", function(e) {
        if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".kv .carousel li").eq(0).find("a").focus();
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".kv .btn-next").focus();
        };
    });

	$(document).on("keydown",".kv .carousel li a", function(e) {
        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			if ($(this).parent().index() == 0)
			{
				e.preventDefault();
				$(".kv-slide li").eq(kvSlide).find("a").focus();
			}
			
        };
    });


	

});

//210628 Facebook Embed
$(function() {
	var facebookEmbedResize = function() {
		$('.facebook-embed').each(function() {
			var width = parseInt($(this).attr('data-width')), height = parseInt($(this).attr('data-height'));

			if (width !== NaN && height !== NaN) {
				$(this).find('iframe').css({'height': Math.max(320, Math.min(750, $(this).find('iframe').width())) / width * height});
			}
		});
	};
	if ($('.facebook-embed').length) {
		$(window).on('resize', function() {
			facebookEmbedResize();
		});
		facebookEmbedResize();
	}
});

//210827 Youtube Embed
$(function() {
	var youtubeEmbedResize = function() {
		$('.youtube-embed').each(function() {
			var width = $(this).width(), height = width * 9 / 16;

			if (width !== NaN && height !== NaN) {
				$(this).find('iframe').css({'height': height});
			}
		});
	};
	if ($('.youtube-embed').length) {
		$(window).on('resize', function() {
			youtubeEmbedResize();
		});
		youtubeEmbedResize();
	}
});