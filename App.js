
var boton_encriptado = document.getElementById("encriptar");
var boton_desencriptar = document.getElementById("desencriptar");
var boton_copiar = document.getElementById("copiar");
var muñeco = document.getElementById("muñeco");
var titulo = document.getElementById("Titulo");
var textoI = document.getElementById("textoIngresado");
var content = document.getElementById('text');


function encriptar()
{
    titulo.style.display = "none";
    muñeco.style.display = "none";
    // Con la letra a
    let texto_inicial = document.getElementById("texto").value;
    let texto_encriptado = texto_inicial.replaceAll("a","ai");
    textoI.textContent=texto_encriptado;
    document.getElementById("texto").value = "";
    content.value = texto_encriptado;
    console.log("El valor del textarea es " + content.value);
}

function desencriptar()
{
    titulo.style.display = "none";
    muñeco.style.display = "none";
    // Con la letra a
    let texto_inicial = document.getElementById("texto").value;
    let texto_encriptado = texto_inicial.replaceAll("ai","a");
    textoI.textContent = texto_encriptado;
    content.value = texto_encriptado;
    document.getElementById("texto").value = "";
}

function copiar()
{
    navigator.clipboard.writeText(content.value);
    alert("Copiado!")
}


boton_copiar.onclick = copiar;
boton_encriptado.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;