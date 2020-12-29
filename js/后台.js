$(function(){
	rowAndCol();
	dian();
	shuAndHang();
});



function rowAndCol(){
	var arrs=[{"rows":1,"cols":1,"clas":"a","src":"../images/zw1.png"}];
	var row=0;
	var col=0;
	$("[name=btn]").click(function(){
		arrs[0].rows=1;
		arrs[0].cols=1;
		row=$(this).parent().prev().prev().find("input").val();
		col=$(this).parent().prev().find("input").val();
		var biao=document.getElementById("table");
		if(row>10||col>10||row<0||col<0){
			alert("请输入正确的数据");
		}
		else{
			$("#table").find("tr").remove();
			for(var j=0;j<row;j++){
				var tr=document.createElement("tr");
				for(var i=0;i<col;i++){
					tr.innerHTML+="<td class='"+arrs[0].clas+"' row='"+arrs[0].rows+"' col='"+arrs[0].cols+"'>"+"<img src='"+arrs[0].src+"'>"+"</td>"
					arrs[0].cols++;
				};
				arrs[0].rows++;
				arrs[0].cols=1;
				biao.appendChild(tr);
			}
		}
	});
}

function dian(){
	$(".a").live("dblclick",function(){
		$(this).removeClass("a");
		$(this).addClass("b");
		$(this).find("img").attr("src","");
	});
	$(".b").live("dblclick",function(){
		$(this).removeClass("b");
		$(this).addClass("a");
		$(this).find("img").attr("src","../images/zw1.png");
	});
}

function shuAndHang(){
	var cols=0;
	var rows=0;
	
	$(".shu li").toggle(function(){
		var ars=$(".a");
		cols=$(this).html();
		for(var i=0;i<ars.length;i++){
			if(cols==$(ars[i]).attr("col")){
				$(ars[i]).find("img").attr("src","");
				$(ars[i]).removeClass("a");
				$(ars[i]).addClass("b");
			}
		}
	},function(){
		var ars=$(".b");
		cols=$(this).html();
		for(var i=0;i<ars.length;i++){
			if(cols==$(ars[i]).attr("col")){
				$(ars[i]).find("img").attr("src","../images/zw1.png");
				$(ars[i]).removeClass("b");
				$(ars[i]).addClass("a");
			}
		}
	});
	
	$(".hang li").toggle(function(){
		var ars=$(".a");
		cols=$(this).html();
		for(var i=0;i<ars.length;i++){
			if(cols==$(ars[i]).attr("row")){
				$(ars[i]).find("img").attr("src","");
				$(ars[i]).removeClass("a");
				$(ars[i]).addClass("b");
			}
		}
	},function(){
		var ars=$(".b");
		rows=$(this).html();
		for(var i=0;i<ars.length;i++){
			if(rows==$(ars[i]).attr("row")){
				$(ars[i]).find("img").attr("src","../images/zw1.png");
				$(ars[i]).removeClass("b");
				$(ars[i]).addClass("a");
			}
		}
	});
	
}