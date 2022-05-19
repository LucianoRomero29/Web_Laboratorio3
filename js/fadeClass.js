function fadeDiv(div){
    //Primero apago todos los divs cuando hago click en cualquier boton
    var divs  = document.getElementsByClassName("divsFotos");
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.display = "none";
        $('[data-toggle="tooltip"]').tooltip('hide')
    }
    
    //Despues busco específicamente el div que quiero a través del click
    var myDiv = document.getElementById(div);
    myDiv.style.display = "block";
    myDiv.classList.add("fade-in-text");
}

function verMas(div, divBtn){
    //Primero apago todos los divs cuando hago click en cualquier boton
    var divs  = document.getElementsByClassName("masFotos");
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.display = "none";
    }

    //Despues busco específicamente el div que quiero a través del click
    var myDiv = document.getElementById(div);
    var divBtn = document.getElementById(divBtn);
    myDiv.style.display = "flex";
    myDiv.classList.add("fade-in-text");
    divBtn.style.display = "none";

}
