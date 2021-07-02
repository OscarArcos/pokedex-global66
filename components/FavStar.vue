<template>
  <div class="favStar">
    <img
      v-if="favstar"
      src="/images/Active.svg"
      alt="Fav"
      @click.stop="$emit('click')"
    />
    <img
      v-if="!favstar"
      src="/images/Disabled.svg"
      alt="Not fav"
      @click.stop="$emit('click')"
    />
  </div>
</template>

<script>
export default {
  props: {
    favstar: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>
.favStar {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  cursor: pointer;
}
</style>
