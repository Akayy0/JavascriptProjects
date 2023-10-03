class Produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    static async listarProdutos() {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')

            if (!response.ok) {
                throw new Error('Erro ao listar produtos')
            }

            const data = await response.json();

            return data.map(item => new Produto(item.title, 10.0, 10));
        }catch(error){
            console.error(error)
        }

        

    }

    static adicionarProduto(produto) {

        return fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: produto.nome,
                userId: 1,
                completed: false,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao adicionar produto')
                }
                return response.json();
            })
            .then(data => {
                return new Produto(data.title, 10.0, 100);
            });
    }

    static atualizarProduto(id, novoNome) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: novoNome,
            }),
        })

            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao atualizar produto');
                }
                return response.json();
            })
            .then(data => {
                return new Produto(data.title, 10.0, 100)
            })
    }

    static excluirProduto(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao excluir produto');
                }
            });
    }




}


Produto.listarProdutos().then(produtos => {
    console.log('Listar produtos: ', produtos);
});

Produto.adicionarProduto(new Produto('Novo Produto', 15.0, 50)).then(novoProduto => {
    console.log('Produto adicionado: ', novoProduto);
});

Produto.atualizarProduto(1, 'Produto Atualizado').then(produtoAtualizado => {
    console.log('Produto atualizado: ', produtoAtualizado);
});

Produto.excluirProduto(1).then(() => {
    console.log('Produto excluído com sucesso');
});


