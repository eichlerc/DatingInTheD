$(document).ready( function(){
	
scroll1();

} );

function scroll1(){
$(".genButton").click(function(){
		$("body").animate({
			scrollTop: $("#show").offset().top
		},2500);
	})
}