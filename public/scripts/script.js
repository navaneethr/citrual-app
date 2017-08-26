$(document).ready(function(){

    //binding events to element IDs to make a show and hide function on the small screen side menu

    $("#threeBars").click(function(){
        $("#mySidebar").show(500);
    });

    $("#closeBtn").click(function(){
        $("#mySidebar").hide(500);
    });
});