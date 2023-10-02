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

showPosts()