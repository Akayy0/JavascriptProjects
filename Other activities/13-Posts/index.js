class Postagens {
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}

const Post1 = new Postagens('Titulo teste', 'Conteudo teste');

const Post2 = new Postagens('Titulo atualizado', 'Conteudo atualizado');


const showPosts = async () =>{
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if(!response.ok){
            throw new Error('Erro ao buscar postagens');
        }

        const posts = await response.json();

        for (let i = 0; i < 5; i++){
            console.log(`Postagem ${i + 1}: ${posts[i].title}`)
        }


    } catch(error){
        console.error(error)
    }
}


const postPosts = async (post) =>{

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: 1,
            })
        })

        if (!response.ok){
            throw new Error('Erro no post')
        }

        const postagem = response.json();

        console.log('Nova postagem criada com sucesso!!', postagem)

        

        

    }catch(error){
        console.error(error)
    }
}



const updatePosts = async (id, updatePost) =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePost)
        })

        if(!response.ok){
            throw new Error('Erro ao atualizar o post')
        }

        const data = response.json();

        console.log('Atualização do post completa: ', data)

    }catch(error){
        console.error(error)
    }
}

const deletePosts = async (id) =>{
    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'DELETE'
        })

        if(!response.ok){
            throw new Error('Erro ao apagar postagem')
        }

        if(response.status === 200 || response.status === 204){
            console.log('O Post foi deletado com sucesso')
        }


    }catch(error){
        console.error(error)
    }
}


showPosts()

postPosts(Post1)

updatePosts(1, Post2)

deletePosts(1)



