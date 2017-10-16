//Updated by Daniel Gilogley, Instructure Inc - 2017.10.16
//Alternative logins button when Canvas or LDAP is in Auth position #1 - For Mobile and Desktop view

var login_destination = "" //This is the Relative login location. Examlpe "/login/microsoft" or "/login/saml" or "/login/google"
var login_text = ""; //This is the display text in the login Box. Example "Login with Microsoft(Office365)"
var login_image = "" //This is the image icon for the Mobile login. It must be a "https" absolute location

//========================Dont change anything beyond these lines ================================
//================================================================================================
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
			if ($('#login_form') && (document.location.pathname === "/login/canvas" || document.location.pathname === "/login/ldap")) {
				var googleHTML = document.createElement('center');
				googleHTML.innerHTML = '<center><br><br><a href="' + login_destination + '" class="btn" style="background-color:white;"> <span><img src="' + login_image + '" style="width: 20%;"></span> <span><br>' + login_text + '</span></a></center>';
				document.getElementById('login_form').appendChild(googleHTML);
			}
		})();
	});
}