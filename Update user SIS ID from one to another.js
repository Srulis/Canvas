// ==UserScript==
// @name         Update user SIS ID from one to another
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Daniel Gilogey
// @date         2016.11.29
// ==/UserScript==

var bearerToken = ""; //Your Canvas API token

(function() {
    'use strict';
    var canvasSIS = []; //current seperated ids
    var newSIS = []; //new comma seperated ids
    if(canvasSIS.length === newSIS.length){
        var newObjectArray = [];
        $.each(canvasSIS, function(i,e){
            var tmp = {
                new : newSIS[i],
                old : e
            };
            newObjectArray.push(tmp);
        });
        console.log('do the thing!');
        doTheThing(newObjectArray);
    }else {
        alert('Array lengths do not match!');
        return 0;
    }
})();

function doTheThing(userArray){
    //itterate through the array of canvas IDs
    $.each(userArray, function(index, element){
        var settingsGET = {
            "async": true,
            "url": "/api/v1/users/sis_user_id:" + element.old + '/logins/',
            "method": "GET",
            "headers": {
                "authorization": "Bearer " + bearerToken,
                "cache-control": "no-cache"
            }
        };
        $.ajax(settingsGET).done(function (response) {
            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log("Completed id update for: " + this.responseText);
                }
            });

            xhr.open("PUT", "/api/v1/accounts/1/logins/" + response[0].id + "?login%5Bsis_user_id%5D=" + element.new);
            xhr.setRequestHeader("authorization", "Bearer " + bearerToken);
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send(data);
            console.log("Processing for: " + element.new + "[" + element.old + "]");
        });
    });
}
