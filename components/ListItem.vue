<template>
  <div class="listItem">
    <div class="listItem__main" @click.prevent="showModal = true">
      <p>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</p>
      <FavStar :favstar="fav" @click="favItem(index)" />
    </div>
    <ModalInfo
      v-if="showModal"
      id="show-modal"
      :url="url"
      :favstar="fav"
      :index-poke="index"
      @close="showModal = false"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    fav: {
      type: Boolean,
      required: false,
    },
    index: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    favItem(index) {
      this.$store.dispatch('pokemon/favClicked', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.listItem {
  display: flex;
  width: 100%;
  max-width: 32rem;
  justify-content: space-between;
  align-items: center;
  color: $text-title-color;
  font-size: 1.375rem;
  font-family: $primary-font;
  background-color: $text-white-color;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  &__main {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0 0 0 0.5rem;
  }
}
</style>
