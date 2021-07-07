import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import Mailform from "./app/mailform/mailform";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const mailforms = document.querySelectorAll("#mc_embed_signup");
const iets = Array.from(mailforms);
for (let mailform of iets) {
  mailform = new Mailform(mailform);
}

// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:300px;}
// </style>

// <div id="mc_embed_signup">
// <form action="https://minemark.us3.list-manage.com/subscribe/post?u=d306f94015baaedf36ec0eaf8&amp;id=c6eb66af82" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
//   <h2>Connect with us</h2>
//   <p>
//   Discover what we are doing to protect children and enable them to play safely.
//   </p>
//   <small>We will not spam you, we only send important updates for you to see how you can support our work.</small>
// <div class="indicates-required"><span class="asterisk">*</span>required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name </label>
// 	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LNAME">Last Name </label>
// 	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d306f94015baaedf36ec0eaf8_c6eb66af82" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
