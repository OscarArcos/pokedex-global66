<template>
  <div class="loader">
    <img src="/images/Loader.svg" alt="loader" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100vh;
  background-color: $main-white-color;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  img {
    animation: rotation 8s infinite linear;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
