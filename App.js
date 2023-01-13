
var boton_encriptado = document.getElementById("encriptar");
var boton_desencriptar = document.getElementById("desencriptar");
var muñeco = document.getElementById("muñeco");
var titulo = document.getElementById("Titulo");
var textoI = document.getElementById("textoIngresado")


function encriptar()
{
    titulo.style.display = "none";
    muñeco.style.display = "none";
    // Con la letra a
    let texto_inicial = document.getElementById("texto").value;
    let texto_encriptado = texto_inicial.replaceAll("a","ai");
    textoI.textContent=texto_encriptado;
    document.getElementById("texto").value = "";
}

function desencriptar()
{
    titulo.style.display = "none";
    muñeco.style.display = "none";
    // Con la letra a
    let texto_inicial = document.getElementById("texto").value;
    let texto_encriptado = texto_inicial.replaceAll("ai","a");
    textoI.textContent = texto_encriptado;
    document.getElementById("texto").value = "";
}

boton_encriptado.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;