

const getPokemon = async (id) => {
    try {



        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if(!response.ok){
            throw new Error('Erro ao buscar um pokemon')
        }

        const data = await response.json()


        console.log(data.forms[0].name)
        console.log(data.abilities[0].ability.name)
        console.log(data.types[0].type.name)
        console.log(data.types[1].type.name)


        
    } catch (error) {
        
    }
}




getPokemon(6)