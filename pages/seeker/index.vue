<template>
  <div class="seeker">
    <Loader v-if="loading" />
    <div class="seeker__search">
      <img src="/images/Search.svg" alt="Search" />
      <input v-model="search" type="text" placeholder="Search" />
    </div>
    <div v-if="filteredList.length === 0" class="seeker__noItems">
      <h2>Uh-oh!</h2>
      <p>You look lost on your journey!</p>
      <div class="seeker__noItems-button">
        <Boton
          style="max-width: 9.6875rem"
          text="Go Back Home"
          @click="handleClick"
        />
      </div>
    </div>
    <ListItem
      v-for="(pokemon, index) of filteredList"
      :key="index"
      :name="pokemon.name"
      :fav="pokemon.isFav"
      :index="pokemon.id"
      :url="pokemon.url"
    />
    <div class="seeker__downMenu">
      <Boton
        text="All"
        image="list"
        :disabled="disabled"
        @click="getAllPokemones"
      />
      <Boton
        text="Favorites"
        image="Star"
        :disabled="!disabled"
        @click="getFavPokemones"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: true,
      search: '',
      type: 'all',
      disabled: false,
    }
  },
  computed: {
    ...mapGetters({
      pokemones: 'pokemon/allPokemones',
      favPokemones: 'pokemon/favorites',
    }),
    filteredList() {
      if (this.type === 'all') {
        return this.pokemones.filter((poke) => {
          return poke.name.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return this.favPokemones.filter((poke) => {
          return poke.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
  },
  async mounted() {
    const payload = {
      url: 'pokemon/?offset=0&limit=20',
      results: [],
    }
    await this.$store.dispatch('pokemon/fetchPokemones', payload).then(() => {
      this.loading = false
    })
    await this.$store.dispatch('pokemon/resetFavorites')
    await this.$store.dispatch('pokemon/changeListType', this.type)
  },
  methods: {
    handleClick() {
      this.$router.push('/')
    },
    getAllPokemones() {
      this.disabled = false
      this.type = 'all'
      this.$store.dispatch('pokemon/changeListType', this.type)
    },
    getFavPokemones() {
      this.disabled = true
      this.type = 'fav'
      this.$store.dispatch('pokemon/changeListType', this.type)
    },
  },
}
</script>

<style lang="scss" scoped>
.seeker {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5rem;
  &__search {
    width: 100%;
    max-width: 32rem;
    height: 2.625rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    background-color: $text-white-color;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    img {
      margin-left: 0.5rem;
    }
    input {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      margin: 0;
      border: 0;
      outline: none;
      font-family: $secondary-font;
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
        color: $object-disabled;
      }
    }
  }
  &__downMenu {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: $text-white-color;
    display: flex;
    padding: 0 0.5rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -5px 4px rgba(49, 35, 35, 0.05);
  }
  &__noItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $primary-font;
    h2 {
      margin: 2rem 0 0 1rem;
      font-size: 26px;
      color: $text-title-color;
    }
    p {
      margin: 1rem 0;
      font-size: 18px;
      color: $text-normal-color;
    }
    &-button {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
