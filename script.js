const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEcriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEcriptada = stringEcriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEcriptada.includes(matrizCodigo[i][0])){
            stringEcriptada = stringEcriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);


        }

    }

    return stringEcriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
}




function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "ima"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
  }