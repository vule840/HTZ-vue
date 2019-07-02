<template>
  <div id="kategorije">
    <div>
    	<Carusel/>
      <b-container class="content">
        <h2>Kategorije</h2>
         <p>Klinkite na pojedinu kategoriju da biste otkrili pripadajuće podkategorije</p>

        <!--  Prvi row -->
        <b-row>
          <b-col  cols="3">
           
              <h5 class="smjestaj">Smještaj</h5>

          </b-col>

          <b-col  cols="3">
           
              <h5 class="hrana">Hrana i piće</h5>

          </b-col>
          <b-col  cols="3">
           
              <h5 class="kultura">Kultura i Zabava</h5>

          </b-col>
          <b-col  cols="3">
           
              <h5 class="aktivni">Aktivni sadržaji</h5>

          </b-col>
         
        </b-row>
    <!--  Drugi row -->
        <b-row>
          <b-col  cols="3">
           
              <h5 class="priroda">Priroda</h5>

          </b-col>

          <b-col cols="3">
           
              <h5 class="zdravlje">Zdravlje i njega</h5>

          </b-col>
          <b-col cols="3">
           
              <h5 class="nautika">Nautika</h5>

          </b-col>
          <b-col cols="3">
           
              <h5 class="izleti">Izleti</h5>

          </b-col>
         
        </b-row>


          <!--  Treci row -->
        <b-row>
          <b-col class="mx-auto" cols="8">
           
            <b-row>
              <b-col cols="4">
               
                  <h5 class="prijevoz">Prijevoz</h5>

              </b-col>

              <b-col cols="4">
               
                  <h5 class="paket">Paket i aranžmani</h5>

              </b-col>
              <b-col cols="4">
               
                  <h5 class="ostala">Ostala Ponuda</h5>

              </b-col>
             
             
            </b-row>

          </b-col>

         
         
        </b-row>



        
        
      </b-container>
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

