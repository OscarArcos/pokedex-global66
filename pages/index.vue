<template>
  <div class="welcome">
    <div class="welcome__image">
      <img src="/images/Ellipse 10pikachu.svg" alt="pikachu Hi sphere" />
      <img
        class="welcome__image-pikachu"
        src="/images/pikachu.svg"
        alt="pikachu Hi"
      />
    </div>
    <h2>Welcome to Pokédex</h2>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <div class="welcome__button">
      <Boton text="Get Started" @click="handleClick" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push('/seeker')
    },
  },
}
</script>

<style lang="scss" scoped>
.welcome {
  font-family: $primary-font;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__image {
    position: relative;
    margin-bottom: 4rem;
    &-pikachu {
      position: absolute;
      left: -2.91rem;
      top: -4.135rem;
    }
  }
  h2,
  p {
    max-width: 40rem;
  }
  h2 {
    font-size: 26px;
    color: $text-title-color;
  }
  p {
    line-height: 150%;
    font-size: 18px;
    color: $text-normal-color;
  }
  &__button {
    margin-top: 3rem;
    width: 8.1875rem;
  }
}
</style>
