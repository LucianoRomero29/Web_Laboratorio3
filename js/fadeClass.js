$(document).ready(function(){
    $(".masFotos").css("display", "none");

    $("#partidosFotos").click(function(){
        $("#partidos").slideToggle();
        $("#camisetas").hide();
        $("#memes").hide();
        $(".masFotos").hide();
    });

    $("#masPartidos").click(function(){
        $("#masPartidosDiv").slideToggle();
    })

    $("#camisetasFotos").click(function(){
        $("#camisetas").slideToggle();
        $("#partidos").hide();
        $("#tercerTiempo").hide();
        $("#memes").hide();
        $(".masFotos").hide();
    });
    
    $("#masCamisetas").click(function(){
        $("#masCamisetasDiv").slideToggle();
    })

    $("#tercerTiempoFotos").click(function(){
        $("#tercerTiempo").slideToggle();
        $("#camisetas").hide();
        $("#partidos").hide();
        $("#memes").hide();
        $(".masFotos").hide();
    });

    $("#masTercerTiempo").click(function(){
        $("#masTercerTiempoDiv").slideToggle();
    })

    $("#memesFotos").click(function(){
        $("#memes").slideToggle();
        $("#camisetas").hide();
        $("#tercerTiempo").hide();
        $("#partidos").hide();
        $(".masFotos").hide();
    });

    $("#masMemes").click(function(){
        $("#masMemesDiv").slideToggle();
    })
});

// function fadeDiv(div){
//     //Primero apago todos los divs cuando hago click en cualquier boton
//     var divs  = document.getElementsByClassName("divsFotos");
//     for (let index = 0; index < divs.length; index++) {
//         divs[index].style.display = "none";
//         $('[data-toggle="tooltip"]').tooltip('hide')
//     }
    
//     //Despues busco específicamente el div que quiero a través del click
//     var myDiv = document.getElementById(div);
//     myDiv.style.display = "block";
//     myDiv.classList.add("fade-in-text");
// }

// function verMas(div, divBtn){

//     //Despues busco específicamente el div que quiero a través del click
//     var myDiv = document.getElementById(div);
//     var divBtn = document.getElementById(divBtn);
//     myDiv.style.display = "flex";
//     myDiv.classList.add("fade-in-text");
//     divBtn.style.display = "none";

// }
