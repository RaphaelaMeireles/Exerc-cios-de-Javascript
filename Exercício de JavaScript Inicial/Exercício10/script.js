function conversaograu(){
    let número = parseFloat(document.getElementById("número").value);
    resultado.innerHTML = ("A temperatura em graus Fahrenheit é = " + ((número*9/5)+32).toFixed(1));
}