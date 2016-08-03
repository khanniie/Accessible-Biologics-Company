$(".contain").hover(function(){
	var a= $(this);
	$(this).children(".product").css("opacity", 0.3);
}, function(){
	$(this).children(".product").css("opacity", 1);
});

$(document).ready(function(){
  if ($(".featureBox") != null){
  	$(".featureBox"). css("opacity", 1);
  }
});