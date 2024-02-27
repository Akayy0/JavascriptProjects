var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.produtos = [];
    }
    Carrinho.prototype.addProduto = function (produto, quantidade, valor) {
        var item = {
            produto: produto,
            quantidade: quantidade,
            valor: valor,
        };
        this.produtos.push(item);
    };
    Carrinho.prototype.listProduto = function () {
        this.produtos.forEach(function (item) {
            console.log("Produto: ".concat(item.produto, ", Quantidade: ").concat(item.quantidade, ", Valor: $").concat(item.valor));
        });
    };
    Carrinho.prototype.calcularProduto = function () {
        var valorTotal = 0;
        this.produtos.forEach(function (item) {
            valorTotal += item.quantidade * item.valor;
        });
        console.log("Valor total dos produtos: $".concat(valorTotal));
        return valorTotal;
    };
    return Carrinho;
}());
var carrinho1 = new Carrinho();
carrinho1.addProduto("Camiseta", 2, 5);
carrinho1.addProduto("Camiseta Branca", 2, 5);
carrinho1.addProduto("Televisão", 1, 1200);
carrinho1.listProduto();
carrinho1.calcularProduto();
