$(function(){
	dian();
	quxiao();
});

// 鼠标点击后调用的方法
function dian(){
	$(".shen4 input").focus(function(){
		$(this).parents(".shen4").css("border","1px solid #e02025");
	});
// document.getElementsByTagName('input')[0].style.border = '1px solid #e02025';

}

// 鼠标移开表单点击其他后调用的方法
function quxiao(){
	$(".shen4 input").blur(function(){
		$(this).parents(".shen4").css("border","1px solid #aaaaaa");
	});
// document.getElementsByTagName('input')[0].style.border = '1px solid #aaaaaa';
}