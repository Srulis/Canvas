//-------------------------------------------------
//Written by D.Gilogley from Instructure Inc 2017.02.21
//Purpose: Purpose: To replace the 'creating a course' checklist  with a link to custom 'checklist' which can be found at the top of an unpublished course

//if no jQuery - Load it
if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = '//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';
    headTag.appendChild(jqTag);
} 

//start main function
$(document).ready(function(){
	//make sure that you are on the course page with the check list
	if($('div.body.Reminder__course-setup-body > a.btn.btn-primary.wizard_popup_link.auto_open').text().trim() === "Setup Checklist" && document.location.pathname.indexOf('/courses/') >= 0){

		//add the CSS style needed
		$('head').append('<style type="text/css">div.body.Reminder__course-setup-body > a.btn.btn-primary.wizard_popup_link.auto_open { display: none; } div.reminder.Reminder__course-setup > div.body.Reminder__course-setup-body{ margin-bottom: 10px; }</style>');
		
		//set the check list URL
		var checklistURL = "https://www.google.com";

		//create a new button for the check list
		var checklistHTML = '<a href="#" id="dg_customCheckList" class="btn btn-primary" style="display: inline;">Setup Checklist</a>';

		//place the custom link into the page
		$('div.body.Reminder__course-setup-body > a.btn.btn-primary.wizard_popup_link.auto_open').after(checklistHTML);

		//change the default behaviour of the link
		$('a#dg_customCheckList').click(function(e){
			e.preventDefault();
			window.open(checklistURL, '_blank');
			return false;
		});
	}
});
//------End code written by D.Gilogley------------

