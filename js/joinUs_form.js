$(document).ready(function(){

    $("#joinUsForm").submit(function(e){
        e.preventDefault();
        var form = document.forms.joinUsForm;

        if(form.lastname.classList.contains("inputError") || form.name.classList.contains("inputError") || form.email.classList.contains("inputError") || form.adress.classList.contains("inputError") || form.nro.classList.contains("inputError") || form.floor.classList.contains("inputError") || form.apartment.classList.contains("inputError") || form.dni.classList.contains("inputError") || form.celphone.classList.contains("inputError")){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor corrija los campos que están incorrectos (en rojo)',
            });
            return false;
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: "Formulario enviado correctamente, pronto recibirá una respuesta. ¡Muchas gracias!",
            })
            setTimeout(function(){form.submit()}, 3000);
        }
    })

})

function validarNroDireccion(){
    nro = document.getElementById("nro");
    valueNro = nro.value;
    
    if(!/^[0-9]+$/.test(valueNro) || valueNro.toString().length > 5){
        campoInvalido(nro);
    }
    else{
        campoValido(nro);
    }
}

function validarPiso(){
    piso = document.getElementById("piso");
    valuePiso = piso.value;
    
    if(!/^[0-9]+$/.test(valuePiso) || valuePiso.toString().length > 3){
        campoInvalido(piso);
    }
    else{
        campoValido(piso);
    }
    if(valuePiso == ""){
        campoValido(piso);
    }
    
}

function validarDepto(){

    depto = document.getElementById("depto");
    valueDepto = depto.value;
    
    if(!/^[0-9A-Za-z]+$/.test(valueDepto) || valueDepto.toString().length > 3){
        campoInvalido(depto);
    }
    else{
        campoValido(depto);
    }
    if(valueDepto == ""){
        campoValido(depto);
    }
    
}


function validarTelefono(){
    telefono = document.getElementById("telefono");
    valueTelefono = telefono.value;

    if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{7,8}$/.test(valueTelefono)){
        campoInvalido(telefono);
    }else{
        campoValido(telefono);
    }
}

function validarDni(){
    dni = document.getElementById("dni");
    valueDni = dni.value;

    if(!/^[0-9]+$/.test(valueDni) || valueDni.toString().length > 8){
        campoInvalido(dni);
    }
    else{
        campoValido(dni);
    }
}

function validarFoto(){
    var fileInput = document.getElementById('fotoPerfil');
           
    var filePath = fileInput.value;
    
    // Allowing file type
    var allowedExtensions =/(\.png|\.jpg|\.jpeg)$/i;
        
    if (!allowedExtensions.exec(filePath)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Formato incorrecto del archivo, sólo se permite png, jpg, jpeg',
        });
        fileInput.value = '';
        return false;
    }
}

