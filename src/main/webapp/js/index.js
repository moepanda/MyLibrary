$(function(){
	$(".sidebar-toggle-box").on("click",".tooltips",function(){
		if($(document).width()>=768){
			return;
		}
		if($("#sidebar ul").css("display")=="none"){
			$("#sidebar ul").show();
		}else{
			$("#sidebar ul").hide();
		}
	})
})

