function somaNumerosPares(n: number) : number {
    let soma : number = 0;
    for(let i = 2; i<=n; i+=2){
        soma += i;
    }

    return soma;
}

console.log(somaNumerosPares(10))