<template>
  <div class="about">
    <div>
    	<Carusel/>
  <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
    <p>Registirajte se </p>
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
</div>
  </div>
</template>


<script>
// @ is an alias to /src
import Carusel from '@/components/Carusel.vue'

export default {
  name: 'home',
  components: {
    Carusel
  },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>
