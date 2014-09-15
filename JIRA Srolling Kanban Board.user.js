// ==UserScript==
// @name       JIRA Srolling Kanban Board
// @include    */secure/RapidBoard*
// @namespace  http://jira.epnet.com/
// @version    0.2
// @description  JIRA Srolling Kanban Board
// @copyright  2014+, Public
// @grant       none
// ==/UserScript==

setTimeout(function() {
    var clone = $("#ghx-column-header-group").clone();
    clone.attr("id", "newHeader").css("background", "#FFF").css("position", "absolute").css("width", "2200px").css("margin-top", "-90px");
    $("#ghx-column-header-group").remove();
    $("#ghx-rabid").append(clone);
    $("#ghx-pool").css("width", "2200px").css("padding-top","100px");
    $("body").removeClass("ghx-scroll-columns").css("overflow-y", "hidden !important");
    $("#ghx-work").attr("id", "ghx-work1").css("overflow-x", "scroll").css("overflow-y", "hidden").width("5000px").height("2000px");
    //$(".ghx-band-1 .ghx-issue .ghx-avatar .ghx-avatar-img").css("height", "32px");
    //$(".ghx-band-1 .ghx-issue .ghx-avatar .ghx-avatar-img").css("width", "32px");
    
}, 4000);

