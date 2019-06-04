//Created by F. Chaza (2017.06.25 - Instructure Inc.)

//Variables
var login_location_google = "/login/google"; //This is the Relative login location. Examlpe "/login/microsoft" or "/login/saml" or "/login/google"
var login_text_google = "Login with Google"; //This is the display text in the login Box. Example "Login with Microsoft(Office365)"
var login_image_url_google = "https://res.cloudinary.com/dxrrhu1qm/image/upload/v1529028877/Login%20Icons/google-icon.svg"; //This is the image icon for the Mobile login. It must be a "https" absolute location
var login_location_fb = "/login/facebook"; //This is the Relative login location. Examlpe "/login/microsoft" or "/login/saml" or "/login/google"
var login_text_fb = "Login with Facebook"; //This is the display text in the login Box. Example "Login with Microsoft(Office365)"
var login_image_url_fb = "https://res.cloudinary.com/dxrrhu1qm/image/upload/v1529028877/Login%20Icons/facebook-icon.svg"; //This is the image icon for the Mobile login. It must be a "https" absolute location

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

	    //Login page for mobile devices
	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.location.pathname === "/login/canvas") {
	        console.log('In a mobile device...');
	        $('head').append('<style type="text/css"> div.mobileLogin-Header{ background-image: url("https://res.cloudinary.com/dxrrhu1qm/image/upload/v1531090153/AACM_Logo.jpg");}</style>');
	    }
		
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('#login_form')) {
			var googleHTML = document.createElement('center');
			googleHTML.innerHTML = '<center><br><a href="' + login_location_google + '" class="Button Button--login"> <span class="ic-Login_icon-sso ic-Login_icon-sso--icon-only" role="presentation"> <img src="' + login_image_url_google + '" style="width: 20%;"></span> <span class="ic-Login__sso-button__title ic-Login__sso-button__title--google"><br>' + login_text_google + '</span> </a></center><br>';
			document.getElementById('login_form').prepend(googleHTML);
			var fbHTML = document.createElement('center');
			fbHTML.innerHTML = '<center><a href="' + login_location_fb + '" class="Button Button--login"> <span class="ic-Login_icon-sso ic-Login_icon-sso--icon-only" role="presentation"> <img src="' + login_image_url_fb + '" style="width: 20%;"></span> <span class="ic-Login__sso-button__title ic-Login__sso-button__title--google"><br>' + login_text_fb + '</span> </a></center>';
			document.getElementById('login_form').prepend(fbHTML);
		}
	

	});
}