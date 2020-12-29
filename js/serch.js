$(function(){
	moues();
});

function moues(){
	$(".movie dd").hover(function(){
		$(this).css("box-shadow","0px 2px 2px rgba(0,0,0,0.3)");
	},function(){
		$(this).css("box-shadow","none");
	});
}