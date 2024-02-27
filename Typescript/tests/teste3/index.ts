function calcularMedia(numeros: number[]): number {
    if(numeros.length === 0){
        return 0;
    }

    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

console.log(calcularMedia([5, 10, 15, 20]));
console.log(calcularMedia([]));