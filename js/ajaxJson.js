$(document).ready(function(){
    getData();
});

function getData(){
    //Instancio el xhttpp , es un objecto para interactuar con el servidor
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "json/productos.json", true);

    //Envia la solicitud al servidor
    xhttp.send();

    //Evento que detecta cuando está listo
    xhttp.onreadystatechange = function(){
        //readyState es el estado de la response, 4 es completado
        //status es el estado, 200 es una response correcta
        if(this.readyState == 4 && this.status == 200){
            //transforma el json en un objeto, el json en este caso es responseText
            let datos   = JSON.parse(this.responseText);

            let res     = document.querySelector("#divJson");  

            //Object.values devuelve un array de un objeto, porque en este caso DATOS es un objeto no un array.
            for(let item of Object.values(datos)){
                res.innerHTML += `
                    <div class="card col-12 col-sm-12 col-md-5 col-lg-4 m-2 p-4">
                        <img class="img-responsive text-center imgJson" src="${item.url}" />
                        <div class="container mt-2">
                            <h4><b>${item.nombre}</b></h4>
                            <i>${item.descripcion}</i>
                        </div>
                    </div>
                `;
            }
        }
    }
}
