
//Llamado a los distintos elementos del HTML
var boton_encriptado = document.getElementById("encriptar");
var boton_desencriptar = document.getElementById("desencriptar");
var boton_copiar = document.getElementById("copiar");
var muñeco = document.getElementById("muñeco");
var titulo = document.getElementById("Titulo");
var textoI = document.getElementById("textoIngresado");
var content = document.getElementById('text');

//Funcion de encriptado
function encriptar()
{
    //No mostrar imagen y titulo del cuadro a la derecha
    textoI.style.color ="gray";
    titulo.style.display = "none";
    muñeco.style.display = "none";
    boton_copiar.style.visibility = "visible";
    //Obtiene el valor de lo ingresado por el usuario
    let texto_inicial = document.getElementById("texto").value;
    //Letra e
    let texto_encriptado = texto_inicial.replaceAll("e","enter");
    //Letra i
    texto_encriptado = texto_encriptado.replaceAll("i","imes");
    //Letra a
    texto_encriptado = texto_encriptado.replaceAll("a","ai");
    //Letra o
    texto_encriptado = texto_encriptado.replaceAll("o","ober");
    //Letra u
    texto_encriptado = texto_encriptado.replaceAll("u","ufat");
    //Muestra mensaje encriptado
    textoI.textContent=texto_encriptado;
    //Vacia el textarea
    document.getElementById("texto").value = "";
    // Content usado para la funcion copiar
    content.value = texto_encriptado;
    if(content.value == "")
    {
        location.reload();
    }
}

//Funcion de desencriptado
function desencriptar()
{
    //No mostrar imagen y titulo del cuadro a la derecha
    textoI.style.color ="gray";
    titulo.style.display = "none";
    muñeco.style.display = "none";
    boton_copiar.style.visibility = "visible";
    //Obtiene el valor de lo ingresado por el usuario
    let texto_inicial = document.getElementById("texto").value;
    //Letra e
    let texto_encriptado = texto_inicial.replaceAll("enter","e");
    //Letra i
    texto_encriptado = texto_encriptado.replaceAll("imes","i");
    //Letra a
    texto_encriptado = texto_encriptado.replaceAll("ai","a");
    //Letra o
    texto_encriptado = texto_encriptado.replaceAll("ober","o");
    //Letra u
    texto_encriptado = texto_encriptado.replaceAll("ufat","u");
    //Muestra mensaje desencriptado
    textoI.textContent = texto_encriptado;
    // Content usado para la funcion copiar
    content.value = texto_encriptado;
    //Vacia el textarea
    document.getElementById("texto").value = "";
    if(content.value == "")
    {
        location.reload();
    }
}

//Funcion copiar: Usada para el boton debajo del mensaje
function copiar()
{
    //API navigator para clipboard
    navigator.clipboard.writeText(content.value);
    textoI.style.color ="red";
}

// Acciones de los botones
boton_copiar.onclick = copiar;
boton_encriptado.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;

//ANIMACION
//Captura de secciones
var pagina = document.getElementById("pag")
var animacion = document.getElementById("animacion")

function mostrarPagina()
{
    pagina.style.visibility = "visible";
}
function ocultarAnimacion()
{
    animacion.style.display = "none";
}
//Para aparecer y desaparecer secciones
setTimeout(ocultarAnimacion,5000);
setTimeout(mostrarPagina,5000);

