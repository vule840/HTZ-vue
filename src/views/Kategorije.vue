<template>
  <div id="kategorije">
    <div>
    	<CaruselKategorije/>
      <b-container class="content">
        <h2>Kategorije</h2>
         <p>Klinkite na pojedinu kategoriju da biste otkrili pripadajuće podkategorije</p>
        

  
        <!--  Prvi row -->
        <b-row>
          <b-col sm="6" lg="3" >
              <SmjestajSvg/>
              <h5 class="smjestaj">Smještaj</h5>

          </b-col>

          <b-col sm="6" lg="3" >
              <HranaSvg/>
              <h5 class="hrana">Hrana i piće</h5>

          </b-col>
          <b-col sm="6" lg="3" >
              <HranaSvg/>
              <h5 class="kultura">Kultura i Zabava</h5>

          </b-col>
          <b-col sm="6" lg="3" >
              <AktivniSvg/>
              <h5 class="aktivni">Aktivni sadržaji</h5>

          </b-col>
         
        </b-row>
    <!--  Drugi row -->
        <b-row>
          <b-col  sm="6" lg="3">
              <PrirodaSvg/>
              <h5 class="priroda">Priroda</h5>

          </b-col>

          <b-col sm="6" lg="3">
              <ZdravljeSvg/>
              <h5 class="zdravlje">Zdravlje i njega</h5>

          </b-col>
          <b-col sm="6" lg="3">
              <NautikaSvg/>
              <h5 class="nautika">Nautika</h5>

          </b-col>
          <b-col sm="6" lg="3">
              <IzletiSvg/>
              <h5 class="izleti">Izleti</h5>

          </b-col>
         
        </b-row>


          <!--  Treci row -->
        <b-row>
          <b-col class="mx-auto" lg="8" sm="12">
           
            <b-row>
              <b-col sm="6" lg="4">
                  <PrijevozSvg/>
                  <h5 class="prijevoz">Prijevoz</h5>

              </b-col>

              <b-col sm="6" lg="4">
                  <PaketSvg/>
                  <h5 class="paket">Paket i aranžmani</h5>

              </b-col>
              <b-col sm="6" lg="4">
                  <OstalaSvg/>
                  <h5 class="ostala">Ostala Ponuda</h5>

              </b-col>
             
             
            </b-row>

          </b-col>

         
         
        </b-row>


 
        
        

        <!-- <GumbSvg/> -->
      </b-container>
</div>
  </div>
</template>


<script>
// @ is an alias to /src
import CaruselKategorije from '@/components/CaruselKategorije.vue'
import GumbSvg from '@/assets/prijava_gumb.svg';
import SmjestajSvg from '@/assets/smjestaj.svg';
import HranaSvg from '@/assets/hrana.svg';
import AktivniSvg from '@/assets/aktivni.svg';
import PrirodaSvg from '@/assets/priroda.svg';
import ZdravljeSvg from '@/assets/zdravlje.svg';
import NautikaSvg from '@/assets/nautika.svg';
import IzletiSvg from '@/assets/izleti.svg';
import PrijevozSvg from '@/assets/prijevoz.svg';
import PaketSvg from '@/assets/paket.svg';
import OstalaSvg from '@/assets/ostala.svg';

export default {
  name: 'home',
  components: {
    CaruselKategorije,
    GumbSvg,
    SmjestajSvg,
    HranaSvg,
    AktivniSvg,
    PrirodaSvg,
    ZdravljeSvg,
    NautikaSvg,
    IzletiSvg,
    PrijevozSvg,
    PaketSvg,
    OstalaSvg
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

