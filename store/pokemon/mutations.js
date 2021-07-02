export default {
  addPokemones(state, data) {
    for (let i = 0; i < data.length; i++) {
      data[i].isFav = false
      data[i].id = i
    }
    state.pokemones = data
  },
  favClicked(state, index) {
    const pokemon = { ...state.pokemones[index] }
    pokemon.isFav = !pokemon.isFav
    state.pokemones.splice(index, 1, pokemon)
    if (pokemon.isFav) {
      state.favorites.push(pokemon)
    } else {
      state.favorites = state.favorites.filter(
        (poke) => poke.name !== pokemon.name
      )
    }
  },
  resetFavorites(state) {
    state.favorites = []
  },
  changeListType(state, data) {
    state.listMode = data
  },
}
