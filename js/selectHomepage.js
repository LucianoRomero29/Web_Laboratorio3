$(function() {
    $('#selectInfo').change(function(){
        if($('#selectInfo').val() == "jornada") {
            $('#jornada').css("display", "block"); 
            $('#posiciones').css("display", "none"); 
            $('#goleadores').css("display", "none");
            $('#promedios').css("display", "none"); 
        }
        if($('#selectInfo').val() == "posiciones") {
            $('#posiciones').css("display", "block"); 
            $('#jornada').css("display", "none"); 
            $('#goleadores').css("display", "none");
            $('#promedios').css("display", "none"); 
        }
        if($('#selectInfo').val() == "goleadores") {
            $('#goleadores').css("display", "block"); 
            $('#jornada').css("display", "none"); 
            $('#posiciones').css("display", "none");
            $('#promedios').css("display", "none"); 
        }
        if($('#selectInfo').val() == "promedios") {
            $('#promedios').css("display", "block"); 
            $('#jornada').css("display", "none"); 
            $('#goleadores').css("display", "none"); 
            $('#posiciones').css("display", "none");
        } 
    });
});