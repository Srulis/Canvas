//Updated by Daniel Gilogley, Instructure Inc - 2018.04.27
//Alternative logins button when Canvas or LDAP is in Auth position #1 - For Mobile and Desktop view

var ldap_login_text = ""; //This is the display text in the login Box. Example "Login with Microsoft(Office365)"
var ldap_login_image = "" //This is the image icon for the login button. It must be a "https" absolute location

var canvas_login_text = ""; //This is the display text in the login Box. Example "Login with For staff"
var canvas_login_image = "" //This is the image icon for the login button. It must be a "https" absolute location


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
		if (document.location.pathname === "/login/canvas") {
				var canvas_loginHTML = '<center><br><br><a href="/login/ldap" class="btn" style="background-color:white;"> <span><img src="' + canvas_login_image + '" style="width: 20%;"></span> <span><br>' + canvas_login_text + '</span></a></center>';
				$('#login_form').after(canvas_loginHTML);
		}else if(document.location.pathname === "/login/ldap"){
			var ldap_loginHTML = '<center><br><br><a href="/login/canvas" class="btn" style="background-color:white;"> <span><img src="' + ldap_login_image + '" style="width: 20%;"></span> <span><br>' + ldap_login_text + '</span></a></center>';
			$('#login_form').after(ldap_loginHTML);
		}
	});
