const Produto = require('../models/produto');

module.exports = {
    listarProdutos: async (req, res) => {
        try {
            const produtos = await Produto.listarProdutos();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar produtos' });
        }
    },

    adicionarProduto: async (req, res) => {
        try {
            const novoProduto = await Produto.adicionarProduto(req.body);
            res.json(novoProduto);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao adicionar produto' });
        }
    },

    atualizarProduto: async (req, res) => {
        try {
            const produtoAtualizado = await Produto.atualizarProduto(req.params.id, req.body.nome);
            res.json(produtoAtualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    },

    excluirProduto: async (req, res) => {
        try {
            await Produto.excluirProduto(req.params.id);
            res.json({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir produto' });
        }
    },
}; 