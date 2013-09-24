<?php

$error = 'false';
$error_message = 'No error';

// TODO -- If this page is loaded with an error from the form submission, we need to show the form with errors
// get the credit card details submitted by the form
// If we're on this page and there's a token, it means the person came here from the donation form
if (isset($_POST['stripeToken'])) {
  $token = $_POST['stripeToken'];

  // Capture parts of the form that we will insert into WP if the person decides to add a quote
  $_SESSION['fullName'] = $_POST['full-name'];
  $_SESSION['email'] = $_POST['billing-email'];
  $_SESSION['street'] = $_POST['billing-street'];
  $_SESSION['city'] = $_POST['billing-city'];
  $_SESSION['state'] = $_POST['billing-state'];
  $_SESSION['zip'] = $_POST['billing-zipcode'];
  $_SESSION['phone'] = $_POST['billing-telephone'];

  // session_write_close();

  // create the charge on Stripe's servers - this will charge the user's card

  include_once ABSPATH . "wp-content/themes/catapult/stripe-php/lib/Stripe.php";
  // set your secret key: remember to change this to your live secret key in production
  // see your keys here https://manage.stripe.com/account
  Stripe::setApiKey("sk_live_TflCGAo4AzVXfC2LMJfjkOkw");

  try {
    $charge = Stripe_Charge::create(array(
        "amount" => intval($_POST['donation-amount']) * 100, // amount in cents
        "currency" => "usd",
        "card" => $token,
        "description" => $_POST['billing-email'])
    );
  } catch (Stripe_CardError $e) {
    // Since it's a decline, Stripe_CardError will be caught
    // $body = $e->getJsonBody();
    // $err  = $body['error'];
    // var_dump($e);
    $error_message = "Your credit card was declined.";
    $error = 'true';
  } catch (Stripe_InvalidRequestError $e) {
    // Invalid parameters were supplied to Stripe's API
    // var_dump($e);
    $error_message = "There was a problem on our side.";
    $error = 'true';
  } catch (Stripe_AuthenticationError $e) {
    // Authentication with Stripe's API failed
    // (maybe you changed API keys recently)
    // var_dump($e);
    $error_message = "There was a problem on our side.";
    $error = 'true';
  } catch (Stripe_ApiConnectionError $e) {
    // Network communication with Stripe failed
    // var_dump($e);
    $error_message = "There was a problem connecting to the server.";
    $error = 'true';
  } catch (Stripe_Error $e) {
    // Display a very generic error to the user, and maybe send
    // yourself an email
    // var_dump($e);
    $error_message = "There was an unknown problem.";
    $error = 'true';
  } catch (Exception $e) {
    // Something else happened, completely unrelated to Stripe
    // var_dump($e);
    $error_message = "There was an unknown problem.";
    $error = 'true';
  }

  // If there are no errors, show the thank you page
  if ($error == 'false') {
    header("Location: " . home_url('/thanks/'));
  }
}
?>