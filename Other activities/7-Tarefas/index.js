class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    static getTask(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar tarefa')
                }
                return response.json();
            })
    }

    addTask(task) {
        this.tarefas.push(task);
    }

    static postTask(task){
        return fetch('https://jsonplaceholder.typicode.com/todos')
    }














    deleteTask(id) {
        const i = this.tarefas.findIndex(task => task.id === id);
        if (i !== -1) {
            this.tarefas.splice(i, 1);
            console.log('tarefa removida')
        }

    }

}

const lista1 = new ListaTarefas()

ListaTarefas.getTask(1)
    .then(task => {
        lista1.addTask(task);
        console.log('tarefa adicionada a lista 1 : ', task);
        console.log(lista1);
        lista1.deleteTask(1);
    })
    .catch(error => {
        console.error('Erro: ', error);
    })

setTimeout(() => {
    lista1.deleteTask(1);
    console.log(lista1);
}, 1000)












// const tarefas = [];

// function createTask(tarefa) {
//     tarefas.push(tarefa);
// }

// function showTask() {
//     console.log(tarefas)
// }

// function updateTask(tarefas, i, novaTarefa) {
//     if (i >= 0 && i < tarefas.length) {
//         tarefas[i] = novaTarefa
//     } else {
//         console.log("erro")
//     }

// }

// function deleteTask(tarefas, i) {
//     if (i >= 0 && i < tarefas.length) {
//         tarefas.splice(i, 1)
//     } else {
//         console.log("erro")
//     }
// }

// createTask("fazer alguma coisa")
// createTask("fazer outra coisa")
// createTask("fazer mais uma coisa")

// updateTask(tarefas, 2, "fazendo uma quarta coisa");

// deleteTask(tarefas, 0)

// showTask()


