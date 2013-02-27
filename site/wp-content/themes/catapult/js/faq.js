$(document).ready(function(event) {
	
	$(document).on("click", ".accordion__item", function(event) {
		
		event.stopPropagation();
		event.preventDefault();
		
		$(this).toggleClass("opened closed");
		$(this).find(".pointer").toggleClass("opened");
		
		return false;
		
	});
	
});