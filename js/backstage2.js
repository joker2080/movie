$(function(){
	quxiao();
	console.log(1);
});

function quxiao(){
	$("#quxiao").live("click",function(){
		$("#tishi").hide();
	});
	$("#insert").live("click",function(){
		$("#tishi").show();
	});
}