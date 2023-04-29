function limpiar(elemento){
    while(elemento.firstChild)
    {
     elemento.removeChild(elemento.lastChild);
    }
 }