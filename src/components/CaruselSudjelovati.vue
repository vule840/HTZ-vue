<template>
 <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/slider2-image.jpg"
          alt="image slot"
        >
        
        <b-button class="crveni-gumb">Sudjelujte</b-button>
      </b-carousel-slide>
    </b-carousel>
</template>

<script>

  export default {
  name: 'CaruselSudjelovati',
  components: {
    
   
  },
  props: {
    msg: String
  },

}
</script>

