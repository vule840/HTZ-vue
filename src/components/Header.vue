<template>



  <div id="header">
    <b-container>
    <b-navbar id="navigacija" toggleable="lg" type="dark" variant="transparent">
          <b-navbar-brand href="#"><Logo/></b-navbar-brand>

          <b-navbar-toggle class="ml-auto" target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
            <!--  <router-link to="/">Home</router-link> -->
            <router-link to="/kategorije">Kategorije</router-link>  
            <router-link to="/kako-sudjelovati">Kako sudjelovati?</router-link> 

             <router-link to="/cesta-pitanja">Česta pitanja</router-link> 

               <router-link to="/registirajte-se">Registirajte se</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">       
                
              
              <!-- Modal -->
            <!--     <b-button v-b-modal.modal-1>Prijava</b-button>

              <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Prijava</p>
              </b-modal>
 -->


   <!-- ******** MODALS ************ -->

         <b-button class="prijava px-4" v-b-modal.modal-multi-1><PrijavaSvg/> PRIJAVA</b-button>

          <b-modal title="Prijava" id="modal-multi-1" size="lg" ok-only no-stacking>

            <Prijava/>

            <!-- <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button> -->

          </b-modal>

 <!-- 2 -->

    <b-modal size="xl" id="modal-multi-2" title="Dobro došli Adria camping!" ok-only no-stacking>

      <PrijavaLoginUspjeh/>


      
       <!-- <b-button v-b-modal.modal-multi-2>Open Third Modal</b-button> -->
    </b-modal>

   <!-- 3 -->

 

   <!-- 4 -->

  <!-- <b-modal size="xl" id="modal-multi-4" title="Kontakt podaci" ok-only>
    
    <PrijavaKontakt/> <b-button @click="hide()">Hide Modal</b-button>
  </b-modal> -->



  <!-- Modal Ponude -->

       <b-modal ok-only no-stacking size="xl" id="modal-multi-3" title="Ponude" ok-only>
    
        <PrijavaPonude1/> 
         <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button v-b-modal.modal-multi-2 block class="plavi-gumb-outline" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   <b-button block v-b-modal.modal-multi-10 class="plavi-gumb-outline" @click="ok()">
                  Kreiraj ponudu
                </b-button>

              </b-col>
            </b-row>

          </template>
      </b-modal>


<!-- Modal Podaci o subjektu -->
    <b-modal ok-only no-stacking size="xl" id="modal-multi-4" title="Podaci o subjektu" ok-only>
    
        <PrijavaPodaci2/> <!-- <b-button @click="hide()">Hide Modal</b-button> -->
       <!--  <b-button v-b-modal.modal-multi-4>Open Fourth Modal</b-button> -->
        <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button v-b-modal.modal-multi-2 block class="plavi-gumb-outline" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   <b-button block v-b-modal.modal-multi-7 class="plavi-gumb-outline" @click="ok()">
                  Izmjeni
                </b-button>

              </b-col>
            </b-row>

          </template>
      </b-modal>



<!-- Modal Kontakt podaci -->

      <b-modal ok-only no-stacking size="xl" id="modal-multi-5" title="Kontakt podaci" ok-only>
    
        <PrijavaKontaktPodaci3/> <!-- <b-button @click="hide()">Hide Modal</b-button> -->
        <!-- <b-button v-b-modal.modal-multi-5>Open Fourth Modal</b-button> -->
        

          <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button v-b-modal.modal-multi-2 block class="plavi-gumb-outline" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   <b-button block v-b-modal.modal-multi-7 class="plavi-gumb-outline" @click="ok()">
                  Izmjeni
                </b-button>

              </b-col>
            </b-row>

          </template>


      </b-modal>

      <!-- Kontakt podaci izmjenjeni -->
    <b-modal ok-only no-stacking size="xl" id="modal-multi-7" title="Kontakt podaci" >
    
        <PrijavaKontaktIzmjena/>
        <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="12" lg="12" >
                  
                  <b-button v-b-modal.modal-multi-5 block class="plavi-gumb text-center" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
          
            </b-row>

          </template> 
      </b-modal>

        <!-- Kontakt podaci poslovne jedinice -->
    <b-modal ok-only no-stacking size="xl" id="modal-multi-8" title="Poslovne jedinice" >
    
        <PrijavaPodaciPoslovna/>
        <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button v-b-modal.modal-multi-4 block class="plavi-gumb-outline" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   <b-button block v-b-modal.modal-multi-9 class="plavi-gumb-outline" @click="ok()">
                  Dodaj
                </b-button>

              </b-col>
            </b-row>

          </template>
      </b-modal>

       <!-- Kontakt podaci poslovne jedinice izmjena -->
    <b-modal ok-only no-stacking size="xl" id="modal-multi-9" title="Kontakt podaci" >
    
        <PrijavaPodaciPoslovnaIzmjena/>
          <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="12" lg="12" >
                  
                  <b-button v-b-modal.modal-multi-5 block class="plavi-gumb text-center" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
          
            </b-row>

          </template> 
      </b-modal>
     <!-- Ponude Kreiranje ponude / korak 1 -->
    <b-modal ok-only no-stacking size="xl" id="modal-multi-10" title="Kreiranje ponude" >
    

        <PrijavaPonudeKreiranjePonude1/>
          <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
            <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button v-b-modal.modal-multi-4 block class="plavi-gumb-outline" @click="ok()">
                  Povratak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   <b-button block v-b-modal.modal-multi-9 class="plavi-gumb-outline" @click="ok()">
                  Sljedeći korak
                </b-button>

              </b-col>
            </b-row>

          </template>
      </b-modal>


      
            
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
  </b-container>
     



      
   <!--     <div id="nav">
      <router-link to="/">Home sf</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/test">Test</router-link>
    </div> -->
  
  </div>
</template>

<script>

import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaPonude1 from '@/components/PrijavaPonude1.vue'
import PrijavaPodaci2 from '@/components/PrijavaPodaci2.vue'
import PrijavaPodaciPoslovna from '@/components/PrijavaPodaciPoslovna.vue'
import PrijavaPodaciPoslovnaIzmjena from '@/components/PrijavaPodaciPoslovnaIzmjena.vue'
import PrijavaPonudeKreiranjePonude1 from '@/components/PrijavaPonudeKreiranjePonude1.vue'
import PrijavaKontaktPodaci3 from '@/components/PrijavaKontaktPodaci3.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import PrijavaKontaktIzmjena from '@/components/PrijavaKontaktIzmjena.vue'
import Logo from '@/assets/logo.svg';

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Prijava,
    PrijavaSvg,
    Logo,
    PrijavaLoginUspjeh,
    PrijavaKontakt,
    PrijavaPodaci2,
    PrijavaPonude1,
    PrijavaKontaktPodaci3,
    PrijavaKontaktIzmjena,
    PrijavaPodaciPoslovna,
    PrijavaPodaciPoslovnaIzmjena,
    PrijavaPonudeKreiranjePonude1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
