let alunos = [

];


const alunoForm = document.getElementById('alunoForm');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const listaAlunos = document.getElementById('listaAlunos');

const novoNome = document.getElementById('novoNome');
const novaIdade = document.getElementById('novaIdade');
const atualizarAlunosBtn = document.getElementById('atualizarAluno');
const alunoSelecionado = document.getElementById('alunoSelecionado');

atualizarAlunosBtn.addEventListener('click', ()=>{

    const indiceAluno = alunoSelecionado.selectedIndex;

    if(indiceAluno >= 0 ){
        const novoNomeValor = novoNome.value;
        const novaIdadeValor = parseInt(novaIdade.value);

        alunos[indiceAluno].nome = novoNomeValor;
        alunos[indiceAluno].idade = parseInt(novaIdadeValor);

        novoNome.value = '';
        novaIdade.value = '';

        listaAlunos.innerHTML = '';

        exibirAlunos();
        atualizarOpcoes();
    }else{
        alert("Selecione um aluno");
    }

} )


const adicionarAlunos = () =>{
    
    const nome = nomeInput.value;
    const idade = parseInt(idadeInput.value);

    const aluno = {nome, idade};
    alunos.push(aluno);

    nomeInput.value = ''
    idadeInput.value = ''

    listaAlunos.innerHTML = ''

    exibirAlunos();
    
}

const exibirAlunos = () => {

    alunos.forEach(aluno =>{
        const estudantes = document.createElement('li');
        estudantes.textContent = `Nome: ${aluno.nome}, idade: ${aluno.idade}`;
        listaAlunos.appendChild(estudantes);
    });
}

const atualizarOpcoes = () =>{

    alunoSelecionado.forEach((aluno, indice)=>{
        const option = document.createElement('option');
        option.value = indice;
        option.textContent = aluno.nome;
        alunoSelecionado.appendChild(option);      
    })
}

atualizarOpcoes();


