document.addEventListener("DOMContentLoaded", function (event) {

})


// find reference to input field
const searchInputField = document.getElementById('pokemon-search-input')
const pokemonSearchResultsContainer = document.getElementById('pokemon-container')

function generatePokemonHTML(pokemonObj) {
    return `<div class="pokemon-container">
                    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                    <h1 class="center-text">${pokemonObj.name}</h1>
                    <div style="width:239px;margin:auto">
                    <div style="width:96px;margin:auto">
                        <img data-pokemon-name="${pokemonObj.name}" src="${pokemonObj.sprites.front}">
                    </div>
                    </div>
                    <p data-action='flip-card' data-image-direction="front" data-pokemon-name="${pokemonObj.name}" style="padding:10px;" class="center-text flip-image">flip card</p>
                    </div>
                </div>`
}

pokemonSearchResultsContainer.addEventListener('click', function (event) {
    debugger
    if (event.target.dataset.action === 'flip-card') {
        flipCard.call(event.target, event)
    }
})

function findPokemon(name) {
    return data.pokemons.find(pokemonObj => pokemonObj.name === name)
}

function flipCard(event) {
    const pokemonName = event.target.dataset.pokemonName
    const pokemon = findPokemon(pokemonName)





    console.log(this === event.target)

    const currentDirection = this.dataset.imageDirection
    const desiredDirection = currentDirection === 'front' ? 'back' : 'front'
    const imageUrl = pokemon.sprites[desiredDirection]
    const imgElement = document.querySelector(`img[data-pokemon-name="${pokemon.name}"]`)
    imgElement.src = imageUrl
    event.target.dataset.imageDirection = desiredDirection
}

function displayPokemon(pokemonObj) {
    const pokemonHTML = generatePokemonHTML(pokemonObj)
    pokemonSearchResultsContainer.innerHTML += pokemonHTML
}

function displaySearchResults(pokemonObjs) {
    pokemonSearchResultsContainer.innerHTML = ''
    pokemonObjs.forEach(displayPokemon)
}

// add event listener
searchInputField.addEventListener('keyup', function (event) {
    if (searchInputField.value === '') {
        pokemonSearchResultsContainer.innerHTML = ''
    } else {
        const searchTerm = searchInputField.value
        const searchResults = data.pokemons.filter(pokemonObj => pokemonObj.name.includes(searchTerm))
        displaySearchResults(searchResults)
    }

})