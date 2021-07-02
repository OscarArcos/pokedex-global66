export default {
  async fetchPokemones(context, payload) {
    try {
      const { data } = await this.$axios.get(payload.url)
      //  concat current  page results
      payload.results = payload.results.concat(data.results)
      if (data.next) {
        // if there is next page call recursively
        const info = {
          url: data.next,
          results: payload.results,
        }
        return await context.dispatch('fetchPokemones', info)
      } else {
        // at last page there is no next page so return collected results
        context.commit('addPokemones', payload.results)
        return payload.results
      }
    } catch (e) {
      throw new Error(e)
    }
  },
  favClicked(context, index) {
    context.commit('favClicked', index)
  },
  resetFavorites(context) {
    context.commit('resetFavorites')
  },
  async getInfoPokemon(context, url) {
    const info = await this.$axios.get(url)
    return info
  },
  changeListType(context, data) {
    context.commit('changeListType', data)
  }
}
