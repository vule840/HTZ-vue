<template>
  <div class="home">
  	<Carusel/>
    <b-container class="content">
        <h2>Tjedan odmora vrijedan!</h2>
        <b-row>
          <b-col cols="12">
            <p>Tjedan odmora vrijedan je akcija Ministarstva turizma i Hrvatske turističke zajednice kojom se u tjednu od 5. do 13.10. 2019. omogućuje svim građanima Hrvatske da posjete i upoznaju druge dijelove naše zemlje nudeći upola cijene sve turističke proizvode, od smještaja, prijevoza, znamenitosti pa sve do ugostiteljskih usluga i različitih doživljaja.</p>
             <p>U akciju se mogu uključiti svi turistički gospodarski subjekti: hotelske kuće, privatni iznajmljivači, restorani, parkovi prirode i nacionalni parkovi, muzeji, galerije, adrenalinski turizam, aktivnosti i dr.</p>
              <p>Dovoljno je registrirati se <strong>ovdje,</strong>  besplatno unijeti svoju ponudu te u tjednu od 5 do 13.10. 2019. prilagoditi  cijene sukladno <strong>uvjetima</strong> Ministarstva turizma i HTZ-a.</p>

          </b-col>
         
        </b-row>
    

        
      </b-container>
 <!--    <svg class="htz_logo"><use xlink:href="images/sprite-sheet.svg#htz_home_logo" /></svg> -->

  <!--    <svg class="htz_logo"><use xlink:href="prijava_gumb.svg
  " /></svg> -->

    <!-- <img alt="Vue logo" src="prijava_gumb.svg"> -->
<!-- <svg class="tanjur"><use xlink:href="/images/sprite-sheet.svg#htz_home_logo
  " /></svg> -->
<!-- <svg v-svg
     symbol="hrvlogo"
     size="0 0 24 24"
     role="presentation"
     class="icon--inline"
></svg> -->
     
   <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->


  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/
import Carusel from '@/components/Carusel.vue'


// import SvgSprite from 'vue-svg-sprite';
 
// Vue.use(SvgSprite);
// import VueLogo from './public/vue.svg'

export default {
  name: 'home',
  components: {
    /*HelloWorld,*/
    Carusel
    // VueLogo
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
