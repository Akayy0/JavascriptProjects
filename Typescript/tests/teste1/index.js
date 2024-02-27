function somaNumerosPares(n) {
    var soma = 0;
    for (var i = 2; i <= n; i += 2) {
        soma += i;
    }
    return soma;
}
console.log(somaNumerosPares(10));
