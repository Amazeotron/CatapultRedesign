var donations = {
	
	_donationForm: null,
	_formBody: null, 
	_amountForm:null, 
	_creditCardInfo: null, 
	_billingInfo: null,
	_debug: true,
	
	init: function() {
		
		var self = this;
		
		this._donationForm = $("#donation-form");
		this._formBody = $("#donation-form-body");
		this._amountForm = $("#donation-amount-form");
		this._creditCardInfo = $("#js-donation-credit-card-info");
		this._billingInfo = $("#js-donation-billing-info");
		
		var amount = $("#donation-amount"),				
				fullName = $("#card-full-name"),
				cardNum = $("#card-number"),
				cardCVV = $("#card-cvv"),
				expireMonth = $("#card-expiration-month"),
				expireYear = $("#card-expiration-year"),
				street = $("#billing-street"),
				city = $("#billing-city"),
				state = $("#billing-state"),
				zip = $("#billing-zipcode"),
				phone = $("#billing-telephone"),
				email = $("#billing-email");
		
		// DEBUG ONLY -- fill out the form
		if (this._debug === true) {
			amount.val(1);
			fullName.val('Laurence Lague');
			cardNum.val('4242424242424242');
			cardCVV.val('123');
			expireMonth.val('12');
			expireYear.val('2015');
			street.val('26 Carl Street');
			city.val('San Francisco');
			state.val('CA');
			zip.val('94117');
			phone.val('415-555-1212');
			email.val('ha@ha.com');
		}
		
		// If there is a form error, immediately show the form and show an error message.
		if (formError === "true") {
			console.log("There is a form error... " + formError);
			
			this._formBody.removeClass("hide").addClass("show");
			$("html, body").animate({scrollTop:4750}, 500);
			// Show overlay
			$(".overlay")
				.removeClass("hide").addClass("show")
				.find(".overlay-content").empty()
				.html('<h1 class="header-title overlay-title">Whoops!</h1>' + 
							'<p class="overlay-body">' + formErrorMessage + '</p>' + 
							'<p class="overlay-body">Please check the form fields, and try again. Your card was not charged.</p>');
			
		} else {
			
			console.log("There was NOT a form error: " + formError);
			
		}
		
		// Only show the donation form if there's an amountgreater than $1
		this._amountForm.parsley({
			listeners: {
				onFormSubmit: function(isFormValid, event, ParsleyForm) {
					event.preventDefault();
					
					if (isFormValid === true) {
						$("#donation-amount-submit").hide();
						self._formBody.removeClass("hide").addClass("show");
					}
					
					return false;
				}
			}
		});
		// this._amountForm.submit(function(event) {
			
		// 	event.preventDefault();
			
		// 	var amount = $(this).find("#donation-amount"),
		// 			form = $("#donation-form-body");
					
		// 	// if the amount is empty, don't do anything
		// 	if (amount.val() === "") {
		// 		return;
		// 	}
			
		// 	if (amount.val())
			
		// 	// Hide the amount submit button since we don't need it anymore
		// 	$("#donation-amount-submit").hide();
			
		// 	if (amount[0].value === "") {
		// 		form.removeClass("show").addClass("hide");
		// 		return;
		// 	}
			
		// 	form.removeClass("hide").addClass("show");
		// });
		
		// Listen to the submit of the main form
		this._donationForm.parsley({
			listeners: {
				onFormSubmit: function(isFormValid, event, ParsleyForm) {
					
					event.preventDefault();
					
					if (isFormValid === true) {
						
						// Disable the submit button
						$("#donation-form-submit").prop("disabled", true).addClass("disabled");
						
						// Add the amount from the donation amount form
						$("#donation-amount-hidden").val($("#donation-amount").val());
						
				    Stripe.createToken({
							number: $("#card-number").val(),
							cvc: $("#card-cvv").val(),
							exp_month: $("#card-expiration-month").val(),
							exp_year: $("#card-expiration-year").val()
				    }, donations.stripeResponseHandler);
						
					}
					return false;
				}
			}
		});
		
		
		// When the window size gets below 756 px, change the donation form layout to one column
		enquire.register("screen and (max-width: 756x)", {
			
			match: function() {
				$.each([self._creditCardInfo, self._billingInfo], function(index, value) {
					value
						.removeClass("two-col padded margin-right")
						.addClass("one-col");
				});
			}, 
			
			unmatch: function() {
				$.each([self._creditCardInfo, self._billingInfo], function(index, value) {
					value
						.removeClass("one-col")
						.addClass("two-col padded margin-right");
				});
			}
			
		}).listen();
		
	}, 
	
	/*
	This is where the form gets submitted, if there isn't an error creating the Stripe token.
	It creates a hidden input on the form called stripeToken that contains the Stripe Token, 
	and then submits the form.
	*/
	stripeResponseHandler: function(status, response) {
		console.log("Stripe has returned!");
		console.log(status);
		console.log(response);
		
		if (response.error) {
			console.log("There was an error submitting the form to Stripe.");
		} else {
			console.log("Submitting Stripe form...");
			var token = response.id;
			donations._donationForm.append($('<input type="hidden" name="stripeToken" />').val(token));
			donations._donationForm.get(0).submit();
		}
	}
	
}