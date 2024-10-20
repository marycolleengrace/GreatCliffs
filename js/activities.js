$(document).ready(function(){
    $("#activitiesTable > thead > tr > td").addClass("notAvailable");
    $("#activitiesTable > tbody > tr > td:first-child").addClass("notAvailable");
    $("#activitiesTable > tbody > tr > td:contains('Not Available')").addClass("notAvailable");
    $("#activitiesTable").find("td").not(".notAvailable").addClass("available");
    $(".available").hover(function(){
        $(this).css('cursor', 'pointer');
    })
    $(".available").click(function(){
        var index = $(this).index()+1;
        $(this).toggleClass("activitiesTableSelected");
        if($(this).hasClass("activitiesTableSelected")) {
            //add spaces above display box
            $("#result").append('<p>'+$(this).text()+' at ' + $("#activitiesTableHead td:nth-child("+index+")").text() + '</p>'); //add child element with contents of cell
        } else { //if selected cell don't have class
            $("#result  p:contains("+$(this).text()+')').remove(); 
        };
        $("#modalButton").trigger("click");
    });
});