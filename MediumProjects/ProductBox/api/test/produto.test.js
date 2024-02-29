const fs = require('fs').promises;
const path = require('path');
const Produto = require('../src/models/Produto');

describe('Testes de Produtos', () => {
    let produtosIniciais;

    beforeAll(async () => {
        // Salva os produtos iniciais para restaurá-los após os testes
        produtosIniciais = await Produto.listarProdutos();
    });

    afterAll(async () => {
        // Restaura os produtos iniciais após os testes
        await fs.writeFile(
            path.resolve(__dirname, '../database/produtos.json'),
            JSON.stringify(produtosIniciais)
        );
    });

    test('Listar Produtos', async () => {
        const produtos = await Produto.listarProdutos();
        expect(produtos.length).toBeGreaterThan(0);
    });

    test('Adicionar Produto do Arquivo', async () => {
        const caminhoArquivo = path.resolve(__dirname, 'novosProdutos.json');
        const dadosProdutos = await fs.readFile(caminhoArquivo, 'utf-8');
        const novosProdutos = JSON.parse(dadosProdutos);

        const produtosAdicionados = await Promise.all(
            novosProdutos.map(async (novoProduto) => {
                return await Produto.adicionarProduto(novoProduto);
            })
        );

        expect(produtosAdicionados.length).toBe(novosProdutos.length);
    });

    test('Atualizar Produto', async () => {
        const produtoExistente = (await Produto.listarProdutos())[0];

        const produtoAtualizado = await Produto.atualizarProduto(
            produtoExistente.nome,
            'Produto Atualizado',
            30.0,
            75
        );

        expect(produtoAtualizado.nome).toBe('Produto Atualizado');
        expect(produtoAtualizado.preço).toBe(30.0);
        expect(produtoAtualizado.quantidade).toBe(75);
    });

    test('Excluir Produto', async () => {
        const produtosAntesDaExclusao = await Produto.listarProdutos();
        const produtoExcluido = await Produto.excluirProduto(produtosAntesDaExclusao[0].nome);
        const produtosDepoisDaExclusao = await Produto.listarProdutos();

        expect(produtoExcluido).toBeTruthy();
        expect(produtosAntesDaExclusao.length - 1).toBe(produtosDepoisDaExclusao.length);
    });
});