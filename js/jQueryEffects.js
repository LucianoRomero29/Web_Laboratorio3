$(document).ready(function(){
    
    $('#selectInfo').change(function(){
        if($('#selectInfo').val() == "jornada") {
            $('#jornada').fadeIn("slow");
            $('#posiciones').fadeOut("fast") 
            $('#goleadores').fadeOut("fast")
            $('#promedios').fadeOut("fast") 
        }
        if($('#selectInfo').val() == "posiciones") {
            $('#posiciones').fadeIn("slow");
            $('#jornada').fadeOut("fast") 
            $('#goleadores').fadeOut("fast")
            $('#promedios').fadeOut("fast") 
        }
        if($('#selectInfo').val() == "goleadores") {
            $('#goleadores').fadeIn("slow");
            $('#jornada').fadeOut("fast") 
            $('#posiciones').fadeOut("fast")
            $('#promedios').fadeOut("fast") 
        }
        if($('#selectInfo').val() == "promedios") {
            $('#promedios').fadeIn("slow");
            $('#jornada').fadeOut("fast") 
            $('#goleadores').fadeOut("fast") 
            $('#posiciones').fadeOut("fast")
        } 
    });

    $(".cardNoticia, .cardSubNews").mouseenter(function () {
        $(this).css({border: '0 solid #3393ce'}).animate({
            borderWidth: 2
        }, "fast");
    }).mouseleave(function () {
         $(this).animate({
            borderWidth: 0
        }, "fast");
    });


    $("#selectFindUs").change(function(){
        var div     = $("#inputJoinUs");
        var label   = $("#textOption");
        var input   = $("#inputOption");
        var x       = $("#selectFindUs").val();

        if(x == 2 || x == 3 || x == 4){
            div.fadeIn("slow");
            input.required = true;
            if(x == 2){
                label.innerHTML = "¿Cuál?"
            }
            if(x == 3){
                label.innerHTML = "Nombre y Apellido del conocido/a"
            }
            if(x == 4){
                label.innerHTML = "Otro"
            }
            
        }
        else{
            div.fadeOut("slow");
            input.required = false;
        }
    });

    $(".zoomHover").hover(
        function(){
            $(this).animate({ 'zoom': 1.1 }, 300);
        },
        function(){
            $(this).animate({ 'zoom': 1 }, 300);
        }
    );

    $(".sponsorHover").hover(
        function(){
            //El not this me sirve para apagar todos los otros excepto el que tengo el mouse encima
            $(".sponsorHover").not(this).animate({opacity: .3}, "slow");
        },
        function(){
            $(".sponsorHover").animate({opacity: 1}, "slow");
        }
    );

    $(".redes").hover(
        function(){
            $(this).animate({
                fontSize: "35px",
                color: "green",
            });
            $(this).css("color", "#09456b")
        },
        function(){
            $(this).animate({
                fontSize: "25px",
                color: "#FF0000"
            });
            $(this).css("color", "#0072BB")
        }
    );

    $(".hover-underline-animation").hover(
        function(){
            $(this).animate({fontSize: "20px"});
        },
        function(){
            $(this).animate({fontSize: "16px"});
        }
    );

    $(".logoBidon").hover(
        function(){
            
        },
        function(){
            
        }
    );

    //Falta 1 mas
});