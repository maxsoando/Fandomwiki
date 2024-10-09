$(function(){
	$(".toggle1").click(function(){
		$(".page1").show()
		$(".page2").hide()
	});
	
	$(".toggle2").click(function(){
		$(".page2").css("display","flex")
		$(".page2").css("flex-wrap","wrap")
		$(".page2").css("flex-direction","column")
		$(".page2").css("justify-content","center")
		$(".page2").css("align-content","center")
		
		$(".page2_1").css("display","flex")
		$(".page2_1").css("flex-wrap","wrap")
		$(".page2_1").css("flex-direction","column")
		$(".page2_1").css("justify-content","center")
		$(".page2_1").css("align-content","center")
		
		$(".page2").show()
		$(".page1").hide()
	});
	$(".select1 a").css("cursor","pointer")
});