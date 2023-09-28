class Produto{
    constructor(nome, preço, quantidade){
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    static listarProdutos(){
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response =>{
                if(!response.ok){
                    throw new Error('Erro ao listar produtos')
                }
                return response.json();
            })
            .then(data =>{
                return data.map(item => new Produto(item.title, 10.0, 10));
            });
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
        .then(response =>{
            if(!response.ok){
                throw new Error('Erro ao adicionar produto')
            }
            return response.json();
        })
        .then(data =>{
            return new Produto(data.title, 10.0, 100);
        });
    }


}


// Produto.listarProdutos().then(produtos =>{
//     console.log('Listar produtos: ', produtos);
// });

Produto.adicionarProduto(new Produto('Novo Produto', 15.0, 50)).then(novoProduto =>{
    console.log('Produto adicionado: ', novoProduto)
})


