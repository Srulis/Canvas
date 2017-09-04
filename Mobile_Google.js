//Adds the Google login button for mobile devices if Google is in position #2
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
				googleHTML.innerHTML = '<center><br><br><a href="/login/google" class="btn btn-primary btn-large"> <span class="ic-Login_icon-sso ic-Login_icon-sso--icon-only" role="presentation"> <img src="https://lh3.googleusercontent.com/DKoidc0T3T1KvYC2stChcX9zwmjKj1pgmg3hXzGBDQXM8RG_7JjgiuS0CLOh8DUa7as=w300" style="width: 20%;"></span> <span class="ic-Login__sso-button__title ic-Login__sso-button__title--google"><br>Login with <span class="ic-Login__sso-button__title-caps">google</span> </span> </a></center>';
				document.getElementById('login_form').appendChild(googleHTML);
			}
		})();
	});
}