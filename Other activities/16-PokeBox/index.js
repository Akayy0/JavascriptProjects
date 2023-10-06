const getPokemon = async (id) => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        if(!response.ok){
            throw new Error('Erro ao buscar pokemon')
        }

        const data = await response.json()


        return data;


    } catch (error) {
        console.error(error)

    }

}



class Box {
    constructor() {
        this.pokeList = [];
    }

    async addPokemon(id){

        try {

            const data = await getPokemon(id)

            if(data){
                const pokemon = {
                    name: data.name,
                    ability: data.abilities[0].ability.name,
                    type1: data.types[0].type.name,
                    type2: data.types[1] ? data.types[1].type.name : null

                };


                this.pokeList.push(pokemon)
                console.log(`${data.name} adicionado a box`)
            }else{
                console.error('Pokemon não encontrado')
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }


    listPokemon(){
        this.pokeList.forEach((pokemon)=>{
            console.log(`Nome: ${pokemon.name} |  Habilidade: ${pokemon.ability} | Tipo 1 : ${pokemon.type1} | Tipo 2 : ${pokemon.type2}`)
        })
    }

    removePokemon(i){
        if(i >= 0 && i < this.pokeList.length){
            const removedPokemon = this.pokeList.splice(i , 1);
            console.log(`Pokemon removido: ${removedPokemon[0].name}`)
        }else{
            console.error('Pokemon nao encontrado')
        }

    }

    async updatePokemon(i, newId){


        if(i >= 0 && i < this.pokeList.length){

            try{
                const data = await getPokemon(newId);

                if(data){
                    const updatedPokemon = {
                        name: data.name,
                        ability: data.abilities[0].ability.name,
                        type1: data.types[0].type.name,
                        type2: data.types[1] ? data.types[1].type.name : null
                    };

                    this.pokeList[i] = updatedPokemon
                    console.log(`Pokemon na posição ${i} foi atualizado para ${updatedPokemon.name}`);
                }else{
                    console.error('Pokemon nao encontrado');
                }

            }catch(error){
                console.error(error)

            }

        }else{
            console.error('Pokemon nao encontrado na posição especificada')
        }
    }

}




const Box1 = new Box();

(async () => {
    await Box1.addPokemon(3);
    await Box1.addPokemon(6);
    await Box1.addPokemon(9);
    await Box1.addPokemon(10);

    await Box1.updatePokemon(3, 150)

    Box1.listPokemon();
})();

