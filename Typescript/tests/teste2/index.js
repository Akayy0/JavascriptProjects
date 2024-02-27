function ehPalindromo(str) {
    var textoFormatado = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var reverso = textoFormatado.split('').reverse().join('');
    return textoFormatado === reverso;
}
console.log(ehPalindromo("Ame a ema"));
console.log(ehPalindromo("Reviver"));
console.log(ehPalindromo("Frase de exemplo"));
