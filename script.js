
$(document).ready(function(){ /*Infos*/

    $("#content-slide").hide();

    $(".open").click(function() {

        if($("#content-slide").is(":visible")){

            $("#content-slide").hide();
            $(".open").text("Cyrielle Gallou");
    
        } 
        else {

            $("#content-slide").slideDown();
            $(".open").text("Cyrielle Gallou");
    
        };

        return false;
        
        });

});