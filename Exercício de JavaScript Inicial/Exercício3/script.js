function soma(){
    let número1 = parseInt(document.getElementById("número1").value);
    let número2 = parseInt(document.getElementById("número2").value);
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ("A soma é " + (número1+número2));

}