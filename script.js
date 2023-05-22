const textArea= document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje"); 
const textoMensaje=document.querySelector(".texto-mensaje");
const contenido=document.getElementById("contenido");
const contenido1=document.getElementById("contenido1");
const Copiar= document.querySelector(".btn-copiar"); 

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar()
{
    const textoEncriptado= encriptar(textArea.value);
    textoMensaje.value=textoEncriptado;
    textArea.value="";

    mensaje.style.backgroundImage="none";
    contenido.style.display = "none";
    contenido1.style.display = "none";
    textoMensaje.style.display="block";
    Copiar.style.display="block";
}

function btnDesencriptar()
{
    const textoDesencriptado= desencriptar(textArea.value);
    textoMensaje.value=textoDesencriptado;
    textArea.value="";
}

function btnCopiar()
{
    copiarTexto();
}

let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
function encriptar(stringEncriptado)
{
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++)
    {   
        if(stringEncriptado.includes(matrizCodigo[i][0]))
        {
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
function desencriptar(stringDesencriptado)
{
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++)
    {   
        if(stringDesencriptado.includes(matrizCodigo[i][1]))
        {
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto()
{
    textoMensaje.select();
    navigator.clipboard.writeText(textoMensaje.value);
}

