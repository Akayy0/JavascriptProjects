class Carrinho {
    produtos: { produto: string; quantidade: number; valor: number }[];

    constructor() {
        this.produtos = [];
    }

    addProduto(produto: string, quantidade: number, valor: number): void {
        const item = {
            produto: produto,
            quantidade: quantidade,
            valor: valor,
        };

        this.produtos.push(item);
    }

    listProduto(): void {
        this.produtos.forEach((item) => {
            console.log(`Produto: ${item.produto}, Quantidade: ${item.quantidade}, Valor: $${item.valor}`);
        });
    }

    calcularProduto(): number {
        let valorTotal = 0;

        this.produtos.forEach((item) => {
            valorTotal += item.quantidade * item.valor;
        });

        console.log(`Valor total dos produtos: $${valorTotal}`);

        return valorTotal;
    }
}

const carrinho1 = new Carrinho();

carrinho1.addProduto("Camiseta", 2, 5);
carrinho1.addProduto("Camiseta Branca", 2, 5);
carrinho1.addProduto("Televisão", 1, 1200);

carrinho1.listProduto();
carrinho1.calcularProduto();