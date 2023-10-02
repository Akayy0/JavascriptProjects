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

    static listarTarefas() {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao listar tarefas');
                }
                return response.json();
            });
    }

    static criarTarefa(tarefa) {
        return fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarefa),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao criar tarefa');
                }
                return response.json();
            });
    }

    static atualizarTarefa(id, tarefa) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarefa),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao atualizar tarefa');
                }
                return response.json();
            });
    }



    static excluirTarefa(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao excluir tarefa');
                }
            });
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