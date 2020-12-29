$(function(){
	dian();
	sheng();
	sum();
});

function dian(){
	$(".a").live("click",function(){
		$(this).removeClass("a");
		$(this).addClass("b");
		var ars=$(".b");
		var rows=[];
		var cols=[];
		var bool=true;
		for(var i=0;i<ars.length;i++){
			rows[i]=$(ars[i]).attr("row");
			cols[i]=$(ars[i]).attr("col");
		}
		for(var j=0;j<ars.length;j++){
			if(rows[j]==rows[j+1]&&(cols[j+1]-cols[j]==2)){
				alert("请务隔选座位");
				$(this).removeClass("b");
				$(this).addClass("a");
				bool=false;
				return;
			}
		}
		if(bool){
			$(this).find("img").attr("src","../images/zw2.png");
			getzw();
		}
		
	});
	$(".b").live("click",function(){
		$(this).removeClass("b");
		$(this).addClass("a");
		var ars=$(".b");
		var rows=[];
		var cols=[];
		var bool=true;
		for(var i=0;i<ars.length;i++){
			rows[i]=$(ars[i]).attr("row");
			cols[i]=$(ars[i]).attr("col");
		}
		for(var j=0;j<ars.length;j++){
			if(rows[j]==rows[j+1]&&(cols[j+1]-cols[j]==2)){
				alert("请务隔选座位");
				$(this).removeClass("a");
				$(this).addClass("b");
				bool=false;
				return;
			}
		}
		if(bool){
			$(this).find("img").attr("src","../images/zw1.png");
			getzw();
		}
	});
}


function sum(){
	$("#sub").click(function(){
		var arrs=$(".b");
		var zw=[];
		if(arrs.length==0){
			$("#tishi").show();
		}else{
			window.location.href="../html/订单.html";
		}
	});
	
	$("#btn").click(function(){
		$("#tishi").hide();
	});
}

function getzw(){	
	var arrs=$(".b");
	var zuowei=[];
	var sum=0;
	var money=document.getElementById("movie-money");
	var zmoney=document.getElementById("movie-zmoney");
	var zuo=document.getElementById("zuo");
	for(var i=0;i<arrs.length;i++){
		zuowei[i]=$(arrs[i]).attr("row")+"排"+$(arrs[i]).attr("col")+"座";
		if(i==arrs.length-1){
			sum=parseFloat($(money).html()*(i+1));
		}
	}
	$(zmoney).html(sum.toFixed(2));
	$("#zuo").find("span").remove();
	
	var span=document.createElement("span");
	for(var i=0;i<zuowei.length;i++){
		span.innerHTML+="<span>"+zuowei[i]+"</span>";
		zuo.appendChild(span);
	}
}

function sheng(){
	var arrs=[
		{"row":1,"col":1,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":2,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":3,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":4,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":0,"clas":"d","src":""},
		{"row":1,"col":5,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":6,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":7,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":8,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":9,"clas":"a","src":"../images/zw1.png"},
		{"row":1,"col":10,"clas":"c","src":"../images/zw3.png"},
		{"row":1,"col":11,"clas":"c","src":"../images/zw3.png"}
	];
	var biao=document.getElementById("table");
		for(var j=0;j<7;j++){
			var tr=document.createElement("tr");
			for(var i=0;i<arrs.length;i++){
				tr.innerHTML+="<td class='"+arrs[i].clas+"' row='"+arrs[i].row+"' col='"+arrs[i].col+"'>"+"<img src='"+arrs[i].src+"'>"+"</td>"
				arrs[i].row++;
			};
			biao.appendChild(tr);
		}
}