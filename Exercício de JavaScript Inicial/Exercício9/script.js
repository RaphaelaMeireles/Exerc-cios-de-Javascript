function conversaograu(){
    let número = parseFloat(document.getElementById("número").value);
    resultado.innerHTML = ("A temperatura em graus Celsius é = " + 5*((número-32)/9).toFixed(1));
}