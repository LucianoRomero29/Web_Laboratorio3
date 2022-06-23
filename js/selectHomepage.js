$(function() {
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
});