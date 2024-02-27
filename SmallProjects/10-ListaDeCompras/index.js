class Lista {
    constructor(){

        this.itens = [];
    }

    addItem(item, quantidade, valor){
        const produto = {
            item: item,
            quantidade: quantidade,
            valor: valor
        }

        this.itens.push(produto);
    }


    listItem(){
        this.itens.forEach((produto) =>{
            console.log(`Nome: ${produto.item} | Quantidade: ${produto.quantidade} | valor: ${produto.valor}`);
        })
    }

    calcItem(){
        let total = 0

        this.itens.forEach((produto) =>{
            total += produto.quantidade * produto.valor;
        })

        console.log(`Valor total = \$${total}`)

        return total;
    }

    removeItem(itemName){
        this.itens = this.itens.filter((produto)=>produto.item !== itemName);

    }

}


const Lista1 = new Lista();

Lista1.addItem("laranja", 4, 2)
Lista1.addItem("maçã", 8, 1)
Lista1.addItem("uva", 16, 2)
Lista1.addItem("melancia", 1, 10)
Lista1.addItem("limão", 10, 2)




Lista1.removeItem("uva")

Lista1.listItem();
Lista1.calcItem();

