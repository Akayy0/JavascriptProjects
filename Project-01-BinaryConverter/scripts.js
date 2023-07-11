function converter(){
    let binario = document.getElementById("binario").value;
    let decimal = parseInt(binario, 2);
    document.getElementById("decimal").value = decimal;
}