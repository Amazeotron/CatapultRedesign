<form id="donation-amount-form" class="donation-amount" action="#" method="POST" accept-charset="utf-8">
	<div class="form-item donation-amount__elements">
		<div class="two-col donation-amount__item">
			<span class="donation-amount__prefix">$</span>
			<input type="text" id="donation-amount" class="donation-amount__amount" tabindex="40" name="donation-amount" placeholder="enter amount" data-required="true" data-error-message="You must donate at least $1." data-min="1">
		</div>
		<div class="two-col right donation-amount__item">
			<input id="donation-amount-submit" class="clicky-button donation-amount__submit" type="submit" tabindex="41" name="donation-amount-submit" value="DONATE">
		</div>
	</div>
</form>

<form id="donation-form" action="<?php home_url('/#donate'); ?>" method="POST" accept-charset="utf-8">
	
	<input type="hidden" id="donation-amount-hidden" name="donation-amount">
	
	<div class="col-wrap donation-form__body hide" id="donation-form-body">
		<div id="js-donation-credit-card-info" class="credit-card-info two-col padded margin-right clearfix">
			<h3>Credit Card Info</h3>
			<div class="form-item">
				<label for="card-full-name">Name as appears on card: *</label>
				<input id="card-full-name" type="text" name="full-name" tabindex="42" value="" data-required="true" data-trigger="change" data-notblank="true">
			</div>
			
			<div class="form-item">
				<div class="two-col margin-right card-number">
					<label for="card-number">Card number: *</label>
					<input id="card-number" type="tel" tabindex="43" value="" autocomplete="off" data-required="true" data-trigger="change" data-notblank="true">
				</div>
				<div class="two-col card-cvv right">
					<label for="card-cvv">CVV code: *</label>
					<input id="card-cvv" type="tel" tabindex="44" value="" autocomplete="off" data-required="true" data-trigger="change" data-rangelength="[3,4]">
				</div>
			</div>
			
			<div class="form-item">
				<label for="card-expiration-month">Expiration Date: *</label>
				<select id="card-expiration-month" single tabindex="45" data-required="true" data-trigger="change" data-notblank="true">
					<?php include(ABSPATH . "wp-content/themes/catapult/inc/months.php"); ?>
				</select>
				<select id="card-expiration-year" single tabindex="46" data-required="true" data-trigger="change" data-notblank="true">
					<?php include(ABSPATH . "wp-content/themes/catapult/inc/years.php"); ?>
				</select>
			</div>
		</div><!-- end credit-card-info -->
		
		<div id="js-donation-billing-info" class="billing-info two-col padded margin-left clearfix">
			<h3>Billing Info</h3>
			
			<div class="form-item">
				<label for="billing-street">Street: *</label>
				<input id="billing-street" type="text" tabindex="47" name="billing-street" value="" data-required="true" data-notblank="true">
			</div>
			<div class="form-item">
				<div class="two-col margin-right city">
					<label for="billing-city">City: *</label>
					<input id="billing-city" type="text" tabindex="48" name="billing-city" value="" data-required="true" data-notblank="true">
				</div>
				<div class="two-col state right">
					<label for="billing-state">State: *</label>
					<select id="billing-state" tabindex="49" name="billing-state" data-required="true"> 
						<?php include(ABSPATH . "wp-content/themes/catapult/inc/us_states.php"); ?>
					</select>
				</div>
			</div>
			<div class="form-item">
				<label for="billing-zipcode">Zip code: *</label>
				<input id="billing-zipcode" type="tel" tabindex="50" name="billing-zipcode" value="" data-required="true" data-maxlength="5" data-notblank="true">
			</div>
			<div class="form-item">
				<div class="two-col margin-right telephone">
					<label for="billing-telephone">Telephone number: *</label>
					<input id="billing-telephone" type="tel" tabindex="51" name="billing-telephone" value="" data-required="false" data-notblank="true">
				</div>
				<div class="two-col email right">
					<label for="billing-email">E-mail address: *</label>
					<input id="billing-email" type="email" tabindex="52" name="billing-email" value="" data-required="true" data-type="email">
				</div>
			</div>
		</div><!-- end billing-info -->
		<input id="donation-form-submit" class="clicky-button" type="submit" tabindex="53" name="donation-form-submit" value="Submit">
	</div><!-- end cols -->
</form>