//表单的认证
function tj(){
 	var yh=$("#yh").val();
 	var pw=$("#pw").val();
 	if(yh=="用户名"&&pw=="密码"){
 		return false;
 		
 	}
 	if(yh=="用户名"||pw=="密码"){
 		return false;
 	}
 	if(yh==""&&pw==""){
 		return false;
 	}
 	if(yh==""||pw==""){
 		return false;
 	}
 }







$(function(){
	
	
//登录隐藏区域
	$(".header-r .dw").hover(function(){
		$(".dw-yc").show();
	},function(){
		$(".dw-yc").hide();
	})	

//轮换图
var time="";
var i=0;
var sl=$(".mg .min li").length;
var sl_1=$(".mx .dian li").length;

time=setInterval(move,1500);
function move(){
	if(i==sl){i=0}
	if(i>=sl_1){i=0}
	var bg_img=$(".mg .min li").eq(i).find("imges").attr("src");
	var bg="url(" + bg_img + ")" + " 0 0 no-repeat ";
	$(".mg .min").css({background:bg});
	$(".mx .dian li").eq(i).addClass("dian-2").siblings("li").removeClass("dian-2");
	i++;
}

$(".mg .min .search a.search1").click(function(){
	i++;
	if(i>=sl){i=0}
	if(i>=sl_1){i=0}
	var bg_img=$(".mg .min li").eq(i).find("imges").attr("src");
	var bg="url(" + bg_img + ")" + " 0 0 no-repeat ";
	$(".mg .min").css({background:bg});
	$(".mx .dian li").eq(i).addClass("dian-2").siblings("li").removeClass("dian-2");
})

$(".mg .min .search a.search2").click(function(){
	i--;
	if(i<0){i=sl-1}
	if(i>=sl_1){i=0}
	var bg_img=$(".mg .min li").eq(i).find("imges").attr("src");
	var bg="url(" + bg_img + ")" + " 0 0 no-repeat ";
	$(".mg .min").css({background:bg});
	$(".mx .dian li").eq(i).addClass("dian-2").siblings("li").removeClass("dian-2");
})





})


	





