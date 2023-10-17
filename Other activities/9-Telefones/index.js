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

    toJSON(){
        return{
            nome: this.nome,
            email: this.email,
            numeros: this.numeros,
        }
    }

    static fromJSON(json){
        const contato = new Contato(json.nome, json.email);
        contato.numeros = json.numeros;
        return contato;
    }

    

    
}

const contatos = [];


// form elements
const textInput = document.querySelector('.textInput');
const emailInput = document.querySelector('.emailInput');
const telInput = document.querySelector('.telInput');
const submit = document.querySelector('.submit');

// update elements
const inputContato = document.getElementById('inputContato');
const contatosDropdown = document.getElementById('contatosDropdown');
const atualizarContatoBtn = document.getElementById('atualizarContato');
const removerContatoBtn = document.getElementById('removerContato');

// update list & dropdown
const atualizarLista = () => {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    contatos.forEach(contato => {
        const item = document.createElement('li');
        item.textContent = contato.toString();
        lista.appendChild(item)
    })
}

const atualizarDropdown = () =>{
    contatosDropdown.innerHTML = '<option value="selecione">Contatos</option>';

    contatos.forEach((contato, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = contato.nome;
        contatosDropdown.appendChild(option)
    })
}

// local storage save


const localStorageSave = () =>{
    const contatosJson = JSON.stringify(contatos);
    localStorage.setItem('contatos', JSON.stringify(contatos));
}

const loadLocalStorage = () =>{
    const contatosSalvos = localStorage.getItem('contatos');
    if(contatosSalvos){
        const contatosJson = JSON.parse(contatosSalvos);
        contatos.push(...contatosJson.map(Contato.fromJSON));
        
    }
}

loadLocalStorage();



// add contacts
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

    localStorageSave();


});

// dropdown inputs visibility
contatosDropdown.addEventListener('change', () => {
    if(contatosDropdown.value === 'selecione'){

        inputContato.style.display = 'none';
    }else{
        inputContato.style.display = 'block';
    }
})



// update and remove buttons events

atualizarContatoBtn.addEventListener('click', () =>{
    const nome = document.getElementById('inputNome').value;
    const email = document.getElementById('inputEmail').value;
    const telefone = document.getElementById('inputTelefone').value;

    if(contatosDropdown.value === 'selecione'){
        alert('Selecione um contato para atualizar')
        return;
    }

    const contatoSelecionado = contatos[contatosDropdown.value];
    contatoSelecionado.nome = nome;
    contatoSelecionado.email = email;

    if(telefone.trim() !== ''){
        contatoSelecionado.addTelefone(telefone);
    }

    atualizarLista()
    atualizarDropdown()
    localStorageSave();

    inputContato.style.display = 'none';
})


removerContatoBtn.addEventListener('click', ()=>{
    if(contatosDropdown.value === 'selecione'){
        alert('selecione um contato para remover')
        return
    }

    const i = contatosDropdown.value
    contatos.splice(i, 1)

    atualizarLista();
    atualizarDropdown();
    localStorageSave();

    document.getElementById('inputNome').value = '';
    document.getElementById('inputEmail').value = '';

    inputContato.style.display = 'none';
  
})