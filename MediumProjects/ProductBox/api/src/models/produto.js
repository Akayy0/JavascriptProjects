const fs = require('fs').promises;
const path = require('path');
const Produto = require('../src/models/Produto');

describe('Teste de Adição de Novos Produtos', () => {
    test('Adicionar Todos os Produtos do Arquivo', async () => {
        const caminhoArquivo = path.resolve(__dirname, 'novosProdutos.json');
        const dadosProdutos = await fs.readFile(caminhoArquivo, 'utf-8');
        const novosProdutos = JSON.parse(dadosProdutos);

        const produtosAdicionados = await Promise.all(
            novosProdutos.map(async (novoProduto) => {
                return await Produto.adicionarProduto(novoProduto);
            })
        );

        const produtosNoBanco = await Produto.listarProdutos();

        expect(produtosAdicionados.length).toBe(novosProdutos.length);
        expect(produtosNoBanco.length).toBeGreaterThan(0);
    });
});