//if no jQuery - Load it
if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = '//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';
    headTag.appendChild(jqTag);
} 

//add the notification to the top of the grades(marks) page
$(document).ready(function(){
	//make sure your on the grades page and there is the grades container
	if(document.location.pathname.indexOf('/grade') >= 0 && $('#print-grades-container')){
		//Announcement title 
		var title = 'Announcement Title';
		
		//Announcement text as HTML
		var textHTML = '<p>Announcement text <strong>line 1</strong>.</p><p><strong>Line 2:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis semper elit, eget sollicitudin ipsum elementum ultricies. Donec id ligula id ex accumsan fermentum non eu turpis. Phasellus sollicitudin dictum libero a faucibus. Integer luctus sem id enim accumsan sagittis. In sit amet mi eget dui ornare pharetra. Cras ultricies porta pharetra. Vestibulum at quam et lacus maximus tristique quis at nisl. Praesent a suscipit nulla. In hac habitasse platea dictumst.</p>';

		//build the announcement HTML
		var announcementHTML = '<div class="ic-notification ic-notification--admin-created ic-notification--info account_notification" id="dg_gradeNotificationArea"><div class="ic-notification__icon"><i class="icon-info"></i><span class="screenreader-only">Information</span></div><div class="notification_account_content"><div class="ic-notification__content"><div class="ic-notification__message"><h4 class="ic-notification__title">' + title + '</h4><span class="notification_message">' + textHTML + '</span></div><div class="ic-notification__actions"><a href="#" class="Button Button--icon-action" title="close" role="button" id="dg_gradeNotificationClose"><i class="icon-x"></i><span class="screenreader-only">close</span></a></div></div></div></div>';

		//put the announcement HTML above the grade area
		$('div#print-grades-button-container').before(announcementHTML);

		//create the function to close the announcement if the user clicks 'X'
		$('a#dg_gradeNotificationClose').click(function(e){
			e.preventDefault;
			$('div#dg_gradeNotificationArea').hide();
			return false;
		});
	}
});
