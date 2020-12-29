$(function(){
	dian();
	quxiao();
	pwd();
});

// 鼠标点击后调用的方法
function dian(){
	$(".shen1 input").focus(function(){
		$(this).css("border","1px solid #e02025");
	});
// document.getElementsByTagName('input')[0].style.border = '1px solid #e02025';

}

// 鼠标移开表单点击其他后调用的方法
function quxiao(){
	$(".shen1 input").blur(function(){
		$(this).css("border","1px solid #aaaaaa");
	});
// document.getElementsByTagName('input')[0].style.border = '1px solid #aaaaaa';
}

function pwd(){
	$("#zc").click(function(){
		var pwd=$("[name=pwd]").val();
		var pwd2=$("[name=pwd2]").val();
		if(pwd==pwd2&&pwd!=""){
			window.location.href="/ljh_UserServlet";
		}
		else{
			alert("请填写正确的数据！");
		}
	});
}