function numeros_vidas() {
    let resultado = sessionStorage.getItem("vidas");
    if(resultado != undefined)
    {
        return resultado;
    }
    else
    {
        sessionStorage.setItem("vidas",3);
        return(sessionStorage.getItem("vidas"));
    }


}

function mostrar_derrota(){
    limpiar(document.body);
    let h1_mensaje = document.createElement("h1");
    let h3_mensaje = document.createElement("h3");
    let img_llorando = document.createElement("img");
    h1_mensaje.innerText = "GAME OVER!";
    h3_mensaje.innerText = "El juego volver a comenzar"
    img_llorando.setAttribute("src","img/emojis/llorando.png");
    img_llorando.classList.add("emoji");
    document.body.className =("");
    document.body.classList.add("anuncio");
    document.body.appendChild(h1_mensaje);
    document.body.appendChild(h3_mensaje);
    document.body.appendChild(img_llorando);
    setTimeout(()=>{location.reload();},3000)

}

function mostrar_falla(){
    limpiar(document.body);
    let h1_mensaje = document.createElement("h1");
    let img_triste = document.createElement("img");
    h1_mensaje.innerText = "Te equivocaste!";
    img_triste.setAttribute("src","img/emojis/triste.png");
    img_triste.classList.add("emoji");
    document.body.className =("");
    document.body.classList.add("anuncio");
    document.body.appendChild(h1_mensaje);
    document.body.appendChild(img_triste);

    // setTimeout(function(){
    //     location.reload();
    // },2000);
    setTimeout(()=>{location.reload();},2000)
}