class Livro {
    constructor(titulo, autor, paginas, leitores){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.leitores = [];
    }

    infoLivro(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.paginas}`)
        
    }

    lerLivro(leitor){
        this.leitores.push(leitor);
    }

    quantidadeLeitores(){
        this.leitores.forEach((leitor, i) =>{
            console.log(`${i + 1}: ${leitor}`)
        })
    }
}

const livro1 = new Livro("SenhorDosAneis", "Tolkien", 1568 )

livro1.infoLivro()

livro1.lerLivro("Joao");
livro1.lerLivro("Lucas");
livro1.lerLivro("Andre");
livro1.lerLivro("Arthur");

livro1.quantidadeLeitores();