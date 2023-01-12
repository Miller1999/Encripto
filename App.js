
var boton_encriptado = document.getElementById("encriptar")
var boton_desencriptar = document.getElementById("desencriptar")



function encriptar()
{
    var texto_inicial = document.getElementById("texto").value;
    var longitud_texto = texto_inicial.length;
    for(var i = 0;i<longitud_texto;i++)
    {
        if(texto_inicial[i] == "a")
        {
            let texto_encriptado = texto_inicial.replaceAll("a","ai");
            texto_inicial = texto_encriptado;
            console.log(texto_inicial);
        }
    }
}

function desencriptar()
{
    let texto_inicial = document.getElementById("texto").value;
    let texto_encriptado = texto_inicial.replaceAll("ai","a");
    texto_inicial = texto_encriptado;
    console.log(texto_inicial);
}

boton_encriptado.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;