function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    var soma = numeros.reduce(function (acc, num) { return acc + num; }, 0);
    return soma / numeros.length;
}
console.log(calcularMedia([5, 10, 15, 20]));
console.log(calcularMedia([]));
