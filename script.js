let urlBase = 'https://pokeapi.co/api/v2/'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const pokemon = document.getElementById('pokemonEntrada').value    
    if (pokemon){
        fetchDatosPokemon(pokemon)
    }
})

function fetchDatosPokemon(pokemon){
    fetch (`${urlBase}pokemon/${pokemon}`)
    .then(data => data.json())
    .then(data => mostrarDatosPokemon(data))        
}

function mostrarDatosPokemon(data){
    console.log(data)
    const divDatosPokemon = document.getElementById('datosPokemon')
    divDatosPokemon.innerHTML = ''

    const pokemonNombre = data.name
    const pokemonWeight = data.weight
    const pokemonID = data.id

    const tituloPokemon = document.createElement('h2')
    tituloPokemon.textContent = pokemonNombre

    const weightInfo = document.createElement('p')
    weightInfo.textContent = `El peso es de: ${pokemonWeight}`    
    
    const spritePokemon = document.createElement('img')
    spritePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`

    divDatosPokemon.appendChild(tituloPokemon)
    divDatosPokemon.appendChild(weightInfo)
    divDatosPokemon.appendChild(spritePokemon)

}
