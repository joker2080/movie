$(function(){
	zding();
	youhui();
	btnBgcolor();
	leftBgcolor();
	dianHide();
});

function zding(){
	$(".box-zding").hover(function(){
		$(this).css("box-shadow","0px 1px 2px rgba(0,0,0,.3)");
	},function(){
		$(this).css("box-shadow","none");
	});
}

function youhui(){
	$(".box1").hover(function(){
		$(this).css("box-shadow","0px 1px 2px rgba(0,0,0,.3)");
	},function(){
		$(this).css("box-shadow","none");
	});
}

function btnBgcolor(){
	$(".submit").hover(function(){
		$(this).css("background","#ff6265");
		$(this).css("cursor","pointer");
	},function(){
		$(this).css("background","#f3464c");
	});
}

function leftBgcolor(){
	$(".box-left div").click(function(){
		clear();
		$(this).addClass("bgcolor");
	});
	function clear(){
		$(".box-left div").removeClass();
	}
}

function dianHide(){
	$("#dingdan").show();
	$("#dd").click(function(){
		hideAll();
		$("#dingdan").show();
	});
	$("#jb").click(function(){
		hideAll();
		$("#box-xx").show();
	});
	$("#yhj").click(function(){
		hideAll();
		$("#youhui-box").show();
	});
	
	function hideAll(){
		$(".dingdan").hide();
	}
}