<?php  ?>
<div id="google-donate-button" class="donate-button two-col padded margin-right center">
					<div class="centered">
						<h3 class="header-title">Donate with Google Wallet</h3>
						<form action="https://checkout.google.com/cws/v2/Donations/303134597846187/checkoutForm" id="BB_BuyButtonForm" method="post" name="BB_BuyButtonForm" onSubmit="return validateAmount(this.item_price_1)" target="_top">
					    <input name="item_name_1" type="hidden" value="Donate to Catapult"/>
					    <input name="item_description_1" type="hidden" value="Please donate to Catapult."/>
					    <input name="item_quantity_1" type="hidden" value="1"/>
					    <input name="item_currency_1" type="hidden" value="USD"/>
					    <input name="item_is_modifiable_1" type="hidden" value="true"/>
					    <input name="item_min_price_1" type="hidden" value="25.0"/>
					    <input name="item_max_price_1" type="hidden" value="25000.0"/>
					    <input name="_charset_" type="hidden" value="utf-8"/>
					    <div class="form-item">
					    	<div class="float-left align-right">
					    		<span>$</span> <input id="item_price_1" name="item_price_1" onfocus="this.style.color='black'; this.value='';" size="6" type="text" value="" placeholder="25.00"/>
					    	</div>
					    	<div class="float-left align-left">
					    		<input alt="Donate" src="https://checkout.google.com/buttons/donateNow.gif?merchant_id=303134597846187&amp;w=115&amp;h=50&amp;style=trans&amp;variant=text&amp;loc=en_US" type="image"/>
					    	</div>
					    </div>
						</form>
					</div>
				</div><!-- end google-donate-button -->
				
				<div id="paypal-donate-button" class="donate-button two-col padded margin-left center">
					<div class="centered">
						<h3 class="header-title">Donate with PayPal</h3>
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="hosted_button_id" value="WZFTLEHXJEBYA">
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
						</form>
					</div>
				</div><!-- end paypal-donate-button-->
				
				