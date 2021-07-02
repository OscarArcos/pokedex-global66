<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <img
              class="imageBack"
              src="/images/Background.svg"
              alt="background"
            />
            <img
              class="imageClose"
              src="/images/Close.svg"
              alt="close"
              @click="$emit('close')"
            />
            <p v-if="!imagePoke">Loading...</p>
            <img
              v-if="imagePoke"
              class="imagePoke"
              :src="imagePoke"
              alt="Pokemon image"
            />
          </div>
          <div class="modal-body">
            <p>
              Name:
              <span>{{
                infoPoke.name.charAt(0).toUpperCase() + infoPoke.name.slice(1)
              }}</span>
            </p>
            <p>
              Weight:
              <span>{{ infoPoke.weight }}</span>
            </p>
            <p>
              Height:
              <span>{{ infoPoke.height }}</span>
            </p>
            <p>
              Types:
              <span v-for="(typeP, index) of infoTypes" :key="index">
                <span>{{ typeP.charAt(0).toUpperCase() + typeP.slice(1) }}</span
                ><span v-if="index + 1 < infoTypes.length">, </span>
              </span>
            </p>
          </div>
          <div class="modal-footer">
            <Boton
              class="modal-button"
              :text="copied ? 'Copied' : 'Share to my friends'"
              @click="clickCopy"
            />
            <FavStar :favstar="favstar" @click="favItem(indexPoke)" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    favstar: {
      type: Boolean,
      required: true,
    },
    indexPoke: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      infoPoke: {
        name: '',
        weight: 0,
        height: 0,
        types: [],
      },
      infoTypes: [],
      imagePoke: '',
      copied: false,
    }
  },
  computed: {
    ...mapGetters({
      listMode: 'pokemon/listMode',
    }),
  },
  async mounted() {
    await this.$store
      .dispatch('pokemon/getInfoPokemon', this.url)
      .then((res) => {
        this.imagePoke =
          res.data.sprites.other['official-artwork'].front_default
        this.infoPoke = res.data
        for (const typeP of this.infoPoke.types) {
          this.infoTypes.push(typeP.type.name)
        }
      })
  },
  methods: {
    clickCopy() {
      this.copied = true
      navigator.clipboard.writeText(
        `Name: ${
          this.infoPoke.name.charAt(0).toUpperCase() +
          this.infoPoke.name.slice(1)
        }, Weight: ${this.infoPoke.weight}, Height: ${
          this.infoPoke.height
        }, Types: ${this.infoTypes}`
      )
      setTimeout(function () {
        this.copied = false
      }, 2000)
    },
    favItem(index) {
      if (this.listMode === 'fav') {
        this.$emit('close')
      }
      this.$store.dispatch('pokemon/favClicked', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  max-width: 39.625rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 5px;
  font-family: $primary-font;
}

.modal-header {
  width: 100%;
  height: 13.75rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.imageClose {
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}
.imageBack {
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.imagePoke {
  position: absolute;
  bottom: 1rem;
  width: 11.25rem;
  height: 11.25rem;
}

.modal-body {
  padding: 0.5rem 1.5rem;
  p {
    font-size: 18px;
    font-family: $primary-font;
    padding: 1rem 0;
    margin: 0;
    color: $text-normal-color;
    font-weight: 700;
    border-bottom: 1px solid #e8e8e8;
  }
  span {
    font-weight: normal;
  }
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
}

.modal-button{
    max-width: 12.1875rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
