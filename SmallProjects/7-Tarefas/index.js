class Listas {
    constructor() {
        this.tarefas = [];
    }

    criarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    mostrarTarefas() {
        console.log(this.tarefas);
    }

    atualizarTarefa(indice, novaTarefa) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice] = novaTarefa;
        } else {
            console.log("Erro: Índice inválido");
        }
    }

    excluirTarefa(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas.splice(indice, 1);
        } else {
            console.log("Erro: Índice inválido");
        }
    }
}



class Tarefa {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }



    static async listarTarefas(){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

            if(!response.ok){
                throw new Error('Erro ao listar tarefas')
            }

            return response.json()
            
        } catch (error) {
            console.error(error)
            
        }
    }


    static async criarTarefa(tarefa){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`,{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(tarefa),
            })

            if(!response.ok){
                throw new Error('Erro ao atualizar produto')
            }

            return response.json();
            
        } catch (error) {
            console.error(error)
            
        }
    }


    static async atualizarTarefa(id, tarefa){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(tarefa),
            })

            if(!response.ok){
                throw new Error('Erro ao atualizar produto')
            }

            return response.json()
            
        } catch (error) {
            console.error(error)
            
        }
    }

    static async excluirTarefa(id){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'DELETE',
            })

            if(!response.ok){
                throw new Error('Erro ao atualizar produto')
            }
            
        } catch (error) {
            console.error(error)
            
        }
    }

}

const Lista1 = new Listas(); 

Tarefa.listarTarefas().then(tarefas => {
    console.log('Lista de tarefas:', tarefas);
    
    tarefas.forEach(tarefa => Lista1.criarTarefa(tarefa));
});

const novaTarefa = new Tarefa('Minha nova tarefa', false);
Tarefa.criarTarefa(novaTarefa).then(tarefaCriada => {
    console.log('Tarefa criada:', tarefaCriada);
    
    Lista1.criarTarefa(tarefaCriada);
});

const tarefaAtualizada = new Tarefa('Tarefa atualizada', true);
Tarefa.atualizarTarefa(1, tarefaAtualizada).then(tarefaAtualizada => {
    console.log('Tarefa atualizada:', tarefaAtualizada);
    
    Lista1.atualizarTarefa(tarefaAtualizada.id, tarefaAtualizada);
});

Tarefa.excluirTarefa(1).then(() => {
    console.log('Tarefa excluída com sucesso');
    
    Lista1.excluirTarefa(1);
});


Lista1.mostrarTarefas();