function ehPalindromo(str: string): boolean{
    const textoFormatado = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reverso = textoFormatado.split('').reverse().join('');
    return textoFormatado === reverso;
}

console.log(ehPalindromo("Ame a ema")); 
console.log(ehPalindromo("Reviver")); 
console.log(ehPalindromo("Frase de exemplo")); 