function convertermedida(){
    let número = parseInt(document.getElementById("número").value);
    resultado.innerHTML = ("Esta é a medida em centímetros = " + número*10**2);
}