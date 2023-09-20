const tarefas = [];

function createTask(tarefa){
    tarefas.push(tarefa);
}

function showTask(){
    console.log(tarefas)
}

function updateTask(tarefas, i, novaTarefa){
    if(i >= 0 && i < tarefas.length){
        tarefas[i] = novaTarefa
    }else{
        console.log("erro")
    }

}

function deleteTask(tarefas,i){
    if(i >= 0 && i < tarefas.length){
        tarefas.splice(i, 1)
    }else{
        console.log("erro")
    }
}

createTask("fazer alguma coisa")
createTask("fazer outra coisa")
createTask("fazer mais uma coisa")

updateTask(tarefas, 2, "fazendo uma quarta coisa");

deleteTask(tarefas, 0)

showTask()


