window.onload = function(){
    inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].required = true;
    }
}

function validarEmail(id) {
    email = document.getElementById(id);
    
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailRegex.test(email.value)) {
      campoValido(email);
    } else {
      campoInvalido(email);
    }
}

function validarInputText(index){
    inputsText = document.getElementsByClassName("inputText");
    valueInput = inputsText[index].value;
    
    if(!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test(valueInput)){
        campoInvalido(inputsText[index]);
    }
    else{
        campoValido(inputsText[index]);
    }
}

function campoValido(input){
    input.classList.add("inputSuccess");
    if(input.classList.contains("inputError")){
        input.classList.remove("inputError");
    }
    
}

function campoInvalido(input){
    input.classList.add("inputError");
    if(input.classList.contains("inputSuccess")){
        input.classList.remove("inputSuccess");
    }
}



