<template>
  <div
    :class="disabled ? 'disabled' : 'active'"
    class="button"
    @click="$emit('click')"
  >
    <img
      v-if="image != null"
      class="button__icon"
      :src="`images/${image}.svg`"
      alt=""
    />
    <p class="button__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Boton',
  props: {
    image: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  background-color: $secondary-color;
  height: 2.75rem;
  width: 100%;
  max-width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  font-family: $primary-font;
  cursor: pointer;
  margin: 0 0.5rem;

  &__icon {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 1rem;
  }
  &__text {
    color: $text-white-color;
    font-size: 18px;
    margin: 0;
  }
}
.active {
  background-color: $secondary-color;
  &:hover {
    background-color: $secondary-color-hover;
  }
}
.disabled {
  background-color: $object-disabled;
}
</style>
