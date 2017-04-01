$(document).ready( function(){

$(".btnHit").hide();
	scroll1();
	scroll2();
	
	btnhide();
	headlink();
	



} );

function scroll1(){
	$(".genButton").click(function(){
		$("body").animate({
			scrollTop: $("#show").offset().top
		},2000);
	})
};

function scroll2(){
	$(".btnHit").click(function(){
		$("body").animate({
			scrollTop: $(".dineops").offset().top
		},2000);
	})



};



function btnhide(){
	$(".genButton").click(function(){
		$(".btnHit").show();
	})
};


function headlink(){
	$(".navbar a").click(function(){
		$("body").animate({
			scrollTop: $(".header").offset().top
		},2000);
		})
	

};
