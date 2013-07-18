$(document).ready(function(event) {
	
  cataCommon.init();
  
	$(document).on("click", ".accordion__item", function(event) {
		
		event.stopPropagation();
		event.preventDefault();
		
		$(this).toggleClass("opened closed");
		$(this).find(".pointer").toggleClass("opened");
		
		return false;
		
	});
	
});