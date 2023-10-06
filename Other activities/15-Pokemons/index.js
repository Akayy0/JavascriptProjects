const getPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if (!response.ok) {
            throw new Error('Erro ao buscar um pokemon')
        }

        const data = await response.json()

        console.log(data.forms[0].name)
        console.log(data.abilities[0].ability.name)
        console.log(data.types[0].type.name)
        console.log(data.types[1].type.name)

    } catch (error) {
        console.error(error)
    }
}

// getPokemon(1)

const listPokemon = async (initId, endId) => {

    try {

        const pokemonList = [];

        for (let id = initId; id <= endId; id++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

            if (!response.ok) {
                throw new Error('Erro ao buscar um pokemon para a lista')
            }

            const data = await response.json()


            const pokemonInfo = {
                name: data.forms[0].name,
                ability: data.abilities[0].ability.name,
                type1: data.types[0].type.name,
                type2: data.types[1] ? data.types[1].type.name : null
            };

            pokemonList.push(pokemonInfo)
        }

        console.log(pokemonList)

    } catch (error) {
        console.error(error)

    }
}

// listPokemon(1 , 3);

const addFakemon = async () => {
    const fakemon = {
        name: "fakemon1",
        abilities: [
            {
                ability: {
                    name: "fake",
                },
            },
        ],
        types: [
            {
                type: {
                    name: "Fire",
                },
            },
            {
                type: {
                    name: "Water",
                },
            },
        ],
    };

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fakemon)
        })

        if(!response.ok){
            throw new Error("Erro ao criar um fakemon")
        }

        const data = await response.json();

        console.log("Novo Fakemon criado: ")
        console.log("Nome :", data.name)
        console.log("Habilidades: ", data.abilities)
        console.log("Tipos: ", data.types)


    } catch (error) {
        console.error(error)

    }


}

// addFakemon()

const updatePokemon = async () => {
    const updatedPokemon = {
        abilities: ["Overgrow", "Chlorophyll"],
        types: ["Grass", "Poison"]
    }

    try{
        const id = 1

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(updatePokemon)
        })


        if(!response.ok){
            throw new Error('Erro ao atualziar pokemon');
        }

        const updateData = await response.json();
        console.log('Detalhes atualizados para o Pokemon')
        console.log(updateData)

    }catch(error){
        console.error(error)
    }

}

// updatePokemon()