//2018.09.14 - Forgot password
// If you put this in your Theme's JS - You can then had our the URL
// "example.instructure.com/login/canvas?forgotpassword=true"
// This will auto take them forgot/reset password page of the Canvas login


//=================================================================
//=============== Main JS Starts below ============================

//Ensure Jquery is loaded on the page
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

// Main function
function myJQueryCode(){
	//Ensure that the page has loaded
	$(document).ready(function(){
		//If on the login page
		if(document.location.pathname === "/login/canvas") {
			if (getUrlVars().forgotpassword == "true") {
		    	$('.forgot_password_link').click();
			}
		}
	});
}

//Function that gets the ? paramaters from a URL and returns them as a JSON array
function getUrlVars(url) {
    //if no variable, set it to the URL
    if (url === undefined) {
        url = window.location.href;
    }

    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = decodeURIComponent(value);
    });
    return vars;
}