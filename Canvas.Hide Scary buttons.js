/* Daniel Gilogley - Hide Scary buttons from non-Admin - Canvas.js*/

$(document).ready(function() {
    if (ENV.COURSE_ID || ENV.COURSE_WIZARD || document.location.pathname.indexOf('/courses/') >= 0) { // Ensure that you are within a course
        changeCourseNav();
    } 
});

function changeCourseNav() {
    //Settings pages changes - display the scary buttons if you're an admin
    if (ENV.current_user_roles.indexOf('admin') > 0) {
        $('body').before('<style type="text/css"> div#course_details_tabs > ul.ui-tabs-nav.ui-helper-reset.ui-helper-clearfix.ui-widget-header.ui-corner-all > li#navigation_tab { display: block; background: #b52828; } '); //Make the tab red
        $('body').before('<style type="text/css"> div#course_details_tabs > ul.ui-tabs-nav.ui-helper-reset.ui-helper-clearfix.ui-widget-header.ui-corner-all > li#navigation_tab > a { color: #fff; } </style>'); //Make the text white

        //hide the nuke-able options within the course settings page using CSS, but display if you're an admin
        $('.reset_course_content_button, .delete_course_link, a[href$="confirm_action?event=conclude"]').css({
            "background": "#b52828",
            "color": "white",
            "display": "block"
        });
    }
}