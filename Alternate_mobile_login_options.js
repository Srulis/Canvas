//Variables
var login_location = ""; //This is the Relative login location. Examlpe "/login/microsoft" or "/login/saml" or "/login/google"
var login_text = ""; //This is the display text in the login Box. Example "Login with Microsoft(Office365)"
var login_image_url = ""; //This is the image icon for the Mobile login. It must be a "https" absolute location

//=========================Do not change anything under this line==================================================
//====================================================================================================
//Adds the login button for mobile devices if Canvas is in position #1
if (typeof jQuery == 'undefined' || typeof jQuery === undefined || typeof jQuery === null) {
	var headTag = document.getElementsByTagName("head")[0];
	var jqTag = document.createElement('script');
	jqTag.type = 'text/javascript';
	jqTag.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
	headTag.appendChild(jqTag);
	jqTag.onload = myJQueryCode;
} else {
	myJQueryCode();
}

function myJQueryCode() {
	$(document).ready(function() {

		(function() {
			'use strict';
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('#login_form')) {
				var googleHTML = document.createElement('center');
				googleHTML.innerHTML = '<center><br><br><a href="' + login_location + '" class="btn btn-primary btn-large"> <span class="ic-Login_icon-sso ic-Login_icon-sso--icon-only" role="presentation"> <img src="' + login_image_url + '" style="width: 20%;"></span> <span class="ic-Login__sso-button__title ic-Login__sso-button__title--google"><br>' + login_text + '</span> </a></center>';
				document.getElementById('login_form').appendChild(googleHTML);
			}
		})();
	});
}