const vogais = ['a', 'e', 'i', 'o', 'u'];
const encriptados = ['ai', 'enter', 'imes', 'ober', 'ufat'];

const texto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".input-texto-resultado");
const buscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

function btnEncriptar() {
    const txtEncriptado = encriptar(texto.value);
    if (txtEncriptado != "") {
        resultado.style.display = 'inline-block';
        mensagem.value = txtEncriptado;
        texto.value = "";
    } else {
        resultado.style.display = 'none';
        buscar.style.display = 'inline-block';
    }
}

function btnCopiar() {
    mensagem.select();
    document.execCommand('copy');
    alert("Copiado!");
}

function encriptar(txt) {
    let textoEncriptado = [];
    let cadeiaEncriptada = "";

    txt = txt.toLowerCase();
    console.log(txt);
    for (let i = 0; i < txt.length; i++) {
        if (vogais.indexOf(txt[i]) == -1) {
            textoEncriptado[i] = txt[i];
        } else {
            textoEncriptado[i] = encriptados[vogais.indexOf(txt[i])];
        }

        cadeiaEncriptada = cadeiaEncriptada + textoEncriptado[i].toString();
    }

    return cadeiaEncriptada;
}

function Desencriptar() {
    if (texto.value != "") {
        for (let j = 0; j < texto.value.length; j++) {
            for (let i = 0; i < encriptados.length; i++) {
                let posicao = texto.value.indexOf(encriptados[i]);
                if (posicao != -1) {
                    texto.value = texto.value.replace(encriptados[i], vogais[i]);
                    break;
                }
            }
        }
        resultado.style.display = 'inline-block';
        mensagem.value = texto.value;
        texto.value = "";
    } else {
        resultado.style.display = 'none';
        buscar.style.display = 'inline-block';
    }
}