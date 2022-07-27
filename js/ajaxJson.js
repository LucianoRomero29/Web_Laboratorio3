$(document).ready(function(){
    $("#btnJson").click(function(){
        getData();
    });
});

function getData(){
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "json/productos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        //readyState es el estado de la response, 4 es completado
        //status es el estado, 200 es una response correcta
        if(this.readyState == 4 && this.status == 200){
            let datos   = JSON.parse(this.responseText);

            let res     = document.querySelector("#res");  
            //Limpiamos el res para que no se pinten las respuestas seguidas  
            res.innerHTML = "";
            
            for(let item of Object.values(datos)){
                console.log(item.url);
                res.innerHTML += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.descripcion}</td>
                        <td><img class="img-responsive w-25"  src="${item.url}"></td>
                    </tr>
                `;
            }
        }
    }
}