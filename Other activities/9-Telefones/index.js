class Contato{
    constructor(nome,email){
        this.nome = nome;
        this.email = email;
        this.numeros = [];
    }

    addTelefone(numero){
        const i = numero

        this.numeros.push(i);

    }

    toString(){
        return `Nome: ${this.nome}, Email: ${this.email}, Numeros: [${this.numeros.join(", ")}]`;
    }

    
}


const textInput = document.querySelector('.textInput');
const emailInput = document.querySelector('.emailInput');
const telInput = document.querySelector('.telInput');
const submit = document.querySelector('.submit');


submit.addEventListener('click', (e) => {

    e.preventDefault();


    const nome = textInput.value;
    const email = emailInput.value;
    const numero = telInput.value;

    const novoContato = new Contato(nome, email);
    novoContato.addTelefone(numero)

    contatos.push(novoContato)

    textInput.value = '';
    emailInput.value = '';
    telInput.value = '';

    atualizarLista();
    atualizarDropdown();


});

const atualizarLista = () => {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    contatos.forEach(contato => {
        const item = document.createElement('li');
        item.textContent = contato.toString();
        lista.appendChild(item)
    })
}



const contatos = [];

const inputContato = document.getElementById('inputContato');
const contatosDropdown = document.getElementById('contatosDropdown');

const atualizarDropdown = () =>{
    contatosDropdown.innerHTML = '<option value="selecione">Contatos</option>';

    contatos.forEach((contato, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = contato.nome;
        contatosDropdown.appendChild(option)
    })
}

contatosDropdown.addEventListener('change', () => {
    if(contatosDropdown.value === 'selecione'){

        inputContato.style.display = 'none';
    }else{
        inputContato.style.display = 'block';
    }
})



const atualizarContatoBtn = document.getElementById('atualizarContato');

atualizarContatoBtn.addEventListener('click', () =>{
    const nome = document.getElementById('inputNome').value;
    const email = document.getElementById('inputEmail').value;

    if(contatosDropdown.value === 'selecione'){
        alert('Selecione um contato para atualizar')
        return;
    }

    const contatoSelecionado = contatos[contatosDropdown.value];
    contatoSelecionado.nome = nome;
    contatoSelecionado.email = email;

    atualizarLista()
    atualizarDropdown()
})