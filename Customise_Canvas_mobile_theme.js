//Variables
//The image URLs must be a "https" absolute location
var login_logo = ""; //This is the Login Logo in the centre of the screen
var login_background = ""; //This is the background image that displays behind the login box and logo

//=========================Do not change anything under this line==================================================
//====================================================================================================
//This allows for an Icon and background image for mobile login
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
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.location.pathname === "/login/canvas") {
        	console.log('In a mobile device...');
        	$('head').append('<style type="text/css"> body{ background-image: url("' + login_background + '");} div.mobileLogin-Header{ background-image: url("' + login_logo + '");}</style>');
    	}
	});
}


