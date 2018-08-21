function Fit_Pull(ConW){
		$(".Fit-Pull").width(ConW);
			$(".Fit-Pull-Menu").children(".Fit-Pull").addClass("Fit-Pull-One").children(".Fit-Pull").addClass("Fit-Pull-Two").children(".Fit-Pull").addClass("Fit-Pull-Three").children(".Fit-Pull").addClass("Fit-Pull-Four");
			$(".Fit-Pull-Title").prepend("<div class='Fit-Pull-Toggle'></div>");
			$(".Fit-Pull-One").each(function(){
				if($(this).find(".Fit-Pull-Five").length>0){
					$(this).find(".Fit-Pull-Five").children(".Fit-Pull-Title").children(".Fit-Pull-Toggle").addClass("Fit-Pull-NoList").removeClass("Fit-Pull-Toggle");
				}else if($(this).find(".Fit-Pull-Four").length>0){
					$(this).find(".Fit-Pull-Four").children(".Fit-Pull-Title").children(".Fit-Pull-Toggle").addClass("Fit-Pull-NoList").removeClass("Fit-Pull-Toggle");
				}else if($(this).find(".Fit-Pull-Three").length>0){
					$(this).find(".Fit-Pull-Three").children(".Fit-Pull-Title").children(".Fit-Pull-Toggle").addClass("Fit-Pull-NoList").removeClass("Fit-Pull-Toggle");
				}else if($(this).find(".Fit-Pull-Two").length>0){
					$(this).find(".Fit-Pull-Two").children(".Fit-Pull-Title").children(".Fit-Pull-Toggle").addClass("Fit-Pull-NoList").removeClass("Fit-Pull-Toggle");
				}else{
					$(this).children(".Fit-Pull-Title").children(".Fit-Pull-Toggle").addClass("Fit-Pull-NoList").removeClass("Fit-Pull-Toggle");
				}
			})
			$(".Fit-Pull-Menu").on("click",".Fit-Pull-Toggle",function(){
				$(this).parent().nextAll(".Fit-Pull").stop(true).slideToggle();
				$(this).toggleClass("Fit-Pull-ToggleC");
			})
	}