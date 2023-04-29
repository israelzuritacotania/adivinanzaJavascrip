document.addEventListener("DOMContentLoaded",mostrar_intentos);

let boton_intentar = document.getElementById("intentar");
boton_intentar.addEventListener("click",verificar);

function verificar(e){
    e.preventDefault();
    let correcto =document.getElementById("respuesta3");
    if(correcto.checked){
        //console.log("adivinaste!");
        ganaste();
    }
    else
    {
        // console.log("fallaste!");
        fallido();
    }
}

function ganaste(){
    limpiar(document.body);

    let h1_mensaje = document.createElement("h1");
    let h3_mensaje = document.createElement("h3");
    let img_feliz = document.createElement("img");
    h1_mensaje.innerText = "GANASTE!";
    h3_mensaje.innerText = "Invita a un amigo a jugar este divertido juego"
    img_feliz.setAttribute("src","img/emojis/feliz.png");
    img_feliz.classList.add("emoji");
    document.body.className =("");
    document.body.classList.add("anuncio");
    document.body.appendChild(h1_mensaje);
    document.body.appendChild(h3_mensaje);
    document.body.appendChild(img_feliz);
    sessionStorage.setItem("vidas",3);
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

function fallido(){
    let vidas_ahora=Number(numeros_vidas())-1;
    sessionStorage.setItem("vidas",vidas_ahora);
    console.log("El numero de vida es ahora "+ vidas_ahora);
    if(vidas_ahora > 0)
    {
        console.log("todavia te quedan intentos");
        mostrar_falla();
      s
    }
    else
    {
        console.log("game over");
        sessionStorage.setItem("vidas",3);
        mostrar_derrota();
    }
}


function mostrar_intentos(){
    console.log("El DOM se ha cargado , ahora mostrare cuantos intentos le quedan al usuario");
    let div_intentos = document.getElementById("intentos");
    let h3_div = document.createElement("H3");
    let vidas_ahora = numeros_vidas();
    h3_div.innerText="Te quedan: "+vidas_ahora+" intento(s)";
    div_intentos.appendChild(h3_div);
    for (let i=1; i<=vidas_ahora; i++) {
        let corazon = document.createElement("IMG");
        corazon.setAttribute("src","img/emojis/heart.png");
        corazon.classList.add("corazon");
        div_intentos.appendChild(corazon);
    }
}

