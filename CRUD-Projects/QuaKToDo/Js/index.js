const Qform = document.querySelector(".Qform");
const Qinput = document.querySelector(".Qdescricao");
const Qsubmit = document.querySelector(".Qsubmit");
const Qlist = document.querySelector(".Qlist");

let Qtasks = [];


Qsubmit.addEventListener('click', () => {

    const Qdescricao = Qinput.value;

    if (Qdescricao.trim() !== '') {
        const QnewTask = {
            Qdescricao : Qdescricao,
            concluida: false
        };

        Qtasks.push(QnewTask);
        Qinput.value = '';
        exibirTarefas();
    }else{
        alert('adicione uma tarefa valida');
    }




});


const exibirTarefas = () =>{

    Qlist.innerHTML = '';

    Qtasks.forEach((task, index) => {

        const Qitem = document.createElement('li');

        if(task.concluida){
            Qitem.classList.add('concluida');
        }



        Qitem.textContent = task.Qdescricao

        // Icones

        const updateIcon = document.createElement('i')
        updateIcon.classList.add('fa-solid', 'fa-pen', 'QupdateIcon');
        updateIcon.addEventListener('click', () => {
            atualizarTarefas(index)
        })
        Qitem.appendChild(updateIcon);

        const completeIcon = document.createElement('i');
        completeIcon.classList.add('fa-solid', 'fa-check', 'QcompleteIcon');
        completeIcon.addEventListener('click', () => {
            marcarConcluida(index)
        });
        Qitem.appendChild(completeIcon);

        const removeIcon = document.createElement('i');
        removeIcon.classList.add('fa-solid', 'fa-xmark', 'QremoveIcon');
        removeIcon.addEventListener('click', () => {
            removerTarefa(index);
        });
        Qitem.appendChild(removeIcon);


 
        Qlist.appendChild(Qitem);
        
    });
}


const atualizarTarefas = (index) => {
    const novaDescrição = prompt('Atualize sua tarefa: ');
    if(novaDescrição !== null){
        Qtasks[index].Qdescricao = novaDescrição;

        exibirTarefas();
    }

};

const marcarConcluida = (index) => {
    Qtasks[index].concluida = !Qtasks[index].concluida;
    exibirTarefas();
}


const removerTarefa = (index) => {
    Qtasks.splice(index, 1);
    exibirTarefas();
};

exibirTarefas();
