function algoritmoValidacaoCPF(){

    var entradaCPF = document.querySelector('#inputCPF').value;
    
    if(entradaCPF.length != 11){
        return false;
    }

    // for(var a of entradaCPF){
    //     if(a+2 == entradaCPF.length-1){
    //         break;
    //     }
    //     else{
    //         if(a == a++ && a++ == a+2){
    //             return false;
    //         }
    //     }
    // }
    for (var i = 0; i < entradaCPF.length; i++) {
    var a = entradaCPF[i];
    if (i + 2 == entradaCPF.length - 1) {
        break;
    } else {
        var nextChar = entradaCPF[i + 1];
        var nextNextChar = entradaCPF[i + 2];
        if (a == nextChar && nextChar == nextNextChar) {
            return false;
        }
    }
}


    var numerosCPF = Number(entradaCPF);

    var digVerificador1 = Number(entradaCPF.charAt(9));
    var digVerificador2 = Number(entradaCPF.charAt(10));

    var soma = 0;
    for(var i = 0; i < 9; i++){
        soma += Number(entradaCPF.charAt(i)) * (10 - i);
    }

    var resto = soma % 11;

    if(resto >= 2){
        resto = 11 - resto;
    }

    soma = 0;
    for(var i = 0; i < 10; i++){
        soma += Number(entradaCPF.charAt(i)) * (11 - i);
    }

    var resto2 = soma % 11;

    if(resto2 >= 2){
        resto2 = 11 - resto2;
    }

    if(resto == digVerificador1 && resto2 == digVerificador2){
        return true;
    }
    else{
        return false;
    }
}

function verificarCPF(){

    if(algoritmoValidacaoCPF()){
        document.querySelector('#message').innerText = "CPF válido!\n"+
        "Lucas lindo capturou seu CPF!";
    }
    else{
        document.querySelector('#message').innerText = "CPF inválido!";
    }
}