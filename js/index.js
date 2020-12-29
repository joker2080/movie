$(function(){
	$(".user-info").mouseover(function(){
		$(this).find(".dl").show();
	});
	$(".user-info").mouseout(function(){
		$(this).find(".dl").hide();
	});
	
	$(".panel-content dd").mouseover(function(){
		$(this).css("box-shadow","0 5px 5px rgba(0,0,0,0.1),0 0 15px 0 rgba(0,0,0,0.2)");
	});
	
	$(".panel-content dd").mouseout(function(){
		$(this).css("box-shadow","none");
	});
	
	$(".panel-content li").mouseover(function(){
		$(this).css("background","#f4f4f4");
	});
	
	$(".panel-content li").mouseout(function(){
		$(this).css("background","none");
	});
});
